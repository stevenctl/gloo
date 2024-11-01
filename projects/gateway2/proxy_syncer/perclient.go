package proxy_syncer

import (
	"fmt"

	"github.com/solo-io/gloo/projects/gateway2/krtcollections"
	"github.com/solo-io/gloo/projects/gloo/pkg/xds"
	envoycache "github.com/solo-io/solo-kit/pkg/api/v1/control-plane/cache"
	"go.uber.org/zap"
	"istio.io/istio/pkg/kube/krt"
)

func snapshotPerClient(l *zap.Logger, uccCol krt.Collection[krtcollections.UniqlyConnectedClient],
	mostXdsSnapshots krt.Collection[xdsSnapWrapper], endpoints PerClientEnvoyEndpoints, clusters PerClientEnvoyClusters) krt.Collection[xdsSnapWrapper] {

	xdsSnapshotsForUcc := krt.NewCollection(uccCol, func(kctx krt.HandlerContext, ucc krtcollections.UniqlyConnectedClient) *xdsSnapWrapper {
		maybeMostlySnap := krt.FetchOne(kctx, mostXdsSnapshots, krt.FilterKey(ucc.Role))
		if maybeMostlySnap == nil {
			return nil
		}
		genericSnap := maybeMostlySnap.snap
		clustersForUcc := clusters.FetchClustersForClient(kctx, ucc)

		clustersProto := make([]envoycache.Resource, 0, len(clustersForUcc))
		var clustersHash uint64
		for _, ep := range clustersForUcc {
			clustersProto = append(clustersProto, ep.Cluster)
			clustersHash ^= ep.ClusterVersion
		}
		clustersVersion := fmt.Sprintf("%d", clustersHash)

		endpointsForUcc := endpoints.FetchEndpointsForClient(kctx, ucc)
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
