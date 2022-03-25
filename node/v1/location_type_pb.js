// source: location_type.proto
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
goog.exportSymbol('proto.carrier.LocationType', null, global);
/**
 * @enum {number}
 */
proto.carrier.LocationType = {
  BUSINESSWITHDOCK: 0,
  BUSINESSWITHOUTDOCK: 1,
  RESIDENTIALLOCATION: 2,
  LIMITEDACCESSLOCATION: 3,
  GOVERMENTBUILDING: 4,
  APT: 5,
  SUITE: 6,
  FLOOR: 7,
  COMMERCIALSTORE: 8,
  WAREHOUSE: 9
};

goog.object.extend(exports, proto.carrier);
