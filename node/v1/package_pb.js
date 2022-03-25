// source: package.proto
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
goog.exportSymbol('proto.carrier.PackageType', null, global);
/**
 * @enum {number}
 */
proto.carrier.PackageType = {
  PALLET: 0,
  BOX: 2,
  BUNDLES: 3,
  CRATE: 4,
  LOOSE: 5,
  PIECES: 6,
  ROLL: 7
};

goog.object.extend(exports, proto.carrier);
