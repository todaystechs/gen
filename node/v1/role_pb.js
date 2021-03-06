// source: role.proto
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
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.user.Role', null, global);
goog.exportSymbol('proto.user.UpdateUserRoleData', null, global);
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
proto.user.UpdateUserRoleData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.UpdateUserRoleData.repeatedFields_, null);
};
goog.inherits(proto.user.UpdateUserRoleData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.UpdateUserRoleData.displayName = 'proto.user.UpdateUserRoleData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.UpdateUserRoleData.repeatedFields_ = [2];



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
proto.user.UpdateUserRoleData.prototype.toObject = function(opt_includeInstance) {
  return proto.user.UpdateUserRoleData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.UpdateUserRoleData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.UpdateUserRoleData.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newRoleList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    staffEmail: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.user.UpdateUserRoleData}
 */
proto.user.UpdateUserRoleData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.UpdateUserRoleData;
  return proto.user.UpdateUserRoleData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.UpdateUserRoleData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.UpdateUserRoleData}
 */
proto.user.UpdateUserRoleData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.user.Role>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNewRole(values[i]);
      }
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStaffEmail(value);
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
proto.user.UpdateUserRoleData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.UpdateUserRoleData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.UpdateUserRoleData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.UpdateUserRoleData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewRoleList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getStaffEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.user.UpdateUserRoleData.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.UpdateUserRoleData} returns this
 */
proto.user.UpdateUserRoleData.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Role new_role = 2;
 * @return {!Array<!proto.user.Role>}
 */
proto.user.UpdateUserRoleData.prototype.getNewRoleList = function() {
  return /** @type {!Array<!proto.user.Role>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.user.Role>} value
 * @return {!proto.user.UpdateUserRoleData} returns this
 */
proto.user.UpdateUserRoleData.prototype.setNewRoleList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.user.Role} value
 * @param {number=} opt_index
 * @return {!proto.user.UpdateUserRoleData} returns this
 */
proto.user.UpdateUserRoleData.prototype.addNewRole = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.UpdateUserRoleData} returns this
 */
proto.user.UpdateUserRoleData.prototype.clearNewRoleList = function() {
  return this.setNewRoleList([]);
};


/**
 * optional string staff_email = 3;
 * @return {string}
 */
proto.user.UpdateUserRoleData.prototype.getStaffEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.UpdateUserRoleData} returns this
 */
proto.user.UpdateUserRoleData.prototype.setStaffEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.user.Role = {
  SYSTEMOWNER: 0,
  SYSTEMMANAGER: 1,
  SYSTEMSTAFF: 2,
  SYSTEMDEVELOPER: 3,
  SYSTEMWAREHOUSEMANAGER: 4,
  SYSTEMWAREHOUSESTAFF: 5,
  BUSINESSOWNER: 6,
  BUSINESSMANAGER: 7,
  BUSINESSSTAFF: 8,
  BUSINESSWAREHOUSEMANAGER: 9,
  BUSINESSWAREHOUSESTAFF: 10,
  THREEPLOWNER: 11,
  THREEPLSTAFF: 12
};

goog.object.extend(exports, proto.user);
