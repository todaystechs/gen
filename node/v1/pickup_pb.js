// source: pickup.proto
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

var location_pb = require('./location_pb.js');
goog.object.extend(proto, location_pb);
var location_type_pb = require('./location_type_pb.js');
goog.object.extend(proto, location_type_pb);
var additional_service_pb = require('./additional_service_pb.js');
goog.object.extend(proto, additional_service_pb);
goog.exportSymbol('proto.user.Pickup', null, global);
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
proto.user.Pickup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.Pickup.repeatedFields_, null);
};
goog.inherits(proto.user.Pickup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.Pickup.displayName = 'proto.user.Pickup';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.Pickup.repeatedFields_ = [3];



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
proto.user.Pickup.prototype.toObject = function(opt_includeInstance) {
  return proto.user.Pickup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.Pickup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Pickup.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && location_pb.Location.toObject(includeInstance, f),
    locationType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    additionalSevicesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    date: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.user.Pickup}
 */
proto.user.Pickup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.Pickup;
  return proto.user.Pickup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.Pickup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.Pickup}
 */
proto.user.Pickup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new location_pb.Location;
      reader.readMessage(value,location_pb.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {!proto.user.LocationType} */ (reader.readEnum());
      msg.setLocationType(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.user.AdditionalService>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAdditionalSevices(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
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
proto.user.Pickup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.Pickup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.Pickup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Pickup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      location_pb.Location.serializeBinaryToWriter
    );
  }
  f = message.getLocationType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAdditionalSevicesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.user.Location}
 */
proto.user.Pickup.prototype.getLocation = function() {
  return /** @type{?proto.user.Location} */ (
    jspb.Message.getWrapperField(this, location_pb.Location, 1));
};


/**
 * @param {?proto.user.Location|undefined} value
 * @return {!proto.user.Pickup} returns this
*/
proto.user.Pickup.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.user.Pickup} returns this
 */
proto.user.Pickup.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.Pickup.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LocationType location_type = 2;
 * @return {!proto.user.LocationType}
 */
proto.user.Pickup.prototype.getLocationType = function() {
  return /** @type {!proto.user.LocationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.user.LocationType} value
 * @return {!proto.user.Pickup} returns this
 */
proto.user.Pickup.prototype.setLocationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated AdditionalService additional_Sevices = 3;
 * @return {!Array<!proto.user.AdditionalService>}
 */
proto.user.Pickup.prototype.getAdditionalSevicesList = function() {
  return /** @type {!Array<!proto.user.AdditionalService>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.user.AdditionalService>} value
 * @return {!proto.user.Pickup} returns this
 */
proto.user.Pickup.prototype.setAdditionalSevicesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.user.AdditionalService} value
 * @param {number=} opt_index
 * @return {!proto.user.Pickup} returns this
 */
proto.user.Pickup.prototype.addAdditionalSevices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.Pickup} returns this
 */
proto.user.Pickup.prototype.clearAdditionalSevicesList = function() {
  return this.setAdditionalSevicesList([]);
};


/**
 * optional string date = 4;
 * @return {string}
 */
proto.user.Pickup.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Pickup} returns this
 */
proto.user.Pickup.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.user);
