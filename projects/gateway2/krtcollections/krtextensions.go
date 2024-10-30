package krtcollections

import (
	"istio.io/istio/pkg/kube/krt"
)

// KRTExtensions allows appending to the core KRT collections used for XDS.
type KRTExtensions interface {
	krt.Syncer
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

func (a aggregate) HasSynced() bool {
	for _, k := range a {
		if !k.HasSynced() {
			return false
		}
	}
	return true
}

func (a aggregate) WaitUntilSynced(stop <-chan struct{}) bool {
	allSynced := true
	for _, k := range a {
		select {
		case <-stop:
			return false
		default:
			// don't return early if one is false
			allSynced = allSynced && k.WaitUntilSynced(stop)
		}
	}
	return allSynced
}
