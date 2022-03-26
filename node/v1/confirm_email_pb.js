// source: confirm_email.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var role_pb = require('./role_pb.js');
goog.object.extend(proto, role_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.userservice.ConfirmEmailData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.userservice.ConfirmEmailData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.userservice.ConfirmEmailData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.userservice.ConfirmEmailData.displayName = 'proto.userservice.ConfirmEmailData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.userservice.ConfirmEmailData.prototype.toObject = function(opt_includeInstance) {
  return proto.userservice.ConfirmEmailData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.userservice.ConfirmEmailData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userservice.ConfirmEmailData.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: (f = msg.getEmail()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    token: (f = msg.getToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.userservice.ConfirmEmailData}
 */
proto.userservice.ConfirmEmailData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.userservice.ConfirmEmailData;
  return proto.userservice.ConfirmEmailData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.userservice.ConfirmEmailData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.userservice.ConfirmEmailData}
 */
proto.userservice.ConfirmEmailData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.userservice.ConfirmEmailData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.userservice.ConfirmEmailData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.userservice.ConfirmEmailData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userservice.ConfirmEmailData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue email = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.userservice.ConfirmEmailData.prototype.getEmail = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.userservice.ConfirmEmailData} returns this
*/
proto.userservice.ConfirmEmailData.prototype.setEmail = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.userservice.ConfirmEmailData} returns this
 */
proto.userservice.ConfirmEmailData.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.userservice.ConfirmEmailData.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue token = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.userservice.ConfirmEmailData.prototype.getToken = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.userservice.ConfirmEmailData} returns this
*/
proto.userservice.ConfirmEmailData.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.userservice.ConfirmEmailData} returns this
 */
proto.userservice.ConfirmEmailData.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.userservice.ConfirmEmailData.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.userservice);
