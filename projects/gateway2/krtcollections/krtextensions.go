package krtcollections

import (
	"istio.io/istio/pkg/kube/krt"
)

// KRTExtensions allows appending to the core KRT collections used for XDS.
type KRTExtensions interface {
	Endpoints() []krt.Collection[EndpointsForUpstream]
	Upstreams() []krt.Collection[UpstreamWrapper]
}

var _ KRTExtensions = aggregate{}

// Aggregate will append the outputs of each extension
func Aggregate(
	extensions ...KRTExtensions,
) KRTExtensions {
	return aggregate(extensions)
}

type aggregate []KRTExtensions

func (a aggregate) Endpoints() (out []krt.Collection[EndpointsForUpstream]) {
	for _, e := range a {
		out = append(out, e.Endpoints()...)
	}
	return
}

func (a aggregate) Upstreams() (out []krt.Collection[UpstreamWrapper]) {
	for _, e := range a {
		out = append(out, e.Upstreams()...)
	}
	return
}
