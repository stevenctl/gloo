// Code generated by protoc-gen-ext. DO NOT EDIT.
// source: github.com/solo-io/gloo/projects/gloo/api/external/envoy/config/core/v3/backoff.proto

package v3

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"strings"

	"github.com/solo-io/protoc-gen-ext/pkg/clone"
	"google.golang.org/protobuf/proto"

	google_golang_org_protobuf_types_known_durationpb "google.golang.org/protobuf/types/known/durationpb"
)

// ensure the imports are used
var (
	_ = errors.New("")
	_ = fmt.Print
	_ = binary.LittleEndian
	_ = bytes.Compare
	_ = strings.Compare
	_ = clone.Cloner(nil)
	_ = proto.Message(nil)
)

// Clone function
func (m *BackoffStrategy) Clone() proto.Message {
	var target *BackoffStrategy
	if m == nil {
		return target
	}
	target = &BackoffStrategy{}

	if h, ok := interface{}(m.GetBaseInterval()).(clone.Cloner); ok {
		target.BaseInterval = h.Clone().(*google_golang_org_protobuf_types_known_durationpb.Duration)
	} else {
		target.BaseInterval = proto.Clone(m.GetBaseInterval()).(*google_golang_org_protobuf_types_known_durationpb.Duration)
	}

	if h, ok := interface{}(m.GetMaxInterval()).(clone.Cloner); ok {
		target.MaxInterval = h.Clone().(*google_golang_org_protobuf_types_known_durationpb.Duration)
	} else {
		target.MaxInterval = proto.Clone(m.GetMaxInterval()).(*google_golang_org_protobuf_types_known_durationpb.Duration)
	}

	return target
}
