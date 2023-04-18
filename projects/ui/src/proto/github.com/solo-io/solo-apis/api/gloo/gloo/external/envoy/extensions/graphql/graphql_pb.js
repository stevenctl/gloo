/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var validate_validate_pb = require('../../../../../../../../../../validate/validate_pb.js');
var github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb = require('../../../../../../../../../../github.com/solo-io/solo-apis/api/gloo/gloo/external/envoy/config/core/v3/http_uri_pb.js');
var github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_extension_pb = require('../../../../../../../../../../github.com/solo-io/solo-apis/api/gloo/gloo/external/envoy/config/core/v3/extension_pb.js');
var github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb = require('../../../../../../../../../../github.com/solo-io/solo-apis/api/gloo/gloo/external/envoy/config/core/v3/base_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.CacheControl', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.CacheControl.CacheControlScope', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ExecutableSchema', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Executor', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Executor.Local', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Executor.Remote', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.GraphQLConfig', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.GrpcResolver', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.JsonKeyValue', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.JsonNode', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.JsonValue', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.JsonValueList', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Path', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.PathSegment', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.QueryMatcher', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.RESTResolver', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.RequestTemplate', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.Resolution', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ResponseTemplate', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.StaticResolver', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.TemplatedPath', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ValueProvider', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.Type', null, global);

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
proto.envoy.config.filter.http.graphql.v2.PathSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.PathSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.PathSegment.displayName = 'proto.envoy.config.filter.http.graphql.v2.PathSegment';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.SegmentCase = {
  SEGMENT_NOT_SET: 0,
  KEY: 1,
  INDEX: 2,
  ALL: 3
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.PathSegment.SegmentCase}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.getSegmentCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.PathSegment.SegmentCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.PathSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    all: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.PathSegment}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.PathSegment;
  return proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.PathSegment}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
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
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.PathSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.setKey = function(value) {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.clearKey = function() {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.setIndex = function(value) {
  jspb.Message.setOneofField(this, 2, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.clearIndex = function() {
  jspb.Message.setOneofField(this, 2, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool all = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.setAll = function(value) {
  jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.clearAll = function() {
  jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.http.graphql.v2.PathSegment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.PathSegment.prototype.hasAll = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.Path.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Path.displayName = 'proto.envoy.config.filter.http.graphql.v2.Path';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.Path.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    proto.envoy.config.filter.http.graphql.v2.PathSegment.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Path}
 */
proto.envoy.config.filter.http.graphql.v2.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Path;
  return proto.envoy.config.filter.http.graphql.v2.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Path}
 */
proto.envoy.config.filter.http.graphql.v2.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.PathSegment;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinaryFromReader);
      msg.addSegments(value);
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
proto.envoy.config.filter.http.graphql.v2.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.PathSegment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PathSegment segments = 1;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>}
 */
proto.envoy.config.filter.http.graphql.v2.Path.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.PathSegment, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} value */
proto.envoy.config.filter.http.graphql.v2.Path.prototype.setSegmentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.PathSegment}
 */
proto.envoy.config.filter.http.graphql.v2.Path.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.graphql.v2.PathSegment, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.Path.prototype.clearSegmentsList = function() {
  this.setSegmentsList([]);
};



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
proto.envoy.config.filter.http.graphql.v2.TemplatedPath = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.TemplatedPath, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.TemplatedPath.displayName = 'proto.envoy.config.filter.http.graphql.v2.TemplatedPath';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.TemplatedPath.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.TemplatedPath} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathTemplate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namedPathsMap: (f = msg.getNamedPathsMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.Path.toObject) : []
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.TemplatedPath}
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.TemplatedPath;
  return proto.envoy.config.filter.http.graphql.v2.TemplatedPath.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.TemplatedPath} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.TemplatedPath}
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPathTemplate(value);
      break;
    case 2:
      var value = msg.getNamedPathsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.Path.deserializeBinaryFromReader, "");
         });
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
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.TemplatedPath.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.TemplatedPath} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathTemplate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamedPathsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.Path.serializeBinaryToWriter);
  }
};


/**
 * optional string path_template = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.prototype.getPathTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.prototype.setPathTemplate = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Path> named_paths = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.Path>}
 */
proto.envoy.config.filter.http.graphql.v2.TemplatedPath.prototype.getNamedPathsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.Path>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.Path));
};


proto.envoy.config.filter.http.graphql.v2.TemplatedPath.prototype.clearNamedPathsMap = function() {
  this.getNamedPathsMap().clear();
};



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
proto.envoy.config.filter.http.graphql.v2.ValueProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ValueProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.displayName = 'proto.envoy.config.filter.http.graphql.v2.ValueProvider';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    providersMap: (f = msg.getProvidersMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.toObject) : [],
    providerTemplate: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ValueProvider;
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = msg.getProvidersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.deserializeBinaryFromReader, "");
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderTemplate(value);
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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvidersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.serializeBinaryToWriter);
  }
  f = message.getProviderTemplate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};



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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.displayName = 'proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.toObject = function(includeInstance, msg) {
  var f, obj = {
    argName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    proto.envoy.config.filter.http.graphql.v2.PathSegment.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction;
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgName(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.PathSegment;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinaryFromReader);
      msg.addPath(value);
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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArgName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.PathSegment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string arg_name = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.getArgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.setArgName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PathSegment path = 2;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.getPathList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.PathSegment, 2));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.setPathList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.PathSegment}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.envoy.config.filter.http.graphql.v2.PathSegment, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.prototype.clearPathList = function() {
  this.setPathList([]);
};



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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.displayName = 'proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    proto.envoy.config.filter.http.graphql.v2.PathSegment.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction;
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.PathSegment;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinaryFromReader);
      msg.addPath(value);
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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.PathSegment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PathSegment path = 1;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.prototype.getPathList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.PathSegment, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.prototype.setPathList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.PathSegment}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.graphql.v2.PathSegment, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.prototype.clearPathList = function() {
  this.setPathList([]);
};



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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.displayName = 'proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.ValProviderCase = {
  VAL_PROVIDER_NOT_SET: 0,
  HEADER: 2,
  VALUE: 3
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.ValProviderCase}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.getValProviderCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.ValProviderCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    header: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider;
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.Type = {
  STRING: 0,
  INT: 1,
  FLOAT: 2,
  BOOLEAN: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.Type}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.getType = function() {
  return /** @type {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.Type} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string header = 2;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.setHeader = function(value) {
  jspb.Message.setOneofField(this, 2, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.clearHeader = function() {
  jspb.Message.setOneofField(this, 2, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.setValue = function(value) {
  jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.clearValue = function() {
  jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.displayName = 'proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.ProviderCase = {
  PROVIDER_NOT_SET: 0,
  GRAPHQL_ARG: 1,
  TYPED_PROVIDER: 2,
  GRAPHQL_PARENT: 3
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.ProviderCase}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.getProviderCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.ProviderCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphqlArg: (f = msg.getGraphqlArg()) && proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.toObject(includeInstance, f),
    typedProvider: (f = msg.getTypedProvider()) && proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.toObject(includeInstance, f),
    graphqlParent: (f = msg.getGraphqlParent()) && proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider;
  return proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.deserializeBinaryFromReader);
      msg.setGraphqlArg(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.deserializeBinaryFromReader);
      msg.setTypedProvider(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.deserializeBinaryFromReader);
      msg.setGraphqlParent(value);
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
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphqlArg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction.serializeBinaryToWriter
    );
  }
  f = message.getTypedProvider();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider.serializeBinaryToWriter
    );
  }
  f = message.getGraphqlParent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction.serializeBinaryToWriter
    );
  }
};


/**
 * optional GraphQLArgExtraction graphql_arg = 1;
 * @return {?proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.getGraphqlArg = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction, 1));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLArgExtraction|undefined} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.setGraphqlArg = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.clearGraphqlArg = function() {
  this.setGraphqlArg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.hasGraphqlArg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TypedValueProvider typed_provider = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.getTypedProvider = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.ValueProvider.TypedValueProvider|undefined} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.setTypedProvider = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.clearTypedProvider = function() {
  this.setTypedProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.hasTypedProvider = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GraphQLParentExtraction graphql_parent = 3;
 * @return {?proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.getGraphqlParent = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction, 3));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.ValueProvider.GraphQLParentExtraction|undefined} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.setGraphqlParent = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.clearGraphqlParent = function() {
  this.setGraphqlParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider.prototype.hasGraphqlParent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, Provider> providers = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider>}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.prototype.getProvidersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider.Provider));
};


proto.envoy.config.filter.http.graphql.v2.ValueProvider.prototype.clearProvidersMap = function() {
  this.getProvidersMap().clear();
};


/**
 * optional string provider_template = 4;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.prototype.getProviderTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.ValueProvider.prototype.setProviderTemplate = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



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
proto.envoy.config.filter.http.graphql.v2.JsonValueList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.JsonValueList.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.JsonValueList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.JsonValueList.displayName = 'proto.envoy.config.filter.http.graphql.v2.JsonValueList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.JsonValueList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValueList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.envoy.config.filter.http.graphql.v2.JsonValue.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonValueList}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.JsonValueList;
  return proto.envoy.config.filter.http.graphql.v2.JsonValueList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValueList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonValueList}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonValue;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.envoy.config.filter.http.graphql.v2.JsonValueList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.JsonValueList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValueList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated JsonValue values = 1;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.JsonValue>}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.JsonValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonValue, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.JsonValue>} value */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.prototype.setValuesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValueList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.graphql.v2.JsonValue, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.JsonValueList.prototype.clearValuesList = function() {
  this.setValuesList([]);
};



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
proto.envoy.config.filter.http.graphql.v2.JsonValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.JsonValue.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.JsonValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.JsonValue.displayName = 'proto.envoy.config.filter.http.graphql.v2.JsonValue';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.JsonValCase = {
  JSON_VAL_NOT_SET: 0,
  NODE: 1,
  VALUE_PROVIDER: 2,
  LIST: 3
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.JsonValue.JsonValCase}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.getJsonValCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.JsonValue.JsonValCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.JsonValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.JsonValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    node: (f = msg.getNode()) && proto.envoy.config.filter.http.graphql.v2.JsonNode.toObject(includeInstance, f),
    valueProvider: (f = msg.getValueProvider()) && proto.envoy.config.filter.http.graphql.v2.ValueProvider.toObject(includeInstance, f),
    list: (f = msg.getList()) && proto.envoy.config.filter.http.graphql.v2.JsonValueList.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.JsonValue;
  return proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonNode;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonNode.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.ValueProvider;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.ValueProvider.deserializeBinaryFromReader);
      msg.setValueProvider(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonValueList;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonValueList.deserializeBinaryFromReader);
      msg.setList(value);
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
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.JsonValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonNode.serializeBinaryToWriter
    );
  }
  f = message.getValueProvider();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider.serializeBinaryToWriter
    );
  }
  f = message.getList();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonValueList.serializeBinaryToWriter
    );
  }
};


/**
 * optional JsonNode node = 1;
 * @return {?proto.envoy.config.filter.http.graphql.v2.JsonNode}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.getNode = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.JsonNode} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonNode, 1));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.JsonNode|undefined} value */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.setNode = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.envoy.config.filter.http.graphql.v2.JsonValue.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.clearNode = function() {
  this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.hasNode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValueProvider value_provider = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.ValueProvider}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.getValueProvider = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.ValueProvider} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.ValueProvider, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.ValueProvider|undefined} value */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.setValueProvider = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.filter.http.graphql.v2.JsonValue.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.clearValueProvider = function() {
  this.setValueProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.hasValueProvider = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JsonValueList list = 3;
 * @return {?proto.envoy.config.filter.http.graphql.v2.JsonValueList}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.getList = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.JsonValueList} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonValueList, 3));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.JsonValueList|undefined} value */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.setList = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.envoy.config.filter.http.graphql.v2.JsonValue.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.clearList = function() {
  this.setList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.JsonValue.prototype.hasList = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.JsonKeyValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.displayName = 'proto.envoy.config.filter.http.graphql.v2.JsonKeyValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: (f = msg.getValue()) && proto.envoy.config.filter.http.graphql.v2.JsonValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.JsonKeyValue;
  return proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonValue;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional JsonValue value = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.JsonValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.getValue = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.JsonValue} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonValue, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.JsonValue|undefined} value */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.JsonNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.JsonNode.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.JsonNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.JsonNode.displayName = 'proto.envoy.config.filter.http.graphql.v2.JsonNode';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.JsonNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyValuesList: jspb.Message.toObjectList(msg.getKeyValuesList(),
    proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonNode}
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.JsonNode;
  return proto.envoy.config.filter.http.graphql.v2.JsonNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonNode}
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonKeyValue;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.deserializeBinaryFromReader);
      msg.addKeyValues(value);
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
proto.envoy.config.filter.http.graphql.v2.JsonNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.JsonNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonKeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated JsonKeyValue key_values = 1;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue>}
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.prototype.getKeyValuesList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonKeyValue, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue>} value */
proto.envoy.config.filter.http.graphql.v2.JsonNode.prototype.setKeyValuesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.JsonKeyValue}
 */
proto.envoy.config.filter.http.graphql.v2.JsonNode.prototype.addKeyValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.graphql.v2.JsonKeyValue, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.JsonNode.prototype.clearKeyValuesList = function() {
  this.setKeyValuesList([]);
};



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
proto.envoy.config.filter.http.graphql.v2.RequestTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.RequestTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.RequestTemplate.displayName = 'proto.envoy.config.filter.http.graphql.v2.RequestTemplate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.RequestTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.RequestTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.ValueProvider.toObject) : [],
    queryParamsMap: (f = msg.getQueryParamsMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.ValueProvider.toObject) : [],
    outgoingBody: (f = msg.getOutgoingBody()) && proto.envoy.config.filter.http.graphql.v2.JsonValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.RequestTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.RequestTemplate;
  return proto.envoy.config.filter.http.graphql.v2.RequestTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.RequestTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.RequestTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.ValueProvider.deserializeBinaryFromReader, "");
         });
      break;
    case 2:
      var value = msg.getQueryParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.ValueProvider.deserializeBinaryFromReader, "");
         });
      break;
    case 3:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonValue;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinaryFromReader);
      msg.setOutgoingBody(value);
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
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.RequestTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.RequestTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.ValueProvider.serializeBinaryToWriter);
  }
  f = message.getQueryParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.ValueProvider.serializeBinaryToWriter);
  }
  f = message.getOutgoingBody();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonValue.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, ValueProvider> headers = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.ValueProvider>}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.ValueProvider>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider));
};


proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
};


/**
 * map<string, ValueProvider> query_params = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.ValueProvider>}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.getQueryParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.ValueProvider>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.ValueProvider));
};


proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.clearQueryParamsMap = function() {
  this.getQueryParamsMap().clear();
};


/**
 * optional JsonValue outgoing_body = 3;
 * @return {?proto.envoy.config.filter.http.graphql.v2.JsonValue}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.getOutgoingBody = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.JsonValue} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonValue, 3));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.JsonValue|undefined} value */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.setOutgoingBody = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.clearOutgoingBody = function() {
  this.setOutgoingBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.RequestTemplate.prototype.hasOutgoingBody = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ResponseTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.displayName = 'proto.envoy.config.filter.http.graphql.v2.ResponseTemplate';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ResponseTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultRootList: jspb.Message.toObjectList(msg.getResultRootList(),
    proto.envoy.config.filter.http.graphql.v2.PathSegment.toObject, includeInstance),
    settersMap: (f = msg.getSettersMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.TemplatedPath.toObject) : []
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ResponseTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ResponseTemplate;
  return proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ResponseTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ResponseTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.PathSegment;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.PathSegment.deserializeBinaryFromReader);
      msg.addResultRoot(value);
      break;
    case 2:
      var value = msg.getSettersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.TemplatedPath.deserializeBinaryFromReader, "");
         });
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
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ResponseTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultRootList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.PathSegment.serializeBinaryToWriter
    );
  }
  f = message.getSettersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.TemplatedPath.serializeBinaryToWriter);
  }
};


/**
 * repeated PathSegment result_root = 1;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>}
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.getResultRootList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.PathSegment, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.PathSegment>} value */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.setResultRootList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.PathSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.PathSegment}
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.addResultRoot = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.graphql.v2.PathSegment, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.clearResultRootList = function() {
  this.setResultRootList([]);
};


/**
 * map<string, TemplatedPath> setters = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.TemplatedPath>}
 */
proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.getSettersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.TemplatedPath>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.TemplatedPath));
};


proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.prototype.clearSettersMap = function() {
  this.getSettersMap().clear();
};



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
proto.envoy.config.filter.http.graphql.v2.RESTResolver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.RESTResolver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.RESTResolver.displayName = 'proto.envoy.config.filter.http.graphql.v2.RESTResolver';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.RESTResolver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.RESTResolver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverUri: (f = msg.getServerUri()) && github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.toObject(includeInstance, f),
    requestTransform: (f = msg.getRequestTransform()) && proto.envoy.config.filter.http.graphql.v2.RequestTemplate.toObject(includeInstance, f),
    preExecutionTransform: (f = msg.getPreExecutionTransform()) && proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.toObject(includeInstance, f),
    spanName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.RESTResolver}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.RESTResolver;
  return proto.envoy.config.filter.http.graphql.v2.RESTResolver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.RESTResolver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.RESTResolver}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri;
      reader.readMessage(value,github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.deserializeBinaryFromReader);
      msg.setServerUri(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.RequestTemplate;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.RequestTemplate.deserializeBinaryFromReader);
      msg.setRequestTransform(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.http.graphql.v2.ResponseTemplate;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.deserializeBinaryFromReader);
      msg.setPreExecutionTransform(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpanName(value);
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
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.RESTResolver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.RESTResolver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerUri();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.serializeBinaryToWriter
    );
  }
  f = message.getRequestTransform();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.RequestTemplate.serializeBinaryToWriter
    );
  }
  f = message.getPreExecutionTransform();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.http.graphql.v2.ResponseTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSpanName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional solo.io.envoy.config.core.v3.HttpUri server_uri = 1;
 * @return {?proto.solo.io.envoy.config.core.v3.HttpUri}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.getServerUri = function() {
  return /** @type{?proto.solo.io.envoy.config.core.v3.HttpUri} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri, 1));
};


/** @param {?proto.solo.io.envoy.config.core.v3.HttpUri|undefined} value */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.setServerUri = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.clearServerUri = function() {
  this.setServerUri(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.hasServerUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RequestTemplate request_transform = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.RequestTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.getRequestTransform = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.RequestTemplate} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.RequestTemplate, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.RequestTemplate|undefined} value */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.setRequestTransform = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.clearRequestTransform = function() {
  this.setRequestTransform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.hasRequestTransform = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResponseTemplate pre_execution_transform = 3;
 * @return {?proto.envoy.config.filter.http.graphql.v2.ResponseTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.getPreExecutionTransform = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.ResponseTemplate} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.ResponseTemplate, 3));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.ResponseTemplate|undefined} value */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.setPreExecutionTransform = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.clearPreExecutionTransform = function() {
  this.setPreExecutionTransform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.hasPreExecutionTransform = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string span_name = 4;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.getSpanName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.RESTResolver.prototype.setSpanName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



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
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.displayName = 'proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    outgoingMessageJson: (f = msg.getOutgoingMessageJson()) && proto.envoy.config.filter.http.graphql.v2.JsonValue.toObject(includeInstance, f),
    serviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    methodName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    requestMetadataMap: (f = msg.getRequestMetadataMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate;
  return proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.JsonValue;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.JsonValue.deserializeBinaryFromReader);
      msg.setOutgoingMessageJson(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 4:
      var value = msg.getRequestMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutgoingMessageJson();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.JsonValue.serializeBinaryToWriter
    );
  }
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequestMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional JsonValue outgoing_message_json = 1;
 * @return {?proto.envoy.config.filter.http.graphql.v2.JsonValue}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.getOutgoingMessageJson = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.JsonValue} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.JsonValue, 1));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.JsonValue|undefined} value */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.setOutgoingMessageJson = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.clearOutgoingMessageJson = function() {
  this.setOutgoingMessageJson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.hasOutgoingMessageJson = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string service_name = 2;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.setServiceName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string method_name = 3;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.setMethodName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> request_metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.getRequestMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.prototype.clearRequestMetadataMap = function() {
  this.getRequestMetadataMap().clear();
};



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
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.displayName = 'proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.toObject = function(includeInstance, msg) {
  var f, obj = {
    protoDescriptors: (f = msg.getProtoDescriptors()) && github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry;
  return proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource;
      reader.readMessage(value,github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource.deserializeBinaryFromReader);
      msg.setProtoDescriptors(value);
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
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtoDescriptors();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional solo.io.envoy.config.core.v3.DataSource proto_descriptors = 1;
 * @return {?proto.solo.io.envoy.config.core.v3.DataSource}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.prototype.getProtoDescriptors = function() {
  return /** @type{?proto.solo.io.envoy.config.core.v3.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource, 1));
};


/** @param {?proto.solo.io.envoy.config.core.v3.DataSource|undefined} value */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.prototype.setProtoDescriptors = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.prototype.clearProtoDescriptors = function() {
  this.setProtoDescriptors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcDescriptorRegistry.prototype.hasProtoDescriptors = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.GrpcResolver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.GrpcResolver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.GrpcResolver.displayName = 'proto.envoy.config.filter.http.graphql.v2.GrpcResolver';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.GrpcResolver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcResolver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverUri: (f = msg.getServerUri()) && github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.toObject(includeInstance, f),
    requestTransform: (f = msg.getRequestTransform()) && proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.toObject(includeInstance, f),
    spanName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.GrpcResolver}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.GrpcResolver;
  return proto.envoy.config.filter.http.graphql.v2.GrpcResolver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcResolver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.GrpcResolver}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri;
      reader.readMessage(value,github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.deserializeBinaryFromReader);
      msg.setServerUri(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.deserializeBinaryFromReader);
      msg.setRequestTransform(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpanName(value);
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
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.GrpcResolver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GrpcResolver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerUri();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.serializeBinaryToWriter
    );
  }
  f = message.getRequestTransform();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSpanName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional solo.io.envoy.config.core.v3.HttpUri server_uri = 1;
 * @return {?proto.solo.io.envoy.config.core.v3.HttpUri}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.getServerUri = function() {
  return /** @type{?proto.solo.io.envoy.config.core.v3.HttpUri} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri, 1));
};


/** @param {?proto.solo.io.envoy.config.core.v3.HttpUri|undefined} value */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.setServerUri = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.clearServerUri = function() {
  this.setServerUri(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.hasServerUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GrpcRequestTemplate request_transform = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.getRequestTransform = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.GrpcRequestTemplate|undefined} value */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.setRequestTransform = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.clearRequestTransform = function() {
  this.setRequestTransform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.hasRequestTransform = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string span_name = 4;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.getSpanName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.GrpcResolver.prototype.setSpanName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



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
proto.envoy.config.filter.http.graphql.v2.StaticResolver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.StaticResolver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.StaticResolver.displayName = 'proto.envoy.config.filter.http.graphql.v2.StaticResolver';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  SYNC_RESPONSE: 1,
  ASYNC_RESPONSE: 2,
  ERROR_RESPONSE: 3
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.StaticResolver.ResponseCase}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.getResponseCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.StaticResolver.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.StaticResolver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.StaticResolver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.toObject = function(includeInstance, msg) {
  var f, obj = {
    syncResponse: jspb.Message.getFieldWithDefault(msg, 1, ""),
    asyncResponse: (f = msg.getAsyncResponse()) && proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.toObject(includeInstance, f),
    errorResponse: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.StaticResolver}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.StaticResolver;
  return proto.envoy.config.filter.http.graphql.v2.StaticResolver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.StaticResolver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.StaticResolver}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSyncResponse(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.deserializeBinaryFromReader);
      msg.setAsyncResponse(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorResponse(value);
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
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.StaticResolver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.StaticResolver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAsyncResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};



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
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.displayName = 'proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: jspb.Message.getFieldWithDefault(msg, 1, ""),
    delayMs: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse;
  return proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponse(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDelayMs(value);
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
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDelayMs();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string response = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.prototype.getResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.prototype.setResponse = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 delay_ms = 2;
 * @return {number}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.prototype.getDelayMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse.prototype.setDelayMs = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string sync_response = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.getSyncResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.setSyncResponse = function(value) {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.clearSyncResponse = function() {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.hasSyncResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AsyncResponse async_response = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.getAsyncResponse = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.StaticResolver.AsyncResponse|undefined} value */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.setAsyncResponse = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.clearAsyncResponse = function() {
  this.setAsyncResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.hasAsyncResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_response = 3;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.getErrorResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.setErrorResponse = function(value) {
  jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.clearErrorResponse = function() {
  jspb.Message.setOneofField(this, 3, proto.envoy.config.filter.http.graphql.v2.StaticResolver.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.StaticResolver.prototype.hasErrorResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.displayName = 'proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver}
 */
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver;
  return proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver}
 */
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.AbstractTypeResolver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.envoy.config.filter.http.graphql.v2.QueryMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.QueryMatcher.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.QueryMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.QueryMatcher.displayName = 'proto.envoy.config.filter.http.graphql.v2.QueryMatcher';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.MatchCase = {
  MATCH_NOT_SET: 0,
  FIELD_MATCHER: 1
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.QueryMatcher.MatchCase}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.getMatchCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.QueryMatcher.MatchCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.QueryMatcher.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.QueryMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldMatcher: (f = msg.getFieldMatcher()) && proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.QueryMatcher;
  return proto.envoy.config.filter.http.graphql.v2.QueryMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.deserializeBinaryFromReader);
      msg.setFieldMatcher(value);
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
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.QueryMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldMatcher();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.serializeBinaryToWriter
    );
  }
};



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
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.displayName = 'proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    field: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher;
  return proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
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
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher.prototype.setField = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional FieldMatcher field_matcher = 1;
 * @return {?proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.getFieldMatcher = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher, 1));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.QueryMatcher.FieldMatcher|undefined} value */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.setFieldMatcher = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.envoy.config.filter.http.graphql.v2.QueryMatcher.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.clearFieldMatcher = function() {
  this.setFieldMatcher(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.QueryMatcher.prototype.hasFieldMatcher = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.Resolution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Resolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Resolution.displayName = 'proto.envoy.config.filter.http.graphql.v2.Resolution';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Resolution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Resolution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.toObject = function(includeInstance, msg) {
  var f, obj = {
    matcher: (f = msg.getMatcher()) && proto.envoy.config.filter.http.graphql.v2.QueryMatcher.toObject(includeInstance, f),
    resolver: (f = msg.getResolver()) && github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_extension_pb.TypedExtensionConfig.toObject(includeInstance, f),
    statPrefix: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cacheControl: (f = msg.getCacheControl()) && proto.envoy.config.filter.http.graphql.v2.CacheControl.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Resolution}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Resolution;
  return proto.envoy.config.filter.http.graphql.v2.Resolution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Resolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Resolution}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.QueryMatcher;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.QueryMatcher.deserializeBinaryFromReader);
      msg.setMatcher(value);
      break;
    case 2:
      var value = new github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_extension_pb.TypedExtensionConfig;
      reader.readMessage(value,github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_extension_pb.TypedExtensionConfig.deserializeBinaryFromReader);
      msg.setResolver(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatPrefix(value);
      break;
    case 4:
      var value = new proto.envoy.config.filter.http.graphql.v2.CacheControl;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.CacheControl.deserializeBinaryFromReader);
      msg.setCacheControl(value);
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
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Resolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Resolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatcher();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.QueryMatcher.serializeBinaryToWriter
    );
  }
  f = message.getResolver();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_extension_pb.TypedExtensionConfig.serializeBinaryToWriter
    );
  }
  f = message.getStatPrefix();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCacheControl();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.config.filter.http.graphql.v2.CacheControl.serializeBinaryToWriter
    );
  }
};


/**
 * optional QueryMatcher matcher = 1;
 * @return {?proto.envoy.config.filter.http.graphql.v2.QueryMatcher}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.getMatcher = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.QueryMatcher} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.QueryMatcher, 1));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.QueryMatcher|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.setMatcher = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.clearMatcher = function() {
  this.setMatcher(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.hasMatcher = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional solo.io.envoy.config.core.v3.TypedExtensionConfig resolver = 2;
 * @return {?proto.solo.io.envoy.config.core.v3.TypedExtensionConfig}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.getResolver = function() {
  return /** @type{?proto.solo.io.envoy.config.core.v3.TypedExtensionConfig} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_extension_pb.TypedExtensionConfig, 2));
};


/** @param {?proto.solo.io.envoy.config.core.v3.TypedExtensionConfig|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.setResolver = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.clearResolver = function() {
  this.setResolver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.hasResolver = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string stat_prefix = 3;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.getStatPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.setStatPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CacheControl cache_control = 4;
 * @return {?proto.envoy.config.filter.http.graphql.v2.CacheControl}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.getCacheControl = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.CacheControl} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.CacheControl, 4));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.CacheControl|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.setCacheControl = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.clearCacheControl = function() {
  this.setCacheControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Resolution.prototype.hasCacheControl = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.CacheControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.CacheControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.CacheControl.displayName = 'proto.envoy.config.filter.http.graphql.v2.CacheControl';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.CacheControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.CacheControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxAge: (f = msg.getMaxAge()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    scope: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inheritMaxAge: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.CacheControl}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.CacheControl;
  return proto.envoy.config.filter.http.graphql.v2.CacheControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.CacheControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.CacheControl}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxAge(value);
      break;
    case 2:
      var value = /** @type {!proto.envoy.config.filter.http.graphql.v2.CacheControl.CacheControlScope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInheritMaxAge(value);
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
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.CacheControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.CacheControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxAge();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getScope();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getInheritMaxAge();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.CacheControlScope = {
  UNSET: 0,
  PUBLIC: 1,
  PRIVATE: 2
};

/**
 * optional google.protobuf.UInt32Value max_age = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.getMaxAge = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.setMaxAge = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.clearMaxAge = function() {
  this.setMaxAge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.hasMaxAge = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CacheControlScope scope = 2;
 * @return {!proto.envoy.config.filter.http.graphql.v2.CacheControl.CacheControlScope}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.getScope = function() {
  return /** @type {!proto.envoy.config.filter.http.graphql.v2.CacheControl.CacheControlScope} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.envoy.config.filter.http.graphql.v2.CacheControl.CacheControlScope} value */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.setScope = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool inherit_max_age = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.getInheritMaxAge = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.graphql.v2.CacheControl.prototype.setInheritMaxAge = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



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
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.GraphQLConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.displayName = 'proto.envoy.config.filter.http.graphql.v2.GraphQLConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.GraphQLConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.config.filter.http.graphql.v2.GraphQLConfig}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.GraphQLConfig;
  return proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GraphQLConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.GraphQLConfig}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GraphQLConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.displayName = 'proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    executableSchema: (f = msg.getExecutableSchema()) && proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.toObject(includeInstance, f),
    statPrefix: jspb.Message.getFieldWithDefault(msg, 5, ""),
    persistedQueryCacheConfig: (f = msg.getPersistedQueryCacheConfig()) && proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.toObject(includeInstance, f),
    allowedQueryHashesList: jspb.Message.getRepeatedField(msg, 7)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig;
  return proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.envoy.config.filter.http.graphql.v2.ExecutableSchema;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.deserializeBinaryFromReader);
      msg.setExecutableSchema(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatPrefix(value);
      break;
    case 6:
      var value = new proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.deserializeBinaryFromReader);
      msg.setPersistedQueryCacheConfig(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedQueryHashes(value);
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
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutableSchema();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.serializeBinaryToWriter
    );
  }
  f = message.getStatPrefix();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPersistedQueryCacheConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.serializeBinaryToWriter
    );
  }
  f = message.getAllowedQueryHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional ExecutableSchema executable_schema = 4;
 * @return {?proto.envoy.config.filter.http.graphql.v2.ExecutableSchema}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.getExecutableSchema = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.ExecutableSchema} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.ExecutableSchema, 4));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.ExecutableSchema|undefined} value */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.setExecutableSchema = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.clearExecutableSchema = function() {
  this.setExecutableSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.hasExecutableSchema = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string stat_prefix = 5;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.getStatPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.setStatPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional PersistedQueryCacheConfig persisted_query_cache_config = 6;
 * @return {?proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.getPersistedQueryCacheConfig = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig, 6));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig|undefined} value */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.setPersistedQueryCacheConfig = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.clearPersistedQueryCacheConfig = function() {
  this.setPersistedQueryCacheConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.hasPersistedQueryCacheConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string allowed_query_hashes = 7;
 * @return {!Array<string>}
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.getAllowedQueryHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.setAllowedQueryHashesList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.addAllowedQueryHashes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.GraphQLRouteConfig.prototype.clearAllowedQueryHashesList = function() {
  this.setAllowedQueryHashesList([]);
};



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
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.displayName = 'proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    cacheSize: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig}
 */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig;
  return proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig}
 */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCacheSize(value);
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
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCacheSize();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 cache_size = 1;
 * @return {number}
 */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.prototype.getCacheSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.envoy.config.filter.http.graphql.v2.PersistedQueryCacheConfig.prototype.setCacheSize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



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
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.ExecutableSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.displayName = 'proto.envoy.config.filter.http.graphql.v2.ExecutableSchema';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.ExecutableSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemaDefinition: (f = msg.getSchemaDefinition()) && github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource.toObject(includeInstance, f),
    executor: (f = msg.getExecutor()) && proto.envoy.config.filter.http.graphql.v2.Executor.toObject(includeInstance, f),
    extensionsMap: (f = msg.getExtensionsMap()) ? f.toObject(includeInstance, proto.google.protobuf.Any.toObject) : [],
    logRequestResponseInfo: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.ExecutableSchema}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.ExecutableSchema;
  return proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ExecutableSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.ExecutableSchema}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource;
      reader.readMessage(value,github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource.deserializeBinaryFromReader);
      msg.setSchemaDefinition(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.Executor;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.Executor.deserializeBinaryFromReader);
      msg.setExecutor(value);
      break;
    case 3:
      var value = msg.getExtensionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Any.deserializeBinaryFromReader, "");
         });
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLogRequestResponseInfo(value);
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
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.ExecutableSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchemaDefinition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getExecutor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.Executor.serializeBinaryToWriter
    );
  }
  f = message.getExtensionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Any.serializeBinaryToWriter);
  }
  f = message.getLogRequestResponseInfo();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional solo.io.envoy.config.core.v3.DataSource schema_definition = 1;
 * @return {?proto.solo.io.envoy.config.core.v3.DataSource}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.getSchemaDefinition = function() {
  return /** @type{?proto.solo.io.envoy.config.core.v3.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_base_pb.DataSource, 1));
};


/** @param {?proto.solo.io.envoy.config.core.v3.DataSource|undefined} value */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.setSchemaDefinition = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.clearSchemaDefinition = function() {
  this.setSchemaDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.hasSchemaDefinition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Executor executor = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.Executor}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.getExecutor = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.Executor} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.Executor, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.Executor|undefined} value */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.setExecutor = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.clearExecutor = function() {
  this.setExecutor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.hasExecutor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, google.protobuf.Any> extensions = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Any>}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.getExtensionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Any>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.google.protobuf.Any));
};


proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.clearExtensionsMap = function() {
  this.getExtensionsMap().clear();
};


/**
 * optional bool log_request_response_info = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.getLogRequestResponseInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.graphql.v2.ExecutableSchema.prototype.setLogRequestResponseInfo = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



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
proto.envoy.config.filter.http.graphql.v2.Executor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.Executor.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Executor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Executor.displayName = 'proto.envoy.config.filter.http.graphql.v2.Executor';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.Executor.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.ExecutorCase = {
  EXECUTOR_NOT_SET: 0,
  LOCAL: 1,
  REMOTE: 2
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.Executor.ExecutorCase}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.getExecutorCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.Executor.ExecutorCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.Executor.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Executor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.toObject = function(includeInstance, msg) {
  var f, obj = {
    local: (f = msg.getLocal()) && proto.envoy.config.filter.http.graphql.v2.Executor.Local.toObject(includeInstance, f),
    remote: (f = msg.getRemote()) && proto.envoy.config.filter.http.graphql.v2.Executor.Remote.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Executor;
  return proto.envoy.config.filter.http.graphql.v2.Executor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.Executor.Local;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.Executor.Local.deserializeBinaryFromReader);
      msg.setLocal(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.Executor.Remote.deserializeBinaryFromReader);
      msg.setRemote(value);
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
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Executor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.Executor.Local.serializeBinaryToWriter
    );
  }
  f = message.getRemote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.Executor.Remote.serializeBinaryToWriter
    );
  }
};



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
proto.envoy.config.filter.http.graphql.v2.Executor.Local = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.graphql.v2.Executor.Local.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Executor.Local, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Executor.Local.displayName = 'proto.envoy.config.filter.http.graphql.v2.Executor.Local';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Executor.Local.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Local} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.toObject = function(includeInstance, msg) {
  var f, obj = {
    resolutionsList: jspb.Message.toObjectList(msg.getResolutionsList(),
    proto.envoy.config.filter.http.graphql.v2.Resolution.toObject, includeInstance),
    enableIntrospection: jspb.Message.getFieldWithDefault(msg, 2, false),
    maxDepth: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Local}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Executor.Local;
  return proto.envoy.config.filter.http.graphql.v2.Executor.Local.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Local} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Local}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.graphql.v2.Resolution;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.Resolution.deserializeBinaryFromReader);
      msg.addResolutions(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableIntrospection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxDepth(value);
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
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Executor.Local.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Local} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResolutionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.graphql.v2.Resolution.serializeBinaryToWriter
    );
  }
  f = message.getEnableIntrospection();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMaxDepth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * repeated Resolution resolutions = 1;
 * @return {!Array<!proto.envoy.config.filter.http.graphql.v2.Resolution>}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.getResolutionsList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.graphql.v2.Resolution>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.graphql.v2.Resolution, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.graphql.v2.Resolution>} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.setResolutionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.graphql.v2.Resolution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.graphql.v2.Resolution}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.addResolutions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.graphql.v2.Resolution, opt_index);
};


proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.clearResolutionsList = function() {
  this.setResolutionsList([]);
};


/**
 * optional bool enable_introspection = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.getEnableIntrospection = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.setEnableIntrospection = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 max_depth = 3;
 * @return {number}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Local.prototype.setMaxDepth = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Executor.Remote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.displayName = 'proto.envoy.config.filter.http.graphql.v2.Executor.Remote';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverUri: (f = msg.getServerUri()) && github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.toObject(includeInstance, f),
    spanName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote;
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri;
      reader.readMessage(value,github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.deserializeBinaryFromReader);
      msg.setServerUri(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpanName(value);
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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerUri();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.serializeBinaryToWriter
    );
  }
  f = message.getSpanName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};



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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.displayName = 'proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.ExtractionTypeCase = {
  EXTRACTION_TYPE_NOT_SET: 0,
  VALUE: 1,
  HEADER: 2,
  DYNAMIC_METADATA: 3
};

/**
 * @return {proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.ExtractionTypeCase}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.getExtractionTypeCase = function() {
  return /** @type {proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.ExtractionTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    header: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dynamicMetadata: (f = msg.getDynamicMetadata()) && proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction;
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction;
      reader.readMessage(value,proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.deserializeBinaryFromReader);
      msg.setDynamicMetadata(value);
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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDynamicMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.serializeBinaryToWriter
    );
  }
};



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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.displayName = 'proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction;
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string metadata_namespace = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.prototype.getMetadataNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.prototype.setMetadataNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.setValue = function(value) {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.clearValue = function() {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string header = 2;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.setHeader = function(value) {
  jspb.Message.setOneofField(this, 2, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.clearHeader = function() {
  jspb.Message.setOneofField(this, 2, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DynamicMetadataExtraction dynamic_metadata = 3;
 * @return {?proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.getDynamicMetadata = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction, 3));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.DynamicMetadataExtraction|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.setDynamicMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.clearDynamicMetadata = function() {
  this.setDynamicMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.prototype.hasDynamicMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.displayName = 'proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.toObject) : [],
    queryParamsMap: (f = msg.getQueryParamsMap()) ? f.toObject(includeInstance, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.toObject) : []
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
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest;
  return proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.deserializeBinaryFromReader, "");
         });
      break;
    case 3:
      var value = msg.getQueryParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.deserializeBinaryFromReader, "");
         });
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
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.serializeBinaryToWriter);
  }
  f = message.getQueryParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction.serializeBinaryToWriter);
  }
};


/**
 * map<string, Extraction> headers = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction>}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction));
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
};


/**
 * map<string, Extraction> query_params = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction>}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.prototype.getQueryParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.envoy.config.filter.http.graphql.v2.Executor.Remote.Extraction));
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest.prototype.clearQueryParamsMap = function() {
  this.getQueryParamsMap().clear();
};


/**
 * optional solo.io.envoy.config.core.v3.HttpUri server_uri = 1;
 * @return {?proto.solo.io.envoy.config.core.v3.HttpUri}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.getServerUri = function() {
  return /** @type{?proto.solo.io.envoy.config.core.v3.HttpUri} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$apis_api_gloo_gloo_external_envoy_config_core_v3_http_uri_pb.HttpUri, 1));
};


/** @param {?proto.solo.io.envoy.config.core.v3.HttpUri|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.setServerUri = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.clearServerUri = function() {
  this.setServerUri(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.hasServerUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RemoteSchemaRequest request = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.getRequest = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.Executor.Remote.RemoteSchemaRequest|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string span_name = 3;
 * @return {string}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.getSpanName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.graphql.v2.Executor.Remote.prototype.setSpanName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Local local = 1;
 * @return {?proto.envoy.config.filter.http.graphql.v2.Executor.Local}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.getLocal = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.Executor.Local} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.Executor.Local, 1));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.Executor.Local|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.setLocal = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.envoy.config.filter.http.graphql.v2.Executor.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.prototype.clearLocal = function() {
  this.setLocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.hasLocal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Remote remote = 2;
 * @return {?proto.envoy.config.filter.http.graphql.v2.Executor.Remote}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.getRemote = function() {
  return /** @type{?proto.envoy.config.filter.http.graphql.v2.Executor.Remote} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.graphql.v2.Executor.Remote, 2));
};


/** @param {?proto.envoy.config.filter.http.graphql.v2.Executor.Remote|undefined} value */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.setRemote = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.filter.http.graphql.v2.Executor.oneofGroups_[0], value);
};


proto.envoy.config.filter.http.graphql.v2.Executor.prototype.clearRemote = function() {
  this.setRemote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.envoy.config.filter.http.graphql.v2.Executor.prototype.hasRemote = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.http.graphql.v2);
