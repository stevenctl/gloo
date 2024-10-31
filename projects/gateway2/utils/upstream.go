package utils

import (
	"fmt"

	"github.com/solo-io/gloo/projects/gloo/cli/pkg/cmd/edit/upstream"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
)

func GetHostnameForUpstream(us *v1.Upstream) string {
	// get the upstream name and namespace
	// TODO: suppport other suffixes that are not cluster.local

	switch uptype := us.GetUpstreamType().(type) {
	case *v1.Upstream_Kube:
		return fmt.Sprintf("%s.%s.svc.cluster.local", uptype.Kube.GetServiceName(), uptype.Kube.GetServiceNamespace())
	case *v1.Upstream_Static:
		if len(uptype.Static.Hosts) == 0 {
			return ""
		}
		// TODO hack for serviceentry
		return uptype.Static.Hosts[0].SniAddr
	}
	return ""
}
