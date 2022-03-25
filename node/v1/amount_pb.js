// source: amount.proto
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

goog.exportSymbol('proto.carrier.Amount', null, global);
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
proto.carrier.Amount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.Amount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.Amount.displayName = 'proto.carrier.Amount';
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
proto.carrier.Amount.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.Amount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.Amount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.Amount.toObject = function(includeInstance, msg) {
  var f, obj = {
    fullamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    discountapplied: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    netamount: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.carrier.Amount}
 */
proto.carrier.Amount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.Amount;
  return proto.carrier.Amount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.Amount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.Amount}
 */
proto.carrier.Amount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFullamount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDiscountapplied(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNetamount(value);
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
proto.carrier.Amount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.Amount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.Amount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.Amount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFullamount();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getDiscountapplied();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getNetamount();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double fullAmount = 1;
 * @return {number}
 */
proto.carrier.Amount.prototype.getFullamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.carrier.Amount} returns this
 */
proto.carrier.Amount.prototype.setFullamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double discountApplied = 2;
 * @return {number}
 */
proto.carrier.Amount.prototype.getDiscountapplied = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.carrier.Amount} returns this
 */
proto.carrier.Amount.prototype.setDiscountapplied = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double netAmount = 3;
 * @return {number}
 */
proto.carrier.Amount.prototype.getNetamount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.carrier.Amount} returns this
 */
proto.carrier.Amount.prototype.setNetamount = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, proto.carrier);
