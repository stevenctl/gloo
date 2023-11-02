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

var github_com_solo$io_solo$kit_api_v1_ref_pb = require('../../../../../../../../../../github.com/solo-io/solo-kit/api/v1/ref_pb.js');
var validate_validate_pb = require('../../../../../../../../../../validate/validate_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.exportSymbol('proto.tap.options.gloo.solo.io.GrpcService', null, global);
goog.exportSymbol('proto.tap.options.gloo.solo.io.HttpService', null, global);
goog.exportSymbol('proto.tap.options.gloo.solo.io.Sink', null, global);
goog.exportSymbol('proto.tap.options.gloo.solo.io.Tap', null, global);

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
proto.tap.options.gloo.solo.io.Tap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tap.options.gloo.solo.io.Tap.repeatedFields_, null);
};
goog.inherits(proto.tap.options.gloo.solo.io.Tap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tap.options.gloo.solo.io.Tap.displayName = 'proto.tap.options.gloo.solo.io.Tap';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tap.options.gloo.solo.io.Tap.repeatedFields_ = [1];



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
proto.tap.options.gloo.solo.io.Tap.prototype.toObject = function(opt_includeInstance) {
  return proto.tap.options.gloo.solo.io.Tap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tap.options.gloo.solo.io.Tap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.Tap.toObject = function(includeInstance, msg) {
  var f, obj = {
    sinksList: jspb.Message.toObjectList(msg.getSinksList(),
    proto.tap.options.gloo.solo.io.Sink.toObject, includeInstance)
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
 * @return {!proto.tap.options.gloo.solo.io.Tap}
 */
proto.tap.options.gloo.solo.io.Tap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tap.options.gloo.solo.io.Tap;
  return proto.tap.options.gloo.solo.io.Tap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tap.options.gloo.solo.io.Tap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tap.options.gloo.solo.io.Tap}
 */
proto.tap.options.gloo.solo.io.Tap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tap.options.gloo.solo.io.Sink;
      reader.readMessage(value,proto.tap.options.gloo.solo.io.Sink.deserializeBinaryFromReader);
      msg.addSinks(value);
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
proto.tap.options.gloo.solo.io.Tap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tap.options.gloo.solo.io.Tap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tap.options.gloo.solo.io.Tap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.Tap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tap.options.gloo.solo.io.Sink.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Sink sinks = 1;
 * @return {!Array<!proto.tap.options.gloo.solo.io.Sink>}
 */
proto.tap.options.gloo.solo.io.Tap.prototype.getSinksList = function() {
  return /** @type{!Array<!proto.tap.options.gloo.solo.io.Sink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tap.options.gloo.solo.io.Sink, 1));
};


/** @param {!Array<!proto.tap.options.gloo.solo.io.Sink>} value */
proto.tap.options.gloo.solo.io.Tap.prototype.setSinksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tap.options.gloo.solo.io.Sink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tap.options.gloo.solo.io.Sink}
 */
proto.tap.options.gloo.solo.io.Tap.prototype.addSinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tap.options.gloo.solo.io.Sink, opt_index);
};


proto.tap.options.gloo.solo.io.Tap.prototype.clearSinksList = function() {
  this.setSinksList([]);
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
proto.tap.options.gloo.solo.io.Sink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tap.options.gloo.solo.io.Sink.oneofGroups_);
};
goog.inherits(proto.tap.options.gloo.solo.io.Sink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tap.options.gloo.solo.io.Sink.displayName = 'proto.tap.options.gloo.solo.io.Sink';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tap.options.gloo.solo.io.Sink.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tap.options.gloo.solo.io.Sink.SinktypeCase = {
  SINKTYPE_NOT_SET: 0,
  GRPC_SERVICE: 1,
  HTTP_SERVICE: 2
};

/**
 * @return {proto.tap.options.gloo.solo.io.Sink.SinktypeCase}
 */
proto.tap.options.gloo.solo.io.Sink.prototype.getSinktypeCase = function() {
  return /** @type {proto.tap.options.gloo.solo.io.Sink.SinktypeCase} */(jspb.Message.computeOneofCase(this, proto.tap.options.gloo.solo.io.Sink.oneofGroups_[0]));
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
proto.tap.options.gloo.solo.io.Sink.prototype.toObject = function(opt_includeInstance) {
  return proto.tap.options.gloo.solo.io.Sink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tap.options.gloo.solo.io.Sink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.Sink.toObject = function(includeInstance, msg) {
  var f, obj = {
    grpcService: (f = msg.getGrpcService()) && proto.tap.options.gloo.solo.io.GrpcService.toObject(includeInstance, f),
    httpService: (f = msg.getHttpService()) && proto.tap.options.gloo.solo.io.HttpService.toObject(includeInstance, f)
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
 * @return {!proto.tap.options.gloo.solo.io.Sink}
 */
proto.tap.options.gloo.solo.io.Sink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tap.options.gloo.solo.io.Sink;
  return proto.tap.options.gloo.solo.io.Sink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tap.options.gloo.solo.io.Sink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tap.options.gloo.solo.io.Sink}
 */
proto.tap.options.gloo.solo.io.Sink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tap.options.gloo.solo.io.GrpcService;
      reader.readMessage(value,proto.tap.options.gloo.solo.io.GrpcService.deserializeBinaryFromReader);
      msg.setGrpcService(value);
      break;
    case 2:
      var value = new proto.tap.options.gloo.solo.io.HttpService;
      reader.readMessage(value,proto.tap.options.gloo.solo.io.HttpService.deserializeBinaryFromReader);
      msg.setHttpService(value);
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
proto.tap.options.gloo.solo.io.Sink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tap.options.gloo.solo.io.Sink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tap.options.gloo.solo.io.Sink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.Sink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrpcService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tap.options.gloo.solo.io.GrpcService.serializeBinaryToWriter
    );
  }
  f = message.getHttpService();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tap.options.gloo.solo.io.HttpService.serializeBinaryToWriter
    );
  }
};


/**
 * optional GrpcService grpc_service = 1;
 * @return {?proto.tap.options.gloo.solo.io.GrpcService}
 */
proto.tap.options.gloo.solo.io.Sink.prototype.getGrpcService = function() {
  return /** @type{?proto.tap.options.gloo.solo.io.GrpcService} */ (
    jspb.Message.getWrapperField(this, proto.tap.options.gloo.solo.io.GrpcService, 1));
};


/** @param {?proto.tap.options.gloo.solo.io.GrpcService|undefined} value */
proto.tap.options.gloo.solo.io.Sink.prototype.setGrpcService = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tap.options.gloo.solo.io.Sink.oneofGroups_[0], value);
};


proto.tap.options.gloo.solo.io.Sink.prototype.clearGrpcService = function() {
  this.setGrpcService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tap.options.gloo.solo.io.Sink.prototype.hasGrpcService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HttpService http_service = 2;
 * @return {?proto.tap.options.gloo.solo.io.HttpService}
 */
proto.tap.options.gloo.solo.io.Sink.prototype.getHttpService = function() {
  return /** @type{?proto.tap.options.gloo.solo.io.HttpService} */ (
    jspb.Message.getWrapperField(this, proto.tap.options.gloo.solo.io.HttpService, 2));
};


/** @param {?proto.tap.options.gloo.solo.io.HttpService|undefined} value */
proto.tap.options.gloo.solo.io.Sink.prototype.setHttpService = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tap.options.gloo.solo.io.Sink.oneofGroups_[0], value);
};


proto.tap.options.gloo.solo.io.Sink.prototype.clearHttpService = function() {
  this.setHttpService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tap.options.gloo.solo.io.Sink.prototype.hasHttpService = function() {
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
proto.tap.options.gloo.solo.io.GrpcService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tap.options.gloo.solo.io.GrpcService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tap.options.gloo.solo.io.GrpcService.displayName = 'proto.tap.options.gloo.solo.io.GrpcService';
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
proto.tap.options.gloo.solo.io.GrpcService.prototype.toObject = function(opt_includeInstance) {
  return proto.tap.options.gloo.solo.io.GrpcService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tap.options.gloo.solo.io.GrpcService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.GrpcService.toObject = function(includeInstance, msg) {
  var f, obj = {
    tapServer: (f = msg.getTapServer()) && github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef.toObject(includeInstance, f)
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
 * @return {!proto.tap.options.gloo.solo.io.GrpcService}
 */
proto.tap.options.gloo.solo.io.GrpcService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tap.options.gloo.solo.io.GrpcService;
  return proto.tap.options.gloo.solo.io.GrpcService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tap.options.gloo.solo.io.GrpcService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tap.options.gloo.solo.io.GrpcService}
 */
proto.tap.options.gloo.solo.io.GrpcService.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef;
      reader.readMessage(value,github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef.deserializeBinaryFromReader);
      msg.setTapServer(value);
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
proto.tap.options.gloo.solo.io.GrpcService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tap.options.gloo.solo.io.GrpcService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tap.options.gloo.solo.io.GrpcService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.GrpcService.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTapServer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional core.solo.io.ResourceRef tap_server = 1;
 * @return {?proto.core.solo.io.ResourceRef}
 */
proto.tap.options.gloo.solo.io.GrpcService.prototype.getTapServer = function() {
  return /** @type{?proto.core.solo.io.ResourceRef} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef, 1));
};


/** @param {?proto.core.solo.io.ResourceRef|undefined} value */
proto.tap.options.gloo.solo.io.GrpcService.prototype.setTapServer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tap.options.gloo.solo.io.GrpcService.prototype.clearTapServer = function() {
  this.setTapServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tap.options.gloo.solo.io.GrpcService.prototype.hasTapServer = function() {
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
proto.tap.options.gloo.solo.io.HttpService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tap.options.gloo.solo.io.HttpService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tap.options.gloo.solo.io.HttpService.displayName = 'proto.tap.options.gloo.solo.io.HttpService';
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
proto.tap.options.gloo.solo.io.HttpService.prototype.toObject = function(opt_includeInstance) {
  return proto.tap.options.gloo.solo.io.HttpService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tap.options.gloo.solo.io.HttpService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.HttpService.toObject = function(includeInstance, msg) {
  var f, obj = {
    tapServer: (f = msg.getTapServer()) && github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.tap.options.gloo.solo.io.HttpService}
 */
proto.tap.options.gloo.solo.io.HttpService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tap.options.gloo.solo.io.HttpService;
  return proto.tap.options.gloo.solo.io.HttpService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tap.options.gloo.solo.io.HttpService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tap.options.gloo.solo.io.HttpService}
 */
proto.tap.options.gloo.solo.io.HttpService.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef;
      reader.readMessage(value,github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef.deserializeBinaryFromReader);
      msg.setTapServer(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
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
proto.tap.options.gloo.solo.io.HttpService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tap.options.gloo.solo.io.HttpService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tap.options.gloo.solo.io.HttpService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tap.options.gloo.solo.io.HttpService.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTapServer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional core.solo.io.ResourceRef tap_server = 1;
 * @return {?proto.core.solo.io.ResourceRef}
 */
proto.tap.options.gloo.solo.io.HttpService.prototype.getTapServer = function() {
  return /** @type{?proto.core.solo.io.ResourceRef} */ (
    jspb.Message.getWrapperField(this, github_com_solo$io_solo$kit_api_v1_ref_pb.ResourceRef, 1));
};


/** @param {?proto.core.solo.io.ResourceRef|undefined} value */
proto.tap.options.gloo.solo.io.HttpService.prototype.setTapServer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tap.options.gloo.solo.io.HttpService.prototype.clearTapServer = function() {
  this.setTapServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tap.options.gloo.solo.io.HttpService.prototype.hasTapServer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.tap.options.gloo.solo.io.HttpService.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.tap.options.gloo.solo.io.HttpService.prototype.setTimeout = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tap.options.gloo.solo.io.HttpService.prototype.clearTimeout = function() {
  this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tap.options.gloo.solo.io.HttpService.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.tap.options.gloo.solo.io);
