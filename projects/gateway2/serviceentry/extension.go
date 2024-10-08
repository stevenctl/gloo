package serviceentry

import (
	"context"
	"strconv"
	"strings"

	"github.com/solo-io/gloo/projects/gateway2/krtextensions"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"google.golang.org/protobuf/proto"
	"istio.io/istio/pkg/kube"
	"istio.io/istio/pkg/kube/controllers"
	"istio.io/istio/pkg/kube/kclient"
	"istio.io/istio/pkg/kube/krt"
	"istio.io/istio/pkg/maps"
	"istio.io/istio/pkg/ptr"
	"istio.io/istio/pkg/slices"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	networking "istio.io/api/networking/v1alpha3"
	networkingclient "istio.io/client-go/pkg/apis/networking/v1"
	"istio.io/istio/pkg/config/schema/gvr"
	kubeclient "istio.io/istio/pkg/kube"
	"istio.io/istio/pkg/kube/kubetypes"
	corev1 "k8s.io/api/core/v1"
)

const (
	// internalServiceEntryLabel links a generated Upstream back to the  ServiceEntry it is derived from.
	internalServiceEntryLabel = "internal.solo.io/serviceentry-key"
	// internalServiceEntryPortLabel references the port name on the ServiceEntry
	internalServiceEntryPortLabel = "internal.solo.io/serviceentry-port"
	upstreamNamePrefix            = "istio-se-"
)

type seExtension struct {
	client    kube.Client
	upstreams krt.Collection[*krtextensions.KRTUpstream]
	endpoints krt.Collection[*krtextensions.KRTEndpoint]
}

// Endpoints implements krtextensions.KRTExtension.
func (s *seExtension) Endpoints() []krt.Collection[*krtextensions.KRTEndpoint] {
	return []krt.Collection[*krtextensions.KRTEndpoint]{s.endpoints}
}

func (s *seExtension) Upstreams() []krt.Collection[*krtextensions.KRTUpstream] {
	return []krt.Collection[*krtextensions.KRTUpstream]{s.upstreams}
}

func New(ctx context.Context, client kube.Client) krtextensions.KRTExtension {
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

	podInformer := kclient.NewFiltered[*corev1.Pod](client, kclient.Filter{
		ObjectTransform: kubeclient.StripPodUnusedFields,
	})
	Pods := krt.WrapClient(podInformer, krt.WithName("ServiceEntryPods"))

	Upstreams := buildUpstreams(ServiceEntries)
	Endpoints := buildEndpoints(SelectingServiceEntries, Upstreams, Pods, WorkloadEntries)

	return &seExtension{
		client:    client,
		upstreams: Upstreams,
		endpoints: Endpoints,
	}
}

func UpstreamForServiceEntry(name string, port uint32) string {
	return upstreamNamePrefix + name + "-" + strconv.Itoa(int(port))
}

// buildUpstreams is a 1:Many mapping from ServiceEntry -> KRTUpstream.
// For every ServiceEntry, we get an Upstream per-port.
func buildUpstreams(
	serviceEntries krt.Collection[*networkingclient.ServiceEntry],
) krt.Collection[*krtextensions.KRTUpstream] {
	return krt.NewManyCollection(serviceEntries, func(ctx krt.HandlerContext, se *networkingclient.ServiceEntry) []*krtextensions.KRTUpstream {
		var out []*krtextensions.KRTUpstream

		for _, port := range se.Spec.Ports {
			us := &v1.Upstream{
				Metadata: &core.Metadata{
					Name:      upstreamNamePrefix + se.Name + "-" + strconv.Itoa(int(port.Number)),
					Namespace: se.Namespace,
					Cluster:   "", // TODO we should be able to populate this I think
					Labels: maps.MergeCopy(se.Labels, map[string]string{
						internalServiceEntryLabel:     se.GetNamespace() + "/" + se.GetName(),
						internalServiceEntryPortLabel: port.GetName(),
					}),
					Annotations: se.Annotations,
				},
			}
			// HACK
			// here we create an upstream with no upstream type
			// this may be a bad idea, but I'm going to try it
			// it would help evade ProcessUpstream impls that shouldn't run
			out = append(out, &krtextensions.KRTUpstream{Upstream: us})
		}

		return out
	})
}

// buildEndpoints is a 1:Many mapping from KRTUpstream to KRTEndpoint
// We can assume the KRTEndpoint has a 1:1 mapping back to ServiceEntry because it only
// takes Upstreams from buildEndpoints in this package.
func buildEndpoints(
	ServiceEntries krt.Collection[seSelector],
	Upstreams krt.Collection[*krtextensions.KRTUpstream],
	Pods krt.Collection[*corev1.Pod],
	WorkloadEntries krt.Collection[*networkingclient.WorkloadEntry],
) krt.Collection[*krtextensions.KRTEndpoint] {
	seNsIndex := krt.NewNamespaceIndex(ServiceEntries)

	pods := krt.NewManyCollection(Pods, func(ctx krt.HandlerContext, pod *corev1.Pod) []*krtextensions.KRTEndpoint {
		var out []*krtextensions.KRTEndpoint
		serviceEntries := krt.Fetch(
			ctx,
			ServiceEntries,
			krt.FilterSelectsNonEmpty(pod.Labels),
			krt.FilterIndex(seNsIndex, pod.Namespace),
		)
		for _, se := range serviceEntries {
			for _, port := range se.Spec.Ports {
				out = append(out, buildEndpoint(se.ServiceEntry, port, "Pod", pod, pod.Status.PodIP, nil))
			}
		}
		return out
	})

	workloadEntries := krt.NewManyCollection(WorkloadEntries, func(ctx krt.HandlerContext, we *networkingclient.WorkloadEntry) []*krtextensions.KRTEndpoint {
		var out []*krtextensions.KRTEndpoint
		serviceEntries := krt.Fetch(
			ctx,
			ServiceEntries,
			krt.FilterSelectsNonEmpty(we.Labels),
			krt.FilterIndex(seNsIndex, we.Namespace),
		)
		for _, se := range serviceEntries {
			for _, port := range se.Spec.Ports {
				out = append(out, buildEndpoint(se.ServiceEntry, port, "WorkloadEntry", we, we.Spec.Address, we.Spec.Ports))
			}
		}
		return out
	})

	inline := krt.NewManyCollection(Upstreams, func(ctx krt.HandlerContext, us *krtextensions.KRTUpstream) []*krtextensions.KRTEndpoint {
		// first, resolve ServiceEntry and Port from referenes
		sePort, portOk := us.Metadata.Labels[internalServiceEntryPortLabel]
		seKey, keyOk := us.Metadata.Labels[internalServiceEntryLabel]
		if !keyOk || !portOk {
			// TODO log - not supposed to happen
			return nil
		}
		se := krt.FetchOne(ctx, ServiceEntries, krt.FilterKey(seKey))
		if se == nil {
			println("stevenctl: failed find se", seKey)
			return nil
		}
		svcPort := slices.FindFunc(se.Spec.Ports, func(p *networking.ServicePort) bool {
			return p.GetName() == sePort
		})
		if svcPort == nil {
			println("stevenctl: failed find se port", seKey, sePort)
			return nil
		}

		// can't have inline with workloadSelector
		if se.Spec.WorkloadSelector != nil {
			println("stevenctl: skip cuz of  workloadSelector", seKey, sePort)
			return nil
		}

		var out []*krtextensions.KRTEndpoint
		for i, e := range se.Spec.Endpoints {
			println("stevenctl: build inline ep ", i, e.Address)
			inlineMeta := &metav1.ObjectMeta{
				Name:        strconv.Itoa(i),
				Namespace:   se.GetNamespace(),
				Labels:      e.Labels,
				Annotations: map[string]string{},
			}
			out = append(out, buildEndpoint(se.ServiceEntry, *svcPort, "Inline", inlineMeta, e.Address, e.Ports))
		}

		return out
	})

	return krt.JoinCollection([]krt.Collection[*krtextensions.KRTEndpoint]{
		pods, workloadEntries, inline,
	})
}

func buildEndpoint(
	se *networkingclient.ServiceEntry,
	svcPort *networking.ServicePort,
	kind string,
	meta metav1.Object,
	address string,
	targetPortMap map[string]uint32,
) *krtextensions.KRTEndpoint {
	port := ptr.NonEmptyOrDefault(svcPort.TargetPort, svcPort.Number)
	if targetPortMap != nil {
		if wePort := targetPortMap[svcPort.Name]; wePort > 0 {
			port = wePort
		}
	}
	return &krtextensions.KRTEndpoint{
		Endpoint: &v1.Endpoint{
			Upstreams: []*core.ResourceRef{{
				Name:      UpstreamForServiceEntry(se.GetName(), svcPort.Number),
				Namespace: se.GetNamespace(),
			}},
			Metadata: &core.Metadata{
				Name:        strings.ToLower("se-" + se.GetName() + "-" + se.GetNamespace() + "-ep-" + kind + "-" + meta.GetName()),
				// Namespace:   meta.GetNamespace(),
				Namespace:   "gloo-system",
				Labels:      meta.GetLabels(),
				Annotations: meta.GetAnnotations(),
			},
			Address: address,
			Port:    port,
		},
	}
}

// wrapper around ServiceEntry that allows using FilterSelect and sFilterSelectsNonEmpty
type seSelector struct {
	*networkingclient.ServiceEntry
}

var (
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
