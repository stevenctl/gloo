package proxy_syncer

import (
	"fmt"

	envoy_config_core_v3 "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_config_endpoint_v3 "github.com/envoyproxy/go-control-plane/envoy/config/endpoint/v3"
	"github.com/solo-io/gloo/projects/gateway2/krtcollections"
	"github.com/solo-io/gloo/projects/gloo/pkg/xds"
	envoycache "github.com/solo-io/solo-kit/pkg/api/v1/control-plane/cache"
	"github.com/solo-io/solo-kit/pkg/api/v1/control-plane/resource"
	"go.uber.org/zap"
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
	Client        krtcollections.UniqlyConnectedClient
	Endpoints     envoycache.Resource
	EndpointsHash uint64
	endpointsName string
}

func (c uccWithEndpoints) ResourceName() string {
	return fmt.Sprintf("%s/%s", c.Client.ResourceName(), c.endpointsName)
}

func (c uccWithEndpoints) Equals(in uccWithEndpoints) bool {
	return c.Client.Equals(in.Client) && c.EndpointsHash == in.EndpointsHash
}

type IndexedEndpoints struct {
	endpoints krt.Collection[uccWithEndpoints]
	index     krt.Index[string, uccWithEndpoints]
}

func (ie *IndexedEndpoints) FetchEndpointsForClient(kctx krt.HandlerContext, ucc krtcollections.UniqlyConnectedClient) []uccWithEndpoints {
	return krt.Fetch(kctx, ie.endpoints, krt.FilterIndex(ie.index, ucc.ResourceName()))
}

func NewIndexedEndpoints(logger *zap.Logger, uccs krt.Collection[krtcollections.UniqlyConnectedClient],
	glooEndpoints krt.Collection[EndpointsForUpstream],
	destinationRulesIndex DestinationRuleIndex) IndexedEndpoints {

	clas := krt.NewManyCollection(glooEndpoints, func(kctx krt.HandlerContext, ep EndpointsForUpstream) []uccWithEndpoints {
		uccs := krt.Fetch(kctx, uccs)
		uccWithEndpointsRet := make([]uccWithEndpoints, 0, len(uccs))
		for _, ucc := range uccs {
			cla := applyDestRulesForHostnames(logger, kctx, destinationRulesIndex, ucc.Namespace, ep, ucc)
			uccWithEndpointsRet = append(uccWithEndpointsRet, uccWithEndpoints{
				Client:        ucc,
				Endpoints:     resource.NewEnvoyResource(cla),
				EndpointsHash: ep.lbEpsEqualityHash,
				endpointsName: ep.ResourceName(),
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

func applyDestRulesForHostnames(logger *zap.Logger, kctx krt.HandlerContext, destinationRulesIndex DestinationRuleIndex, workloadNs string, ep EndpointsForUpstream, c krtcollections.UniqlyConnectedClient) *envoy_config_endpoint_v3.ClusterLoadAssignment {
	// host that would match the dest rule from the endpoints.
	// get the matching dest rule
	// get the lb info from the dest rules and call prioritize

	destrule := destinationRulesIndex.FetchDestRulesFor(kctx, workloadNs, ep.Hostname, c.Labels)
	var priorityInfo *PriorityInfo
	if destrule != nil {
		priorityInfo = getDestruleFor(*destrule)
	}
	lbInfo := LoadBalancingInfo{
		PodLabels:    c.Labels,
		PodLocality:  c.Locality,
		PriorityInfo: priorityInfo,
	}

	return prioritizeWithLbInfo(logger, ep, lbInfo)
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

func snapshotPerClient(l *zap.Logger, uccCol krt.Collection[krtcollections.UniqlyConnectedClient],
	mostXdsSnapshots krt.Collection[xdsSnapWrapper], ie IndexedEndpoints, iu IndexedUpstreams) krt.Collection[xdsSnapWrapper] {

	xdsSnapshotsForUcc := krt.NewCollection(uccCol, func(kctx krt.HandlerContext, ucc krtcollections.UniqlyConnectedClient) *xdsSnapWrapper {
		maybeMostlySnap := krt.FetchOne(kctx, mostXdsSnapshots, krt.FilterKey(ucc.Role))
		if maybeMostlySnap == nil {
			return nil
		}
		genericSnap := maybeMostlySnap.snap
		clustersForUcc := iu.FetchClustersForClient(kctx, ucc)

		clustersProto := make([]envoycache.Resource, 0, len(clustersForUcc))
		var clustersHash uint64
		for _, ep := range clustersForUcc {
			clustersProto = append(clustersProto, ep.Cluster)
			clustersHash ^= ep.ClusterVersion
		}
		clustersVersion := fmt.Sprintf("%d", clustersHash)

		endpointsForUcc := ie.FetchEndpointsForClient(kctx, ucc)
		endpointsProto := make([]envoycache.Resource, 0, len(endpointsForUcc))
		var endpointsHash uint64
		for _, ep := range endpointsForUcc {
			endpointsProto = append(endpointsProto, ep.Endpoints)
			endpointsHash ^= ep.EndpointsHash
		}

		mostlySnap := *maybeMostlySnap

		mostlySnap.proxyKey = ucc.ResourceName()
		mostlySnap.snap = &xds.EnvoySnapshot{
			Clusters:  envoycache.NewResources(clustersVersion, clustersProto),
			Endpoints: envoycache.NewResources(fmt.Sprintf("%s-%d", clustersVersion, endpointsHash), endpointsProto),
			Routes:    genericSnap.Routes,
			Listeners: genericSnap.Listeners,
		}
		l.Debug("snapshotPerClient", zap.String("proxyKey", mostlySnap.proxyKey),
			zap.Stringer("Listeners", resourcesStringer(mostlySnap.snap.Listeners)),
			zap.Stringer("Clusters", resourcesStringer(mostlySnap.snap.Clusters)),
			zap.Stringer("Routes", resourcesStringer(mostlySnap.snap.Routes)),
			zap.Stringer("Endpoints", resourcesStringer(mostlySnap.snap.Endpoints)),
		)

		return &mostlySnap
	})
	return xdsSnapshotsForUcc
}
