package v1

import (
	"sort"

	"github.com/gogo/protobuf/proto"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/kube/crd"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
	"github.com/solo-io/solo-kit/pkg/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
)

// TODO: modify as needed to populate additional fields
func NewProxy(namespace, name string) *Proxy {
	return &Proxy{
		Metadata: core.Metadata{
			Name:      name,
			Namespace: namespace,
		},
	}
}

func (r *Proxy) SetStatus(status core.Status) {
	r.Status = status
}

func (r *Proxy) SetMetadata(meta core.Metadata) {
	r.Metadata = meta
}

type ProxyList []*Proxy
type ProxiesByNamespace map[string]ProxyList

// namespace is optional, if left empty, names can collide if the list contains more than one with the same name
func (list ProxyList) Find(namespace, name string) (*Proxy, error) {
	for _, proxy := range list {
		if proxy.Metadata.Name == name {
			if namespace == "" || proxy.Metadata.Namespace == namespace {
				return proxy, nil
			}
		}
	}
	return nil, errors.Errorf("list did not find proxy %v.%v", namespace, name)
}

func (list ProxyList) AsResources() resources.ResourceList {
	var ress resources.ResourceList
	for _, proxy := range list {
		ress = append(ress, proxy)
	}
	return ress
}

func (list ProxyList) AsInputResources() resources.InputResourceList {
	var ress resources.InputResourceList
	for _, proxy := range list {
		ress = append(ress, proxy)
	}
	return ress
}

func (list ProxyList) Names() []string {
	var names []string
	for _, proxy := range list {
		names = append(names, proxy.Metadata.Name)
	}
	return names
}

func (list ProxyList) NamespacesDotNames() []string {
	var names []string
	for _, proxy := range list {
		names = append(names, proxy.Metadata.Namespace+"."+proxy.Metadata.Name)
	}
	return names
}

func (list ProxyList) Sort() ProxyList {
	sort.SliceStable(list, func(i, j int) bool {
		return list[i].Metadata.Less(list[j].Metadata)
	})
	return list
}

func (list ProxyList) Clone() ProxyList {
	var proxyList ProxyList
	for _, proxy := range list {
		proxyList = append(proxyList, proto.Clone(proxy).(*Proxy))
	}
	return proxyList
}

func (list ProxyList) ByNamespace() ProxiesByNamespace {
	byNamespace := make(ProxiesByNamespace)
	for _, proxy := range list {
		byNamespace.Add(proxy)
	}
	return byNamespace
}

func (byNamespace ProxiesByNamespace) Add(proxy ...*Proxy) {
	for _, item := range proxy {
		byNamespace[item.Metadata.Namespace] = append(byNamespace[item.Metadata.Namespace], item)
	}
}

func (byNamespace ProxiesByNamespace) Clear(namespace string) {
	delete(byNamespace, namespace)
}

func (byNamespace ProxiesByNamespace) List() ProxyList {
	var list ProxyList
	for _, proxyList := range byNamespace {
		list = append(list, proxyList...)
	}
	return list.Sort()
}

func (byNamespace ProxiesByNamespace) Clone() ProxiesByNamespace {
	return byNamespace.List().Clone().ByNamespace()
}

var _ resources.Resource = &Proxy{}

// Kubernetes Adapter for Proxy

func (o *Proxy) GetObjectKind() schema.ObjectKind {
	t := ProxyCrd.TypeMeta()
	return &t
}

func (o *Proxy) DeepCopyObject() runtime.Object {
	return resources.Clone(o).(*Proxy)
}

var ProxyCrd = crd.NewCrd("gloo.solo.io",
	"proxies",
	"gloo.solo.io",
	"v1",
	"Proxy",
	"px",
	&Proxy{})
