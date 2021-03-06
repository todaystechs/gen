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

var role_pb = require('./role_pb.js');
goog.object.extend(proto, role_pb);
var amount_pb = require('./amount_pb.js');
goog.object.extend(proto, amount_pb);
var quote_pb = require('./quote_pb.js');
goog.object.extend(proto, quote_pb);
goog.exportSymbol('proto.user.BookingData', null, global);
goog.exportSymbol('proto.user.BookingResponse', null, global);
goog.exportSymbol('proto.user.FetchBookingsRequest', null, global);
goog.exportSymbol('proto.user.ListOfBooking', null, global);
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
proto.user.BookingData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.BookingData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.BookingData.displayName = 'proto.user.BookingData';
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
proto.user.BookingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.BookingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.BookingResponse.displayName = 'proto.user.BookingResponse';
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
proto.user.ListOfBooking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.ListOfBooking.repeatedFields_, null);
};
goog.inherits(proto.user.ListOfBooking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.ListOfBooking.displayName = 'proto.user.ListOfBooking';
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
proto.user.FetchBookingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.FetchBookingsRequest.repeatedFields_, null);
};
goog.inherits(proto.user.FetchBookingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.FetchBookingsRequest.displayName = 'proto.user.FetchBookingsRequest';
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
proto.user.BookingData.prototype.toObject = function(opt_includeInstance) {
  return proto.user.BookingData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.BookingData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.BookingData.toObject = function(includeInstance, msg) {
  var f, obj = {
    quoteId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.user.BookingData}
 */
proto.user.BookingData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.BookingData;
  return proto.user.BookingData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.BookingData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.BookingData}
 */
proto.user.BookingData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.user.BookingData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.BookingData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.BookingData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.BookingData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuoteId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string quote_id = 1;
 * @return {string}
 */
proto.user.BookingData.prototype.getQuoteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingData} returns this
 */
proto.user.BookingData.prototype.setQuoteId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.user.BookingData.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingData} returns this
 */
proto.user.BookingData.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.user.BookingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.user.BookingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.BookingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.BookingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bolUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    invoiceUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    invoiceDueDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pickUpStart: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pickUpEnd: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bookedQuote: (f = msg.getBookedQuote()) && quote_pb.QuoteRequest.toObject(includeInstance, f)
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
 * @return {!proto.user.BookingResponse}
 */
proto.user.BookingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.BookingResponse;
  return proto.user.BookingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.BookingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.BookingResponse}
 */
proto.user.BookingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBookingId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBolUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoiceDueDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPickUpStart(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPickUpEnd(value);
      break;
    case 7:
      var value = new quote_pb.QuoteRequest;
      reader.readMessage(value,quote_pb.QuoteRequest.deserializeBinaryFromReader);
      msg.setBookedQuote(value);
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
proto.user.BookingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.BookingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.BookingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.BookingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBolUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInvoiceUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvoiceDueDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPickUpStart();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPickUpEnd();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBookedQuote();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      quote_pb.QuoteRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string booking_id = 1;
 * @return {string}
 */
proto.user.BookingResponse.prototype.getBookingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.setBookingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string bol_url = 2;
 * @return {string}
 */
proto.user.BookingResponse.prototype.getBolUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.setBolUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string invoice_url = 3;
 * @return {string}
 */
proto.user.BookingResponse.prototype.getInvoiceUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.setInvoiceUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string invoice_due_date = 4;
 * @return {string}
 */
proto.user.BookingResponse.prototype.getInvoiceDueDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.setInvoiceDueDate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string pick_up_start = 5;
 * @return {string}
 */
proto.user.BookingResponse.prototype.getPickUpStart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.setPickUpStart = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string pick_up_end = 6;
 * @return {string}
 */
proto.user.BookingResponse.prototype.getPickUpEnd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.setPickUpEnd = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional QuoteRequest booked_quote = 7;
 * @return {?proto.user.QuoteRequest}
 */
proto.user.BookingResponse.prototype.getBookedQuote = function() {
  return /** @type{?proto.user.QuoteRequest} */ (
    jspb.Message.getWrapperField(this, quote_pb.QuoteRequest, 7));
};


/**
 * @param {?proto.user.QuoteRequest|undefined} value
 * @return {!proto.user.BookingResponse} returns this
*/
proto.user.BookingResponse.prototype.setBookedQuote = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.user.BookingResponse} returns this
 */
proto.user.BookingResponse.prototype.clearBookedQuote = function() {
  return this.setBookedQuote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.user.BookingResponse.prototype.hasBookedQuote = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.ListOfBooking.repeatedFields_ = [1];



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
proto.user.ListOfBooking.prototype.toObject = function(opt_includeInstance) {
  return proto.user.ListOfBooking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.ListOfBooking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.ListOfBooking.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookingHistoryList: jspb.Message.toObjectList(msg.getBookingHistoryList(),
    proto.user.BookingResponse.toObject, includeInstance)
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
 * @return {!proto.user.ListOfBooking}
 */
proto.user.ListOfBooking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.ListOfBooking;
  return proto.user.ListOfBooking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.ListOfBooking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.ListOfBooking}
 */
proto.user.ListOfBooking.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.user.BookingResponse;
      reader.readMessage(value,proto.user.BookingResponse.deserializeBinaryFromReader);
      msg.addBookingHistory(value);
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
proto.user.ListOfBooking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.ListOfBooking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.ListOfBooking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.ListOfBooking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookingHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.user.BookingResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BookingResponse booking_history = 1;
 * @return {!Array<!proto.user.BookingResponse>}
 */
proto.user.ListOfBooking.prototype.getBookingHistoryList = function() {
  return /** @type{!Array<!proto.user.BookingResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.user.BookingResponse, 1));
};


/**
 * @param {!Array<!proto.user.BookingResponse>} value
 * @return {!proto.user.ListOfBooking} returns this
*/
proto.user.ListOfBooking.prototype.setBookingHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.user.BookingResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.user.BookingResponse}
 */
proto.user.ListOfBooking.prototype.addBookingHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.user.BookingResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.ListOfBooking} returns this
 */
proto.user.ListOfBooking.prototype.clearBookingHistoryList = function() {
  return this.setBookingHistoryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.FetchBookingsRequest.repeatedFields_ = [1];



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
proto.user.FetchBookingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.user.FetchBookingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.FetchBookingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.FetchBookingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookingIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    pk: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startFrom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endOn: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.user.FetchBookingsRequest}
 */
proto.user.FetchBookingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.FetchBookingsRequest;
  return proto.user.FetchBookingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.FetchBookingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.FetchBookingsRequest}
 */
proto.user.FetchBookingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBookingId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPk(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartFrom(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndOn(value);
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
proto.user.FetchBookingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.FetchBookingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.FetchBookingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.FetchBookingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookingIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPk();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartFrom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndOn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated string booking_id = 1;
 * @return {!Array<string>}
 */
proto.user.FetchBookingsRequest.prototype.getBookingIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.user.FetchBookingsRequest} returns this
 */
proto.user.FetchBookingsRequest.prototype.setBookingIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.user.FetchBookingsRequest} returns this
 */
proto.user.FetchBookingsRequest.prototype.addBookingId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.FetchBookingsRequest} returns this
 */
proto.user.FetchBookingsRequest.prototype.clearBookingIdList = function() {
  return this.setBookingIdList([]);
};


/**
 * optional string pk = 2;
 * @return {string}
 */
proto.user.FetchBookingsRequest.prototype.getPk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.FetchBookingsRequest} returns this
 */
proto.user.FetchBookingsRequest.prototype.setPk = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string start_from = 3;
 * @return {string}
 */
proto.user.FetchBookingsRequest.prototype.getStartFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.FetchBookingsRequest} returns this
 */
proto.user.FetchBookingsRequest.prototype.setStartFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string end_on = 4;
 * @return {string}
 */
proto.user.FetchBookingsRequest.prototype.getEndOn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.FetchBookingsRequest} returns this
 */
proto.user.FetchBookingsRequest.prototype.setEndOn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.user);
