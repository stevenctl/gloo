/*
Copyright The Kubernetes Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	"context"

	v1 "github.com/solo-io/gloo/projects/gateway/pkg/api/v1/kube/apis/gateway.solo.io/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	testing "k8s.io/client-go/testing"
)

// FakeVirtualServices implements VirtualServiceInterface
type FakeVirtualServices struct {
	Fake *FakeGatewayV1
	ns   string
}

var virtualservicesResource = v1.SchemeGroupVersion.WithResource("virtualservices")

var virtualservicesKind = v1.SchemeGroupVersion.WithKind("VirtualService")

// Get takes name of the virtualService, and returns the corresponding virtualService object, and an error if there is any.
func (c *FakeVirtualServices) Get(ctx context.Context, name string, options metav1.GetOptions) (result *v1.VirtualService, err error) {
	emptyResult := &v1.VirtualService{}
	obj, err := c.Fake.
		Invokes(testing.NewGetActionWithOptions(virtualservicesResource, c.ns, name, options), emptyResult)

	if obj == nil {
		return emptyResult, err
	}
	return obj.(*v1.VirtualService), err
}

// List takes label and field selectors, and returns the list of VirtualServices that match those selectors.
func (c *FakeVirtualServices) List(ctx context.Context, opts metav1.ListOptions) (result *v1.VirtualServiceList, err error) {
	emptyResult := &v1.VirtualServiceList{}
	obj, err := c.Fake.
		Invokes(testing.NewListActionWithOptions(virtualservicesResource, virtualservicesKind, c.ns, opts), emptyResult)

	if obj == nil {
		return emptyResult, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1.VirtualServiceList{ListMeta: obj.(*v1.VirtualServiceList).ListMeta}
	for _, item := range obj.(*v1.VirtualServiceList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested virtualServices.
func (c *FakeVirtualServices) Watch(ctx context.Context, opts metav1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchActionWithOptions(virtualservicesResource, c.ns, opts))

}

// Create takes the representation of a virtualService and creates it.  Returns the server's representation of the virtualService, and an error, if there is any.
func (c *FakeVirtualServices) Create(ctx context.Context, virtualService *v1.VirtualService, opts metav1.CreateOptions) (result *v1.VirtualService, err error) {
	emptyResult := &v1.VirtualService{}
	obj, err := c.Fake.
		Invokes(testing.NewCreateActionWithOptions(virtualservicesResource, c.ns, virtualService, opts), emptyResult)

	if obj == nil {
		return emptyResult, err
	}
	return obj.(*v1.VirtualService), err
}

// Update takes the representation of a virtualService and updates it. Returns the server's representation of the virtualService, and an error, if there is any.
func (c *FakeVirtualServices) Update(ctx context.Context, virtualService *v1.VirtualService, opts metav1.UpdateOptions) (result *v1.VirtualService, err error) {
	emptyResult := &v1.VirtualService{}
	obj, err := c.Fake.
		Invokes(testing.NewUpdateActionWithOptions(virtualservicesResource, c.ns, virtualService, opts), emptyResult)

	if obj == nil {
		return emptyResult, err
	}
	return obj.(*v1.VirtualService), err
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().
func (c *FakeVirtualServices) UpdateStatus(ctx context.Context, virtualService *v1.VirtualService, opts metav1.UpdateOptions) (result *v1.VirtualService, err error) {
	emptyResult := &v1.VirtualService{}
	obj, err := c.Fake.
		Invokes(testing.NewUpdateSubresourceActionWithOptions(virtualservicesResource, "status", c.ns, virtualService, opts), emptyResult)

	if obj == nil {
		return emptyResult, err
	}
	return obj.(*v1.VirtualService), err
}

// Delete takes name of the virtualService and deletes it. Returns an error if one occurs.
func (c *FakeVirtualServices) Delete(ctx context.Context, name string, opts metav1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteActionWithOptions(virtualservicesResource, c.ns, name, opts), &v1.VirtualService{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeVirtualServices) DeleteCollection(ctx context.Context, opts metav1.DeleteOptions, listOpts metav1.ListOptions) error {
	action := testing.NewDeleteCollectionActionWithOptions(virtualservicesResource, c.ns, opts, listOpts)

	_, err := c.Fake.Invokes(action, &v1.VirtualServiceList{})
	return err
}

// Patch applies the patch and returns the patched virtualService.
func (c *FakeVirtualServices) Patch(ctx context.Context, name string, pt types.PatchType, data []byte, opts metav1.PatchOptions, subresources ...string) (result *v1.VirtualService, err error) {
	emptyResult := &v1.VirtualService{}
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceActionWithOptions(virtualservicesResource, c.ns, name, pt, data, opts, subresources...), emptyResult)

	if obj == nil {
		return emptyResult, err
	}
	return obj.(*v1.VirtualService), err
}
