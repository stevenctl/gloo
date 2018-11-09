// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: changeset.proto

package v1 // import "github.com/solo-io/solo-kit/projects/vcs/pkg/api/v1"

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/gogo/protobuf/gogoproto"
import types "github.com/gogo/protobuf/types"
import core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
import v1 "github.com/solo-io/solo-kit/projects/gateway/pkg/api/v1"
import v11 "github.com/solo-io/solo-kit/projects/gloo/pkg/api/v1"
import v12 "github.com/solo-io/solo-kit/projects/sqoop/pkg/api/v1"

import bytes "bytes"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

//
// @solo-kit:resource.short_name=cs
// @solo-kit:resource.plural_name=changesets
// @solo-kit:resource.resource_groups=api.vcs.solo.io
//
// The ChangeSet object represents the current status of a Gloo user's working directory. Each element in the "data"
// element represents the complete snapshot of a resource that has been modified.
//
type ChangeSet struct {
	// Status indicates the validation status of this resource
	Status core.Status `protobuf:"bytes,1,opt,name=status" json:"status" testdiff:"ignore"`
	// Metadata for this resource
	Metadata core.Metadata `protobuf:"bytes,2,opt,name=metadata" json:"metadata"`
	// The parent commit
	Root RootCommit `protobuf:"bytes,3,opt,name=root" json:"root"`
	// The name of the git branch the changes will be applied to
	Branch types.StringValue `protobuf:"bytes,4,opt,name=branch" json:"branch"`
	// Indicates whether this changeset has been submitted for commit
	ToCommit types.BoolValue `protobuf:"bytes,5,opt,name=to_commit,json=toCommit" json:"to_commit"`
	// Description of the changeset. This will be the git commit message
	Description types.StringValue `protobuf:"bytes,6,opt,name=description" json:"description"`
	// Commit message of the root commit
	RootDescription types.StringValue `protobuf:"bytes,7,opt,name=root_description,json=rootDescription" json:"root_description"`
	// The number of edits that the user applied to the previous commit.
	// A value greater than zero represents a dirty work tree.
	EditCount types.UInt32Value `protobuf:"bytes,8,opt,name=edit_count,json=editCount" json:"edit_count"`
	// The user who owns this changeset TODO: use dedicated message?
	UserId types.StringValue `protobuf:"bytes,9,opt,name=user_id,json=userId" json:"user_id"`
	// Description of the changeset. This will be the git commit message
	ErrorMsg types.StringValue `protobuf:"bytes,10,opt,name=error_msg,json=errorMsg" json:"error_msg"`
	// The actual changes
	Data                 Data     `protobuf:"bytes,11,opt,name=data" json:"data"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ChangeSet) Reset()         { *m = ChangeSet{} }
func (m *ChangeSet) String() string { return proto.CompactTextString(m) }
func (*ChangeSet) ProtoMessage()    {}
func (*ChangeSet) Descriptor() ([]byte, []int) {
	return fileDescriptor_changeset_733c6174dd054f7d, []int{0}
}
func (m *ChangeSet) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChangeSet.Unmarshal(m, b)
}
func (m *ChangeSet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChangeSet.Marshal(b, m, deterministic)
}
func (dst *ChangeSet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChangeSet.Merge(dst, src)
}
func (m *ChangeSet) XXX_Size() int {
	return xxx_messageInfo_ChangeSet.Size(m)
}
func (m *ChangeSet) XXX_DiscardUnknown() {
	xxx_messageInfo_ChangeSet.DiscardUnknown(m)
}

var xxx_messageInfo_ChangeSet proto.InternalMessageInfo

func (m *ChangeSet) GetStatus() core.Status {
	if m != nil {
		return m.Status
	}
	return core.Status{}
}

func (m *ChangeSet) GetMetadata() core.Metadata {
	if m != nil {
		return m.Metadata
	}
	return core.Metadata{}
}

func (m *ChangeSet) GetRoot() RootCommit {
	if m != nil {
		return m.Root
	}
	return RootCommit{}
}

func (m *ChangeSet) GetBranch() types.StringValue {
	if m != nil {
		return m.Branch
	}
	return types.StringValue{}
}

func (m *ChangeSet) GetToCommit() types.BoolValue {
	if m != nil {
		return m.ToCommit
	}
	return types.BoolValue{}
}

func (m *ChangeSet) GetDescription() types.StringValue {
	if m != nil {
		return m.Description
	}
	return types.StringValue{}
}

func (m *ChangeSet) GetRootDescription() types.StringValue {
	if m != nil {
		return m.RootDescription
	}
	return types.StringValue{}
}

func (m *ChangeSet) GetEditCount() types.UInt32Value {
	if m != nil {
		return m.EditCount
	}
	return types.UInt32Value{}
}

func (m *ChangeSet) GetUserId() types.StringValue {
	if m != nil {
		return m.UserId
	}
	return types.StringValue{}
}

func (m *ChangeSet) GetErrorMsg() types.StringValue {
	if m != nil {
		return m.ErrorMsg
	}
	return types.StringValue{}
}

func (m *ChangeSet) GetData() Data {
	if m != nil {
		return m.Data
	}
	return Data{}
}

// The commit that the changeset represents an increment upon.
type RootCommit struct {
	// The hash of the commit
	Hash types.StringValue `protobuf:"bytes,1,opt,name=hash" json:"hash"`
	// The git commit message
	Description          types.StringValue `protobuf:"bytes,2,opt,name=description" json:"description"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *RootCommit) Reset()         { *m = RootCommit{} }
func (m *RootCommit) String() string { return proto.CompactTextString(m) }
func (*RootCommit) ProtoMessage()    {}
func (*RootCommit) Descriptor() ([]byte, []int) {
	return fileDescriptor_changeset_733c6174dd054f7d, []int{1}
}
func (m *RootCommit) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RootCommit.Unmarshal(m, b)
}
func (m *RootCommit) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RootCommit.Marshal(b, m, deterministic)
}
func (dst *RootCommit) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RootCommit.Merge(dst, src)
}
func (m *RootCommit) XXX_Size() int {
	return xxx_messageInfo_RootCommit.Size(m)
}
func (m *RootCommit) XXX_DiscardUnknown() {
	xxx_messageInfo_RootCommit.DiscardUnknown(m)
}

var xxx_messageInfo_RootCommit proto.InternalMessageInfo

func (m *RootCommit) GetHash() types.StringValue {
	if m != nil {
		return m.Hash
	}
	return types.StringValue{}
}

func (m *RootCommit) GetDescription() types.StringValue {
	if m != nil {
		return m.Description
	}
	return types.StringValue{}
}

// Represents the actual changes to the gloo resources
type Data struct {
	Gateways             []*v1.Gateway        `protobuf:"bytes,1,rep,name=gateways" json:"gateways,omitempty"`
	VirtualServices      []*v1.VirtualService `protobuf:"bytes,2,rep,name=virtual_services,json=virtualServices" json:"virtual_services,omitempty"`
	Proxies              []*v11.Proxy         `protobuf:"bytes,3,rep,name=proxies" json:"proxies,omitempty"`
	Settings             []*v11.Settings      `protobuf:"bytes,4,rep,name=settings" json:"settings,omitempty"`
	Upstreams            []*v11.Upstream      `protobuf:"bytes,5,rep,name=upstreams" json:"upstreams,omitempty"`
	ResolverMaps         []*v12.ResolverMap   `protobuf:"bytes,6,rep,name=resolver_maps,json=resolverMaps" json:"resolver_maps,omitempty"`
	Schemas              []*v12.Schema        `protobuf:"bytes,7,rep,name=schemas" json:"schemas,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Data) Reset()         { *m = Data{} }
func (m *Data) String() string { return proto.CompactTextString(m) }
func (*Data) ProtoMessage()    {}
func (*Data) Descriptor() ([]byte, []int) {
	return fileDescriptor_changeset_733c6174dd054f7d, []int{2}
}
func (m *Data) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Data.Unmarshal(m, b)
}
func (m *Data) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Data.Marshal(b, m, deterministic)
}
func (dst *Data) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Data.Merge(dst, src)
}
func (m *Data) XXX_Size() int {
	return xxx_messageInfo_Data.Size(m)
}
func (m *Data) XXX_DiscardUnknown() {
	xxx_messageInfo_Data.DiscardUnknown(m)
}

var xxx_messageInfo_Data proto.InternalMessageInfo

func (m *Data) GetGateways() []*v1.Gateway {
	if m != nil {
		return m.Gateways
	}
	return nil
}

func (m *Data) GetVirtualServices() []*v1.VirtualService {
	if m != nil {
		return m.VirtualServices
	}
	return nil
}

func (m *Data) GetProxies() []*v11.Proxy {
	if m != nil {
		return m.Proxies
	}
	return nil
}

func (m *Data) GetSettings() []*v11.Settings {
	if m != nil {
		return m.Settings
	}
	return nil
}

func (m *Data) GetUpstreams() []*v11.Upstream {
	if m != nil {
		return m.Upstreams
	}
	return nil
}

func (m *Data) GetResolverMaps() []*v12.ResolverMap {
	if m != nil {
		return m.ResolverMaps
	}
	return nil
}

func (m *Data) GetSchemas() []*v12.Schema {
	if m != nil {
		return m.Schemas
	}
	return nil
}

func init() {
	proto.RegisterType((*ChangeSet)(nil), "vcs.solo.io.ChangeSet")
	proto.RegisterType((*RootCommit)(nil), "vcs.solo.io.RootCommit")
	proto.RegisterType((*Data)(nil), "vcs.solo.io.Data")
}
func (this *ChangeSet) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ChangeSet)
	if !ok {
		that2, ok := that.(ChangeSet)
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
	if !this.Status.Equal(&that1.Status) {
		return false
	}
	if !this.Metadata.Equal(&that1.Metadata) {
		return false
	}
	if !this.Root.Equal(&that1.Root) {
		return false
	}
	if !this.Branch.Equal(&that1.Branch) {
		return false
	}
	if !this.ToCommit.Equal(&that1.ToCommit) {
		return false
	}
	if !this.Description.Equal(&that1.Description) {
		return false
	}
	if !this.RootDescription.Equal(&that1.RootDescription) {
		return false
	}
	if !this.EditCount.Equal(&that1.EditCount) {
		return false
	}
	if !this.UserId.Equal(&that1.UserId) {
		return false
	}
	if !this.ErrorMsg.Equal(&that1.ErrorMsg) {
		return false
	}
	if !this.Data.Equal(&that1.Data) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *RootCommit) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RootCommit)
	if !ok {
		that2, ok := that.(RootCommit)
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
	if !this.Hash.Equal(&that1.Hash) {
		return false
	}
	if !this.Description.Equal(&that1.Description) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *Data) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*Data)
	if !ok {
		that2, ok := that.(Data)
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
	if len(this.Gateways) != len(that1.Gateways) {
		return false
	}
	for i := range this.Gateways {
		if !this.Gateways[i].Equal(that1.Gateways[i]) {
			return false
		}
	}
	if len(this.VirtualServices) != len(that1.VirtualServices) {
		return false
	}
	for i := range this.VirtualServices {
		if !this.VirtualServices[i].Equal(that1.VirtualServices[i]) {
			return false
		}
	}
	if len(this.Proxies) != len(that1.Proxies) {
		return false
	}
	for i := range this.Proxies {
		if !this.Proxies[i].Equal(that1.Proxies[i]) {
			return false
		}
	}
	if len(this.Settings) != len(that1.Settings) {
		return false
	}
	for i := range this.Settings {
		if !this.Settings[i].Equal(that1.Settings[i]) {
			return false
		}
	}
	if len(this.Upstreams) != len(that1.Upstreams) {
		return false
	}
	for i := range this.Upstreams {
		if !this.Upstreams[i].Equal(that1.Upstreams[i]) {
			return false
		}
	}
	if len(this.ResolverMaps) != len(that1.ResolverMaps) {
		return false
	}
	for i := range this.ResolverMaps {
		if !this.ResolverMaps[i].Equal(that1.ResolverMaps[i]) {
			return false
		}
	}
	if len(this.Schemas) != len(that1.Schemas) {
		return false
	}
	for i := range this.Schemas {
		if !this.Schemas[i].Equal(that1.Schemas[i]) {
			return false
		}
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}

func init() { proto.RegisterFile("changeset.proto", fileDescriptor_changeset_733c6174dd054f7d) }

var fileDescriptor_changeset_733c6174dd054f7d = []byte{
	// 703 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x94, 0xcd, 0x6e, 0x13, 0x3b,
	0x14, 0xc7, 0x6f, 0x9a, 0x34, 0x1f, 0x4e, 0x3f, 0x7d, 0x7b, 0x7b, 0x7d, 0xa3, 0xab, 0x16, 0x65,
	0x55, 0x09, 0xd5, 0xa3, 0xa6, 0x15, 0x82, 0x22, 0x54, 0x91, 0x56, 0xaa, 0x8a, 0x14, 0x09, 0x4d,
	0xd4, 0x2e, 0xd8, 0x44, 0xce, 0xc4, 0x75, 0x4c, 0x33, 0x73, 0x06, 0xdb, 0x93, 0xc2, 0x2b, 0xb0,
	0xe5, 0x25, 0x78, 0x0b, 0xb6, 0x3c, 0x45, 0x17, 0x3c, 0x02, 0x4f, 0x80, 0xc6, 0xe3, 0xc9, 0x47,
	0x0b, 0x28, 0x62, 0x95, 0x9c, 0x39, 0xff, 0xdf, 0xdf, 0x1f, 0xe7, 0xf8, 0xa0, 0xf5, 0x60, 0xc8,
	0x22, 0xc1, 0x35, 0x37, 0x34, 0x56, 0x60, 0x00, 0xd7, 0xc7, 0x81, 0xa6, 0x1a, 0x46, 0x40, 0x25,
	0x34, 0xb6, 0x04, 0x08, 0xb0, 0xdf, 0xbd, 0xf4, 0x5f, 0x26, 0x69, 0xec, 0x08, 0x00, 0x31, 0xe2,
	0x9e, 0x8d, 0xfa, 0xc9, 0xb5, 0x77, 0xab, 0x58, 0x1c, 0x73, 0xa5, 0x5d, 0xfe, 0x40, 0x48, 0x33,
	0x4c, 0xfa, 0x34, 0x80, 0xd0, 0x4b, 0x9d, 0xf6, 0x25, 0x64, 0xbf, 0x37, 0xd2, 0x78, 0x2c, 0x96,
	0xde, 0xf8, 0xc0, 0x0b, 0xb9, 0x61, 0x03, 0x66, 0x98, 0x43, 0xbc, 0x05, 0x10, 0x6d, 0x98, 0x49,
	0xf2, 0x35, 0x56, 0x05, 0x33, 0xfc, 0x96, 0x7d, 0x70, 0x61, 0x3d, 0x56, 0xf0, 0x3e, 0x0f, 0xd6,
	0x34, 0x37, 0x46, 0x46, 0x22, 0xd7, 0xae, 0x25, 0xb1, 0x36, 0x8a, 0xb3, 0xd0, 0xc5, 0x58, 0x71,
	0x0d, 0xa3, 0x31, 0x57, 0xbd, 0x90, 0xc5, 0xee, 0xdb, 0x8a, 0x0e, 0x86, 0x3c, 0x74, 0xdb, 0x69,
	0x7e, 0x59, 0x46, 0xb5, 0x53, 0x7b, 0x31, 0x5d, 0x6e, 0xf0, 0x39, 0x2a, 0x67, 0x6b, 0x93, 0xc2,
	0xa3, 0xc2, 0x5e, 0xbd, 0xb5, 0x45, 0x03, 0x50, 0x3c, 0xbf, 0x24, 0xda, 0xb5, 0xb9, 0xf6, 0x7f,
	0x5f, 0xef, 0x76, 0xff, 0xfa, 0x7e, 0xb7, 0xbb, 0x69, 0xb8, 0x36, 0x03, 0x79, 0x7d, 0x7d, 0xdc,
	0x94, 0x22, 0x02, 0xc5, 0x9b, 0xbe, 0xc3, 0xf1, 0x53, 0x54, 0xcd, 0xcf, 0x4d, 0x96, 0xac, 0xd5,
	0xf6, 0xbc, 0x55, 0xc7, 0x65, 0xdb, 0xa5, 0xd4, 0xcc, 0x9f, 0xa8, 0xf1, 0x01, 0x2a, 0x29, 0x00,
	0x43, 0x8a, 0x96, 0xfa, 0x97, 0xce, 0x14, 0x89, 0xfa, 0x00, 0xe6, 0x14, 0xc2, 0x50, 0x1a, 0x87,
	0x59, 0x29, 0x3e, 0x46, 0xe5, 0xbe, 0x62, 0x51, 0x30, 0x24, 0x25, 0x0b, 0xfd, 0x4f, 0xb3, 0xb2,
	0xd1, 0xbc, 0x6c, 0xb4, 0x6b, 0x94, 0x8c, 0xc4, 0x15, 0x1b, 0x25, 0xdc, 0x91, 0x8e, 0xc0, 0x2f,
	0x50, 0xcd, 0x40, 0x2f, 0xb0, 0xa6, 0x64, 0xd9, 0xe2, 0x8d, 0x07, 0x78, 0x1b, 0x60, 0x34, 0x0b,
	0x57, 0x0d, 0x64, 0xdb, 0xc0, 0x67, 0xa8, 0x3e, 0xe0, 0x3a, 0x50, 0x32, 0x36, 0x12, 0x22, 0x52,
	0x5e, 0x78, 0xfd, 0x59, 0x0c, 0x77, 0xd0, 0x46, 0x7a, 0x90, 0xde, 0xac, 0x55, 0x65, 0x61, 0xab,
	0xf5, 0x94, 0x3d, 0x9b, 0xb1, 0x7b, 0x89, 0x10, 0x1f, 0x48, 0xd3, 0x0b, 0x20, 0x89, 0x0c, 0xa9,
	0xfe, 0xc2, 0xe8, 0xf2, 0x22, 0x32, 0x87, 0xad, 0x59, 0xa3, 0x5a, 0x4a, 0x9d, 0xa6, 0x10, 0x7e,
	0x8e, 0x2a, 0x89, 0xe6, 0xaa, 0x27, 0x07, 0xa4, 0xb6, 0xf8, 0x9d, 0xa6, 0xc8, 0xc5, 0x00, 0x9f,
	0xa0, 0x1a, 0x57, 0x0a, 0x54, 0x2f, 0xd4, 0x82, 0xa0, 0x85, 0xf1, 0xaa, 0x85, 0x3a, 0x5a, 0xe0,
	0xc7, 0xa8, 0x64, 0x3b, 0xa7, 0x6e, 0xd9, 0xcd, 0xb9, 0x1e, 0x38, 0x9b, 0x36, 0x8d, 0x15, 0x35,
	0x3f, 0x16, 0x10, 0x9a, 0x36, 0x06, 0x7e, 0x82, 0x4a, 0x43, 0xa6, 0x87, 0xae, 0x81, 0x17, 0x59,
	0xd7, 0xea, 0xef, 0x57, 0x72, 0xe9, 0x8f, 0x2a, 0xd9, 0xfc, 0x54, 0x44, 0xa5, 0x74, 0x87, 0xf8,
	0x08, 0x55, 0xdd, 0xbb, 0x4d, 0xdf, 0x52, 0x71, 0xaf, 0xde, 0x22, 0x34, 0x7f, 0xc8, 0xf9, 0x51,
	0xce, 0xb3, 0xd8, 0x9f, 0x28, 0xf1, 0x2b, 0xb4, 0x31, 0x96, 0xca, 0x24, 0x6c, 0xd4, 0xd3, 0x5c,
	0x8d, 0x65, 0xc0, 0x35, 0x59, 0xb2, 0xf4, 0xee, 0x03, 0xfa, 0x2a, 0x13, 0x76, 0x33, 0x9d, 0xbf,
	0x3e, 0x9e, 0x8b, 0x35, 0xde, 0x47, 0x95, 0x74, 0x54, 0x48, 0xae, 0x49, 0xd1, 0x5a, 0xfc, 0x4d,
	0xc5, 0x08, 0x60, 0xc2, 0xbf, 0x4e, 0xe7, 0x88, 0x9f, 0x6b, 0x70, 0x0b, 0x55, 0xf3, 0x61, 0x42,
	0x4a, 0x56, 0xbf, 0x3d, 0xaf, 0xef, 0xba, 0xac, 0x3f, 0xd1, 0xe1, 0x23, 0x54, 0xcb, 0x07, 0x8e,
	0x26, 0xcb, 0x3f, 0x83, 0x2e, 0x5d, 0xda, 0x9f, 0x0a, 0xf1, 0x09, 0x5a, 0x9d, 0x1d, 0x4b, 0x9a,
	0x94, 0x2d, 0xd9, 0xa0, 0xfa, 0x1d, 0x40, 0x3c, 0x7d, 0xec, 0x4e, 0xd3, 0x61, 0xb1, 0xbf, 0xa2,
	0xa6, 0x81, 0xc6, 0x1e, 0xaa, 0x64, 0x33, 0x4c, 0x93, 0x8a, 0x45, 0xff, 0xb9, 0x87, 0x76, 0x6d,
	0xd6, 0xcf, 0x55, 0xed, 0x67, 0x9f, 0xbf, 0xed, 0x14, 0xde, 0x1c, 0xfe, 0x6e, 0xf2, 0xc6, 0x0a,
	0xde, 0xf2, 0xc0, 0x68, 0x6f, 0x1c, 0x68, 0x2f, 0xbe, 0x11, 0x6e, 0x14, 0xf7, 0xcb, 0xb6, 0xf2,
	0x87, 0x3f, 0x02, 0x00, 0x00, 0xff, 0xff, 0xa3, 0xa7, 0x82, 0x93, 0x3e, 0x06, 0x00, 0x00,
}
