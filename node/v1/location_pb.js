// source: location.proto
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

var location_type_pb = require('./location_type_pb.js');
goog.object.extend(proto, location_type_pb);
var additional_service_pb = require('./additional_service_pb.js');
goog.object.extend(proto, additional_service_pb);
var address_pb = require('./address_pb.js');
goog.object.extend(proto, address_pb);
var contact_pb = require('./contact_pb.js');
goog.object.extend(proto, contact_pb);
var business_hour_pb = require('./business_hour_pb.js');
goog.object.extend(proto, business_hour_pb);
var ok_pb = require('./ok_pb.js');
goog.object.extend(proto, ok_pb);
goog.exportSymbol('proto.user.ListsOfLocation', null, global);
goog.exportSymbol('proto.user.Location', null, global);
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
proto.user.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.Location.repeatedFields_, null);
};
goog.inherits(proto.user.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.Location.displayName = 'proto.user.Location';
}
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
proto.user.ListsOfLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.ListsOfLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.ListsOfLocation.displayName = 'proto.user.ListsOfLocation';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.Location.repeatedFields_ = [6];



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
proto.user.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.user.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: (f = msg.getAddress()) && address_pb.Address.toObject(includeInstance, f),
    contact: (f = msg.getContact()) && contact_pb.Contact.toObject(includeInstance, f),
    locationType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    additionalServiceList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    businessHours: (f = msg.getBusinessHours()) && business_hour_pb.BusinessHour.toObject(includeInstance, f),
    isDefaultPickUp: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isDefaultDelivery: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.user.Location}
 */
proto.user.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.Location;
  return proto.user.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.Location}
 */
proto.user.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new address_pb.Address;
      reader.readMessage(value,address_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 4:
      var value = new contact_pb.Contact;
      reader.readMessage(value,contact_pb.Contact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    case 5:
      var value = /** @type {!proto.user.LocationType} */ (reader.readEnum());
      msg.setLocationType(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.user.AdditionalService>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAdditionalService(values[i]);
      }
      break;
    case 7:
      var value = new business_hour_pb.BusinessHour;
      reader.readMessage(value,business_hour_pb.BusinessHour.deserializeBinaryFromReader);
      msg.setBusinessHours(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefaultPickUp(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefaultDelivery(value);
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
proto.user.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      contact_pb.Contact.serializeBinaryToWriter
    );
  }
  f = message.getLocationType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAdditionalServiceList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
  f = message.getBusinessHours();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      business_hour_pb.BusinessHour.serializeBinaryToWriter
    );
  }
  f = message.getIsDefaultPickUp();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsDefaultDelivery();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.user.Location.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.user.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Address address = 3;
 * @return {?proto.user.Address}
 */
proto.user.Location.prototype.getAddress = function() {
  return /** @type{?proto.user.Address} */ (
    jspb.Message.getWrapperField(this, address_pb.Address, 3));
};


/**
 * @param {?proto.user.Address|undefined} value
 * @return {!proto.user.Location} returns this
*/
proto.user.Location.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.Location.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Contact contact = 4;
 * @return {?proto.user.Contact}
 */
proto.user.Location.prototype.getContact = function() {
  return /** @type{?proto.user.Contact} */ (
    jspb.Message.getWrapperField(this, contact_pb.Contact, 4));
};


/**
 * @param {?proto.user.Contact|undefined} value
 * @return {!proto.user.Location} returns this
*/
proto.user.Location.prototype.setContact = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.clearContact = function() {
  return this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.Location.prototype.hasContact = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LocationType location_type = 5;
 * @return {!proto.user.LocationType}
 */
proto.user.Location.prototype.getLocationType = function() {
  return /** @type {!proto.user.LocationType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.user.LocationType} value
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.setLocationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated AdditionalService additional_service = 6;
 * @return {!Array<!proto.user.AdditionalService>}
 */
proto.user.Location.prototype.getAdditionalServiceList = function() {
  return /** @type {!Array<!proto.user.AdditionalService>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.user.AdditionalService>} value
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.setAdditionalServiceList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.user.AdditionalService} value
 * @param {number=} opt_index
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.addAdditionalService = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.clearAdditionalServiceList = function() {
  return this.setAdditionalServiceList([]);
};


/**
 * optional BusinessHour business_hours = 7;
 * @return {?proto.user.BusinessHour}
 */
proto.user.Location.prototype.getBusinessHours = function() {
  return /** @type{?proto.user.BusinessHour} */ (
    jspb.Message.getWrapperField(this, business_hour_pb.BusinessHour, 7));
};


/**
 * @param {?proto.user.BusinessHour|undefined} value
 * @return {!proto.user.Location} returns this
*/
proto.user.Location.prototype.setBusinessHours = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.clearBusinessHours = function() {
  return this.setBusinessHours(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.Location.prototype.hasBusinessHours = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_default_pick_up = 8;
 * @return {boolean}
 */
proto.user.Location.prototype.getIsDefaultPickUp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.setIsDefaultPickUp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_default_delivery = 9;
 * @return {boolean}
 */
proto.user.Location.prototype.getIsDefaultDelivery = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.user.Location} returns this
 */
proto.user.Location.prototype.setIsDefaultDelivery = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





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
proto.user.ListsOfLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.user.ListsOfLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.ListsOfLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.ListsOfLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    listsoflocation: (f = msg.getListsoflocation()) && proto.user.Location.toObject(includeInstance, f)
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
 * @return {!proto.user.ListsOfLocation}
 */
proto.user.ListsOfLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.ListsOfLocation;
  return proto.user.ListsOfLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.ListsOfLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.ListsOfLocation}
 */
proto.user.ListsOfLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.user.Location;
      reader.readMessage(value,proto.user.Location.deserializeBinaryFromReader);
      msg.setListsoflocation(value);
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
proto.user.ListsOfLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.ListsOfLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.ListsOfLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.ListsOfLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListsoflocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.user.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location ListsOfLocation = 1;
 * @return {?proto.user.Location}
 */
proto.user.ListsOfLocation.prototype.getListsoflocation = function() {
  return /** @type{?proto.user.Location} */ (
    jspb.Message.getWrapperField(this, proto.user.Location, 1));
};


/**
 * @param {?proto.user.Location|undefined} value
 * @return {!proto.user.ListsOfLocation} returns this
*/
proto.user.ListsOfLocation.prototype.setListsoflocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.user.ListsOfLocation} returns this
 */
proto.user.ListsOfLocation.prototype.clearListsoflocation = function() {
  return this.setListsoflocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.ListsOfLocation.prototype.hasListsoflocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.user);
