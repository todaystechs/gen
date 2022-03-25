// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: commodity.proto

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

type DimensionUOM int32

const (
	DimensionUOM_INCH DimensionUOM = 0
	DimensionUOM_CM   DimensionUOM = 1
)

// Enum value maps for DimensionUOM.
var (
	DimensionUOM_name = map[int32]string{
		0: "INCH",
		1: "CM",
	}
	DimensionUOM_value = map[string]int32{
		"INCH": 0,
		"CM":   1,
	}
)

func (x DimensionUOM) Enum() *DimensionUOM {
	p := new(DimensionUOM)
	*p = x
	return p
}

func (x DimensionUOM) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (DimensionUOM) Descriptor() protoreflect.EnumDescriptor {
	return file_commodity_proto_enumTypes[0].Descriptor()
}

func (DimensionUOM) Type() protoreflect.EnumType {
	return &file_commodity_proto_enumTypes[0]
}

func (x DimensionUOM) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use DimensionUOM.Descriptor instead.
func (DimensionUOM) EnumDescriptor() ([]byte, []int) {
	return file_commodity_proto_rawDescGZIP(), []int{0}
}

type WeightUOM int32

const (
	WeightUOM_LB WeightUOM = 0
	WeightUOM_KG WeightUOM = 1
)

// Enum value maps for WeightUOM.
var (
	WeightUOM_name = map[int32]string{
		0: "LB",
		1: "KG",
	}
	WeightUOM_value = map[string]int32{
		"LB": 0,
		"KG": 1,
	}
)

func (x WeightUOM) Enum() *WeightUOM {
	p := new(WeightUOM)
	*p = x
	return p
}

func (x WeightUOM) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (WeightUOM) Descriptor() protoreflect.EnumDescriptor {
	return file_commodity_proto_enumTypes[1].Descriptor()
}

func (WeightUOM) Type() protoreflect.EnumType {
	return &file_commodity_proto_enumTypes[1]
}

func (x WeightUOM) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use WeightUOM.Descriptor instead.
func (WeightUOM) EnumDescriptor() ([]byte, []int) {
	return file_commodity_proto_rawDescGZIP(), []int{1}
}

type Commodity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Density          *wrapperspb.FloatValue  `protobuf:"bytes,1,opt,name=density,proto3" json:"density,omitempty"`
	Length           *wrapperspb.FloatValue  `protobuf:"bytes,2,opt,name=length,proto3" json:"length,omitempty"`
	Width            *wrapperspb.FloatValue  `protobuf:"bytes,3,opt,name=width,proto3" json:"width,omitempty"`
	Height           *wrapperspb.FloatValue  `protobuf:"bytes,4,opt,name=height,proto3" json:"height,omitempty"`
	Weight           *wrapperspb.FloatValue  `protobuf:"bytes,5,opt,name=weight,proto3" json:"weight,omitempty"`
	DimensionUOM     DimensionUOM            `protobuf:"varint,6,opt,name=dimensionUOM,proto3,enum=carrier.DimensionUOM" json:"dimensionUOM,omitempty"`
	WeightUOM        WeightUOM               `protobuf:"varint,7,opt,name=weightUOM,proto3,enum=carrier.WeightUOM" json:"weightUOM,omitempty"`
	DimensionDisplay *wrapperspb.StringValue `protobuf:"bytes,8,opt,name=dimensionDisplay,proto3" json:"dimensionDisplay,omitempty"`
	PackageType      PackageType             `protobuf:"varint,9,opt,name=packageType,proto3,enum=carrier.PackageType" json:"packageType,omitempty"`
	Quantity         *wrapperspb.Int32Value  `protobuf:"bytes,10,opt,name=quantity,proto3" json:"quantity,omitempty"`
	FreightClass     FreightClass            `protobuf:"varint,11,opt,name=freightClass,proto3,enum=carrier.FreightClass" json:"freightClass,omitempty"`
}

func (x *Commodity) Reset() {
	*x = Commodity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_commodity_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Commodity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Commodity) ProtoMessage() {}

func (x *Commodity) ProtoReflect() protoreflect.Message {
	mi := &file_commodity_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Commodity.ProtoReflect.Descriptor instead.
func (*Commodity) Descriptor() ([]byte, []int) {
	return file_commodity_proto_rawDescGZIP(), []int{0}
}

func (x *Commodity) GetDensity() *wrapperspb.FloatValue {
	if x != nil {
		return x.Density
	}
	return nil
}

func (x *Commodity) GetLength() *wrapperspb.FloatValue {
	if x != nil {
		return x.Length
	}
	return nil
}

func (x *Commodity) GetWidth() *wrapperspb.FloatValue {
	if x != nil {
		return x.Width
	}
	return nil
}

func (x *Commodity) GetHeight() *wrapperspb.FloatValue {
	if x != nil {
		return x.Height
	}
	return nil
}

func (x *Commodity) GetWeight() *wrapperspb.FloatValue {
	if x != nil {
		return x.Weight
	}
	return nil
}

func (x *Commodity) GetDimensionUOM() DimensionUOM {
	if x != nil {
		return x.DimensionUOM
	}
	return DimensionUOM_INCH
}

func (x *Commodity) GetWeightUOM() WeightUOM {
	if x != nil {
		return x.WeightUOM
	}
	return WeightUOM_LB
}

func (x *Commodity) GetDimensionDisplay() *wrapperspb.StringValue {
	if x != nil {
		return x.DimensionDisplay
	}
	return nil
}

func (x *Commodity) GetPackageType() PackageType {
	if x != nil {
		return x.PackageType
	}
	return PackageType_Pallet
}

func (x *Commodity) GetQuantity() *wrapperspb.Int32Value {
	if x != nil {
		return x.Quantity
	}
	return nil
}

func (x *Commodity) GetFreightClass() FreightClass {
	if x != nil {
		return x.FreightClass
	}
	return FreightClass_Class50
}

var File_commodity_proto protoreflect.FileDescriptor

var file_commodity_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x64, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x07, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x1a, 0x0d, 0x70, 0x61, 0x63, 0x6b,
	0x61, 0x67, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x66, 0x72, 0x65, 0x69, 0x67,
	0x68, 0x74, 0x5f, 0x63, 0x6c, 0x61, 0x73, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf7,
	0x04, 0x0a, 0x09, 0x43, 0x6f, 0x6d, 0x6d, 0x6f, 0x64, 0x69, 0x74, 0x79, 0x12, 0x35, 0x0a, 0x07,
	0x64, 0x65, 0x6e, 0x73, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x07, 0x64, 0x65, 0x6e, 0x73,
	0x69, 0x74, 0x79, 0x12, 0x33, 0x0a, 0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65,
	0x52, 0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x12, 0x31, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74,
	0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x33, 0x0a, 0x06, 0x68,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x6c,
	0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74,
	0x12, 0x33, 0x0a, 0x06, 0x77, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x46, 0x6c, 0x6f, 0x61, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x06, 0x77,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x39, 0x0a, 0x0c, 0x64, 0x69, 0x6d, 0x65, 0x6e, 0x73, 0x69,
	0x6f, 0x6e, 0x55, 0x4f, 0x4d, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x15, 0x2e, 0x63, 0x61,
	0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x44, 0x69, 0x6d, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x55,
	0x4f, 0x4d, 0x52, 0x0c, 0x64, 0x69, 0x6d, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x55, 0x4f, 0x4d,
	0x12, 0x30, 0x0a, 0x09, 0x77, 0x65, 0x69, 0x67, 0x68, 0x74, 0x55, 0x4f, 0x4d, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x12, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x57, 0x65,
	0x69, 0x67, 0x68, 0x74, 0x55, 0x4f, 0x4d, 0x52, 0x09, 0x77, 0x65, 0x69, 0x67, 0x68, 0x74, 0x55,
	0x4f, 0x4d, 0x12, 0x48, 0x0a, 0x10, 0x64, 0x69, 0x6d, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x44,
	0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53,
	0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x10, 0x64, 0x69, 0x6d, 0x65,
	0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x44, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x12, 0x36, 0x0a, 0x0b,
	0x70, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x14, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x50, 0x61, 0x63, 0x6b,
	0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0b, 0x70, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x37, 0x0a, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x52, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x39, 0x0a,
	0x0c, 0x66, 0x72, 0x65, 0x69, 0x67, 0x68, 0x74, 0x43, 0x6c, 0x61, 0x73, 0x73, 0x18, 0x0b, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x15, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2e, 0x46, 0x72,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x43, 0x6c, 0x61, 0x73, 0x73, 0x52, 0x0c, 0x66, 0x72, 0x65, 0x69,
	0x67, 0x68, 0x74, 0x43, 0x6c, 0x61, 0x73, 0x73, 0x2a, 0x20, 0x0a, 0x0c, 0x44, 0x69, 0x6d, 0x65,
	0x6e, 0x73, 0x69, 0x6f, 0x6e, 0x55, 0x4f, 0x4d, 0x12, 0x08, 0x0a, 0x04, 0x49, 0x4e, 0x43, 0x48,
	0x10, 0x00, 0x12, 0x06, 0x0a, 0x02, 0x43, 0x4d, 0x10, 0x01, 0x2a, 0x1b, 0x0a, 0x09, 0x57, 0x65,
	0x69, 0x67, 0x68, 0x74, 0x55, 0x4f, 0x4d, 0x12, 0x06, 0x0a, 0x02, 0x4c, 0x42, 0x10, 0x00, 0x12,
	0x06, 0x0a, 0x02, 0x4b, 0x47, 0x10, 0x01, 0x42, 0x7b, 0x0a, 0x0b, 0x63, 0x6f, 0x6d, 0x2e, 0x63,
	0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x42, 0x0e, 0x43, 0x6f, 0x6d, 0x6d, 0x6f, 0x64, 0x69, 0x74,
	0x79, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x6f, 0x64, 0x61, 0x79, 0x73, 0x74, 0x65, 0x63, 0x68, 0x73,
	0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x58, 0x58,
	0xaa, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0xca, 0x02, 0x07, 0x43, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0xe2, 0x02, 0x13, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x43, 0x61, 0x72,
	0x72, 0x69, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_commodity_proto_rawDescOnce sync.Once
	file_commodity_proto_rawDescData = file_commodity_proto_rawDesc
)

func file_commodity_proto_rawDescGZIP() []byte {
	file_commodity_proto_rawDescOnce.Do(func() {
		file_commodity_proto_rawDescData = protoimpl.X.CompressGZIP(file_commodity_proto_rawDescData)
	})
	return file_commodity_proto_rawDescData
}

var file_commodity_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_commodity_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_commodity_proto_goTypes = []interface{}{
	(DimensionUOM)(0),              // 0: carrier.DimensionUOM
	(WeightUOM)(0),                 // 1: carrier.WeightUOM
	(*Commodity)(nil),              // 2: carrier.Commodity
	(*wrapperspb.FloatValue)(nil),  // 3: google.protobuf.FloatValue
	(*wrapperspb.StringValue)(nil), // 4: google.protobuf.StringValue
	(PackageType)(0),               // 5: carrier.PackageType
	(*wrapperspb.Int32Value)(nil),  // 6: google.protobuf.Int32Value
	(FreightClass)(0),              // 7: carrier.FreightClass
}
var file_commodity_proto_depIdxs = []int32{
	3,  // 0: carrier.Commodity.density:type_name -> google.protobuf.FloatValue
	3,  // 1: carrier.Commodity.length:type_name -> google.protobuf.FloatValue
	3,  // 2: carrier.Commodity.width:type_name -> google.protobuf.FloatValue
	3,  // 3: carrier.Commodity.height:type_name -> google.protobuf.FloatValue
	3,  // 4: carrier.Commodity.weight:type_name -> google.protobuf.FloatValue
	0,  // 5: carrier.Commodity.dimensionUOM:type_name -> carrier.DimensionUOM
	1,  // 6: carrier.Commodity.weightUOM:type_name -> carrier.WeightUOM
	4,  // 7: carrier.Commodity.dimensionDisplay:type_name -> google.protobuf.StringValue
	5,  // 8: carrier.Commodity.packageType:type_name -> carrier.PackageType
	6,  // 9: carrier.Commodity.quantity:type_name -> google.protobuf.Int32Value
	7,  // 10: carrier.Commodity.freightClass:type_name -> carrier.FreightClass
	11, // [11:11] is the sub-list for method output_type
	11, // [11:11] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_commodity_proto_init() }
func file_commodity_proto_init() {
	if File_commodity_proto != nil {
		return
	}
	file_package_proto_init()
	file_freight_class_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_commodity_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Commodity); i {
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
			RawDescriptor: file_commodity_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_commodity_proto_goTypes,
		DependencyIndexes: file_commodity_proto_depIdxs,
		EnumInfos:         file_commodity_proto_enumTypes,
		MessageInfos:      file_commodity_proto_msgTypes,
	}.Build()
	File_commodity_proto = out.File
	file_commodity_proto_rawDesc = nil
	file_commodity_proto_goTypes = nil
	file_commodity_proto_depIdxs = nil
}
