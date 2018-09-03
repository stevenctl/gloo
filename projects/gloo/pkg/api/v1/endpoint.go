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
func NewEndpoint(namespace, name string) *Endpoint {
	return &Endpoint{
		Metadata: core.Metadata{
			Name:      name,
			Namespace: namespace,
		},
	}
}

func (r *Endpoint) SetMetadata(meta core.Metadata) {
	r.Metadata = meta
}

type EndpointList []*Endpoint
type EndpointsByNamespace map[string]EndpointList

// namespace is optional, if left empty, names can collide if the list contains more than one with the same name
func (list EndpointList) Find(namespace, name string) (*Endpoint, error) {
	for _, endpoint := range list {
		if endpoint.Metadata.Name == name {
			if namespace == "" || endpoint.Metadata.Namespace == namespace {
				return endpoint, nil
			}
		}
	}
	return nil, errors.Errorf("list did not find endpoint %v.%v", namespace, name)
}

func (list EndpointList) AsResources() resources.ResourceList {
	var ress resources.ResourceList
	for _, endpoint := range list {
		ress = append(ress, endpoint)
	}
	return ress
}

func (list EndpointList) Names() []string {
	var names []string
	for _, endpoint := range list {
		names = append(names, endpoint.Metadata.Name)
	}
	return names
}

func (list EndpointList) NamespacesDotNames() []string {
	var names []string
	for _, endpoint := range list {
		names = append(names, endpoint.Metadata.Namespace+"."+endpoint.Metadata.Name)
	}
	return names
}

func (list EndpointList) Sort() EndpointList {
	sort.SliceStable(list, func(i, j int) bool {
		return list[i].Metadata.Less(list[j].Metadata)
	})
	return list
}

func (list EndpointList) Clone() EndpointList {
	var endpointList EndpointList
	for _, endpoint := range list {
		endpointList = append(endpointList, proto.Clone(endpoint).(*Endpoint))
	}
	return endpointList
}

func (list EndpointList) ByNamespace() EndpointsByNamespace {
	byNamespace := make(EndpointsByNamespace)
	for _, endpoint := range list {
		byNamespace.Add(endpoint)
	}
	return byNamespace
}

func (byNamespace EndpointsByNamespace) Add(endpoint ...*Endpoint) {
	for _, item := range endpoint {
		byNamespace[item.Metadata.Namespace] = append(byNamespace[item.Metadata.Namespace], item)
	}
}

func (byNamespace EndpointsByNamespace) Clear(namespace string) {
	delete(byNamespace, namespace)
}

func (byNamespace EndpointsByNamespace) List() EndpointList {
	var list EndpointList
	for _, endpointList := range byNamespace {
		list = append(list, endpointList...)
	}
	return list.Sort()
}

func (byNamespace EndpointsByNamespace) Clone() EndpointsByNamespace {
	return byNamespace.List().Clone().ByNamespace()
}

var _ resources.Resource = &Endpoint{}

// Kubernetes Adapter for Endpoint

func (o *Endpoint) GetObjectKind() schema.ObjectKind {
	t := EndpointCrd.TypeMeta()
	return &t
}

func (o *Endpoint) DeepCopyObject() runtime.Object {
	return resources.Clone(o).(*Endpoint)
}

var EndpointCrd = crd.NewCrd("gloo.solo.io",
	"endpoints",
	"gloo.solo.io",
	"v1",
	"Endpoint",
	"ep",
	&Endpoint{})
