// source: commodity.proto
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

var package_pb = require('./package_pb.js');
goog.object.extend(proto, package_pb);
var freight_class_pb = require('./freight_class_pb.js');
goog.object.extend(proto, freight_class_pb);
goog.exportSymbol('proto.user.Commodity', null, global);
goog.exportSymbol('proto.user.DimensionUOM', null, global);
goog.exportSymbol('proto.user.WeightUOM', null, global);
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
proto.user.Commodity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.Commodity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.Commodity.displayName = 'proto.user.Commodity';
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
proto.user.Commodity.prototype.toObject = function(opt_includeInstance) {
  return proto.user.Commodity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.Commodity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Commodity.toObject = function(includeInstance, msg) {
  var f, obj = {
    density: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    length: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    width: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    dimensionUom: jspb.Message.getFieldWithDefault(msg, 6, 0),
    weightUom: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dimensionDisplay: jspb.Message.getFieldWithDefault(msg, 8, ""),
    packageType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 10, 0),
    freightClass: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.user.Commodity}
 */
proto.user.Commodity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.Commodity;
  return proto.user.Commodity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.Commodity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.Commodity}
 */
proto.user.Commodity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDensity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWeight(value);
      break;
    case 6:
      var value = /** @type {!proto.user.DimensionUOM} */ (reader.readEnum());
      msg.setDimensionUom(value);
      break;
    case 7:
      var value = /** @type {!proto.user.WeightUOM} */ (reader.readEnum());
      msg.setWeightUom(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDimensionDisplay(value);
      break;
    case 9:
      var value = /** @type {!proto.user.PackageType} */ (reader.readEnum());
      msg.setPackageType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 11:
      var value = /** @type {!proto.user.FreightClass} */ (reader.readEnum());
      msg.setFreightClass(value);
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
proto.user.Commodity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.Commodity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.Commodity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.Commodity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDensity();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getDimensionUom();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getWeightUom();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDimensionDisplay();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPackageType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getFreightClass();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional float density = 1;
 * @return {number}
 */
proto.user.Commodity.prototype.getDensity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setDensity = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float length = 2;
 * @return {number}
 */
proto.user.Commodity.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float width = 3;
 * @return {number}
 */
proto.user.Commodity.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setWidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float height = 4;
 * @return {number}
 */
proto.user.Commodity.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float weight = 5;
 * @return {number}
 */
proto.user.Commodity.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setWeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional DimensionUOM dimension_UOM = 6;
 * @return {!proto.user.DimensionUOM}
 */
proto.user.Commodity.prototype.getDimensionUom = function() {
  return /** @type {!proto.user.DimensionUOM} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.user.DimensionUOM} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setDimensionUom = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional WeightUOM weight_UOM = 7;
 * @return {!proto.user.WeightUOM}
 */
proto.user.Commodity.prototype.getWeightUom = function() {
  return /** @type {!proto.user.WeightUOM} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.user.WeightUOM} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setWeightUom = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string dimension_display = 8;
 * @return {string}
 */
proto.user.Commodity.prototype.getDimensionDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setDimensionDisplay = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional PackageType package_type = 9;
 * @return {!proto.user.PackageType}
 */
proto.user.Commodity.prototype.getPackageType = function() {
  return /** @type {!proto.user.PackageType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.user.PackageType} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setPackageType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int32 quantity = 10;
 * @return {number}
 */
proto.user.Commodity.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional FreightClass freight_class = 11;
 * @return {!proto.user.FreightClass}
 */
proto.user.Commodity.prototype.getFreightClass = function() {
  return /** @type {!proto.user.FreightClass} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.user.FreightClass} value
 * @return {!proto.user.Commodity} returns this
 */
proto.user.Commodity.prototype.setFreightClass = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * @enum {number}
 */
proto.user.DimensionUOM = {
  INCH: 0,
  CM: 1
};

/**
 * @enum {number}
 */
proto.user.WeightUOM = {
  LB: 0,
  KG: 1
};

goog.object.extend(exports, proto.user);
