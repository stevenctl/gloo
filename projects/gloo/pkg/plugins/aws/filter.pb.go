// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: filter.proto

package aws // import "github.com/solo-io/solo-projects/projects/gloo/pkg/plugins/aws"

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/lyft/protoc-gen-validate/validate"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

// AWS Lambda contains the configuration necessary to perform transform regular http calls to
// AWS Lambda invocations.
type LambdaPerRoute struct {
	// The name of the function
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The qualifier of the function (defualts to $LATEST if not specified)
	Qualifier string `protobuf:"bytes,2,opt,name=qualifier,proto3" json:"qualifier,omitempty"`
	// Invocation type - async or regular.
	Async                bool     `protobuf:"varint,3,opt,name=async,proto3" json:"async,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LambdaPerRoute) Reset()         { *m = LambdaPerRoute{} }
func (m *LambdaPerRoute) String() string { return proto.CompactTextString(m) }
func (*LambdaPerRoute) ProtoMessage()    {}
func (*LambdaPerRoute) Descriptor() ([]byte, []int) {
	return fileDescriptor_filter_e63dc42a9b6ae576, []int{0}
}
func (m *LambdaPerRoute) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LambdaPerRoute.Unmarshal(m, b)
}
func (m *LambdaPerRoute) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LambdaPerRoute.Marshal(b, m, deterministic)
}
func (dst *LambdaPerRoute) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LambdaPerRoute.Merge(dst, src)
}
func (m *LambdaPerRoute) XXX_Size() int {
	return xxx_messageInfo_LambdaPerRoute.Size(m)
}
func (m *LambdaPerRoute) XXX_DiscardUnknown() {
	xxx_messageInfo_LambdaPerRoute.DiscardUnknown(m)
}

var xxx_messageInfo_LambdaPerRoute proto.InternalMessageInfo

func (m *LambdaPerRoute) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *LambdaPerRoute) GetQualifier() string {
	if m != nil {
		return m.Qualifier
	}
	return ""
}

func (m *LambdaPerRoute) GetAsync() bool {
	if m != nil {
		return m.Async
	}
	return false
}

type LambdaProtocolExtension struct {
	// The host header for AWS this cluster
	Host string `protobuf:"bytes,1,opt,name=host,proto3" json:"host,omitempty"`
	// The region for this cluster
	Region string `protobuf:"bytes,2,opt,name=region,proto3" json:"region,omitempty"`
	// The access_key for AWS this cluster
	AccessKey string `protobuf:"bytes,3,opt,name=access_key,json=accessKey,proto3" json:"access_key,omitempty"`
	// The secret_key for AWS this cluster
	SecretKey            string   `protobuf:"bytes,4,opt,name=secret_key,json=secretKey,proto3" json:"secret_key,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LambdaProtocolExtension) Reset()         { *m = LambdaProtocolExtension{} }
func (m *LambdaProtocolExtension) String() string { return proto.CompactTextString(m) }
func (*LambdaProtocolExtension) ProtoMessage()    {}
func (*LambdaProtocolExtension) Descriptor() ([]byte, []int) {
	return fileDescriptor_filter_e63dc42a9b6ae576, []int{1}
}
func (m *LambdaProtocolExtension) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LambdaProtocolExtension.Unmarshal(m, b)
}
func (m *LambdaProtocolExtension) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LambdaProtocolExtension.Marshal(b, m, deterministic)
}
func (dst *LambdaProtocolExtension) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LambdaProtocolExtension.Merge(dst, src)
}
func (m *LambdaProtocolExtension) XXX_Size() int {
	return xxx_messageInfo_LambdaProtocolExtension.Size(m)
}
func (m *LambdaProtocolExtension) XXX_DiscardUnknown() {
	xxx_messageInfo_LambdaProtocolExtension.DiscardUnknown(m)
}

var xxx_messageInfo_LambdaProtocolExtension proto.InternalMessageInfo

func (m *LambdaProtocolExtension) GetHost() string {
	if m != nil {
		return m.Host
	}
	return ""
}

func (m *LambdaProtocolExtension) GetRegion() string {
	if m != nil {
		return m.Region
	}
	return ""
}

func (m *LambdaProtocolExtension) GetAccessKey() string {
	if m != nil {
		return m.AccessKey
	}
	return ""
}

func (m *LambdaProtocolExtension) GetSecretKey() string {
	if m != nil {
		return m.SecretKey
	}
	return ""
}

func init() {
	proto.RegisterType((*LambdaPerRoute)(nil), "envoy.config.filter.http.aws.v2.LambdaPerRoute")
	proto.RegisterType((*LambdaProtocolExtension)(nil), "envoy.config.filter.http.aws.v2.LambdaProtocolExtension")
}

func init() { proto.RegisterFile("filter.proto", fileDescriptor_filter_e63dc42a9b6ae576) }

var fileDescriptor_filter_e63dc42a9b6ae576 = []byte{
	// 297 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0xc1, 0x4a, 0x03, 0x31,
	0x10, 0x86, 0xd9, 0xb6, 0x16, 0x37, 0x88, 0x87, 0x45, 0x68, 0x11, 0xc5, 0xda, 0x53, 0x2f, 0x26,
	0xa0, 0x27, 0xf1, 0x56, 0xf0, 0x54, 0x0f, 0xb2, 0x47, 0x2f, 0x92, 0xa6, 0xd3, 0x34, 0x36, 0xcd,
	0xac, 0xc9, 0x6c, 0xeb, 0x3e, 0x95, 0x77, 0x4f, 0xbe, 0x8e, 0x6f, 0x21, 0xbb, 0x59, 0x51, 0xd1,
	0x53, 0x32, 0xff, 0xff, 0x0d, 0x1f, 0x0c, 0x3b, 0x58, 0x1a, 0x4b, 0xe0, 0x79, 0xe1, 0x91, 0x30,
	0x3b, 0x03, 0xb7, 0xc5, 0x8a, 0x2b, 0x74, 0x4b, 0xa3, 0x79, 0x5b, 0xad, 0x88, 0x0a, 0x2e, 0x77,
	0x81, 0x6f, 0x2f, 0x8f, 0x07, 0x5b, 0x69, 0xcd, 0x42, 0x12, 0x88, 0xaf, 0x4f, 0xdc, 0x1c, 0x2b,
	0x76, 0x78, 0x27, 0x37, 0xf3, 0x85, 0xbc, 0x07, 0x9f, 0x63, 0x49, 0x90, 0x9d, 0xb2, 0x9e, 0x93,
	0x1b, 0x18, 0x26, 0xa3, 0x64, 0x92, 0x4e, 0xd3, 0xb7, 0x8f, 0xf7, 0x6e, 0xcf, 0x77, 0x46, 0x49,
	0xde, 0xc4, 0xd9, 0x09, 0x4b, 0x9f, 0x4b, 0x69, 0xcd, 0xd2, 0x80, 0x1f, 0x76, 0x6a, 0x26, 0xff,
	0x0e, 0xb2, 0x23, 0xb6, 0x27, 0x43, 0xe5, 0xd4, 0xb0, 0x3b, 0x4a, 0x26, 0xfb, 0x79, 0x1c, 0xc6,
	0xaf, 0x09, 0x1b, 0xb4, 0x96, 0x5a, 0xaa, 0xd0, 0xde, 0xbe, 0x10, 0xb8, 0x60, 0xd0, 0xd5, 0xba,
	0x15, 0x06, 0xfa, 0x47, 0x57, 0xc7, 0xd9, 0x39, 0xeb, 0x7b, 0xd0, 0x06, 0x5d, 0x74, 0xfd, 0x04,
	0xda, 0x22, 0x9b, 0x30, 0x26, 0x95, 0x82, 0x10, 0x1e, 0xd7, 0x50, 0x35, 0xe2, 0x5f, 0x58, 0x1a,
	0xcb, 0x19, 0x54, 0x35, 0x19, 0x40, 0x79, 0xa0, 0x86, 0xec, 0xfd, 0x21, 0x63, 0x39, 0x83, 0x6a,
	0x7a, 0xf3, 0x70, 0xad, 0x0d, 0xad, 0xca, 0x39, 0x57, 0xb8, 0x11, 0x01, 0x2d, 0x5e, 0x18, 0x8c,
	0xef, 0xda, 0x90, 0x28, 0x3c, 0x3e, 0x81, 0xa2, 0x20, 0xb4, 0x45, 0x14, 0xc5, 0x5a, 0x8b, 0xc2,
	0x96, 0xda, 0xb8, 0x20, 0xe4, 0x2e, 0xcc, 0xfb, 0xcd, 0x69, 0xaf, 0x3e, 0x03, 0x00, 0x00, 0xff,
	0xff, 0xd1, 0x4e, 0x65, 0x73, 0xa4, 0x01, 0x00, 0x00,
}
