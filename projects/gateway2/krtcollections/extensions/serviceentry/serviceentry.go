package serviceentry

import (
	"context"
	"strconv"
	"strings"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	// endpointv3 "github.com/envoyproxy/go-control-plane/envoy/config/endpoint/v3"
	"github.com/solo-io/gloo/projects/gateway2/krtcollections"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins/edsupstream"
	"github.com/solo-io/go-utils/contextutils"
	core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"go.uber.org/zap"
	"google.golang.org/protobuf/proto"
	"istio.io/istio/pkg/kube"
	"istio.io/istio/pkg/kube/controllers"
	"istio.io/istio/pkg/kube/kclient"
	"istio.io/istio/pkg/kube/krt"
	"istio.io/istio/pkg/maps"
	"istio.io/istio/pkg/ptr"
	"istio.io/istio/pkg/slices"

	networking "istio.io/api/networking/v1alpha3"
	networkingclient "istio.io/client-go/pkg/apis/networking/v1"
	"istio.io/istio/pkg/config/schema/gvr"
	"istio.io/istio/pkg/kube/kubetypes"
)

const (
	// internalServiceEntryKeyLabel links a generated Upstream back to the  ServiceEntry it is derived from.
	internalServiceEntryKeyLabel = "internal.solo.io/serviceentry-key"
	// internalServiceEntryPortLabel references the port number on the ServiceEntry
	// This is used to help generate Istio SNI and to back reference within KRT.
	internalServiceEntryPortLabel = "internal.solo.io/serviceentry-port"
	// InternalServiceEntryPortLabel references the hostname name on the ServiceEntry
	internalServiceEntryHostLabel = "internal.solo.io/serviceentry-host"
	// internalServiceEntryLocationLabel references the hostname name on the ServiceEntry
	internalServiceEntryLocationLabel = "internal.solo.io/serviceentry-location"
)

func IsMeshInternal(us *v1.Upstream) bool {
	return networking.ServiceEntry_MESH_INTERNAL.String() == us.Metadata.GetLabels()[internalServiceEntryLocationLabel]
}

func GetHostPort(us *v1.Upstream) (string, uint32, bool) {
	seHost, hostOk := us.Metadata.GetLabels()[internalServiceEntryHostLabel]
	sePortStr, portOk := us.Metadata.GetLabels()[internalServiceEntryPortLabel]
	sePort, err := strconv.Atoi(sePortStr)
	if !hostOk || !portOk || err != nil {
		return "", 0, false
	}

	return seHost, uint32(sePort), true
}

type seExtension struct {
	client    kube.Client
	upstreams krt.Collection[krtcollections.UpstreamWrapper]
	endpoints krt.Collection[krtcollections.EndpointsForUpstream]
}

func (s *seExtension) HasSynced() bool {
	return s.upstreams.Synced().HasSynced() && s.endpoints.Synced().HasSynced()
}

func (s *seExtension) WaitUntilSynced(stop <-chan struct{}) bool {
	if !s.endpoints.Synced().WaitUntilSynced(stop) {
		return false
	}

	select {
	case <-stop:
		return false
	default:
	}

	return s.upstreams.Synced().WaitUntilSynced(stop)
}

// Endpoints implements krtcollections.KRTExtension.
func (s *seExtension) Endpoints() []krt.Collection[krtcollections.EndpointsForUpstream] {
	return []krt.Collection[krtcollections.EndpointsForUpstream]{s.endpoints}
}

func (s *seExtension) Upstreams() []krt.Collection[krtcollections.UpstreamWrapper] {
	return []krt.Collection[krtcollections.UpstreamWrapper]{s.upstreams}
}

func New(
	ctx context.Context,
	client kube.Client,
	pods krt.Collection[krtcollections.LocalityPod],
) krtcollections.KRTExtensions {
	defaultFilter := kclient.Filter{ObjectFilter: client.ObjectFilter()}

	seInformer := kclient.NewDelayedInformer[*networkingclient.ServiceEntry](client,
		gvr.ServiceEntry, kubetypes.StandardInformer, defaultFilter)
	ServiceEntries := krt.WrapClient(seInformer, krt.WithName("ServiceEntries"))
	SelectingServiceEntries := krt.NewCollection(ServiceEntries, func(ctx krt.HandlerContext, i *networkingclient.ServiceEntry) *seSelector {
		return &seSelector{ServiceEntry: i}
	})

	weInformer := kclient.NewDelayedInformer[*networkingclient.WorkloadEntry](client,
		gvr.WorkloadEntry, kubetypes.StandardInformer, defaultFilter)
	WorkloadEntries := krt.WrapClient(weInformer, krt.WithName("WorkloadEntries"))

	ConvertedUpstreams := buildUpstreams(ServiceEntries)
	Endpoints := buildEndpoints(SelectingServiceEntries, ConvertedUpstreams, pods, WorkloadEntries)

	return &seExtension{
		client:    client,
		upstreams: ConvertedUpstreams,
		endpoints: Endpoints,
	}
}

// upstreamName is the unique mapping for the upstream generated for a specific
// host:port combo on a ServiceEntry
func upstreamName(seName, hostname string, port uint32) string {
	return "istio-se:" + seName + "-" + strings.ReplaceAll(hostname, ".", "-") + "-" + strconv.Itoa(int(port))
}

// buildUpstreams is a 1:Many mapping from ServiceEntry -> UpstreamWrapper.
// For every ServiceEntry, we get an Upstream per-host-per-port.
func buildUpstreams(
	serviceEntries krt.Collection[*networkingclient.ServiceEntry],
) krt.Collection[krtcollections.UpstreamWrapper] {
	return krt.NewManyCollection(serviceEntries, func(ctx krt.HandlerContext, se *networkingclient.ServiceEntry) []krtcollections.UpstreamWrapper {
		var out []krtcollections.UpstreamWrapper

		// only STATIC is supported in gloo
		if se.Spec.Resolution != networking.ServiceEntry_STATIC {
			return nil
		}

		for _, hostname := range se.Spec.Hosts {
			for _, port := range se.Spec.Ports {
				us := &v1.Upstream{
					Metadata: &core.Metadata{
						Name:      upstreamName(se.Name, hostname, port.Number),
						Namespace: se.Namespace,
						Cluster:   "", // TODO we should be able to populate this I think
						Labels: maps.MergeCopy(se.Labels, map[string]string{
							edsupstream.InternalEDSLabel:      "enabled",
							internalServiceEntryKeyLabel:      se.GetNamespace() + "/" + se.GetName(),
							internalServiceEntryPortLabel:     strconv.Itoa(int(port.GetNumber())),
							internalServiceEntryHostLabel:     hostname,
							internalServiceEntryLocationLabel: se.Spec.Location.String(),
						}),
						Annotations: se.Annotations,

						// HACK
						// here we create an upstream with no upstream type
						// this may be a bad idea, but I'm going to try it
						// it would help evade ProcessUpstream impls that shouldn't run
					},
				}

				println("stevenctl build upstream: ", us.Metadata.Name)
				out = append(out, krtcollections.UpstreamWrapper{Inner: us})
			}
		}

		return out
	})
}

var (
	_ krt.ResourceNamer             = selectedWorkload{}
	_ krt.Equaler[selectedWorkload] = selectedWorkload{}
)

type selectedWorkload struct {
	// the workload that is selected
	krtcollections.LocalityPod
	// workload entry has workload-level port mappings
	portMapping map[string]uint32
	// the list of ServiceEntry that select this workload
	selectedBy []krt.Named
}

func (sw selectedWorkload) Equals(o selectedWorkload) bool {
	return sw.LocalityPod.Equals(o.LocalityPod) && slices.Equal(sw.selectedBy, o.selectedBy)
}

// buildEndpoints is a 1:Many mapping from UpstreamWrapper to EndpointsForUpstream
// We can assume the EndpointsForUpstream has a 1:1 mapping back to ServiceEntry because it only
// takes Upstreams from buildEndpoints in this package.
func buildEndpoints(
	ServiceEntries krt.Collection[seSelector],
	Upstreams krt.Collection[krtcollections.UpstreamWrapper],
	Pods krt.Collection[krtcollections.LocalityPod],
	WorkloadEntries krt.Collection[*networkingclient.WorkloadEntry],
) krt.Collection[krtcollections.EndpointsForUpstream] {
	seNsIndex := krt.NewNamespaceIndex(ServiceEntries)

	// WorkloadEntries: selection logic and conver to LocalityPod
	selectedWorkloadEntries := krt.NewCollection(WorkloadEntries, func(ctx krt.HandlerContext, we *networkingclient.WorkloadEntry) *selectedWorkload {
		serviceEntries := krt.Fetch(
			ctx,
			ServiceEntries,
			krt.FilterSelectsNonEmpty(we.GetLabels()),
			krt.FilterIndex(seNsIndex, we.GetNamespace()),
		)
		if len(serviceEntries) == 0 {
			return nil
		}
		labels := maps.MergeCopy(we.Labels, we.Spec.Labels)
		locality := krtcollections.LocalityFromLabels(labels)

		return &selectedWorkload{
			// not actually doing selection here, but we need the portMapping field
			portMapping: we.Spec.Ports,
			LocalityPod: krtcollections.LocalityPod{
				Named: krt.Named{
					// the name should be different to avoid conflicts in krt
					// currently, the name isn't surfaced anywhere in xds
					Name:      "workloadentry:" + we.Name,
					Namespace: we.Namespace,
				},
				Locality:        locality,
				AugmentedLabels: labels,
				Addresses:       []string{we.Spec.Address},
			},
		}
	})

	// Pods: selection logic
	selectedPods := krt.NewCollection(Pods, func(ctx krt.HandlerContext, workload krtcollections.LocalityPod) *selectedWorkload {
		serviceEntries := krt.Fetch(
			ctx,
			ServiceEntries,
			krt.FilterSelectsNonEmpty(workload.AugmentedLabels),
			krt.FilterIndex(seNsIndex, workload.Namespace),
		)
		if len(serviceEntries) == 0 {
			return nil
		}
		return &selectedWorkload{
			LocalityPod: workload,
			selectedBy: slices.Map(serviceEntries, func(s seSelector) krt.Named {
				return krt.NewNamed(s)
			}),
		}
	})

	// consolidate Pods and WorkloadEntries
	allWorkloads := krt.JoinCollection([]krt.Collection[selectedWorkload]{selectedPods, selectedWorkloadEntries})
	workloadsByServiceEntry := krt.NewIndex(allWorkloads, func(o selectedWorkload) []krt.Named {
		return o.selectedBy
	})

	// finally do the Endpoint generation
	endpointsForUs := krt.NewCollection(Upstreams, func(ctx krt.HandlerContext, usw krtcollections.UpstreamWrapper) *krtcollections.EndpointsForUpstream {
		us := usw.Inner

		// first, resolve ServiceEntry and Port from referenes
		sePort, portOk := us.Metadata.Labels[internalServiceEntryPortLabel]
		seKey, keyOk := us.Metadata.Labels[internalServiceEntryKeyLabel]
		if !keyOk || !portOk {
			// TODO log - dpanic should never happen
			return nil
		}
		se := krt.FetchOne(ctx, ServiceEntries, krt.FilterKey(seKey))
		if se == nil {
			println("stevenctl: failed find se", seKey)
			return nil
		}
		svcPort := ptr.Flatten(slices.FindFunc(se.Spec.Ports, func(p *networking.ServicePort) bool {
			return strconv.Itoa(int(p.GetNumber())) == sePort
		}))
		if svcPort == nil {
			println("stevenctl: failed find se port", seKey, sePort)
			return nil
		}

		autoMTLS := false
		logger := contextutils.LoggerFrom(context.Background()).Desugar().With(zap.String("upstream", usw.Inner.GetMetadata().Ref().Key()))
		out := krtcollections.NewEndpointsForUpstream(usw, logger)
		if se.Spec.WorkloadSelector != nil {
			workloads := krt.Fetch(ctx, allWorkloads, krt.FilterIndex(workloadsByServiceEntry, krt.NewNamed(se)))
			for _, workload := range workloads {
				port := resolvePort(svcPort, workload.portMapping)
				out.Add(workload.Locality, buildEndpoint(workload.IP(), workload.AugmentedLabels, port, autoMTLS))
			}
		} else {
			// inline endpoints
			for _, e := range se.Spec.Endpoints {
				locality := krtcollections.LocalityFromLabels(e.Labels)
				port := resolvePort(svcPort, e.Ports)
				out.Add(locality, buildEndpoint(e.Address, e.Labels, port, autoMTLS))
			}
		}

		return out
	})

	return endpointsForUs
}

func resolvePort(svcPort *networking.ServicePort, targetPortMap map[string]uint32) uint32 {
	port := ptr.NonEmptyOrDefault(svcPort.TargetPort, svcPort.Number)
	if targetPortMap != nil {
		if wePort := targetPortMap[svcPort.Name]; wePort > 0 {
			port = wePort
		}
	}
	return port
}

func buildEndpoint(
	address string,
	labels map[string]string,
	port uint32,
	autoMTLS bool,
) krtcollections.EndpointWithMd {
	return krtcollections.EndpointWithMd{
		LbEndpoint: krtcollections.CreateLBEndpoint(address, port, labels, autoMTLS),
		EndpointMd: krtcollections.EndpointMetadata{
			Labels: labels,
		},
	}
}

// wrapper around ServiceEntry that allows using FilterSelect and sFilterSelectsNonEmpty
type seSelector struct {
	*networkingclient.ServiceEntry
}

var (
	_ metav1.Object       = seSelector{}
	_ krt.LabelSelectorer = seSelector{}
	_ controllers.Object  = seSelector{}
)

func (s seSelector) ResourceName() string {
	return s.GetNamespace() + "/" + s.GetName()
}

func (s seSelector) GetLabelSelector() map[string]string {
	return s.Spec.GetWorkloadSelector().GetLabels()
}

func (s seSelector) Equals(in seSelector) bool {
	return proto.Equal(&s.ServiceEntry.Spec, &in.ServiceEntry.Spec)
}
