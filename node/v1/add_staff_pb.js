// source: add_staff.proto
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
goog.exportSymbol('proto.user.AddStaffData', null, global);
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
proto.user.AddStaffData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.AddStaffData.repeatedFields_, null);
};
goog.inherits(proto.user.AddStaffData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.AddStaffData.displayName = 'proto.user.AddStaffData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.AddStaffData.repeatedFields_ = [1,2,3];



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
proto.user.AddStaffData.prototype.toObject = function(opt_includeInstance) {
  return proto.user.AddStaffData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.AddStaffData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.AddStaffData.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenList: jspb.Message.toObjectList(msg.getTokenList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    roleList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    newStaffEmailList: jspb.Message.toObjectList(msg.getNewStaffEmailList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance)
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
 * @return {!proto.user.AddStaffData}
 */
proto.user.AddStaffData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.AddStaffData;
  return proto.user.AddStaffData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.AddStaffData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.AddStaffData}
 */
proto.user.AddStaffData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addToken(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.user.Role>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRole(values[i]);
      }
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addNewStaffEmail(value);
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
proto.user.AddStaffData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.AddStaffData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.AddStaffData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.AddStaffData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getRoleList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getNewStaffEmailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.StringValue token = 1;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.user.AddStaffData.prototype.getTokenList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.user.AddStaffData} returns this
*/
proto.user.AddStaffData.prototype.setTokenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.user.AddStaffData.prototype.addToken = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.AddStaffData} returns this
 */
proto.user.AddStaffData.prototype.clearTokenList = function() {
  return this.setTokenList([]);
};


/**
 * repeated Role role = 2;
 * @return {!Array<!proto.user.Role>}
 */
proto.user.AddStaffData.prototype.getRoleList = function() {
  return /** @type {!Array<!proto.user.Role>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.user.Role>} value
 * @return {!proto.user.AddStaffData} returns this
 */
proto.user.AddStaffData.prototype.setRoleList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.user.Role} value
 * @param {number=} opt_index
 * @return {!proto.user.AddStaffData} returns this
 */
proto.user.AddStaffData.prototype.addRole = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.AddStaffData} returns this
 */
proto.user.AddStaffData.prototype.clearRoleList = function() {
  return this.setRoleList([]);
};


/**
 * repeated google.protobuf.StringValue new_staff_email = 3;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.user.AddStaffData.prototype.getNewStaffEmailList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.user.AddStaffData} returns this
*/
proto.user.AddStaffData.prototype.setNewStaffEmailList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.user.AddStaffData.prototype.addNewStaffEmail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.AddStaffData} returns this
 */
proto.user.AddStaffData.prototype.clearNewStaffEmailList = function() {
  return this.setNewStaffEmailList([]);
};


goog.object.extend(exports, proto.user);
