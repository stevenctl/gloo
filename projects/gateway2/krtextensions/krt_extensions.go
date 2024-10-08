package krtextensions

import (
	gloov1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1"
	"google.golang.org/protobuf/proto"
	"istio.io/istio/pkg/kube/krt"
)

// KRTExtension allows appending to the core KRT collections used for XDS.
type KRTExtension interface {
	// TODO add more types if needed
	Endpoints() []krt.Collection[*KRTEndpoint]
	Upstreams() []krt.Collection[*KRTUpstream]
}

var _ KRTExtension = Aggregate{}

// Aggregate wraps a list of extensions to flatten their outputs.
type Aggregate []KRTExtension

func (a Aggregate) Endpoints() (out []krt.Collection[*KRTEndpoint]) {
	for _, e := range a {
		out = append(out, e.Endpoints()...)
	}
	return
}

func (a Aggregate) Upstreams() (out []krt.Collection[*KRTUpstream]) {
	for _, e := range a {
		out = append(out, e.Upstreams()...)
	}
	return
}

var _ krt.ResourceNamer = &KRTEndpoint{}

func UnwrapEps(geps []*KRTEndpoint) gloov1.EndpointList {
	out := make(gloov1.EndpointList, 0, len(geps))
	for _, ep := range geps {
		out = append(out, ep.Endpoint)
	}
	return out
}

// KRTEndpoint wraps the Gloo Endpoint struct to make it krt-compatible.
type KRTEndpoint struct {
	*gloov1.Endpoint
}

func (ep *KRTEndpoint) Equals(in *KRTEndpoint) bool {
	return proto.Equal(ep, in)
}

func (ep *KRTEndpoint) ResourceName() string {
	return ep.Metadata.GetName() + "/" + ep.Metadata.GetNamespace()
}

var _ krt.ResourceNamer = &KRTUpstream{}

// KRTUpstream wraps the Gloo Upstream struct to make it krt-compatible.
type KRTUpstream struct {
	*gloov1.Upstream
}

func (us *KRTUpstream) ResourceName() string {
	return us.Metadata.GetName() + "/" + us.Metadata.GetNamespace()
}

func (us *KRTUpstream) Equals(in *KRTUpstream) bool {
	return proto.Equal(us, in)
}
