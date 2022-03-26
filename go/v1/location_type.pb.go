// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: location_type.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type LocationType int32

const (
	LocationType_BusinessWithDock      LocationType = 0
	LocationType_BusinessWithOutDock   LocationType = 1
	LocationType_ResidentialLocation   LocationType = 2
	LocationType_LimitedAccessLocation LocationType = 3
	LocationType_GovermentBuilding     LocationType = 4
	LocationType_Apt                   LocationType = 5
	LocationType_Suite                 LocationType = 6
	LocationType_Floor                 LocationType = 7
	LocationType_CommercialStore       LocationType = 8
	LocationType_Warehouse             LocationType = 9
)

// Enum value maps for LocationType.
var (
	LocationType_name = map[int32]string{
		0: "BusinessWithDock",
		1: "BusinessWithOutDock",
		2: "ResidentialLocation",
		3: "LimitedAccessLocation",
		4: "GovermentBuilding",
		5: "Apt",
		6: "Suite",
		7: "Floor",
		8: "CommercialStore",
		9: "Warehouse",
	}
	LocationType_value = map[string]int32{
		"BusinessWithDock":      0,
		"BusinessWithOutDock":   1,
		"ResidentialLocation":   2,
		"LimitedAccessLocation": 3,
		"GovermentBuilding":     4,
		"Apt":                   5,
		"Suite":                 6,
		"Floor":                 7,
		"CommercialStore":       8,
		"Warehouse":             9,
	}
)

func (x LocationType) Enum() *LocationType {
	p := new(LocationType)
	*p = x
	return p
}

func (x LocationType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (LocationType) Descriptor() protoreflect.EnumDescriptor {
	return file_location_type_proto_enumTypes[0].Descriptor()
}

func (LocationType) Type() protoreflect.EnumType {
	return &file_location_type_proto_enumTypes[0]
}

func (x LocationType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use LocationType.Descriptor instead.
func (LocationType) EnumDescriptor() ([]byte, []int) {
	return file_location_type_proto_rawDescGZIP(), []int{0}
}

var File_location_type_proto protoreflect.FileDescriptor

var file_location_type_proto_rawDesc = []byte{
	0x0a, 0x13, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x2a, 0xcb,
	0x01, 0x0a, 0x0c, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12,
	0x14, 0x0a, 0x10, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x57, 0x69, 0x74, 0x68, 0x44,
	0x6f, 0x63, 0x6b, 0x10, 0x00, 0x12, 0x17, 0x0a, 0x13, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73,
	0x73, 0x57, 0x69, 0x74, 0x68, 0x4f, 0x75, 0x74, 0x44, 0x6f, 0x63, 0x6b, 0x10, 0x01, 0x12, 0x17,
	0x0a, 0x13, 0x52, 0x65, 0x73, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x61, 0x6c, 0x4c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x10, 0x02, 0x12, 0x19, 0x0a, 0x15, 0x4c, 0x69, 0x6d, 0x69, 0x74,
	0x65, 0x64, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x10, 0x03, 0x12, 0x15, 0x0a, 0x11, 0x47, 0x6f, 0x76, 0x65, 0x72, 0x6d, 0x65, 0x6e, 0x74, 0x42,
	0x75, 0x69, 0x6c, 0x64, 0x69, 0x6e, 0x67, 0x10, 0x04, 0x12, 0x07, 0x0a, 0x03, 0x41, 0x70, 0x74,
	0x10, 0x05, 0x12, 0x09, 0x0a, 0x05, 0x53, 0x75, 0x69, 0x74, 0x65, 0x10, 0x06, 0x12, 0x09, 0x0a,
	0x05, 0x46, 0x6c, 0x6f, 0x6f, 0x72, 0x10, 0x07, 0x12, 0x13, 0x0a, 0x0f, 0x43, 0x6f, 0x6d, 0x6d,
	0x65, 0x72, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x10, 0x08, 0x12, 0x0d, 0x0a,
	0x09, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x10, 0x09, 0x42, 0x7e, 0x0a, 0x0b,
	0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x42, 0x11, 0x4c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x6f, 0x64,
	0x61, 0x79, 0x73, 0x74, 0x65, 0x63, 0x68, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f,
	0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x58, 0x58, 0xaa, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69,
	0x65, 0x72, 0xca, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0xe2, 0x02, 0x13, 0x43,
	0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0xea, 0x02, 0x07, 0x43, 0x61, 0x72, 0x72, 0x69, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_location_type_proto_rawDescOnce sync.Once
	file_location_type_proto_rawDescData = file_location_type_proto_rawDesc
)

func file_location_type_proto_rawDescGZIP() []byte {
	file_location_type_proto_rawDescOnce.Do(func() {
		file_location_type_proto_rawDescData = protoimpl.X.CompressGZIP(file_location_type_proto_rawDescData)
	})
	return file_location_type_proto_rawDescData
}

var file_location_type_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_location_type_proto_goTypes = []interface{}{
	(LocationType)(0), // 0: carrier.LocationType
}
var file_location_type_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_location_type_proto_init() }
func file_location_type_proto_init() {
	if File_location_type_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_location_type_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_location_type_proto_goTypes,
		DependencyIndexes: file_location_type_proto_depIdxs,
		EnumInfos:         file_location_type_proto_enumTypes,
	}.Build()
	File_location_type_proto = out.File
	file_location_type_proto_rawDesc = nil
	file_location_type_proto_goTypes = nil
	file_location_type_proto_depIdxs = nil
}
