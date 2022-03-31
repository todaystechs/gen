// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var carrier_service_pb = require('./carrier_service_pb.js');
var quote_pb = require('./quote_pb.js');
var location_pb = require('./location_pb.js');
var book_pb = require('./book_pb.js');
var ok_pb = require('./ok_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_user_BookingData(arg) {
  if (!(arg instanceof book_pb.BookingData)) {
    throw new Error('Expected argument of type user.BookingData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_BookingData(buffer_arg) {
  return book_pb.BookingData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_BookingResponse(arg) {
  if (!(arg instanceof book_pb.BookingResponse)) {
    throw new Error('Expected argument of type user.BookingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_BookingResponse(buffer_arg) {
  return book_pb.BookingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_BusinessId(arg) {
  if (!(arg instanceof carrier_service_pb.BusinessId)) {
    throw new Error('Expected argument of type user.BusinessId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_BusinessId(buffer_arg) {
  return carrier_service_pb.BusinessId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CarrierServicePing(arg) {
  if (!(arg instanceof carrier_service_pb.CarrierServicePing)) {
    throw new Error('Expected argument of type user.CarrierServicePing');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CarrierServicePing(buffer_arg) {
  return carrier_service_pb.CarrierServicePing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_FetchBookingsRequest(arg) {
  if (!(arg instanceof book_pb.FetchBookingsRequest)) {
    throw new Error('Expected argument of type user.FetchBookingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_FetchBookingsRequest(buffer_arg) {
  return book_pb.FetchBookingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_FetchQuotesRequest(arg) {
  if (!(arg instanceof quote_pb.FetchQuotesRequest)) {
    throw new Error('Expected argument of type user.FetchQuotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_FetchQuotesRequest(buffer_arg) {
  return quote_pb.FetchQuotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListOfBooking(arg) {
  if (!(arg instanceof book_pb.ListOfBooking)) {
    throw new Error('Expected argument of type user.ListOfBooking');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListOfBooking(buffer_arg) {
  return book_pb.ListOfBooking.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListOfQuoteResponse(arg) {
  if (!(arg instanceof quote_pb.ListOfQuoteResponse)) {
    throw new Error('Expected argument of type user.ListOfQuoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListOfQuoteResponse(buffer_arg) {
  return quote_pb.ListOfQuoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ListsOfLocation(arg) {
  if (!(arg instanceof location_pb.ListsOfLocation)) {
    throw new Error('Expected argument of type user.ListsOfLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ListsOfLocation(buffer_arg) {
  return location_pb.ListsOfLocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Location(arg) {
  if (!(arg instanceof location_pb.Location)) {
    throw new Error('Expected argument of type user.Location');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Location(buffer_arg) {
  return location_pb.Location.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Ok(arg) {
  if (!(arg instanceof ok_pb.Ok)) {
    throw new Error('Expected argument of type user.Ok');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Ok(buffer_arg) {
  return ok_pb.Ok.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_QuoteRequest(arg) {
  if (!(arg instanceof quote_pb.QuoteRequest)) {
    throw new Error('Expected argument of type user.QuoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_QuoteRequest(buffer_arg) {
  return quote_pb.QuoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_QuoteResponse(arg) {
  if (!(arg instanceof quote_pb.QuoteResponse)) {
    throw new Error('Expected argument of type user.QuoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_QuoteResponse(buffer_arg) {
  return quote_pb.QuoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CarrierServiceService = exports.CarrierServiceService = {
  // location
getLocations: {
    path: '/user.CarrierService/GetLocations',
    requestStream: false,
    responseStream: false,
    requestType: carrier_service_pb.BusinessId,
    responseType: location_pb.ListsOfLocation,
    requestSerialize: serialize_user_BusinessId,
    requestDeserialize: deserialize_user_BusinessId,
    responseSerialize: serialize_user_ListsOfLocation,
    responseDeserialize: deserialize_user_ListsOfLocation,
  },
  createLocation: {
    path: '/user.CarrierService/CreateLocation',
    requestStream: false,
    responseStream: false,
    requestType: location_pb.Location,
    responseType: location_pb.Location,
    requestSerialize: serialize_user_Location,
    requestDeserialize: deserialize_user_Location,
    responseSerialize: serialize_user_Location,
    responseDeserialize: deserialize_user_Location,
  },
  updateLocation: {
    path: '/user.CarrierService/UpdateLocation',
    requestStream: false,
    responseStream: false,
    requestType: location_pb.Location,
    responseType: ok_pb.Ok,
    requestSerialize: serialize_user_Location,
    requestDeserialize: deserialize_user_Location,
    responseSerialize: serialize_user_Ok,
    responseDeserialize: deserialize_user_Ok,
  },
  deleteLocation: {
    path: '/user.CarrierService/DeleteLocation',
    requestStream: false,
    responseStream: false,
    requestType: location_pb.Location,
    responseType: ok_pb.Ok,
    requestSerialize: serialize_user_Location,
    requestDeserialize: deserialize_user_Location,
    responseSerialize: serialize_user_Ok,
    responseDeserialize: deserialize_user_Ok,
  },
  // health
pingCarrierService: {
    path: '/user.CarrierService/PingCarrierService',
    requestStream: false,
    responseStream: false,
    requestType: carrier_service_pb.CarrierServicePing,
    responseType: carrier_service_pb.CarrierServicePing,
    requestSerialize: serialize_user_CarrierServicePing,
    requestDeserialize: deserialize_user_CarrierServicePing,
    responseSerialize: serialize_user_CarrierServicePing,
    responseDeserialize: deserialize_user_CarrierServicePing,
  },
  // quote
getQuotes: {
    path: '/user.CarrierService/GetQuotes',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteRequest,
    responseType: quote_pb.ListOfQuoteResponse,
    requestSerialize: serialize_user_QuoteRequest,
    requestDeserialize: deserialize_user_QuoteRequest,
    responseSerialize: serialize_user_ListOfQuoteResponse,
    responseDeserialize: deserialize_user_ListOfQuoteResponse,
  },
  updateQuote: {
    path: '/user.CarrierService/UpdateQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteRequest,
    responseType: quote_pb.ListOfQuoteResponse,
    requestSerialize: serialize_user_QuoteRequest,
    requestDeserialize: deserialize_user_QuoteRequest,
    responseSerialize: serialize_user_ListOfQuoteResponse,
    responseDeserialize: deserialize_user_ListOfQuoteResponse,
  },
  deleteQuote: {
    path: '/user.CarrierService/DeleteQuote',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.QuoteRequest,
    responseType: quote_pb.ListOfQuoteResponse,
    requestSerialize: serialize_user_QuoteRequest,
    requestDeserialize: deserialize_user_QuoteRequest,
    responseSerialize: serialize_user_ListOfQuoteResponse,
    responseDeserialize: deserialize_user_ListOfQuoteResponse,
  },
  getQuotesById: {
    path: '/user.CarrierService/GetQuotesById',
    requestStream: false,
    responseStream: false,
    requestType: quote_pb.FetchQuotesRequest,
    responseType: quote_pb.QuoteResponse,
    requestSerialize: serialize_user_FetchQuotesRequest,
    requestDeserialize: deserialize_user_FetchQuotesRequest,
    responseSerialize: serialize_user_QuoteResponse,
    responseDeserialize: deserialize_user_QuoteResponse,
  },
  // booking
bookQuote: {
    path: '/user.CarrierService/BookQuote',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.BookingData,
    responseType: book_pb.BookingResponse,
    requestSerialize: serialize_user_BookingData,
    requestDeserialize: deserialize_user_BookingData,
    responseSerialize: serialize_user_BookingResponse,
    responseDeserialize: deserialize_user_BookingResponse,
  },
  getBookingHistory: {
    path: '/user.CarrierService/GetBookingHistory',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.FetchBookingsRequest,
    responseType: book_pb.ListOfBooking,
    requestSerialize: serialize_user_FetchBookingsRequest,
    requestDeserialize: deserialize_user_FetchBookingsRequest,
    responseSerialize: serialize_user_ListOfBooking,
    responseDeserialize: deserialize_user_ListOfBooking,
  },
  getBookingById: {
    path: '/user.CarrierService/GetBookingById',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.FetchBookingsRequest,
    responseType: book_pb.ListOfBooking,
    requestSerialize: serialize_user_FetchBookingsRequest,
    requestDeserialize: deserialize_user_FetchBookingsRequest,
    responseSerialize: serialize_user_ListOfBooking,
    responseDeserialize: deserialize_user_ListOfBooking,
  },
};

exports.CarrierServiceClient = grpc.makeGenericClientConstructor(CarrierServiceService);
