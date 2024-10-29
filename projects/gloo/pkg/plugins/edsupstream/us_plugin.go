package edsupstream

import (
	cluster_v3 "github.com/envoyproxy/go-control-plane/envoy/config/cluster/v3"
	envoycore "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gloo/pkg/plugins"
)

// InternalEDSLabel is a marker that synthetic Upstreams can use to indicate
// their clusters should be treated as EDS clusters.
// This label name contains invalid characters so it cannot mistakenly be used in
// an actual Kubernetes resource.
const InternalEDSLabel = "~internal.solo.io/eds-upstream"

var _ plugins.UpstreamPlugin = &seUsPlugin{}

type seUsPlugin struct{}

// NewPlugin will convert our specific type of upstreams to create EDS clusters.
func NewPlugin() plugins.UpstreamPlugin {
	return &seUsPlugin{}
}

func (s *seUsPlugin) Init(params plugins.InitParams) {
}

func (s *seUsPlugin) Name() string {
	return "InternalEDSPlugin"
}

func (s *seUsPlugin) ProcessUpstream(params plugins.Params, in *v1.Upstream, out *cluster_v3.Cluster) error {
	// not ours
	if _, ok := in.Metadata.Labels[InternalEDSLabel]; !ok {
		return nil
	}

	// tell Envoy to use EDS to get endpoints for this cluster
	out.ClusterDiscoveryType = &cluster_v3.Cluster_Type{
		Type: cluster_v3.Cluster_EDS,
	}
	// tell envoy to use ADS to resolve Endpoints
	out.EdsClusterConfig = &cluster_v3.Cluster_EdsClusterConfig{
		EdsConfig: &envoycore.ConfigSource{
			ConfigSourceSpecifier: &envoycore.ConfigSource_Ads{
				Ads: &envoycore.AggregatedConfigSource{},
			},
		},
	}
	return nil
}
