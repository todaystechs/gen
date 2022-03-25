// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: services.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/anypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CarrierServicePing struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hi string `protobuf:"bytes,1,opt,name=hi,proto3" json:"hi,omitempty"`
}

func (x *CarrierServicePing) Reset() {
	*x = CarrierServicePing{}
	if protoimpl.UnsafeEnabled {
		mi := &file_services_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CarrierServicePing) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CarrierServicePing) ProtoMessage() {}

func (x *CarrierServicePing) ProtoReflect() protoreflect.Message {
	mi := &file_services_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CarrierServicePing.ProtoReflect.Descriptor instead.
func (*CarrierServicePing) Descriptor() ([]byte, []int) {
	return file_services_proto_rawDescGZIP(), []int{0}
}

func (x *CarrierServicePing) GetHi() string {
	if x != nil {
		return x.Hi
	}
	return ""
}

type ResponseOk struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ok bool `protobuf:"varint,1,opt,name=ok,proto3" json:"ok,omitempty"`
}

func (x *ResponseOk) Reset() {
	*x = ResponseOk{}
	if protoimpl.UnsafeEnabled {
		mi := &file_services_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResponseOk) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResponseOk) ProtoMessage() {}

func (x *ResponseOk) ProtoReflect() protoreflect.Message {
	mi := &file_services_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResponseOk.ProtoReflect.Descriptor instead.
func (*ResponseOk) Descriptor() ([]byte, []int) {
	return file_services_proto_rawDescGZIP(), []int{1}
}

func (x *ResponseOk) GetOk() bool {
	if x != nil {
		return x.Ok
	}
	return false
}

type OrgId struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *OrgId) Reset() {
	*x = OrgId{}
	if protoimpl.UnsafeEnabled {
		mi := &file_services_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OrgId) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OrgId) ProtoMessage() {}

func (x *OrgId) ProtoReflect() protoreflect.Message {
	mi := &file_services_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OrgId.ProtoReflect.Descriptor instead.
func (*OrgId) Descriptor() ([]byte, []int) {
	return file_services_proto_rawDescGZIP(), []int{2}
}

func (x *OrgId) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_services_proto protoreflect.FileDescriptor

var file_services_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x07, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x1a, 0x0b, 0x71, 0x75, 0x6f, 0x74, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0a, 0x62, 0x6f, 0x6f, 0x6b, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x0a, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x61, 0x6e, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x24, 0x0a, 0x12, 0x43, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x69, 0x6e, 0x67, 0x12,
	0x0e, 0x0a, 0x02, 0x68, 0x69, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x68, 0x69, 0x22,
	0x1c, 0x0a, 0x0a, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4f, 0x6b, 0x12, 0x0e, 0x0a,
	0x02, 0x6f, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x02, 0x6f, 0x6b, 0x22, 0x17, 0x0a,
	0x05, 0x4f, 0x72, 0x67, 0x49, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x32, 0xcc, 0x07, 0x0a, 0x0e, 0x43, 0x61, 0x72, 0x72, 0x69,
	0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3a, 0x0a, 0x0c, 0x47, 0x65, 0x74,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x0e, 0x2e, 0x63, 0x61, 0x72, 0x72,
	0x69, 0x65, 0x72, 0x2e, 0x4f, 0x72, 0x67, 0x49, 0x64, 0x1a, 0x18, 0x2e, 0x63, 0x61, 0x72, 0x72,
	0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x73, 0x4f, 0x66, 0x4c, 0x6f, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x22, 0x00, 0x12, 0x38, 0x0a, 0x0e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4c,
	0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x11, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65,
	0x72, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x11, 0x2e, 0x63, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x00, 0x12,
	0x38, 0x0a, 0x0e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x11, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x11, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c,
	0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x00, 0x12, 0x3a, 0x0a, 0x0e, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x11, 0x2e, 0x63, 0x61,
	0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x13,
	0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x4f, 0x6b, 0x22, 0x00, 0x12, 0x42, 0x0a, 0x04, 0x50, 0x69, 0x6e, 0x67, 0x12, 0x1b, 0x2e,
	0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x69, 0x6e, 0x67, 0x1a, 0x1b, 0x2e, 0x63, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0x2e, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x50, 0x69, 0x6e, 0x67, 0x22, 0x00, 0x12, 0x42, 0x0a, 0x09, 0x47, 0x65, 0x74,
	0x51, 0x75, 0x6f, 0x74, 0x65, 0x73, 0x12, 0x15, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72,
	0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e,
	0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x51, 0x75,
	0x6f, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x44, 0x0a,
	0x0b, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x12, 0x15, 0x2e, 0x63,
	0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x4f, 0x66, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x00, 0x12, 0x44, 0x0a, 0x0b, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x51, 0x75, 0x6f,
	0x74, 0x65, 0x12, 0x15, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x51, 0x75, 0x6f,
	0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x63, 0x61, 0x72, 0x72,
	0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x46, 0x0a, 0x0d, 0x47, 0x65, 0x74,
	0x51, 0x75, 0x6f, 0x74, 0x65, 0x73, 0x42, 0x79, 0x49, 0x64, 0x12, 0x1b, 0x2e, 0x63, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0x2e, 0x46, 0x65, 0x74, 0x63, 0x68, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65,
	0x72, 0x2e, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x2f, 0x0a, 0x07, 0x41, 0x64, 0x64, 0x55, 0x73, 0x65, 0x72, 0x12, 0x0d, 0x2e, 0x63,
	0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x1a, 0x13, 0x2e, 0x63, 0x61,
	0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4f, 0x6b,
	0x22, 0x00, 0x12, 0x32, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72,
	0x12, 0x0d, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x1a,
	0x13, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x4f, 0x6b, 0x22, 0x00, 0x12, 0x32, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x55, 0x73, 0x65, 0x72, 0x12, 0x0d, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x55,
	0x73, 0x65, 0x72, 0x1a, 0x13, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x72, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4f, 0x6b, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x09, 0x42, 0x6f,
	0x6f, 0x6b, 0x51, 0x75, 0x6f, 0x74, 0x65, 0x12, 0x17, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65,
	0x72, 0x2e, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x18, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x42, 0x6f, 0x6f, 0x6b, 0x69,
	0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4c, 0x0a, 0x11,
	0x47, 0x65, 0x74, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72,
	0x79, 0x12, 0x1d, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x46, 0x65, 0x74, 0x63,
	0x68, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x16, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4f,
	0x66, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x22, 0x00, 0x12, 0x49, 0x0a, 0x0e, 0x47, 0x65,
	0x74, 0x42, 0x6f, 0x6f, 0x6b, 0x69, 0x6e, 0x67, 0x42, 0x79, 0x49, 0x64, 0x12, 0x1d, 0x2e, 0x63,
	0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x46, 0x65, 0x74, 0x63, 0x68, 0x42, 0x6f, 0x6f, 0x6b,
	0x69, 0x6e, 0x67, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x63, 0x61,
	0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x42, 0x6f, 0x6f, 0x6b,
	0x69, 0x6e, 0x67, 0x22, 0x00, 0x42, 0x7a, 0x0a, 0x0b, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0x42, 0x0d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x74, 0x6f, 0x64, 0x61, 0x79, 0x73, 0x74, 0x65, 0x63, 0x68, 0x73, 0x2f, 0x67, 0x65,
	0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x58, 0x58, 0xaa, 0x02, 0x07,
	0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0xca, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65,
	0x72, 0xe2, 0x02, 0x13, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65,
	0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_services_proto_rawDescOnce sync.Once
	file_services_proto_rawDescData = file_services_proto_rawDesc
)

func file_services_proto_rawDescGZIP() []byte {
	file_services_proto_rawDescOnce.Do(func() {
		file_services_proto_rawDescData = protoimpl.X.CompressGZIP(file_services_proto_rawDescData)
	})
	return file_services_proto_rawDescData
}

var file_services_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_services_proto_goTypes = []interface{}{
	(*CarrierServicePing)(nil),   // 0: carrier.CarrierServicePing
	(*ResponseOk)(nil),           // 1: carrier.responseOk
	(*OrgId)(nil),                // 2: carrier.OrgId
	(*Location)(nil),             // 3: carrier.Location
	(*QuoteRequest)(nil),         // 4: carrier.QuoteRequest
	(*FetchQuotesRequest)(nil),   // 5: carrier.FetchQuotesRequest
	(*User)(nil),                 // 6: carrier.User
	(*BookingRequest)(nil),       // 7: carrier.BookingRequest
	(*FetchBookingsRequest)(nil), // 8: carrier.FetchBookingsRequest
	(*ListsOfLocation)(nil),      // 9: carrier.ListsOfLocation
	(*ListOfQuoteResponse)(nil),  // 10: carrier.ListOfQuoteResponse
	(*QuoteResponse)(nil),        // 11: carrier.QuoteResponse
	(*BookingResponse)(nil),      // 12: carrier.BookingResponse
	(*ListOfBooking)(nil),        // 13: carrier.ListOfBooking
}
var file_services_proto_depIdxs = []int32{
	2,  // 0: carrier.CarrierService.GetLocations:input_type -> carrier.OrgId
	3,  // 1: carrier.CarrierService.CreateLocation:input_type -> carrier.Location
	3,  // 2: carrier.CarrierService.UpdateLocation:input_type -> carrier.Location
	3,  // 3: carrier.CarrierService.DeleteLocation:input_type -> carrier.Location
	0,  // 4: carrier.CarrierService.Ping:input_type -> carrier.CarrierServicePing
	4,  // 5: carrier.CarrierService.GetQuotes:input_type -> carrier.QuoteRequest
	4,  // 6: carrier.CarrierService.UpdateQuote:input_type -> carrier.QuoteRequest
	4,  // 7: carrier.CarrierService.DeleteQuote:input_type -> carrier.QuoteRequest
	5,  // 8: carrier.CarrierService.GetQuotesById:input_type -> carrier.FetchQuotesRequest
	6,  // 9: carrier.CarrierService.AddUser:input_type -> carrier.User
	6,  // 10: carrier.CarrierService.DeleteUser:input_type -> carrier.User
	6,  // 11: carrier.CarrierService.UpdateUser:input_type -> carrier.User
	7,  // 12: carrier.CarrierService.BookQuote:input_type -> carrier.BookingRequest
	8,  // 13: carrier.CarrierService.GetBookingHistory:input_type -> carrier.FetchBookingsRequest
	8,  // 14: carrier.CarrierService.GetBookingById:input_type -> carrier.FetchBookingsRequest
	9,  // 15: carrier.CarrierService.GetLocations:output_type -> carrier.ListsOfLocation
	3,  // 16: carrier.CarrierService.CreateLocation:output_type -> carrier.Location
	3,  // 17: carrier.CarrierService.UpdateLocation:output_type -> carrier.Location
	1,  // 18: carrier.CarrierService.DeleteLocation:output_type -> carrier.responseOk
	0,  // 19: carrier.CarrierService.Ping:output_type -> carrier.CarrierServicePing
	10, // 20: carrier.CarrierService.GetQuotes:output_type -> carrier.ListOfQuoteResponse
	10, // 21: carrier.CarrierService.UpdateQuote:output_type -> carrier.ListOfQuoteResponse
	10, // 22: carrier.CarrierService.DeleteQuote:output_type -> carrier.ListOfQuoteResponse
	11, // 23: carrier.CarrierService.GetQuotesById:output_type -> carrier.QuoteResponse
	1,  // 24: carrier.CarrierService.AddUser:output_type -> carrier.responseOk
	1,  // 25: carrier.CarrierService.DeleteUser:output_type -> carrier.responseOk
	1,  // 26: carrier.CarrierService.UpdateUser:output_type -> carrier.responseOk
	12, // 27: carrier.CarrierService.BookQuote:output_type -> carrier.BookingResponse
	13, // 28: carrier.CarrierService.GetBookingHistory:output_type -> carrier.ListOfBooking
	13, // 29: carrier.CarrierService.GetBookingById:output_type -> carrier.ListOfBooking
	15, // [15:30] is the sub-list for method output_type
	0,  // [0:15] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_services_proto_init() }
func file_services_proto_init() {
	if File_services_proto != nil {
		return
	}
	file_quote_proto_init()
	file_location_proto_init()
	file_book_proto_init()
	file_user_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_services_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CarrierServicePing); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_services_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResponseOk); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_services_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OrgId); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_services_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_services_proto_goTypes,
		DependencyIndexes: file_services_proto_depIdxs,
		MessageInfos:      file_services_proto_msgTypes,
	}.Build()
	File_services_proto = out.File
	file_services_proto_rawDesc = nil
	file_services_proto_goTypes = nil
	file_services_proto_depIdxs = nil
}
