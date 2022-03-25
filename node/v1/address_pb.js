// source: address.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.carrier.Address', null, global);
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
proto.carrier.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.Address.displayName = 'proto.carrier.Address';
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
proto.carrier.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    streetnumber: (f = msg.getStreetnumber()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    streetname: (f = msg.getStreetname()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    municipality: (f = msg.getMunicipality()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countrysecondarysubdivision: (f = msg.getCountrysecondarysubdivision()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countrysubdivision: (f = msg.getCountrysubdivision()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countrysubdivisionname: (f = msg.getCountrysubdivisionname()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    postalcode: (f = msg.getPostalcode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    state: (f = msg.getState()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    extendedpostalcode: (f = msg.getExtendedpostalcode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countrycode: (f = msg.getCountrycode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    country: (f = msg.getCountry()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    countrycodeiso3: (f = msg.getCountrycodeiso3()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    freeformaddress: (f = msg.getFreeformaddress()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    localname: (f = msg.getLocalname()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    type: (f = msg.getType()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    addressline1: (f = msg.getAddressline1()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    addressline2: (f = msg.getAddressline2()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.carrier.Address}
 */
proto.carrier.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.Address;
  return proto.carrier.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.Address}
 */
proto.carrier.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setStreetnumber(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setStreetname(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setMunicipality(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountrysecondarysubdivision(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountrysubdivision(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountrysubdivisionname(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPostalcode(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setExtendedpostalcode(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountrycode(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountry(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCountrycodeiso3(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFreeformaddress(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setLocalname(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAddressline1(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAddressline2(value);
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
proto.carrier.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreetnumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getStreetname();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMunicipality();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountrysecondarysubdivision();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountrysubdivision();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountrysubdivisionname();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPostalcode();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getExtendedpostalcode();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountrycode();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountry();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCountrycodeiso3();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getFreeformaddress();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getLocalname();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAddressline1();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAddressline2();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue streetNumber = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getStreetnumber = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setStreetnumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearStreetnumber = function() {
  return this.setStreetnumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasStreetnumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue streetName = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getStreetname = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setStreetname = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearStreetname = function() {
  return this.setStreetname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasStreetname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue municipality = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getMunicipality = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setMunicipality = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearMunicipality = function() {
  return this.setMunicipality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasMunicipality = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue CountrySecondarySubdivision = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getCountrysecondarysubdivision = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setCountrysecondarysubdivision = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearCountrysecondarysubdivision = function() {
  return this.setCountrysecondarysubdivision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasCountrysecondarysubdivision = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue CountrySubdivision = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getCountrysubdivision = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setCountrysubdivision = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearCountrysubdivision = function() {
  return this.setCountrysubdivision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasCountrysubdivision = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue countrySubdivisionName = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getCountrysubdivisionname = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setCountrysubdivisionname = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearCountrysubdivisionname = function() {
  return this.setCountrysubdivisionname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasCountrysubdivisionname = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.StringValue postalCode = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getPostalcode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setPostalcode = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearPostalcode = function() {
  return this.setPostalcode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasPostalcode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue state = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getState = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasState = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.StringValue extendedPostalCode = 9;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getExtendedpostalcode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 9));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setExtendedpostalcode = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearExtendedpostalcode = function() {
  return this.setExtendedpostalcode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasExtendedpostalcode = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.StringValue countryCode = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getCountrycode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setCountrycode = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearCountrycode = function() {
  return this.setCountrycode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasCountrycode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.StringValue country = 11;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getCountry = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setCountry = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearCountry = function() {
  return this.setCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasCountry = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.StringValue countryCodeISO3 = 12;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getCountrycodeiso3 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 12));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setCountrycodeiso3 = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearCountrycodeiso3 = function() {
  return this.setCountrycodeiso3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasCountrycodeiso3 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.StringValue freeFormAddress = 13;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getFreeformaddress = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 13));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setFreeformaddress = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearFreeformaddress = function() {
  return this.setFreeformaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasFreeformaddress = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.StringValue localName = 14;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getLocalname = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 14));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setLocalname = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearLocalname = function() {
  return this.setLocalname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasLocalname = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.StringValue id = 15;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 15));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasId = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.StringValue type = 16;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getType = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 16));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasType = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.StringValue addressLine1 = 17;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getAddressline1 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 17));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setAddressline1 = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearAddressline1 = function() {
  return this.setAddressline1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasAddressline1 = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.StringValue addressLine2 = 18;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.carrier.Address.prototype.getAddressline2 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 18));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.carrier.Address} returns this
*/
proto.carrier.Address.prototype.setAddressline2 = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.Address} returns this
 */
proto.carrier.Address.prototype.clearAddressline2 = function() {
  return this.setAddressline2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.Address.prototype.hasAddressline2 = function() {
  return jspb.Message.getField(this, 18) != null;
};


goog.object.extend(exports, proto.carrier);
