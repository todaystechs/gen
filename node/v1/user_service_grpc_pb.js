// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_service_pb = require('./user_service_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var sign_up_pb = require('./sign_up_pb.js');
var login_pb = require('./login_pb.js');
var password_pb = require('./password_pb.js');
var log_out_pb = require('./log_out_pb.js');
var role_pb = require('./role_pb.js');
var add_staff_pb = require('./add_staff_pb.js');
var user_pb = require('./user_pb.js');
var confirm_email_pb = require('./confirm_email_pb.js');
var home_pb = require('./home_pb.js');
var ok_with_data_pb = require('./ok_with_data_pb.js');
var ok_pb = require('./ok_pb.js');
var send_email_pb = require('./send_email_pb.js');

function serialize_user_AddStaffData(arg) {
  if (!(arg instanceof add_staff_pb.AddStaffData)) {
    throw new Error('Expected argument of type user.AddStaffData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_AddStaffData(buffer_arg) {
  return add_staff_pb.AddStaffData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ConfirmEmailData(arg) {
  if (!(arg instanceof confirm_email_pb.ConfirmEmailData)) {
    throw new Error('Expected argument of type user.ConfirmEmailData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ConfirmEmailData(buffer_arg) {
  return confirm_email_pb.ConfirmEmailData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ForgotPasswordData(arg) {
  if (!(arg instanceof password_pb.ForgotPasswordData)) {
    throw new Error('Expected argument of type user.ForgotPasswordData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ForgotPasswordData(buffer_arg) {
  return password_pb.ForgotPasswordData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LogOutData(arg) {
  if (!(arg instanceof log_out_pb.LogOutData)) {
    throw new Error('Expected argument of type user.LogOutData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LogOutData(buffer_arg) {
  return log_out_pb.LogOutData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LoginUserData(arg) {
  if (!(arg instanceof login_pb.LoginUserData)) {
    throw new Error('Expected argument of type user.LoginUserData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LoginUserData(buffer_arg) {
  return login_pb.LoginUserData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_MeData(arg) {
  if (!(arg instanceof user_pb.MeData)) {
    throw new Error('Expected argument of type user.MeData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_MeData(buffer_arg) {
  return user_pb.MeData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Ok(arg) {
  if (!(arg instanceof ok_pb.Ok)) {
    throw new Error('Expected argument of type user.Ok');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Ok(buffer_arg) {
  return ok_pb.Ok.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_OkWithData(arg) {
  if (!(arg instanceof ok_with_data_pb.OkWithData)) {
    throw new Error('Expected argument of type user.OkWithData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_OkWithData(buffer_arg) {
  return ok_with_data_pb.OkWithData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ResetPasswordData(arg) {
  if (!(arg instanceof password_pb.ResetPasswordData)) {
    throw new Error('Expected argument of type user.ResetPasswordData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ResetPasswordData(buffer_arg) {
  return password_pb.ResetPasswordData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_SignUpData(arg) {
  if (!(arg instanceof sign_up_pb.SignUpData)) {
    throw new Error('Expected argument of type user.SignUpData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_SignUpData(buffer_arg) {
  return sign_up_pb.SignUpData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UpdateUserRoleData(arg) {
  if (!(arg instanceof role_pb.UpdateUserRoleData)) {
    throw new Error('Expected argument of type user.UpdateUserRoleData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UpdateUserRoleData(buffer_arg) {
  return role_pb.UpdateUserRoleData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserData(arg) {
  if (!(arg instanceof user_pb.UserData)) {
    throw new Error('Expected argument of type user.UserData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserData(buffer_arg) {
  return user_pb.UserData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserHomeData(arg) {
  if (!(arg instanceof home_pb.UserHomeData)) {
    throw new Error('Expected argument of type user.UserHomeData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserHomeData(buffer_arg) {
  return home_pb.UserHomeData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserServicePingData(arg) {
  if (!(arg instanceof user_service_pb.UserServicePingData)) {
    throw new Error('Expected argument of type user.UserServicePingData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserServicePingData(buffer_arg) {
  return user_service_pb.UserServicePingData.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  pingUserService: {
    path: '/user.UserService/PingUserService',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.UserServicePingData,
    responseType: user_service_pb.UserServicePingData,
    requestSerialize: serialize_user_UserServicePingData,
    requestDeserialize: deserialize_user_UserServicePingData,
    responseSerialize: serialize_user_UserServicePingData,
    responseDeserialize: deserialize_user_UserServicePingData,
  },
  signUp: {
    path: '/user.UserService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: sign_up_pb.SignUpData,
    responseType: ok_pb.Ok,
    requestSerialize: serialize_user_SignUpData,
    requestDeserialize: deserialize_user_SignUpData,
    responseSerialize: serialize_user_Ok,
    responseDeserialize: deserialize_user_Ok,
  },
  logIn: {
    path: '/user.UserService/LogIn',
    requestStream: false,
    responseStream: false,
    requestType: login_pb.LoginUserData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_LoginUserData,
    requestDeserialize: deserialize_user_LoginUserData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
  logOut: {
    path: '/user.UserService/LogOut',
    requestStream: false,
    responseStream: false,
    requestType: log_out_pb.LogOutData,
    responseType: ok_pb.Ok,
    requestSerialize: serialize_user_LogOutData,
    requestDeserialize: deserialize_user_LogOutData,
    responseSerialize: serialize_user_Ok,
    responseDeserialize: deserialize_user_Ok,
  },
  forgotPassword: {
    path: '/user.UserService/ForgotPassword',
    requestStream: false,
    responseStream: false,
    requestType: password_pb.ForgotPasswordData,
    responseType: ok_pb.Ok,
    requestSerialize: serialize_user_ForgotPasswordData,
    requestDeserialize: deserialize_user_ForgotPasswordData,
    responseSerialize: serialize_user_Ok,
    responseDeserialize: deserialize_user_Ok,
  },
  resetPassword: {
    path: '/user.UserService/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: password_pb.ResetPasswordData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_ResetPasswordData,
    requestDeserialize: deserialize_user_ResetPasswordData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
  updateStaffRole: {
    path: '/user.UserService/UpdateStaffRole',
    requestStream: false,
    responseStream: false,
    requestType: role_pb.UpdateUserRoleData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_UpdateUserRoleData,
    requestDeserialize: deserialize_user_UpdateUserRoleData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
  addUser: {
    path: '/user.UserService/AddUser',
    requestStream: false,
    responseStream: false,
    requestType: add_staff_pb.AddStaffData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_AddStaffData,
    requestDeserialize: deserialize_user_AddStaffData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
  updateUser: {
    path: '/user.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_UserData,
    requestDeserialize: deserialize_user_UserData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
  getMe: {
    path: '/user.UserService/GetMe',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.MeData,
    responseType: user_pb.UserData,
    requestSerialize: serialize_user_MeData,
    requestDeserialize: deserialize_user_MeData,
    responseSerialize: serialize_user_UserData,
    responseDeserialize: deserialize_user_UserData,
  },
  confirmEmail: {
    path: '/user.UserService/ConfirmEmail',
    requestStream: false,
    responseStream: false,
    requestType: confirm_email_pb.ConfirmEmailData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_ConfirmEmailData,
    requestDeserialize: deserialize_user_ConfirmEmailData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
  home: {
    path: '/user.UserService/Home',
    requestStream: false,
    responseStream: false,
    requestType: home_pb.UserHomeData,
    responseType: ok_with_data_pb.OkWithData,
    requestSerialize: serialize_user_UserHomeData,
    requestDeserialize: deserialize_user_UserHomeData,
    responseSerialize: serialize_user_OkWithData,
    responseDeserialize: deserialize_user_OkWithData,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
