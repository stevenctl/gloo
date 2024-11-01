package serviceentry

import (
	"context"
	"strconv"
	"strings"

	"go.uber.org/zap"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/wrapperspb"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"sigs.k8s.io/controller-runtime/pkg/client"
	apiv1 "sigs.k8s.io/gateway-api/apis/v1"

	"github.com/solo-io/gloo/projects/gateway2/krtcollections"
	"github.com/solo-io/gloo/projects/gateway2/query"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gloo/pkg/api/v1/options/static"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins/edsupstream"
	"github.com/solo-io/go-utils/contextutils"
	core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"

	networking "istio.io/api/networking/v1alpha3"
	networkingclient "istio.io/client-go/pkg/apis/networking/v1"
	"istio.io/istio/pkg/config/schema/gvr"
	"istio.io/istio/pkg/kube"
	"istio.io/istio/pkg/kube/controllers"
	"istio.io/istio/pkg/kube/kclient"
	"istio.io/istio/pkg/kube/krt"
	"istio.io/istio/pkg/kube/kubetypes"
	"istio.io/istio/pkg/maps"
	"istio.io/istio/pkg/ptr"
	"istio.io/istio/pkg/slices"
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

var _ krtcollections.KRTExtensions = &Extension{}

type Extension struct {
	client kube.Client

	serviceEntries krt.Collection[*networkingclient.ServiceEntry]
	upstreams      krt.Collection[krtcollections.UpstreamWrapper]
	endpoints      krt.Collection[krtcollections.EndpointsForUpstream]
}

func (s *Extension) Synced() krt.Syncer {
	return krtcollections.FlattenedSyncers{
		s.serviceEntries.Synced(),
		s.upstreams.Synced(),
		s.endpoints.Synced(),
	}
}

func (s *Extension) Endpoints() []krt.Collection[krtcollections.EndpointsForUpstream] {
	return []krt.Collection[krtcollections.EndpointsForUpstream]{s.endpoints}
}

func (s *Extension) Upstreams() []krt.Collection[krtcollections.UpstreamWrapper] {
	return []krt.Collection[krtcollections.UpstreamWrapper]{s.upstreams}
}

// ServiceEntries collection is exposed for backendRef lookups
// TODO maybe the collection should be initialized elsewhere then?
func (s *Extension) ServiceEntries() krt.Collection[*networkingclient.ServiceEntry] {
	return s.serviceEntries
}

func (s *Extension) GetBackendForRef(ctx context.Context, obj query.From, backend *apiv1.BackendObjectReference) (client.Object, error, bool) {
	// TODO hopefully we don't end up in a state that we need this:
	// krtctx := ctx.Value("krtcontextkey")
	// if krtctx == nil {
	// 	// krt.Get
	// } else {
	// 	// krt.Fetch
	// }

	if ptr.OrEmpty(backend.Group) != networkingclient.GroupName {
		return nil, nil, false
	}

	var found *networkingclient.ServiceEntry
	switch ptr.OrEmpty(backend.Kind) {
	case "Hostname":
		// TODO we can index by hostname once we do this inside KRT
		items := s.serviceEntries.List()
		for _, se := range items {
			if !slices.Contains(se.Spec.Hosts, string(backend.Name)) {
				continue
			}
			// take the oldest one when multiple match
			if found == nil || se.CreationTimestamp.Time.Before(found.CreationTimestamp.Time) {
				found = se
			}
		}
		if found == nil {
			return nil, query.ErrUnresolvedReference, true
		}
		return found, nil, true
	case "ServiceEntry":
		// TODO use Fetch
		key := krt.GetKey(&networkingclient.ServiceEntry{ObjectMeta: metav1.ObjectMeta{
			Name:      string(backend.Name),
			Namespace: string(ptr.OrDefault(backend.Namespace, apiv1.Namespace(obj.Namespace()))),
		}})
		found = ptr.Flatten(s.serviceEntries.GetKey(key))
	default:
		// not responsible for this
		return nil, nil, false
	}

	if found == nil {
		return nil, query.ErrUnresolvedReference, true
	}

	// even if we find it, it must have the referenced port
	if backend.Port == nil ||
		slices.FindFunc(found.Spec.Ports, func(p *networking.ServicePort) bool {
			return p.Number == uint32(*backend.Port)
		}) == nil {
		return nil, query.ErrUnresolvedReference, true
	}

	return found, nil, true
}

func New(
	ctx context.Context,
	client kube.Client,
	pods krt.Collection[krtcollections.LocalityPod],
) *Extension {
	println("stevenctl is my code even running")
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

	return &Extension{
		client:         client,
		serviceEntries: ServiceEntries,
		upstreams:      ConvertedUpstreams,
		endpoints:      Endpoints,
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
							internalServiceEntryKeyLabel:      se.GetNamespace() + "/" + se.GetName(),
							internalServiceEntryPortLabel:     strconv.Itoa(int(port.GetNumber())),
							internalServiceEntryHostLabel:     hostname,
							internalServiceEntryLocationLabel: se.Spec.Location.String(),

							// use edsupstream plugin to get EDS on a static Upstream
							edsupstream.InternalEDSLabel: "enabled",
						}),
						Annotations: se.Annotations,
					},
					// we only use the spec to propagate SNI info
					UpstreamType: &v1.Upstream_Static{
						Static: &static.UpstreamSpec{
							UseTls: wrapperspb.Bool(false),
							Hosts: []*static.Host{{
								SniAddr: hostname,
							}},
						},
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

		autoMTLS := true
		logger := contextutils.LoggerFrom(context.Background()).Desugar().With(zap.String("upstream", usw.Inner.GetMetadata().Ref().Key()))
		out := krtcollections.NewEndpointsForUpstream(usw, logger)
		println("stevenctl se eps hostname: ", out.Hostname)
		println("stevenctl se eps cls name: ", out.ClusterName)
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
