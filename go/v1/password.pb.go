// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        (unknown)
// source: password.proto

package v1

import (
	_ "github.com/todaystechs/gen/go/v1/validate"
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

type ForgotPasswordData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Email *wrapperspb.StringValue `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
}

func (x *ForgotPasswordData) Reset() {
	*x = ForgotPasswordData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_password_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ForgotPasswordData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ForgotPasswordData) ProtoMessage() {}

func (x *ForgotPasswordData) ProtoReflect() protoreflect.Message {
	mi := &file_password_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ForgotPasswordData.ProtoReflect.Descriptor instead.
func (*ForgotPasswordData) Descriptor() ([]byte, []int) {
	return file_password_proto_rawDescGZIP(), []int{0}
}

func (x *ForgotPasswordData) GetEmail() *wrapperspb.StringValue {
	if x != nil {
		return x.Email
	}
	return nil
}

type ForgotPassswordResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RedirectLink *wrapperspb.StringValue `protobuf:"bytes,1,opt,name=redirect_link,json=redirectLink,proto3" json:"redirect_link,omitempty"`
	Token        *wrapperspb.StringValue `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`
	Success      *wrapperspb.BoolValue   `protobuf:"bytes,3,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *ForgotPassswordResponse) Reset() {
	*x = ForgotPassswordResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_password_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ForgotPassswordResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ForgotPassswordResponse) ProtoMessage() {}

func (x *ForgotPassswordResponse) ProtoReflect() protoreflect.Message {
	mi := &file_password_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ForgotPassswordResponse.ProtoReflect.Descriptor instead.
func (*ForgotPassswordResponse) Descriptor() ([]byte, []int) {
	return file_password_proto_rawDescGZIP(), []int{1}
}

func (x *ForgotPassswordResponse) GetRedirectLink() *wrapperspb.StringValue {
	if x != nil {
		return x.RedirectLink
	}
	return nil
}

func (x *ForgotPassswordResponse) GetToken() *wrapperspb.StringValue {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *ForgotPassswordResponse) GetSuccess() *wrapperspb.BoolValue {
	if x != nil {
		return x.Success
	}
	return nil
}

type ResetPasswordData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token           *wrapperspb.StringValue `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	NewPassword     *wrapperspb.StringValue `protobuf:"bytes,2,opt,name=newPassword,proto3" json:"newPassword,omitempty"`
	ConfirmPassword *wrapperspb.StringValue `protobuf:"bytes,3,opt,name=confirm_password,json=confirmPassword,proto3" json:"confirm_password,omitempty"`
	UserId          *wrapperspb.StringValue `protobuf:"bytes,4,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *ResetPasswordData) Reset() {
	*x = ResetPasswordData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_password_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResetPasswordData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResetPasswordData) ProtoMessage() {}

func (x *ResetPasswordData) ProtoReflect() protoreflect.Message {
	mi := &file_password_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResetPasswordData.ProtoReflect.Descriptor instead.
func (*ResetPasswordData) Descriptor() ([]byte, []int) {
	return file_password_proto_rawDescGZIP(), []int{2}
}

func (x *ResetPasswordData) GetToken() *wrapperspb.StringValue {
	if x != nil {
		return x.Token
	}
	return nil
}

func (x *ResetPasswordData) GetNewPassword() *wrapperspb.StringValue {
	if x != nil {
		return x.NewPassword
	}
	return nil
}

func (x *ResetPasswordData) GetConfirmPassword() *wrapperspb.StringValue {
	if x != nil {
		return x.ConfirmPassword
	}
	return nil
}

func (x *ResetPasswordData) GetUserId() *wrapperspb.StringValue {
	if x != nil {
		return x.UserId
	}
	return nil
}

var File_password_proto protoreflect.FileDescriptor

var file_password_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0b, 0x75, 0x73, 0x65, 0x72, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x1a, 0x17, 0x76,
	0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x53, 0x0a, 0x12, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74,
	0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x44, 0x61, 0x74, 0x61, 0x12, 0x3d, 0x0a, 0x05,
	0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74,
	0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x09, 0xba, 0xe9, 0xc0, 0x03, 0x04,
	0x72, 0x02, 0x60, 0x01, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x22, 0xc6, 0x01, 0x0a, 0x17,
	0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x41, 0x0a, 0x0d, 0x72, 0x65, 0x64, 0x69, 0x72,
	0x65, 0x63, 0x74, 0x5f, 0x6c, 0x69, 0x6e, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x0c, 0x72, 0x65,
	0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x4c, 0x69, 0x6e, 0x6b, 0x12, 0x32, 0x0a, 0x05, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69,
	0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x34,
	0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x42, 0x6f, 0x6f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x07, 0x73, 0x75, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x22, 0xb4, 0x02, 0x0a, 0x11, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x44, 0x61, 0x74, 0x61, 0x12, 0x3e, 0x0a, 0x05, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x69,
	0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x0a, 0xba, 0xe9, 0xc0, 0x03, 0x05, 0xa2, 0x01,
	0x02, 0x08, 0x01, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x49, 0x0a, 0x0b, 0x6e, 0x65,
	0x77, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x09, 0xba,
	0xe9, 0xc0, 0x03, 0x04, 0x72, 0x02, 0x10, 0x08, 0x52, 0x0b, 0x6e, 0x65, 0x77, 0x50, 0x61, 0x73,
	0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x52, 0x0a, 0x10, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d,
	0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x09, 0xba,
	0xe9, 0xc0, 0x03, 0x04, 0x72, 0x02, 0x10, 0x08, 0x52, 0x0f, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x72,
	0x6d, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x40, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72,
	0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x09, 0xba, 0xe9, 0xc0, 0x03, 0x04, 0x72,
	0x02, 0x10, 0x05, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x42, 0x8e, 0x01, 0x0a, 0x0f,
	0x63, 0x6f, 0x6d, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x42,
	0x0d, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x6f, 0x64,
	0x61, 0x79, 0x73, 0x74, 0x65, 0x63, 0x68, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f,
	0x76, 0x31, 0xa2, 0x02, 0x03, 0x55, 0x58, 0x58, 0xaa, 0x02, 0x0b, 0x55, 0x73, 0x65, 0x72, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0xca, 0x02, 0x0b, 0x55, 0x73, 0x65, 0x72, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0xe2, 0x02, 0x17, 0x55, 0x73, 0x65, 0x72, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x0b, 0x55, 0x73, 0x65, 0x72, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_password_proto_rawDescOnce sync.Once
	file_password_proto_rawDescData = file_password_proto_rawDesc
)

func file_password_proto_rawDescGZIP() []byte {
	file_password_proto_rawDescOnce.Do(func() {
		file_password_proto_rawDescData = protoimpl.X.CompressGZIP(file_password_proto_rawDescData)
	})
	return file_password_proto_rawDescData
}

var file_password_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_password_proto_goTypes = []interface{}{
	(*ForgotPasswordData)(nil),      // 0: userservice.ForgotPasswordData
	(*ForgotPassswordResponse)(nil), // 1: userservice.ForgotPassswordResponse
	(*ResetPasswordData)(nil),       // 2: userservice.ResetPasswordData
	(*wrapperspb.StringValue)(nil),  // 3: google.protobuf.StringValue
	(*wrapperspb.BoolValue)(nil),    // 4: google.protobuf.BoolValue
}
var file_password_proto_depIdxs = []int32{
	3, // 0: userservice.ForgotPasswordData.email:type_name -> google.protobuf.StringValue
	3, // 1: userservice.ForgotPassswordResponse.redirect_link:type_name -> google.protobuf.StringValue
	3, // 2: userservice.ForgotPassswordResponse.token:type_name -> google.protobuf.StringValue
	4, // 3: userservice.ForgotPassswordResponse.success:type_name -> google.protobuf.BoolValue
	3, // 4: userservice.ResetPasswordData.token:type_name -> google.protobuf.StringValue
	3, // 5: userservice.ResetPasswordData.newPassword:type_name -> google.protobuf.StringValue
	3, // 6: userservice.ResetPasswordData.confirm_password:type_name -> google.protobuf.StringValue
	3, // 7: userservice.ResetPasswordData.user_id:type_name -> google.protobuf.StringValue
	8, // [8:8] is the sub-list for method output_type
	8, // [8:8] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_password_proto_init() }
func file_password_proto_init() {
	if File_password_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_password_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ForgotPasswordData); i {
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
		file_password_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ForgotPassswordResponse); i {
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
		file_password_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResetPasswordData); i {
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
			RawDescriptor: file_password_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_password_proto_goTypes,
		DependencyIndexes: file_password_proto_depIdxs,
		MessageInfos:      file_password_proto_msgTypes,
	}.Build()
	File_password_proto = out.File
	file_password_proto_rawDesc = nil
	file_password_proto_goTypes = nil
	file_password_proto_depIdxs = nil
}
