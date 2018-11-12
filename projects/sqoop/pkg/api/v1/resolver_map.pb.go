// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: resolver_map.proto

package v1 // import "github.com/solo-io/solo-projects/projects/sqoop/pkg/api/v1"

import proto "github.com/gogo/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/gogo/protobuf/gogoproto"
import core "github.com/solo-io/solo-kit/pkg/api/v1/resources/core"
import v1 "github.com/solo-io/solo-projects/projects/gloo/pkg/api/v1"

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
// @solo-kit:resource.short_name=rm
// @solo-kit:resource.plural_name=resolver_maps
// @solo-kit:resource.resource_groups=api.sqoop.solo.io
//
// The ResolverMap object maps Resolvers to the fields in the GraphQL Schema
// The skeleton of a Resolver Map will be generated by Sqoop automatically when a schema
// is read or updated if one does not alreay exist.
type ResolverMap struct {
	// Types is a map of Type Names (defined in the schema) to a TypeResolver, which contain resolvers for the
	// specific fields of the type
	Types map[string]*TypeResolver `protobuf:"bytes,3,rep,name=types" json:"types,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value"`
	// Status indicates the validation status of this resource.
	// Status is read-only by clients, and set by gloo during validation
	Status core.Status `protobuf:"bytes,6,opt,name=status" json:"status" testdiff:"ignore"`
	// Metadata contains the object metadata for this resource
	Metadata             core.Metadata `protobuf:"bytes,7,opt,name=metadata" json:"metadata"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *ResolverMap) Reset()         { *m = ResolverMap{} }
func (m *ResolverMap) String() string { return proto.CompactTextString(m) }
func (*ResolverMap) ProtoMessage()    {}
func (*ResolverMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{0}
}
func (m *ResolverMap) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResolverMap.Unmarshal(m, b)
}
func (m *ResolverMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResolverMap.Marshal(b, m, deterministic)
}
func (dst *ResolverMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResolverMap.Merge(dst, src)
}
func (m *ResolverMap) XXX_Size() int {
	return xxx_messageInfo_ResolverMap.Size(m)
}
func (m *ResolverMap) XXX_DiscardUnknown() {
	xxx_messageInfo_ResolverMap.DiscardUnknown(m)
}

var xxx_messageInfo_ResolverMap proto.InternalMessageInfo

func (m *ResolverMap) GetTypes() map[string]*TypeResolver {
	if m != nil {
		return m.Types
	}
	return nil
}

func (m *ResolverMap) GetStatus() core.Status {
	if m != nil {
		return m.Status
	}
	return core.Status{}
}

func (m *ResolverMap) GetMetadata() core.Metadata {
	if m != nil {
		return m.Metadata
	}
	return core.Metadata{}
}

// TypeResolver contains the individual resolvers for each field for a specific type
type TypeResolver struct {
	// This is a map of Field Names to the resolver that Sqoop should invoke when a query arrives for that field
	Fields               map[string]*FieldResolver `protobuf:"bytes,1,rep,name=fields" json:"fields,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value"`
	XXX_NoUnkeyedLiteral struct{}                  `json:"-"`
	XXX_unrecognized     []byte                    `json:"-"`
	XXX_sizecache        int32                     `json:"-"`
}

func (m *TypeResolver) Reset()         { *m = TypeResolver{} }
func (m *TypeResolver) String() string { return proto.CompactTextString(m) }
func (*TypeResolver) ProtoMessage()    {}
func (*TypeResolver) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{1}
}
func (m *TypeResolver) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TypeResolver.Unmarshal(m, b)
}
func (m *TypeResolver) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TypeResolver.Marshal(b, m, deterministic)
}
func (dst *TypeResolver) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TypeResolver.Merge(dst, src)
}
func (m *TypeResolver) XXX_Size() int {
	return xxx_messageInfo_TypeResolver.Size(m)
}
func (m *TypeResolver) XXX_DiscardUnknown() {
	xxx_messageInfo_TypeResolver.DiscardUnknown(m)
}

var xxx_messageInfo_TypeResolver proto.InternalMessageInfo

func (m *TypeResolver) GetFields() map[string]*FieldResolver {
	if m != nil {
		return m.Fields
	}
	return nil
}

// Resolvers define the actual logic Sqoop needs to know in order to resolve a specific field query
type FieldResolver struct {
	// a resolver can have one of three types:
	//
	// Types that are valid to be assigned to Resolver:
	//	*FieldResolver_GlooResolver
	//	*FieldResolver_TemplateResolver
	//	*FieldResolver_NodejsResolver
	Resolver             isFieldResolver_Resolver `protobuf_oneof:"resolver"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *FieldResolver) Reset()         { *m = FieldResolver{} }
func (m *FieldResolver) String() string { return proto.CompactTextString(m) }
func (*FieldResolver) ProtoMessage()    {}
func (*FieldResolver) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{2}
}
func (m *FieldResolver) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FieldResolver.Unmarshal(m, b)
}
func (m *FieldResolver) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FieldResolver.Marshal(b, m, deterministic)
}
func (dst *FieldResolver) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FieldResolver.Merge(dst, src)
}
func (m *FieldResolver) XXX_Size() int {
	return xxx_messageInfo_FieldResolver.Size(m)
}
func (m *FieldResolver) XXX_DiscardUnknown() {
	xxx_messageInfo_FieldResolver.DiscardUnknown(m)
}

var xxx_messageInfo_FieldResolver proto.InternalMessageInfo

type isFieldResolver_Resolver interface {
	isFieldResolver_Resolver()
	Equal(interface{}) bool
}

type FieldResolver_GlooResolver struct {
	GlooResolver *GlooResolver `protobuf:"bytes,1,opt,name=gloo_resolver,json=glooResolver,oneof"`
}
type FieldResolver_TemplateResolver struct {
	TemplateResolver *TemplateResolver `protobuf:"bytes,2,opt,name=template_resolver,json=templateResolver,oneof"`
}
type FieldResolver_NodejsResolver struct {
	NodejsResolver *NodeJSResolver `protobuf:"bytes,3,opt,name=nodejs_resolver,json=nodejsResolver,oneof"`
}

func (*FieldResolver_GlooResolver) isFieldResolver_Resolver()     {}
func (*FieldResolver_TemplateResolver) isFieldResolver_Resolver() {}
func (*FieldResolver_NodejsResolver) isFieldResolver_Resolver()   {}

func (m *FieldResolver) GetResolver() isFieldResolver_Resolver {
	if m != nil {
		return m.Resolver
	}
	return nil
}

func (m *FieldResolver) GetGlooResolver() *GlooResolver {
	if x, ok := m.GetResolver().(*FieldResolver_GlooResolver); ok {
		return x.GlooResolver
	}
	return nil
}

func (m *FieldResolver) GetTemplateResolver() *TemplateResolver {
	if x, ok := m.GetResolver().(*FieldResolver_TemplateResolver); ok {
		return x.TemplateResolver
	}
	return nil
}

func (m *FieldResolver) GetNodejsResolver() *NodeJSResolver {
	if x, ok := m.GetResolver().(*FieldResolver_NodejsResolver); ok {
		return x.NodejsResolver
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*FieldResolver) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _FieldResolver_OneofMarshaler, _FieldResolver_OneofUnmarshaler, _FieldResolver_OneofSizer, []interface{}{
		(*FieldResolver_GlooResolver)(nil),
		(*FieldResolver_TemplateResolver)(nil),
		(*FieldResolver_NodejsResolver)(nil),
	}
}

func _FieldResolver_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*FieldResolver)
	// resolver
	switch x := m.Resolver.(type) {
	case *FieldResolver_GlooResolver:
		_ = b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.GlooResolver); err != nil {
			return err
		}
	case *FieldResolver_TemplateResolver:
		_ = b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.TemplateResolver); err != nil {
			return err
		}
	case *FieldResolver_NodejsResolver:
		_ = b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.NodejsResolver); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("FieldResolver.Resolver has unexpected type %T", x)
	}
	return nil
}

func _FieldResolver_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*FieldResolver)
	switch tag {
	case 1: // resolver.gloo_resolver
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(GlooResolver)
		err := b.DecodeMessage(msg)
		m.Resolver = &FieldResolver_GlooResolver{msg}
		return true, err
	case 2: // resolver.template_resolver
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(TemplateResolver)
		err := b.DecodeMessage(msg)
		m.Resolver = &FieldResolver_TemplateResolver{msg}
		return true, err
	case 3: // resolver.nodejs_resolver
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(NodeJSResolver)
		err := b.DecodeMessage(msg)
		m.Resolver = &FieldResolver_NodejsResolver{msg}
		return true, err
	default:
		return false, nil
	}
}

func _FieldResolver_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*FieldResolver)
	// resolver
	switch x := m.Resolver.(type) {
	case *FieldResolver_GlooResolver:
		s := proto.Size(x.GlooResolver)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *FieldResolver_TemplateResolver:
		s := proto.Size(x.TemplateResolver)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *FieldResolver_NodejsResolver:
		s := proto.Size(x.NodejsResolver)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

// GlooResolvers are the "meat" of Sqoop. GlooResolvers tell Sqoop how to invoke a "Gloo Function"
type GlooResolver struct {
	// the Request Template, if specified, will become the body of the HTTP request used to invoke a function through Gloo
	// input parameters, if needed, should be specified in the request template. See Sqoop's [Resolver documentation](TODO)
	// for more information on Request Templates.
	RequestTemplate *RequestTemplate `protobuf:"bytes,1,opt,name=request_template,json=requestTemplate" json:"request_template,omitempty"`
	// The response template, if specified, will transform the body of HTTP responses returned by Gloo functions.
	// This field should be used if the object returned by the Gloo Function does not match the type specified in the GraphQL schema.
	// It can also be used to modify or transform responses from their original state. See Sqoop's [Resolver documentation](TODO)
	// for more information on Response Templates.
	ResponseTemplate *ResponseTemplate `protobuf:"bytes,2,opt,name=response_template,json=responseTemplate" json:"response_template,omitempty"`
	// the routing action to take when resolver is executed. usually this is a Route destination
	Action               *v1.RouteAction `protobuf:"bytes,4,opt,name=action" json:"action,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *GlooResolver) Reset()         { *m = GlooResolver{} }
func (m *GlooResolver) String() string { return proto.CompactTextString(m) }
func (*GlooResolver) ProtoMessage()    {}
func (*GlooResolver) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{3}
}
func (m *GlooResolver) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GlooResolver.Unmarshal(m, b)
}
func (m *GlooResolver) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GlooResolver.Marshal(b, m, deterministic)
}
func (dst *GlooResolver) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GlooResolver.Merge(dst, src)
}
func (m *GlooResolver) XXX_Size() int {
	return xxx_messageInfo_GlooResolver.Size(m)
}
func (m *GlooResolver) XXX_DiscardUnknown() {
	xxx_messageInfo_GlooResolver.DiscardUnknown(m)
}

var xxx_messageInfo_GlooResolver proto.InternalMessageInfo

func (m *GlooResolver) GetRequestTemplate() *RequestTemplate {
	if m != nil {
		return m.RequestTemplate
	}
	return nil
}

func (m *GlooResolver) GetResponseTemplate() *ResponseTemplate {
	if m != nil {
		return m.ResponseTemplate
	}
	return nil
}

func (m *GlooResolver) GetAction() *v1.RouteAction {
	if m != nil {
		return m.Action
	}
	return nil
}

type RequestTemplate struct {
	Verb                 string            `protobuf:"bytes,1,opt,name=verb,proto3" json:"verb,omitempty"`
	Path                 string            `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	Body                 string            `protobuf:"bytes,3,opt,name=body,proto3" json:"body,omitempty"`
	Headers              map[string]string `protobuf:"bytes,4,rep,name=headers" json:"headers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *RequestTemplate) Reset()         { *m = RequestTemplate{} }
func (m *RequestTemplate) String() string { return proto.CompactTextString(m) }
func (*RequestTemplate) ProtoMessage()    {}
func (*RequestTemplate) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{4}
}
func (m *RequestTemplate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RequestTemplate.Unmarshal(m, b)
}
func (m *RequestTemplate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RequestTemplate.Marshal(b, m, deterministic)
}
func (dst *RequestTemplate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestTemplate.Merge(dst, src)
}
func (m *RequestTemplate) XXX_Size() int {
	return xxx_messageInfo_RequestTemplate.Size(m)
}
func (m *RequestTemplate) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestTemplate.DiscardUnknown(m)
}

var xxx_messageInfo_RequestTemplate proto.InternalMessageInfo

func (m *RequestTemplate) GetVerb() string {
	if m != nil {
		return m.Verb
	}
	return ""
}

func (m *RequestTemplate) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *RequestTemplate) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

func (m *RequestTemplate) GetHeaders() map[string]string {
	if m != nil {
		return m.Headers
	}
	return nil
}

type ResponseTemplate struct {
	Body                 string            `protobuf:"bytes,2,opt,name=body,proto3" json:"body,omitempty"`
	Headers              map[string]string `protobuf:"bytes,3,rep,name=headers" json:"headers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ResponseTemplate) Reset()         { *m = ResponseTemplate{} }
func (m *ResponseTemplate) String() string { return proto.CompactTextString(m) }
func (*ResponseTemplate) ProtoMessage()    {}
func (*ResponseTemplate) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{5}
}
func (m *ResponseTemplate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResponseTemplate.Unmarshal(m, b)
}
func (m *ResponseTemplate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResponseTemplate.Marshal(b, m, deterministic)
}
func (dst *ResponseTemplate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResponseTemplate.Merge(dst, src)
}
func (m *ResponseTemplate) XXX_Size() int {
	return xxx_messageInfo_ResponseTemplate.Size(m)
}
func (m *ResponseTemplate) XXX_DiscardUnknown() {
	xxx_messageInfo_ResponseTemplate.DiscardUnknown(m)
}

var xxx_messageInfo_ResponseTemplate proto.InternalMessageInfo

func (m *ResponseTemplate) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

func (m *ResponseTemplate) GetHeaders() map[string]string {
	if m != nil {
		return m.Headers
	}
	return nil
}

// A Go-template which will return data for a Resolver without making a function call. Template Resolvers can make use
// of Sqoop's builtin template functions as well as the data provided by the Params object to the resolver.
// Read more about Templates and Resolvers in Sqoop\'s [Resolver documentation](TODO).
type TemplateResolver struct {
	// the Go template as an inline string
	InlineTemplate       string   `protobuf:"bytes,1,opt,name=inline_template,json=inlineTemplate,proto3" json:"inline_template,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TemplateResolver) Reset()         { *m = TemplateResolver{} }
func (m *TemplateResolver) String() string { return proto.CompactTextString(m) }
func (*TemplateResolver) ProtoMessage()    {}
func (*TemplateResolver) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{6}
}
func (m *TemplateResolver) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TemplateResolver.Unmarshal(m, b)
}
func (m *TemplateResolver) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TemplateResolver.Marshal(b, m, deterministic)
}
func (dst *TemplateResolver) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TemplateResolver.Merge(dst, src)
}
func (m *TemplateResolver) XXX_Size() int {
	return xxx_messageInfo_TemplateResolver.Size(m)
}
func (m *TemplateResolver) XXX_DiscardUnknown() {
	xxx_messageInfo_TemplateResolver.DiscardUnknown(m)
}

var xxx_messageInfo_TemplateResolver proto.InternalMessageInfo

func (m *TemplateResolver) GetInlineTemplate() string {
	if m != nil {
		return m.InlineTemplate
	}
	return ""
}

// NOTE: currently unsupported
type NodeJSResolver struct {
	InlineCode           string   `protobuf:"bytes,1,opt,name=inline_code,json=inlineCode,proto3" json:"inline_code,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NodeJSResolver) Reset()         { *m = NodeJSResolver{} }
func (m *NodeJSResolver) String() string { return proto.CompactTextString(m) }
func (*NodeJSResolver) ProtoMessage()    {}
func (*NodeJSResolver) Descriptor() ([]byte, []int) {
	return fileDescriptor_resolver_map_1f3be8eff760be27, []int{7}
}
func (m *NodeJSResolver) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeJSResolver.Unmarshal(m, b)
}
func (m *NodeJSResolver) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeJSResolver.Marshal(b, m, deterministic)
}
func (dst *NodeJSResolver) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeJSResolver.Merge(dst, src)
}
func (m *NodeJSResolver) XXX_Size() int {
	return xxx_messageInfo_NodeJSResolver.Size(m)
}
func (m *NodeJSResolver) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeJSResolver.DiscardUnknown(m)
}

var xxx_messageInfo_NodeJSResolver proto.InternalMessageInfo

func (m *NodeJSResolver) GetInlineCode() string {
	if m != nil {
		return m.InlineCode
	}
	return ""
}

func init() {
	proto.RegisterType((*ResolverMap)(nil), "sqoop.solo.io.ResolverMap")
	proto.RegisterMapType((map[string]*TypeResolver)(nil), "sqoop.solo.io.ResolverMap.TypesEntry")
	proto.RegisterType((*TypeResolver)(nil), "sqoop.solo.io.TypeResolver")
	proto.RegisterMapType((map[string]*FieldResolver)(nil), "sqoop.solo.io.TypeResolver.FieldsEntry")
	proto.RegisterType((*FieldResolver)(nil), "sqoop.solo.io.FieldResolver")
	proto.RegisterType((*GlooResolver)(nil), "sqoop.solo.io.GlooResolver")
	proto.RegisterType((*RequestTemplate)(nil), "sqoop.solo.io.RequestTemplate")
	proto.RegisterMapType((map[string]string)(nil), "sqoop.solo.io.RequestTemplate.HeadersEntry")
	proto.RegisterType((*ResponseTemplate)(nil), "sqoop.solo.io.ResponseTemplate")
	proto.RegisterMapType((map[string]string)(nil), "sqoop.solo.io.ResponseTemplate.HeadersEntry")
	proto.RegisterType((*TemplateResolver)(nil), "sqoop.solo.io.TemplateResolver")
	proto.RegisterType((*NodeJSResolver)(nil), "sqoop.solo.io.NodeJSResolver")
}
func (this *ResolverMap) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ResolverMap)
	if !ok {
		that2, ok := that.(ResolverMap)
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
	if len(this.Types) != len(that1.Types) {
		return false
	}
	for i := range this.Types {
		if !this.Types[i].Equal(that1.Types[i]) {
			return false
		}
	}
	if !this.Status.Equal(&that1.Status) {
		return false
	}
	if !this.Metadata.Equal(&that1.Metadata) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *TypeResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*TypeResolver)
	if !ok {
		that2, ok := that.(TypeResolver)
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
	if len(this.Fields) != len(that1.Fields) {
		return false
	}
	for i := range this.Fields {
		if !this.Fields[i].Equal(that1.Fields[i]) {
			return false
		}
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *FieldResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*FieldResolver)
	if !ok {
		that2, ok := that.(FieldResolver)
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
	if that1.Resolver == nil {
		if this.Resolver != nil {
			return false
		}
	} else if this.Resolver == nil {
		return false
	} else if !this.Resolver.Equal(that1.Resolver) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *FieldResolver_GlooResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*FieldResolver_GlooResolver)
	if !ok {
		that2, ok := that.(FieldResolver_GlooResolver)
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
	if !this.GlooResolver.Equal(that1.GlooResolver) {
		return false
	}
	return true
}
func (this *FieldResolver_TemplateResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*FieldResolver_TemplateResolver)
	if !ok {
		that2, ok := that.(FieldResolver_TemplateResolver)
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
	if !this.TemplateResolver.Equal(that1.TemplateResolver) {
		return false
	}
	return true
}
func (this *FieldResolver_NodejsResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*FieldResolver_NodejsResolver)
	if !ok {
		that2, ok := that.(FieldResolver_NodejsResolver)
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
	if !this.NodejsResolver.Equal(that1.NodejsResolver) {
		return false
	}
	return true
}
func (this *GlooResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*GlooResolver)
	if !ok {
		that2, ok := that.(GlooResolver)
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
	if !this.RequestTemplate.Equal(that1.RequestTemplate) {
		return false
	}
	if !this.ResponseTemplate.Equal(that1.ResponseTemplate) {
		return false
	}
	if !this.Action.Equal(that1.Action) {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *RequestTemplate) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*RequestTemplate)
	if !ok {
		that2, ok := that.(RequestTemplate)
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
	if this.Verb != that1.Verb {
		return false
	}
	if this.Path != that1.Path {
		return false
	}
	if this.Body != that1.Body {
		return false
	}
	if len(this.Headers) != len(that1.Headers) {
		return false
	}
	for i := range this.Headers {
		if this.Headers[i] != that1.Headers[i] {
			return false
		}
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *ResponseTemplate) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*ResponseTemplate)
	if !ok {
		that2, ok := that.(ResponseTemplate)
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
	if this.Body != that1.Body {
		return false
	}
	if len(this.Headers) != len(that1.Headers) {
		return false
	}
	for i := range this.Headers {
		if this.Headers[i] != that1.Headers[i] {
			return false
		}
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *TemplateResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*TemplateResolver)
	if !ok {
		that2, ok := that.(TemplateResolver)
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
	if this.InlineTemplate != that1.InlineTemplate {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}
func (this *NodeJSResolver) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*NodeJSResolver)
	if !ok {
		that2, ok := that.(NodeJSResolver)
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
	if this.InlineCode != that1.InlineCode {
		return false
	}
	if !bytes.Equal(this.XXX_unrecognized, that1.XXX_unrecognized) {
		return false
	}
	return true
}

func init() { proto.RegisterFile("resolver_map.proto", fileDescriptor_resolver_map_1f3be8eff760be27) }

var fileDescriptor_resolver_map_1f3be8eff760be27 = []byte{
	// 692 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x54, 0x4f, 0x6f, 0xd3, 0x4e,
	0x10, 0xad, 0x93, 0x34, 0x6d, 0x26, 0x69, 0x93, 0xae, 0xaa, 0x9f, 0xdc, 0xfc, 0xa0, 0xa9, 0x22,
	0xa1, 0x56, 0x02, 0x6c, 0xa5, 0x08, 0xa9, 0x6a, 0x0f, 0x88, 0xa0, 0xfe, 0x01, 0xd1, 0x1e, 0x5c,
	0x10, 0x12, 0x97, 0xca, 0x89, 0xb7, 0xae, 0x5b, 0xc7, 0xe3, 0xee, 0x6e, 0x22, 0xf2, 0x7d, 0x38,
	0x54, 0x7c, 0x12, 0x8e, 0x9c, 0x39, 0xf4, 0xc0, 0x47, 0xe0, 0xc6, 0x0d, 0x79, 0xd7, 0x4e, 0x6c,
	0x37, 0x2a, 0x5c, 0x38, 0x79, 0x3d, 0xf3, 0xde, 0xdb, 0x37, 0xa3, 0xa7, 0x05, 0xc2, 0x28, 0x47,
	0x7f, 0x44, 0xd9, 0xd9, 0xc0, 0x0e, 0x8d, 0x90, 0xa1, 0x40, 0xb2, 0xc4, 0xaf, 0x11, 0x43, 0x83,
	0xa3, 0x8f, 0x86, 0x87, 0xcd, 0x55, 0x17, 0x5d, 0x94, 0x1d, 0x33, 0x3a, 0x29, 0x50, 0xb3, 0xe3,
	0x7a, 0xe2, 0x62, 0xd8, 0x33, 0xfa, 0x38, 0x30, 0x23, 0xe4, 0x53, 0x0f, 0xd5, 0xf7, 0xca, 0x13,
	0xa6, 0x1d, 0x7a, 0xe6, 0xa8, 0x63, 0x0e, 0xa8, 0xb0, 0x1d, 0x5b, 0xd8, 0x31, 0xc5, 0xfc, 0x0b,
	0x0a, 0x17, 0xb6, 0x18, 0xf2, 0x98, 0x50, 0x0d, 0x19, 0x7e, 0x1a, 0xab, 0x9f, 0xf6, 0xe7, 0x02,
	0x54, 0xad, 0xd8, 0xec, 0xb1, 0x1d, 0x92, 0x3d, 0x98, 0x17, 0xe3, 0x90, 0x72, 0xbd, 0xb8, 0x51,
	0xdc, 0xaa, 0x6e, 0x3f, 0x32, 0x32, 0xae, 0x8d, 0x14, 0xd4, 0x78, 0x17, 0xe1, 0xf6, 0x03, 0xc1,
	0xc6, 0x96, 0xe2, 0x90, 0x43, 0x28, 0xab, 0x9b, 0xf4, 0xf2, 0x86, 0xb6, 0x55, 0xdd, 0x5e, 0x35,
	0xfa, 0xc8, 0xe8, 0x84, 0x7c, 0x2a, 0x7b, 0xdd, 0xb5, 0xaf, 0xb7, 0xad, 0xb9, 0x9f, 0xb7, 0xad,
	0x15, 0x41, 0xb9, 0x70, 0xbc, 0xf3, 0xf3, 0xdd, 0xb6, 0xe7, 0x06, 0xc8, 0x68, 0xdb, 0x8a, 0xe9,
	0x64, 0x07, 0x16, 0x93, 0x29, 0xf5, 0x05, 0x29, 0xf5, 0x5f, 0x56, 0xea, 0x38, 0xee, 0x76, 0x4b,
	0x91, 0x98, 0x35, 0x41, 0x37, 0xdf, 0x03, 0x4c, 0x7d, 0x91, 0x06, 0x14, 0xaf, 0xe8, 0x58, 0xd7,
	0x36, 0xb4, 0xad, 0x8a, 0x15, 0x1d, 0x49, 0x07, 0xe6, 0x47, 0xb6, 0x3f, 0xa4, 0x7a, 0x41, 0xca,
	0xfe, 0x9f, 0x9b, 0x2f, 0xe2, 0x26, 0x33, 0x5a, 0x0a, 0xb9, 0x5b, 0xd8, 0xd1, 0xda, 0x37, 0x1a,
	0xd4, 0xd2, 0x3d, 0xf2, 0x02, 0xca, 0xe7, 0x1e, 0xf5, 0x1d, 0xae, 0x6b, 0x72, 0x51, 0x9b, 0xf7,
	0x08, 0x19, 0x07, 0x12, 0xa9, 0x56, 0x15, 0xd3, 0x9a, 0x1f, 0xa0, 0x9a, 0x2a, 0xcf, 0x70, 0xba,
	0x9d, 0x75, 0xfa, 0x20, 0x77, 0x81, 0x24, 0xcf, 0xb2, 0xfa, 0x4b, 0x83, 0xa5, 0x4c, 0x93, 0x74,
	0x61, 0xc9, 0xf5, 0x11, 0xcf, 0x92, 0x50, 0xca, 0x5b, 0xee, 0xce, 0x7e, 0xe8, 0x23, 0x26, 0x9c,
	0xa3, 0x39, 0xab, 0xe6, 0xa6, 0xfe, 0xc9, 0x09, 0xac, 0x08, 0x3a, 0x08, 0x7d, 0x5b, 0xd0, 0xa9,
	0x8e, 0x72, 0xd6, 0xca, 0x8f, 0x1e, 0xe3, 0x52, 0x5a, 0x0d, 0x91, 0xab, 0x91, 0x23, 0xa8, 0x07,
	0xe8, 0xd0, 0x4b, 0x3e, 0x55, 0x2b, 0x4a, 0xb5, 0x87, 0x39, 0xb5, 0x13, 0x74, 0xe8, 0x9b, 0xd3,
	0x94, 0xd6, 0xb2, 0xe2, 0x25, 0x95, 0x2e, 0xc0, 0x62, 0x22, 0xd1, 0xfe, 0xae, 0x41, 0x2d, 0x3d,
	0x06, 0x79, 0x0d, 0x0d, 0x46, 0xaf, 0x87, 0x94, 0x8b, 0xb3, 0xc4, 0x42, 0x3c, 0xfd, 0xfa, 0x9d,
	0x64, 0x4b, 0xd8, 0xc4, 0x7c, 0x9d, 0x65, 0x0b, 0xe4, 0x2d, 0xac, 0x30, 0xca, 0x43, 0x0c, 0x38,
	0x9d, 0x6a, 0xcd, 0xde, 0x80, 0x15, 0xe3, 0x26, 0x62, 0x0d, 0x96, 0xab, 0x90, 0x0e, 0x94, 0xed,
	0xbe, 0xf0, 0x30, 0xd0, 0x4b, 0x52, 0x62, 0xcd, 0x88, 0xd6, 0x3d, 0x55, 0xc0, 0xa1, 0xa0, 0x2f,
	0x25, 0xc0, 0x8a, 0x81, 0xed, 0x6f, 0x1a, 0xd4, 0x73, 0x2e, 0x09, 0x81, 0xd2, 0x88, 0xb2, 0x5e,
	0x9c, 0x1b, 0x79, 0x8e, 0x6a, 0xa1, 0x2d, 0x2e, 0xa4, 0xb7, 0x8a, 0x25, 0xcf, 0x51, 0xad, 0x87,
	0xce, 0x58, 0xee, 0xb8, 0x62, 0xc9, 0x33, 0xd9, 0x87, 0x85, 0x0b, 0x6a, 0x3b, 0x94, 0x71, 0xbd,
	0x24, 0x33, 0xfc, 0xf8, 0xfe, 0x95, 0x18, 0x47, 0x0a, 0xad, 0x72, 0x9c, 0x70, 0x9b, 0xbb, 0x50,
	0x4b, 0x37, 0x66, 0x24, 0x79, 0x35, 0x9d, 0xe4, 0x4a, 0x3a, 0xab, 0x5f, 0x34, 0x68, 0xe4, 0x97,
	0x35, 0xf1, 0x5a, 0x48, 0x79, 0x3d, 0x98, 0x7a, 0x55, 0x0f, 0xd3, 0x93, 0x3f, 0xac, 0xfc, 0x1f,
	0x98, 0xdd, 0x83, 0x46, 0x3e, 0xda, 0x64, 0x13, 0xea, 0x5e, 0xe0, 0x7b, 0x01, 0xcd, 0xc6, 0xab,
	0x62, 0x2d, 0xab, 0x72, 0x42, 0x68, 0x77, 0x60, 0x39, 0x9b, 0x64, 0xd2, 0x82, 0x6a, 0x4c, 0xed,
	0xa3, 0x93, 0xd0, 0x40, 0x95, 0x5e, 0xa1, 0x43, 0xbb, 0x7b, 0x37, 0x3f, 0xd6, 0xb5, 0x8f, 0xcf,
	0xef, 0x7b, 0xde, 0x43, 0x86, 0x97, 0xb4, 0x2f, 0xb8, 0x29, 0x97, 0x61, 0x86, 0x57, 0x6e, 0xfc,
	0xe2, 0xf7, 0xca, 0xf2, 0x79, 0x7f, 0xf6, 0x3b, 0x00, 0x00, 0xff, 0xff, 0xc8, 0xe0, 0x69, 0xb4,
	0x8a, 0x06, 0x00, 0x00,
}
