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
func NewSettings(namespace, name string) *Settings {
	return &Settings{
		Metadata: core.Metadata{
			Name:      name,
			Namespace: namespace,
		},
	}
}

func (r *Settings) SetStatus(status core.Status) {
	r.Status = status
}

func (r *Settings) SetMetadata(meta core.Metadata) {
	r.Metadata = meta
}

type SettingsList []*Settings
type SettingsByNamespace map[string]SettingsList

// namespace is optional, if left empty, names can collide if the list contains more than one with the same name
func (list SettingsList) Find(namespace, name string) (*Settings, error) {
	for _, settings := range list {
		if settings.Metadata.Name == name {
			if namespace == "" || settings.Metadata.Namespace == namespace {
				return settings, nil
			}
		}
	}
	return nil, errors.Errorf("list did not find settings %v.%v", namespace, name)
}

func (list SettingsList) AsResources() resources.ResourceList {
	var ress resources.ResourceList 
	for _, settings := range list {
		ress = append(ress, settings)
	}
	return ress
}

func (list SettingsList) AsInputResources() resources.InputResourceList {
	var ress resources.InputResourceList
	for _, settings := range list {
		ress = append(ress, settings)
	}
	return ress
}

func (list SettingsList) Names() []string {
	var names []string
	for _, settings := range list {
		names = append(names, settings.Metadata.Name)
	}
	return names
}

func (list SettingsList) NamespacesDotNames() []string {
	var names []string
	for _, settings := range list {
		names = append(names, settings.Metadata.Namespace + "." + settings.Metadata.Name)
	}
	return names
}

func (list SettingsList) Sort() SettingsList {
	sort.SliceStable(list, func(i, j int) bool {
		return list[i].Metadata.Less(list[j].Metadata)
	})
	return list
}

func (list SettingsList) Clone() SettingsList {
	var settingsList SettingsList
	for _, settings := range list {
		settingsList = append(settingsList, proto.Clone(settings).(*Settings))
	}
	return settingsList 
}

func (list SettingsList) ByNamespace() SettingsByNamespace {
	byNamespace := make(SettingsByNamespace)
	for _, settings := range list {
		byNamespace.Add(settings)
	}
	return byNamespace
}

func (byNamespace SettingsByNamespace) Add(settings ... *Settings) {
	for _, item := range settings {
		byNamespace[item.Metadata.Namespace] = append(byNamespace[item.Metadata.Namespace], item)
	}
}

func (byNamespace SettingsByNamespace) Clear(namespace string) {
	delete(byNamespace, namespace)
}

func (byNamespace SettingsByNamespace) List() SettingsList {
	var list SettingsList
	for _, settingsList := range byNamespace {
		list = append(list, settingsList...)
	}
	return list.Sort()
}

func (byNamespace SettingsByNamespace) Clone() SettingsByNamespace {
	return byNamespace.List().Clone().ByNamespace()
}

var _ resources.Resource = &Settings{}

// Kubernetes Adapter for Settings

func (o *Settings) GetObjectKind() schema.ObjectKind {
	t := SettingsCrd.TypeMeta()
	return &t
}

func (o *Settings) DeepCopyObject() runtime.Object {
	return resources.Clone(o).(*Settings)
}

var SettingsCrd = crd.NewCrd("supergloo.solo.io",
	"settings",
	"supergloo.solo.io",
	"v1",
	"Settings",
	"st",
	&Settings{})
