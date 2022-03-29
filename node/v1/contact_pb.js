// source: contact.proto
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

var role_pb = require('./role_pb.js');
goog.object.extend(proto, role_pb);
goog.exportSymbol('proto.user.Contact', null, global);
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
proto.user.Contact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.Contact.repeatedFields_, null);
};
goog.inherits(proto.user.Contact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.Contact.displayName = 'proto.user.Contact';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.Contact.repeatedFields_ = [7];



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
proto.user.Contact.prototype.toObject = function(opt_includeInstance) {
  return proto.user.Contact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.Contact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Contact.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phoneNumberExtension: jspb.Message.getFieldWithDefault(msg, 4, ""),
    emailAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    phoneNumberDisplay: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rolesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    prefferedContactMethod: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.user.Contact}
 */
proto.user.Contact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.Contact;
  return proto.user.Contact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.Contact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.Contact}
 */
proto.user.Contact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumberExtension(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumberDisplay(value);
      break;
    case 7:
      var values = /** @type {!Array<!proto.user.Role>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRoles(values[i]);
      }
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefferedContactMethod(value);
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
proto.user.Contact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.Contact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.Contact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Contact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhoneNumberExtension();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhoneNumberDisplay();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
  f = message.getPrefferedContactMethod();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.user.Contact.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.user.Contact.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone_number = 3;
 * @return {string}
 */
proto.user.Contact.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone_number_extension = 4;
 * @return {string}
 */
proto.user.Contact.prototype.getPhoneNumberExtension = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setPhoneNumberExtension = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email_address = 5;
 * @return {string}
 */
proto.user.Contact.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string phone_number_display = 6;
 * @return {string}
 */
proto.user.Contact.prototype.getPhoneNumberDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setPhoneNumberDisplay = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Role roles = 7;
 * @return {!Array<!proto.user.Role>}
 */
proto.user.Contact.prototype.getRolesList = function() {
  return /** @type {!Array<!proto.user.Role>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.user.Role>} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.user.Role} value
 * @param {number=} opt_index
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * optional string preffered_contact_method = 8;
 * @return {string}
 */
proto.user.Contact.prototype.getPrefferedContactMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Contact} returns this
 */
proto.user.Contact.prototype.setPrefferedContactMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.user);
