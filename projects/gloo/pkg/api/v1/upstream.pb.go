// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: upstream.proto

package v1

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import google_protobuf1 "google/protobuf"
import _ "google/protobuf"
import _ "github.com/gogo/protobuf/gogoproto"
import core_solo_io "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
import core_solo_io1 "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"

import time "time"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf
var _ = time.Kitchen

//
// @solo-kit:resource
// @solo-kit:resource.short_name=us
// @solo-kit:resource.plural_name=upstreams
// @solo-kit:resource.group_name=gloo.solo.io
// @solo-kit:resource.version=v1
//
// Upstream represents a destination for routing. Upstreams can be compared to
// [clusters](https://www.envoyproxy.io/docs/envoy/latest/api-v1/cluster_manager/cluster.html?highlight=cluster) in Envoy terminology.
// Upstreams can take a variety of types<!--(TODO)--> in gloo. Language extensions known as plugins<!--(TODO)--> allow the addition of new
// types of upstreams. <!--See [upstream types](TODO) for a detailed description of available upstream types.-->
type Upstream struct {
	// Name of the upstream. Names must be unique and follow the following syntax rules:
	// One or more lowercase rfc1035/rfc1123 labels separated by '.' with a maximum length of 253 characters.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Type indicates the type of the upstream. Examples include static<!--(TODO)-->, kubernetes<!--(TODO)-->, and [aws](../plugins/aws.md)
	// Types are defined by the plugin<!--(TODO)--> associated with them.
	Type string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	// Connection Timeout tells gloo to set a timeout for unresponsive connections created to this upstream.
	// If not provided by the user, it will set to a default value
	ConnectionTimeout time.Duration `protobuf:"bytes,3,opt,name=connection_timeout,json=connectionTimeout,stdduration" json:"connection_timeout"`
	// Spec contains properties that are specific to the upstream type. The spec is always required, but
	// the expected content is specified by the [upstream plugin] for the given upstream type.
	// Most often the upstream spec will be a map<string, string>
	Spec *google_protobuf1.Struct `protobuf:"bytes,4,opt,name=spec" json:"spec,omitempty"`
	// Certain upstream types support (and may require) [functions](../introduction/concepts.md#Functions).
	// Functions allow function-level routing to be done. For example, the [AWS lambda](../plugins/aws.md) upstream type
	// Permits routing to AWS lambda function].
	// [routes](virtualservice.md#Route) on virtualservices can specify function destinations to route to specific functions.
	Functions []*Function `protobuf:"bytes,5,rep,name=functions" json:"functions,omitempty"`
	// Service Info contains information about the service running on the upstream
	// Service Info is optional, but is used by certain plugins (such as the gRPC plugin)
	// as well as discovery services to provide sophistocated routing features for well-known
	// types of services
	ServiceInfo *ServiceInfo `protobuf:"bytes,8,opt,name=service_info,json=serviceInfo" json:"service_info,omitempty"`
	// Status indicates the validation status of the upstream resource. Status is read-only by clients, and set by gloo during validation
	Status core_solo_io1.Status `protobuf:"bytes,6,opt,name=status" json:"status" testdiff:"ignore"`
	// Metadata contains the object metadata for this resource
	Metadata core_solo_io.Metadata `protobuf:"bytes,7,opt,name=metadata" json:"metadata"`
}

func (m *Upstream) Reset()                    { *m = Upstream{} }
func (m *Upstream) String() string            { return proto.CompactTextString(m) }
func (*Upstream) ProtoMessage()               {}
func (*Upstream) Descriptor() ([]byte, []int) { return fileDescriptorUpstream, []int{0} }

func (m *Upstream) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Upstream) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *Upstream) GetConnectionTimeout() time.Duration {
	if m != nil {
		return m.ConnectionTimeout
	}
	return 0
}

func (m *Upstream) GetSpec() *google_protobuf1.Struct {
	if m != nil {
		return m.Spec
	}
	return nil
}

func (m *Upstream) GetFunctions() []*Function {
	if m != nil {
		return m.Functions
	}
	return nil
}

func (m *Upstream) GetServiceInfo() *ServiceInfo {
	if m != nil {
		return m.ServiceInfo
	}
	return nil
}

func (m *Upstream) GetStatus() core_solo_io1.Status {
	if m != nil {
		return m.Status
	}
	return core_solo_io1.Status{}
}

func (m *Upstream) GetMetadata() core_solo_io.Metadata {
	if m != nil {
		return m.Metadata
	}
	return core_solo_io.Metadata{}
}

type ServiceInfo struct {
	// Type indicates the type of service running on the upstream.
	// Current options include `REST`, `gRPC`, and `NATS`
	Type string `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	// Properties contains properties that describe the service. The spec may be required
	// by the Upstream Plugin that handles the given Service Type
	// Most often the service properties will be a map<string, string>
	Properties *google_protobuf1.Struct `protobuf:"bytes,2,opt,name=properties" json:"properties,omitempty"`
}

func (m *ServiceInfo) Reset()                    { *m = ServiceInfo{} }
func (m *ServiceInfo) String() string            { return proto.CompactTextString(m) }
func (*ServiceInfo) ProtoMessage()               {}
func (*ServiceInfo) Descriptor() ([]byte, []int) { return fileDescriptorUpstream, []int{1} }

func (m *ServiceInfo) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *ServiceInfo) GetProperties() *google_protobuf1.Struct {
	if m != nil {
		return m.Properties
	}
	return nil
}

type Function struct {
	// Name of the function. Functions are referenced by name from routes and therefore must be unique within an upstream
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Spec for the function. Like [upstream specs](TODO), the content of function specs is specified by the [upstream plugin](TODO) for the upstream's type.
	Spec *google_protobuf1.Struct `protobuf:"bytes,4,opt,name=spec" json:"spec,omitempty"`
}

func (m *Function) Reset()                    { *m = Function{} }
func (m *Function) String() string            { return proto.CompactTextString(m) }
func (*Function) ProtoMessage()               {}
func (*Function) Descriptor() ([]byte, []int) { return fileDescriptorUpstream, []int{2} }

func (m *Function) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Function) GetSpec() *google_protobuf1.Struct {
	if m != nil {
		return m.Spec
	}
	return nil
}

func init() {
	proto.RegisterType((*Upstream)(nil), "gloo.api.v1.Upstream")
	proto.RegisterType((*ServiceInfo)(nil), "gloo.api.v1.ServiceInfo")
	proto.RegisterType((*Function)(nil), "gloo.api.v1.Function")
}
func (this *Upstream) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Upstream)
	if !ok {
		that2, ok := that.(Upstream)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Name != that1.Name {
		return false
	}
	if this.Type != that1.Type {
		return false
	}
	if this.ConnectionTimeout != that1.ConnectionTimeout {
		return false
	}
	if !this.Spec.Equal(that1.Spec) {
		return false
	}
	if len(this.Functions) != len(that1.Functions) {
		return false
	}
	for i := range this.Functions {
		if !this.Functions[i].Equal(that1.Functions[i]) {
			return false
		}
	}
	if !this.ServiceInfo.Equal(that1.ServiceInfo) {
		return false
	}
	if !this.Status.Equal(&that1.Status) {
		return false
	}
	if !this.Metadata.Equal(&that1.Metadata) {
		return false
	}
	return true
}
func (this *ServiceInfo) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ServiceInfo)
	if !ok {
		that2, ok := that.(ServiceInfo)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Type != that1.Type {
		return false
	}
	if !this.Properties.Equal(that1.Properties) {
		return false
	}
	return true
}
func (this *Function) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Function)
	if !ok {
		that2, ok := that.(Function)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Name != that1.Name {
		return false
	}
	if !this.Spec.Equal(that1.Spec) {
		return false
	}
	return true
}

func init() { proto.RegisterFile("upstream.proto", fileDescriptorUpstream) }

var fileDescriptorUpstream = []byte{
	// 459 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x52, 0xd1, 0x6e, 0xd3, 0x30,
	0x14, 0x25, 0xb4, 0x94, 0xcc, 0x41, 0x48, 0xb3, 0x06, 0x78, 0x13, 0x5a, 0xab, 0x3c, 0x55, 0x42,
	0xd8, 0xea, 0x86, 0x04, 0x1a, 0x6f, 0x15, 0x02, 0x21, 0xc4, 0x4b, 0x0a, 0x2f, 0x7b, 0x99, 0xdc,
	0xd4, 0x09, 0x66, 0x4d, 0xae, 0x65, 0xdf, 0x54, 0xe2, 0x4f, 0xf8, 0x84, 0x7d, 0x0a, 0x5f, 0x31,
	0x24, 0x3e, 0x81, 0x2f, 0x40, 0x71, 0xdc, 0xb5, 0x03, 0x34, 0xc1, 0x53, 0x6e, 0x7c, 0xcf, 0x39,
	0xc9, 0x39, 0xc7, 0xe4, 0x7e, 0x63, 0x1c, 0x5a, 0x25, 0x2b, 0x6e, 0x2c, 0x20, 0xd0, 0xa4, 0x5c,
	0x02, 0x70, 0x69, 0x34, 0x5f, 0x4d, 0x0e, 0x1e, 0x97, 0x00, 0xe5, 0x52, 0x09, 0xbf, 0x9a, 0x37,
	0x85, 0x70, 0x68, 0x9b, 0x1c, 0x3b, 0xe8, 0xc1, 0xe1, 0xef, 0xdb, 0x45, 0x63, 0x25, 0x6a, 0xa8,
	0xc3, 0x7e, 0xaf, 0x84, 0x12, 0xfc, 0x28, 0xda, 0x29, 0x9c, 0x4e, 0x4a, 0x8d, 0x9f, 0x9a, 0x39,
	0xcf, 0xa1, 0x12, 0x0e, 0x96, 0xf0, 0x54, 0x43, 0xf7, 0x3c, 0xd7, 0x28, 0xa4, 0xd1, 0x62, 0x35,
	0x11, 0x95, 0x42, 0xb9, 0x90, 0x28, 0x03, 0x45, 0xfc, 0x03, 0xc5, 0xa1, 0xc4, 0xc6, 0x75, 0x84,
	0xf4, 0xa2, 0x47, 0xe2, 0x8f, 0xc1, 0x17, 0xa5, 0xa4, 0x5f, 0xcb, 0x4a, 0xb1, 0x68, 0x14, 0x8d,
	0x77, 0x32, 0x3f, 0xb7, 0x67, 0xf8, 0xc5, 0x28, 0x76, 0xbb, 0x3b, 0x6b, 0x67, 0x9a, 0x11, 0x9a,
	0x43, 0x5d, 0xab, 0xbc, 0xb5, 0x70, 0x86, 0xba, 0x52, 0xd0, 0x20, 0xeb, 0x8d, 0xa2, 0x71, 0x72,
	0xb4, 0xcf, 0x3b, 0xaf, 0x7c, 0xed, 0x95, 0xbf, 0x0a, 0x5e, 0xa7, 0xf1, 0xb7, 0xcb, 0xe1, 0xad,
	0xaf, 0xdf, 0x87, 0x51, 0xb6, 0xbb, 0xa1, 0x7f, 0xe8, 0xd8, 0xf4, 0x09, 0xe9, 0x3b, 0xa3, 0x72,
	0xd6, 0xf7, 0x2a, 0x8f, 0xfe, 0x50, 0x99, 0xf9, 0x3c, 0x33, 0x0f, 0xa2, 0xc7, 0x64, 0xa7, 0x68,
	0x6a, 0xcf, 0x77, 0xec, 0xce, 0xa8, 0x37, 0x4e, 0x8e, 0x1e, 0xf0, 0xad, 0x3a, 0xf8, 0xeb, 0xb0,
	0xcd, 0x36, 0x38, 0xfa, 0x92, 0xdc, 0x73, 0xca, 0xae, 0x74, 0xae, 0xce, 0x74, 0x5d, 0x00, 0x8b,
	0xfd, 0x97, 0xd8, 0x35, 0xde, 0xac, 0x03, 0xbc, 0xad, 0x0b, 0xc8, 0x12, 0xb7, 0x79, 0xa1, 0x6f,
	0xc8, 0xa0, 0xcb, 0x8d, 0x0d, 0x3c, 0x6d, 0x8f, 0xe7, 0x60, 0x15, 0x6f, 0xb3, 0xe5, 0x1a, 0xf8,
	0xcc, 0xef, 0xa6, 0xfb, 0xad, 0xc3, 0x9f, 0x97, 0xc3, 0x5d, 0x54, 0x0e, 0x17, 0xba, 0x28, 0x4e,
	0x52, 0x5d, 0xd6, 0x60, 0x55, 0x9a, 0x05, 0x3a, 0x7d, 0x41, 0xe2, 0x75, 0x67, 0xec, 0xae, 0x97,
	0x7a, 0x78, 0x5d, 0xea, 0x7d, 0xd8, 0x4e, 0xfb, 0xad, 0x58, 0x76, 0x85, 0x4e, 0x4f, 0x49, 0xb2,
	0xf5, 0x7b, 0x57, 0xc5, 0x44, 0x5b, 0xc5, 0x3c, 0x27, 0xc4, 0x58, 0x30, 0xca, 0xa2, 0x56, 0xce,
	0x57, 0x76, 0x43, 0x94, 0x5b, 0xd0, 0xf4, 0x1d, 0x89, 0xd7, 0x91, 0xfd, 0xf5, 0x16, 0xfc, 0x4f,
	0x3b, 0xd3, 0x93, 0x8b, 0x1f, 0x87, 0xd1, 0xe9, 0xb3, 0x9b, 0xae, 0xa2, 0xb1, 0xf0, 0x59, 0xe5,
	0xe8, 0x44, 0x1b, 0xbe, 0x30, 0xe7, 0x65, 0xb8, 0x9c, 0xf3, 0x81, 0x97, 0x3c, 0xfe, 0x15, 0x00,
	0x00, 0xff, 0xff, 0xb9, 0xf0, 0x9c, 0x3a, 0x6d, 0x03, 0x00, 0x00,
}
