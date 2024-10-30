package proxy_syncer

import (
	networkingclient "istio.io/client-go/pkg/apis/networking/v1"
	"istio.io/istio/pkg/config/schema/gvr"
	"istio.io/istio/pkg/kube"
	"istio.io/istio/pkg/kube/kclient"
	"istio.io/istio/pkg/kube/krt"
	"istio.io/istio/pkg/kube/kubetypes"
)

type NsWithHostname struct {
	Ns       string
	Hostname string
}

type DestinationRuleIndex struct {
	Destrules  krt.Collection[DestinationRuleWrapper]
	ByHostname krt.Index[NsWithHostname, DestinationRuleWrapper]
}
type DestinationRuleWrapper struct {
	*networkingclient.DestinationRule
}

func (s DestinationRuleWrapper) GetLabelSelector() map[string]string {
	return s.Spec.WorkloadSelector.MatchLabels
}

func NewDestRuleIndex(istioClient kube.Client) DestinationRuleIndex {
	destRuleClient := kclient.NewDelayedInformer[*networkingclient.DestinationRule](istioClient, gvr.DestinationRule, kubetypes.StandardInformer, kclient.Filter{})
	rawDestrules := krt.WrapClient(destRuleClient, krt.WithName("DestinationRules"))
	destrules := krt.NewCollection(rawDestrules, func(kctx krt.HandlerContext, dr *networkingclient.DestinationRule) *DestinationRuleWrapper {
		return &DestinationRuleWrapper{dr}
	})
	return DestinationRuleIndex{
		Destrules:  destrules,
		ByHostname: newDestruleIndex(destrules),
	}
}

func newDestruleIndex(destRuleCollection krt.Collection[DestinationRuleWrapper]) krt.Index[NsWithHostname, DestinationRuleWrapper] {
	idx := krt.NewIndex(destRuleCollection, func(d DestinationRuleWrapper) []NsWithHostname {
		return []NsWithHostname{{
			Ns:       d.Namespace,
			Hostname: d.Spec.Host,
		}}
	})
	return idx
}

func (d *DestinationRuleIndex) FetchDestRulesFor(kctx krt.HandlerContext, proxyNs string, hostname string, podLabels map[string]string) []DestinationRuleWrapper {
	key := NsWithHostname{
		Ns:       proxyNs,
		Hostname: hostname,
	}
	return krt.Fetch(kctx, d.Destrules, krt.FilterIndex(d.ByHostname, key), krt.FilterSelects(podLabels))

}
