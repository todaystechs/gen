// source: book.proto
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

var amount_pb = require('./amount_pb.js');
goog.object.extend(proto, amount_pb);
var quote_pb = require('./quote_pb.js');
goog.object.extend(proto, quote_pb);
goog.exportSymbol('proto.carrier.BookingRequest', null, global);
goog.exportSymbol('proto.carrier.BookingResponse', null, global);
goog.exportSymbol('proto.carrier.FetchBookingsRequest', null, global);
goog.exportSymbol('proto.carrier.ListOfBooking', null, global);
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
proto.carrier.BookingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.BookingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.BookingRequest.displayName = 'proto.carrier.BookingRequest';
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
proto.carrier.BookingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.BookingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.BookingResponse.displayName = 'proto.carrier.BookingResponse';
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
proto.carrier.ListOfBooking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.carrier.ListOfBooking.repeatedFields_, null);
};
goog.inherits(proto.carrier.ListOfBooking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.ListOfBooking.displayName = 'proto.carrier.ListOfBooking';
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
proto.carrier.FetchBookingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.carrier.FetchBookingsRequest.repeatedFields_, null);
};
goog.inherits(proto.carrier.FetchBookingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.FetchBookingsRequest.displayName = 'proto.carrier.FetchBookingsRequest';
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
proto.carrier.BookingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.BookingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.BookingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.BookingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    quoteid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phonenumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phonenumberextension: jspb.Message.getFieldWithDefault(msg, 4, ""),
    emailaddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    phonenumberdisplay: jspb.Message.getFieldWithDefault(msg, 6, ""),
    prefferedcontactmethod: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.carrier.BookingRequest}
 */
proto.carrier.BookingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.BookingRequest;
  return proto.carrier.BookingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.BookingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.BookingRequest}
 */
proto.carrier.BookingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumberextension(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailaddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumberdisplay(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefferedcontactmethod(value);
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
proto.carrier.BookingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.BookingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.BookingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.BookingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuoteid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhonenumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhonenumberextension();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmailaddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhonenumberdisplay();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrefferedcontactmethod();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string quoteId = 1;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getQuoteid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setQuoteid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lastName = 2;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phoneNumber = 3;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getPhonenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setPhonenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phoneNumberExtension = 4;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getPhonenumberextension = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setPhonenumberextension = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string emailAddress = 5;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getEmailaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setEmailaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string phoneNumberDisplay = 6;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getPhonenumberdisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setPhonenumberdisplay = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string prefferedContactMethod = 8;
 * @return {string}
 */
proto.carrier.BookingRequest.prototype.getPrefferedcontactmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingRequest} returns this
 */
proto.carrier.BookingRequest.prototype.setPrefferedcontactmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.carrier.BookingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.BookingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.BookingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.BookingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bolurl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    invoiceurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    invoiceduedate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pickupstart: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pickupend: jspb.Message.getFieldWithDefault(msg, 6, ""),
    quotebooked: (f = msg.getQuotebooked()) && quote_pb.QuoteRequest.toObject(includeInstance, f)
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
 * @return {!proto.carrier.BookingResponse}
 */
proto.carrier.BookingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.BookingResponse;
  return proto.carrier.BookingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.BookingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.BookingResponse}
 */
proto.carrier.BookingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBookingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBolurl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceurl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceduedate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPickupstart(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPickupend(value);
      break;
    case 7:
      var value = new quote_pb.QuoteRequest;
      reader.readMessage(value,quote_pb.QuoteRequest.deserializeBinaryFromReader);
      msg.setQuotebooked(value);
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
proto.carrier.BookingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.BookingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.BookingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.BookingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBolurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInvoiceurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvoiceduedate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPickupstart();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPickupend();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getQuotebooked();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      quote_pb.QuoteRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bookingId = 1;
 * @return {string}
 */
proto.carrier.BookingResponse.prototype.getBookingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.setBookingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string bolUrl = 2;
 * @return {string}
 */
proto.carrier.BookingResponse.prototype.getBolurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.setBolurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string invoiceUrl = 3;
 * @return {string}
 */
proto.carrier.BookingResponse.prototype.getInvoiceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.setInvoiceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string invoiceDueDate = 4;
 * @return {string}
 */
proto.carrier.BookingResponse.prototype.getInvoiceduedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.setInvoiceduedate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string pickUpStart = 5;
 * @return {string}
 */
proto.carrier.BookingResponse.prototype.getPickupstart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.setPickupstart = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string pickUpEnd = 6;
 * @return {string}
 */
proto.carrier.BookingResponse.prototype.getPickupend = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.setPickupend = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional QuoteRequest quoteBooked = 7;
 * @return {?proto.carrier.QuoteRequest}
 */
proto.carrier.BookingResponse.prototype.getQuotebooked = function() {
  return /** @type{?proto.carrier.QuoteRequest} */ (
    jspb.Message.getWrapperField(this, quote_pb.QuoteRequest, 7));
};


/**
 * @param {?proto.carrier.QuoteRequest|undefined} value
 * @return {!proto.carrier.BookingResponse} returns this
*/
proto.carrier.BookingResponse.prototype.setQuotebooked = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.carrier.BookingResponse} returns this
 */
proto.carrier.BookingResponse.prototype.clearQuotebooked = function() {
  return this.setQuotebooked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.BookingResponse.prototype.hasQuotebooked = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.carrier.ListOfBooking.repeatedFields_ = [1];



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
proto.carrier.ListOfBooking.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.ListOfBooking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.ListOfBooking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.ListOfBooking.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookinghistoryList: jspb.Message.toObjectList(msg.getBookinghistoryList(),
    proto.carrier.BookingResponse.toObject, includeInstance)
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
 * @return {!proto.carrier.ListOfBooking}
 */
proto.carrier.ListOfBooking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.ListOfBooking;
  return proto.carrier.ListOfBooking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.ListOfBooking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.ListOfBooking}
 */
proto.carrier.ListOfBooking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.carrier.BookingResponse;
      reader.readMessage(value,proto.carrier.BookingResponse.deserializeBinaryFromReader);
      msg.addBookinghistory(value);
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
proto.carrier.ListOfBooking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.ListOfBooking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.ListOfBooking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.ListOfBooking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookinghistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.carrier.BookingResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BookingResponse bookingHistory = 1;
 * @return {!Array<!proto.carrier.BookingResponse>}
 */
proto.carrier.ListOfBooking.prototype.getBookinghistoryList = function() {
  return /** @type{!Array<!proto.carrier.BookingResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.carrier.BookingResponse, 1));
};


/**
 * @param {!Array<!proto.carrier.BookingResponse>} value
 * @return {!proto.carrier.ListOfBooking} returns this
*/
proto.carrier.ListOfBooking.prototype.setBookinghistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.carrier.BookingResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.carrier.BookingResponse}
 */
proto.carrier.ListOfBooking.prototype.addBookinghistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.carrier.BookingResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.carrier.ListOfBooking} returns this
 */
proto.carrier.ListOfBooking.prototype.clearBookinghistoryList = function() {
  return this.setBookinghistoryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.carrier.FetchBookingsRequest.repeatedFields_ = [1];



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
proto.carrier.FetchBookingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.FetchBookingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.FetchBookingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.FetchBookingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookingidList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    orgid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startfrom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endon: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.carrier.FetchBookingsRequest}
 */
proto.carrier.FetchBookingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.FetchBookingsRequest;
  return proto.carrier.FetchBookingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.FetchBookingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.FetchBookingsRequest}
 */
proto.carrier.FetchBookingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBookingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartfrom(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndon(value);
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
proto.carrier.FetchBookingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.FetchBookingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.FetchBookingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.FetchBookingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookingidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getOrgid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartfrom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndon();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated string bookingId = 1;
 * @return {!Array<string>}
 */
proto.carrier.FetchBookingsRequest.prototype.getBookingidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.carrier.FetchBookingsRequest} returns this
 */
proto.carrier.FetchBookingsRequest.prototype.setBookingidList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.carrier.FetchBookingsRequest} returns this
 */
proto.carrier.FetchBookingsRequest.prototype.addBookingid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.carrier.FetchBookingsRequest} returns this
 */
proto.carrier.FetchBookingsRequest.prototype.clearBookingidList = function() {
  return this.setBookingidList([]);
};


/**
 * optional string orgId = 2;
 * @return {string}
 */
proto.carrier.FetchBookingsRequest.prototype.getOrgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.FetchBookingsRequest} returns this
 */
proto.carrier.FetchBookingsRequest.prototype.setOrgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string startFrom = 3;
 * @return {string}
 */
proto.carrier.FetchBookingsRequest.prototype.getStartfrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.FetchBookingsRequest} returns this
 */
proto.carrier.FetchBookingsRequest.prototype.setStartfrom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string endOn = 4;
 * @return {string}
 */
proto.carrier.FetchBookingsRequest.prototype.getEndon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.carrier.FetchBookingsRequest} returns this
 */
proto.carrier.FetchBookingsRequest.prototype.setEndon = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.carrier);
