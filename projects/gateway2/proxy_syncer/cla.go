package proxy_syncer

import (
	"fmt"

	envoy_config_core_v3 "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_config_endpoint_v3 "github.com/envoyproxy/go-control-plane/envoy/config/endpoint/v3"
	"github.com/solo-io/gloo/projects/gateway2/krtcollections"
	"github.com/solo-io/gloo/projects/gloo/pkg/xds"
	envoycache "github.com/solo-io/solo-kit/pkg/api/v1/control-plane/cache"
	"github.com/solo-io/solo-kit/pkg/api/v1/control-plane/resource"
	"istio.io/istio/pkg/kube/krt"
	"k8s.io/apimachinery/pkg/types"
)

type EndpointResources struct {
	Endpoints        envoycache.Resource
	EndpointsVersion uint64
	UpstreamRef      types.NamespacedName
}

func (c EndpointResources) ResourceName() string {
	return c.UpstreamRef.String()
}

func (c EndpointResources) Equals(in EndpointResources) bool {
	return c.UpstreamRef == in.UpstreamRef && c.EndpointsVersion == in.EndpointsVersion
}

func newEnvoyEndpoints(glooEndpoints krt.Collection[EndpointsForUpstream]) krt.Collection[EndpointResources] {

	clas := krt.NewCollection(glooEndpoints, func(_ krt.HandlerContext, ep EndpointsForUpstream) *EndpointResources {
		return TransformEndpointToResources(ep)
	})
	return clas
}

func TransformEndpointToResources(ep EndpointsForUpstream) *EndpointResources {
	cla := prioritize(ep)
	return &EndpointResources{
		Endpoints:        resource.NewEnvoyResource(cla),
		EndpointsVersion: ep.lbEpsEqualityHash,
		UpstreamRef:      ep.UpstreamRef,
	}
}

func prioritize(ep EndpointsForUpstream) *envoy_config_endpoint_v3.ClusterLoadAssignment {
	cla := &envoy_config_endpoint_v3.ClusterLoadAssignment{
		ClusterName: ep.clusterName,
	}
	for loc, eps := range ep.LbEps {
		var l *envoy_config_core_v3.Locality
		if loc != (krtcollections.PodLocality{}) {
			l = &envoy_config_core_v3.Locality{
				Region:  loc.Region,
				Zone:    loc.Zone,
				SubZone: loc.Subzone,
			}
		}

		lbeps := make([]*envoy_config_endpoint_v3.LbEndpoint, 0, len(eps))
		for _, ep := range eps {
			lbeps = append(lbeps, ep.LbEndpoint)
		}

		endpoint := &envoy_config_endpoint_v3.LocalityLbEndpoints{
			LbEndpoints: lbeps,
			Locality:    l,
		}

		cla.Endpoints = append(cla.GetEndpoints(), endpoint)
	}

	// In theory we want to run endpoint plugins here.
	// we only have one endpoint plugin - and it also does failover... so might be simpler to not support it in ggv2 and
	// deprecating the functionality. it's not easy to do as with krt we no longer have gloo 'Endpoint' objects
	return cla
}

type uccWithEndpoints struct {
	Client           krtcollections.UniqlyConnectedClient
	Endpoints        envoycache.Resource
	EndpointsVersion uint64
	endpointsName    string
}

func (c uccWithEndpoints) ResourceName() string {
	return fmt.Sprintf("%s/%s", c.Client.ResourceName(), c.endpointsName)
}

func (c uccWithEndpoints) Equals(in uccWithEndpoints) bool {
	return c.Client.Equals(in.Client) && c.EndpointsVersion == in.EndpointsVersion
}

type IndexedEndpoints struct {
	endpoints krt.Collection[uccWithEndpoints]
	index     krt.Index[string, uccWithEndpoints]
}

func NewIndexedEndpoints(uccs krt.Collection[krtcollections.UniqlyConnectedClient],
	glooEndpoints krt.Collection[EndpointsForUpstream],
	destinationRulesIndex DestinationRuleIndex) IndexedEndpoints {

	clas := krt.NewManyCollection(glooEndpoints, func(kctx krt.HandlerContext, ep EndpointsForUpstream) []uccWithEndpoints {
		uccs := krt.Fetch(kctx, uccs)
		uccWithEndpointsRet := make([]uccWithEndpoints, 0, len(uccs))
		for _, ucc := range uccs {
			cla := applyDestRulesForHostnames(kctx, destinationRulesIndex, ucc.Namespace, ep, ucc)
			uccWithEndpointsRet = append(uccWithEndpointsRet, uccWithEndpoints{
				Client:           ucc,
				Endpoints:        resource.NewEnvoyResource(cla),
				EndpointsVersion: ep.lbEpsEqualityHash,
				endpointsName:    ep.ResourceName(),
			})
		}
		return uccWithEndpointsRet
	})
	idx := krt.NewIndex(clas, func(ucc uccWithEndpoints) []string {
		return []string{ucc.Client.ResourceName()}
	})

	return IndexedEndpoints{
		endpoints: clas,
		index:     idx,
	}
}

func applyDestRulesForHostnames(kctx krt.HandlerContext, destinationRulesIndex DestinationRuleIndex, workloadNs string, ep EndpointsForUpstream, c krtcollections.UniqlyConnectedClient) *envoy_config_endpoint_v3.ClusterLoadAssignment {
	// host that would match the dest rule from the endpoints.
	// get the matching dest rule
	// get the lb info from the dest rules and call prioritize

	hostname := fromEndpoint(ep)
	destrule := destinationRulesIndex.FetchDestRulesFor(kctx, workloadNs, hostname, c.Labels)
	var priorityInfo *PriorityInfo
	if destrule != nil {
		priorityInfo = getDestruleFor(*destrule)
	}
	lbInfo := LoadBalancingInfo{
		PodLabels:    c.Labels,
		PodLocality:  c.Locality,
		PriorityInfo: priorityInfo,
	}

	return prioritizeWithLbInfo(ep, lbInfo)
}

func fromEndpoint(ep EndpointsForUpstream) string {
	// get the upstream name and namespace
	// TODO: suppport other suffixes that are not cluster.local
	return fmt.Sprintf("%s.%s.svc.cluster.local", ep.UpstreamRef.Name, ep.UpstreamRef.Namespace)
}

func getDestruleFor(destrules DestinationRuleWrapper) *PriorityInfo {
	localityLb := destrules.Spec.GetTrafficPolicy().GetLoadBalancer().GetLocalityLbSetting()
	if localityLb == nil {
		return nil
	}
	return &PriorityInfo{
		FailoverPriority: NewPriorities(localityLb.GetFailoverPriority()),
		Failover:         localityLb.GetFailover(),
	}
}

func snapshotPerClient(ucc krt.Collection[krtcollections.UniqlyConnectedClient],
	mostXdsSnapshots krt.Collection[xdsSnapWrapper], ie IndexedEndpoints) krt.Collection[xdsSnapWrapper] {

	xdsSnapshotsForUcc := krt.NewCollection(ucc, func(kctx krt.HandlerContext, ucc krtcollections.UniqlyConnectedClient) *xdsSnapWrapper {
		mostlySnaps := krt.Fetch(kctx, mostXdsSnapshots, krt.FilterKey(ucc.Role))
		if len(mostlySnaps) != 1 {
			return nil
		}
		mostlySnap := mostlySnaps[0]
		endpointsForUcc := krt.Fetch(kctx, ie.endpoints, krt.FilterIndex(ie.index, ucc.ResourceName()))
		genericSnap := mostlySnap.snap
		clustersVersion := mostlySnap.snap.Clusters.Version

		endpointsProto := make([]envoycache.Resource, 0, len(endpointsForUcc))
		var endpointsVersion uint64

		for _, ep := range endpointsForUcc {
			endpointsProto = append(endpointsProto, ep.Endpoints)
			endpointsVersion ^= ep.EndpointsVersion
		}

		mostlySnap.proxyKey = ucc.ResourceName()
		mostlySnap.snap = &xds.EnvoySnapshot{
			Clusters:  genericSnap.Clusters,
			Endpoints: envoycache.NewResources(fmt.Sprintf("%v-%v", clustersVersion, endpointsVersion), endpointsProto),
			Routes:    genericSnap.Routes,
			Listeners: genericSnap.Listeners,
		}

		return &mostlySnap
	})
	return xdsSnapshotsForUcc
}
