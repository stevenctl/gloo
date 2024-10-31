package serviceentry

import (
	networkingclient "istio.io/client-go/pkg/apis/networking/v1"
	"istio.io/istio/pkg/ptr"
	"sigs.k8s.io/controller-runtime/pkg/client"
	apiv1 "sigs.k8s.io/gateway-api/apis/v1"

	"github.com/solo-io/gloo/projects/gateway2/translator/plugins"
	gloov1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
)

var _ plugins.BackendPlugin = bePlugin{}

type bePlugin struct{}

func NewBackendPlugin() plugins.BackendPlugin {
	return bePlugin{}
}

func (b bePlugin) ApplyBackendPlugin(
	resolvedBackend client.Object,
	ref apiv1.BackendObjectReference,
) (*gloov1.Destination, bool) {
	if !isServiceEntryRef(ref) {
		return nil, false
	}

	se, ok := resolvedBackend.(*networkingclient.ServiceEntry)
	if !ok {
		// TODO err unresolvedbackend
		return nil, false
	}

	hostname := se.Name
	if len(se.Spec.Hosts) > 0 {
		hostname = se.Spec.Hosts[0]
	}
	if *ref.Kind == "Hostname" {
		hostname = string(ref.Name)
	}

	return &gloov1.Destination{
		DestinationType: &gloov1.Destination_Upstream{
			Upstream: &core.ResourceRef{
				Name:      upstreamName(se.Name, hostname, uint32(*ref.Port)),
				Namespace: se.Namespace,
			},
		},
	}, true
}

func isServiceEntryRef(ref apiv1.BackendObjectReference) bool {
	if ref.Port == nil || ptr.OrEmpty(ref.Group) != networkingclient.GroupName {
		return false
	}
	switch ptr.OrEmpty(ref.Kind) {
	case "Hostname":
		return true
	case "ServiceEntry":
		return true
	default:
		return false
	}
}
