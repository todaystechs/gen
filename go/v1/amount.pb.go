// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: amount.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	wrapperspb "google.golang.org/protobuf/types/known/wrapperspb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Amount struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FullAmount      *wrapperspb.DoubleValue `protobuf:"bytes,1,opt,name=fullAmount,proto3" json:"fullAmount,omitempty"`
	DiscountApplied *wrapperspb.DoubleValue `protobuf:"bytes,2,opt,name=discountApplied,proto3" json:"discountApplied,omitempty"`
	NetAmount       *wrapperspb.DoubleValue `protobuf:"bytes,3,opt,name=netAmount,proto3" json:"netAmount,omitempty"`
}

func (x *Amount) Reset() {
	*x = Amount{}
	if protoimpl.UnsafeEnabled {
		mi := &file_amount_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Amount) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Amount) ProtoMessage() {}

func (x *Amount) ProtoReflect() protoreflect.Message {
	mi := &file_amount_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Amount.ProtoReflect.Descriptor instead.
func (*Amount) Descriptor() ([]byte, []int) {
	return file_amount_proto_rawDescGZIP(), []int{0}
}

func (x *Amount) GetFullAmount() *wrapperspb.DoubleValue {
	if x != nil {
		return x.FullAmount
	}
	return nil
}

func (x *Amount) GetDiscountApplied() *wrapperspb.DoubleValue {
	if x != nil {
		return x.DiscountApplied
	}
	return nil
}

func (x *Amount) GetNetAmount() *wrapperspb.DoubleValue {
	if x != nil {
		return x.NetAmount
	}
	return nil
}

var File_amount_proto protoreflect.FileDescriptor

var file_amount_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07,
	0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xca, 0x01, 0x0a, 0x06, 0x41, 0x6d, 0x6f, 0x75,
	0x6e, 0x74, 0x12, 0x3c, 0x0a, 0x0a, 0x66, 0x75, 0x6c, 0x6c, 0x41, 0x6d, 0x6f, 0x75, 0x6e, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x52, 0x0a, 0x66, 0x75, 0x6c, 0x6c, 0x41, 0x6d, 0x6f, 0x75, 0x6e, 0x74,
	0x12, 0x46, 0x0a, 0x0f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x41, 0x70, 0x70, 0x6c,
	0x69, 0x65, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x6f, 0x75, 0x62,
	0x6c, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x64, 0x12, 0x3a, 0x0a, 0x09, 0x6e, 0x65, 0x74, 0x41,
	0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x44, 0x6f,
	0x75, 0x62, 0x6c, 0x65, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x09, 0x6e, 0x65, 0x74, 0x41, 0x6d,
	0x6f, 0x75, 0x6e, 0x74, 0x42, 0x78, 0x0a, 0x0b, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x61, 0x72, 0x72,
	0x69, 0x65, 0x72, 0x42, 0x0b, 0x41, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74,
	0x6f, 0x64, 0x61, 0x79, 0x73, 0x74, 0x65, 0x63, 0x68, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67,
	0x6f, 0x2f, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x58, 0x58, 0xaa, 0x02, 0x07, 0x43, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0xca, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0xe2, 0x02,
	0x13, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_amount_proto_rawDescOnce sync.Once
	file_amount_proto_rawDescData = file_amount_proto_rawDesc
)

func file_amount_proto_rawDescGZIP() []byte {
	file_amount_proto_rawDescOnce.Do(func() {
		file_amount_proto_rawDescData = protoimpl.X.CompressGZIP(file_amount_proto_rawDescData)
	})
	return file_amount_proto_rawDescData
}

var file_amount_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_amount_proto_goTypes = []interface{}{
	(*Amount)(nil),                 // 0: carrier.Amount
	(*wrapperspb.DoubleValue)(nil), // 1: google.protobuf.DoubleValue
}
var file_amount_proto_depIdxs = []int32{
	1, // 0: carrier.Amount.fullAmount:type_name -> google.protobuf.DoubleValue
	1, // 1: carrier.Amount.discountApplied:type_name -> google.protobuf.DoubleValue
	1, // 2: carrier.Amount.netAmount:type_name -> google.protobuf.DoubleValue
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_amount_proto_init() }
func file_amount_proto_init() {
	if File_amount_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_amount_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Amount); i {
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
			RawDescriptor: file_amount_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_amount_proto_goTypes,
		DependencyIndexes: file_amount_proto_depIdxs,
		MessageInfos:      file_amount_proto_msgTypes,
	}.Build()
	File_amount_proto = out.File
	file_amount_proto_rawDesc = nil
	file_amount_proto_goTypes = nil
	file_amount_proto_depIdxs = nil
}
