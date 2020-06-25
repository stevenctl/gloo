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

var gogoproto_gogo_pb = require('../../../../../gogoproto/gogo_pb.js');
var extproto_ext_pb = require('../../../../../protoc-gen-ext/extproto/ext_pb.js');
var solo$kit_api_v1_metadata_pb = require('../../../../../solo-kit/api/v1/metadata_pb.js');
var gloo_projects_gloo_api_v1_ssl_pb = require('../../../../../gloo/projects/gloo/api/v1/ssl_pb.js');
var gloo_projects_gloo_api_v1_circuit_breaker_pb = require('../../../../../gloo/projects/gloo/api/v1/circuit_breaker_pb.js');
var gloo_projects_gloo_api_v1_load_balancer_pb = require('../../../../../gloo/projects/gloo/api/v1/load_balancer_pb.js');
var gloo_projects_gloo_api_v1_connection_pb = require('../../../../../gloo/projects/gloo/api/v1/connection_pb.js');
var gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb = require('../../../../../gloo/projects/gloo/api/external/envoy/api/v2/core/health_check_pb.js');
var solo$kit_api_v1_status_pb = require('../../../../../solo-kit/api/v1/status_pb.js');
var gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb = require('../../../../../gloo/projects/gloo/api/external/envoy/api/v2/cluster/outlier_detection_pb.js');
var solo$kit_api_v1_solo$kit_pb = require('../../../../../solo-kit/api/v1/solo-kit_pb.js');
var gloo_projects_gloo_api_v1_options_static_static_pb = require('../../../../../gloo/projects/gloo/api/v1/options/static/static_pb.js');
var gloo_projects_gloo_api_v1_options_pipe_pipe_pb = require('../../../../../gloo/projects/gloo/api/v1/options/pipe/pipe_pb.js');
var gloo_projects_gloo_api_v1_options_kubernetes_kubernetes_pb = require('../../../../../gloo/projects/gloo/api/v1/options/kubernetes/kubernetes_pb.js');
var gloo_projects_gloo_api_v1_options_aws_aws_pb = require('../../../../../gloo/projects/gloo/api/v1/options/aws/aws_pb.js');
var gloo_projects_gloo_api_v1_options_azure_azure_pb = require('../../../../../gloo/projects/gloo/api/v1/options/azure/azure_pb.js');
var gloo_projects_gloo_api_v1_options_consul_consul_pb = require('../../../../../gloo/projects/gloo/api/v1/options/consul/consul_pb.js');
var gloo_projects_gloo_api_v1_options_aws_ec2_aws_ec2_pb = require('../../../../../gloo/projects/gloo/api/v1/options/aws/ec2/aws_ec2_pb.js');
var gloo_projects_gloo_api_v1_options_pb = require('../../../../../gloo/projects/gloo/api/v1/options_pb.js');
var gloo_projects_gloo_api_v1_failover_pb = require('../../../../../gloo/projects/gloo/api/v1/failover_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.gloo.solo.io.DiscoveryMetadata', null, global);
goog.exportSymbol('proto.gloo.solo.io.Upstream', null, global);

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
proto.gloo.solo.io.Upstream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gloo.solo.io.Upstream.repeatedFields_, proto.gloo.solo.io.Upstream.oneofGroups_);
};
goog.inherits(proto.gloo.solo.io.Upstream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.Upstream.displayName = 'proto.gloo.solo.io.Upstream';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gloo.solo.io.Upstream.repeatedFields_ = [8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.gloo.solo.io.Upstream.oneofGroups_ = [[11,12,13,14,15,16,17]];

/**
 * @enum {number}
 */
proto.gloo.solo.io.Upstream.UpstreamTypeCase = {
  UPSTREAM_TYPE_NOT_SET: 0,
  KUBE: 11,
  STATIC: 12,
  PIPE: 13,
  AWS: 14,
  AZURE: 15,
  CONSUL: 16,
  AWS_EC2: 17
};

/**
 * @return {proto.gloo.solo.io.Upstream.UpstreamTypeCase}
 */
proto.gloo.solo.io.Upstream.prototype.getUpstreamTypeCase = function() {
  return /** @type {proto.gloo.solo.io.Upstream.UpstreamTypeCase} */(jspb.Message.computeOneofCase(this, proto.gloo.solo.io.Upstream.oneofGroups_[0]));
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
proto.gloo.solo.io.Upstream.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.Upstream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.Upstream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.Upstream.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && solo$kit_api_v1_status_pb.Status.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && solo$kit_api_v1_metadata_pb.Metadata.toObject(includeInstance, f),
    discoveryMetadata: (f = msg.getDiscoveryMetadata()) && proto.gloo.solo.io.DiscoveryMetadata.toObject(includeInstance, f),
    sslConfig: (f = msg.getSslConfig()) && gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig.toObject(includeInstance, f),
    circuitBreakers: (f = msg.getCircuitBreakers()) && gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig.toObject(includeInstance, f),
    loadBalancerConfig: (f = msg.getLoadBalancerConfig()) && gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig.toObject(includeInstance, f),
    connectionConfig: (f = msg.getConnectionConfig()) && gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig.toObject(includeInstance, f),
    healthChecksList: jspb.Message.toObjectList(msg.getHealthChecksList(),
    gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck.toObject, includeInstance),
    outlierDetection: (f = msg.getOutlierDetection()) && gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.toObject(includeInstance, f),
    useHttp2: (f = msg.getUseHttp2()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    kube: (f = msg.getKube()) && gloo_projects_gloo_api_v1_options_kubernetes_kubernetes_pb.UpstreamSpec.toObject(includeInstance, f),
    pb_static: (f = msg.getStatic()) && gloo_projects_gloo_api_v1_options_static_static_pb.UpstreamSpec.toObject(includeInstance, f),
    pipe: (f = msg.getPipe()) && gloo_projects_gloo_api_v1_options_pipe_pipe_pb.UpstreamSpec.toObject(includeInstance, f),
    aws: (f = msg.getAws()) && gloo_projects_gloo_api_v1_options_aws_aws_pb.UpstreamSpec.toObject(includeInstance, f),
    azure: (f = msg.getAzure()) && gloo_projects_gloo_api_v1_options_azure_azure_pb.UpstreamSpec.toObject(includeInstance, f),
    consul: (f = msg.getConsul()) && gloo_projects_gloo_api_v1_options_consul_consul_pb.UpstreamSpec.toObject(includeInstance, f),
    awsEc2: (f = msg.getAwsEc2()) && gloo_projects_gloo_api_v1_options_aws_ec2_aws_ec2_pb.UpstreamSpec.toObject(includeInstance, f),
    failover: (f = msg.getFailover()) && gloo_projects_gloo_api_v1_failover_pb.Failover.toObject(includeInstance, f)
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
 * @return {!proto.gloo.solo.io.Upstream}
 */
proto.gloo.solo.io.Upstream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.Upstream;
  return proto.gloo.solo.io.Upstream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.Upstream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.Upstream}
 */
proto.gloo.solo.io.Upstream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new solo$kit_api_v1_status_pb.Status;
      reader.readMessage(value,solo$kit_api_v1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new solo$kit_api_v1_metadata_pb.Metadata;
      reader.readMessage(value,solo$kit_api_v1_metadata_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = new proto.gloo.solo.io.DiscoveryMetadata;
      reader.readMessage(value,proto.gloo.solo.io.DiscoveryMetadata.deserializeBinaryFromReader);
      msg.setDiscoveryMetadata(value);
      break;
    case 4:
      var value = new gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig;
      reader.readMessage(value,gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig.deserializeBinaryFromReader);
      msg.setSslConfig(value);
      break;
    case 5:
      var value = new gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig;
      reader.readMessage(value,gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig.deserializeBinaryFromReader);
      msg.setCircuitBreakers(value);
      break;
    case 6:
      var value = new gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig;
      reader.readMessage(value,gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig.deserializeBinaryFromReader);
      msg.setLoadBalancerConfig(value);
      break;
    case 7:
      var value = new gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig;
      reader.readMessage(value,gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig.deserializeBinaryFromReader);
      msg.setConnectionConfig(value);
      break;
    case 8:
      var value = new gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck;
      reader.readMessage(value,gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck.deserializeBinaryFromReader);
      msg.addHealthChecks(value);
      break;
    case 9:
      var value = new gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection;
      reader.readMessage(value,gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.deserializeBinaryFromReader);
      msg.setOutlierDetection(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseHttp2(value);
      break;
    case 11:
      var value = new gloo_projects_gloo_api_v1_options_kubernetes_kubernetes_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_kubernetes_kubernetes_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setKube(value);
      break;
    case 12:
      var value = new gloo_projects_gloo_api_v1_options_static_static_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_static_static_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setStatic(value);
      break;
    case 13:
      var value = new gloo_projects_gloo_api_v1_options_pipe_pipe_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_pipe_pipe_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setPipe(value);
      break;
    case 14:
      var value = new gloo_projects_gloo_api_v1_options_aws_aws_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_aws_aws_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setAws(value);
      break;
    case 15:
      var value = new gloo_projects_gloo_api_v1_options_azure_azure_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_azure_azure_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setAzure(value);
      break;
    case 16:
      var value = new gloo_projects_gloo_api_v1_options_consul_consul_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_consul_consul_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setConsul(value);
      break;
    case 17:
      var value = new gloo_projects_gloo_api_v1_options_aws_ec2_aws_ec2_pb.UpstreamSpec;
      reader.readMessage(value,gloo_projects_gloo_api_v1_options_aws_ec2_aws_ec2_pb.UpstreamSpec.deserializeBinaryFromReader);
      msg.setAwsEc2(value);
      break;
    case 18:
      var value = new gloo_projects_gloo_api_v1_failover_pb.Failover;
      reader.readMessage(value,gloo_projects_gloo_api_v1_failover_pb.Failover.deserializeBinaryFromReader);
      msg.setFailover(value);
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
proto.gloo.solo.io.Upstream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.Upstream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.Upstream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.Upstream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      solo$kit_api_v1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      solo$kit_api_v1_metadata_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getDiscoveryMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.gloo.solo.io.DiscoveryMetadata.serializeBinaryToWriter
    );
  }
  f = message.getSslConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig.serializeBinaryToWriter
    );
  }
  f = message.getCircuitBreakers();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig.serializeBinaryToWriter
    );
  }
  f = message.getLoadBalancerConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig.serializeBinaryToWriter
    );
  }
  f = message.getConnectionConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig.serializeBinaryToWriter
    );
  }
  f = message.getHealthChecksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck.serializeBinaryToWriter
    );
  }
  f = message.getOutlierDetection();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection.serializeBinaryToWriter
    );
  }
  f = message.getUseHttp2();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getKube();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      gloo_projects_gloo_api_v1_options_kubernetes_kubernetes_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatic();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      gloo_projects_gloo_api_v1_options_static_static_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getPipe();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      gloo_projects_gloo_api_v1_options_pipe_pipe_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getAws();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      gloo_projects_gloo_api_v1_options_aws_aws_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getAzure();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      gloo_projects_gloo_api_v1_options_azure_azure_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getConsul();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      gloo_projects_gloo_api_v1_options_consul_consul_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getAwsEc2();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      gloo_projects_gloo_api_v1_options_aws_ec2_aws_ec2_pb.UpstreamSpec.serializeBinaryToWriter
    );
  }
  f = message.getFailover();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      gloo_projects_gloo_api_v1_failover_pb.Failover.serializeBinaryToWriter
    );
  }
};


/**
 * optional core.solo.io.Status status = 1;
 * @return {?proto.core.solo.io.Status}
 */
proto.gloo.solo.io.Upstream.prototype.getStatus = function() {
  return /** @type{?proto.core.solo.io.Status} */ (
    jspb.Message.getWrapperField(this, solo$kit_api_v1_status_pb.Status, 1));
};


/** @param {?proto.core.solo.io.Status|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.gloo.solo.io.Upstream.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional core.solo.io.Metadata metadata = 2;
 * @return {?proto.core.solo.io.Metadata}
 */
proto.gloo.solo.io.Upstream.prototype.getMetadata = function() {
  return /** @type{?proto.core.solo.io.Metadata} */ (
    jspb.Message.getWrapperField(this, solo$kit_api_v1_metadata_pb.Metadata, 2));
};


/** @param {?proto.core.solo.io.Metadata|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.gloo.solo.io.Upstream.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DiscoveryMetadata discovery_metadata = 3;
 * @return {?proto.gloo.solo.io.DiscoveryMetadata}
 */
proto.gloo.solo.io.Upstream.prototype.getDiscoveryMetadata = function() {
  return /** @type{?proto.gloo.solo.io.DiscoveryMetadata} */ (
    jspb.Message.getWrapperField(this, proto.gloo.solo.io.DiscoveryMetadata, 3));
};


/** @param {?proto.gloo.solo.io.DiscoveryMetadata|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setDiscoveryMetadata = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.gloo.solo.io.Upstream.prototype.clearDiscoveryMetadata = function() {
  this.setDiscoveryMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasDiscoveryMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UpstreamSslConfig ssl_config = 4;
 * @return {?proto.gloo.solo.io.UpstreamSslConfig}
 */
proto.gloo.solo.io.Upstream.prototype.getSslConfig = function() {
  return /** @type{?proto.gloo.solo.io.UpstreamSslConfig} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_ssl_pb.UpstreamSslConfig, 4));
};


/** @param {?proto.gloo.solo.io.UpstreamSslConfig|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setSslConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.gloo.solo.io.Upstream.prototype.clearSslConfig = function() {
  this.setSslConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasSslConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CircuitBreakerConfig circuit_breakers = 5;
 * @return {?proto.gloo.solo.io.CircuitBreakerConfig}
 */
proto.gloo.solo.io.Upstream.prototype.getCircuitBreakers = function() {
  return /** @type{?proto.gloo.solo.io.CircuitBreakerConfig} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_circuit_breaker_pb.CircuitBreakerConfig, 5));
};


/** @param {?proto.gloo.solo.io.CircuitBreakerConfig|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setCircuitBreakers = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.gloo.solo.io.Upstream.prototype.clearCircuitBreakers = function() {
  this.setCircuitBreakers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasCircuitBreakers = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LoadBalancerConfig load_balancer_config = 6;
 * @return {?proto.gloo.solo.io.LoadBalancerConfig}
 */
proto.gloo.solo.io.Upstream.prototype.getLoadBalancerConfig = function() {
  return /** @type{?proto.gloo.solo.io.LoadBalancerConfig} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_load_balancer_pb.LoadBalancerConfig, 6));
};


/** @param {?proto.gloo.solo.io.LoadBalancerConfig|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setLoadBalancerConfig = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.gloo.solo.io.Upstream.prototype.clearLoadBalancerConfig = function() {
  this.setLoadBalancerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasLoadBalancerConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ConnectionConfig connection_config = 7;
 * @return {?proto.gloo.solo.io.ConnectionConfig}
 */
proto.gloo.solo.io.Upstream.prototype.getConnectionConfig = function() {
  return /** @type{?proto.gloo.solo.io.ConnectionConfig} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_connection_pb.ConnectionConfig, 7));
};


/** @param {?proto.gloo.solo.io.ConnectionConfig|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setConnectionConfig = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.gloo.solo.io.Upstream.prototype.clearConnectionConfig = function() {
  this.setConnectionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasConnectionConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated envoy.api.v2.core.HealthCheck health_checks = 8;
 * @return {!Array<!proto.envoy.api.v2.core.HealthCheck>}
 */
proto.gloo.solo.io.Upstream.prototype.getHealthChecksList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HealthCheck>} */ (
    jspb.Message.getRepeatedWrapperField(this, gloo_projects_gloo_api_external_envoy_api_v2_core_health_check_pb.HealthCheck, 8));
};


/** @param {!Array<!proto.envoy.api.v2.core.HealthCheck>} value */
proto.gloo.solo.io.Upstream.prototype.setHealthChecksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HealthCheck=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HealthCheck}
 */
proto.gloo.solo.io.Upstream.prototype.addHealthChecks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.envoy.api.v2.core.HealthCheck, opt_index);
};


proto.gloo.solo.io.Upstream.prototype.clearHealthChecksList = function() {
  this.setHealthChecksList([]);
};


/**
 * optional envoy.api.v2.cluster.OutlierDetection outlier_detection = 9;
 * @return {?proto.envoy.api.v2.cluster.OutlierDetection}
 */
proto.gloo.solo.io.Upstream.prototype.getOutlierDetection = function() {
  return /** @type{?proto.envoy.api.v2.cluster.OutlierDetection} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_external_envoy_api_v2_cluster_outlier_detection_pb.OutlierDetection, 9));
};


/** @param {?proto.envoy.api.v2.cluster.OutlierDetection|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setOutlierDetection = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.gloo.solo.io.Upstream.prototype.clearOutlierDetection = function() {
  this.setOutlierDetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasOutlierDetection = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.BoolValue use_http2 = 10;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.gloo.solo.io.Upstream.prototype.getUseHttp2 = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 10));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setUseHttp2 = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.gloo.solo.io.Upstream.prototype.clearUseHttp2 = function() {
  this.setUseHttp2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasUseHttp2 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional kubernetes.options.gloo.solo.io.UpstreamSpec kube = 11;
 * @return {?proto.kubernetes.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getKube = function() {
  return /** @type{?proto.kubernetes.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_kubernetes_kubernetes_pb.UpstreamSpec, 11));
};


/** @param {?proto.kubernetes.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setKube = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearKube = function() {
  this.setKube(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasKube = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional static.options.gloo.solo.io.UpstreamSpec static = 12;
 * @return {?proto.static.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getStatic = function() {
  return /** @type{?proto.static.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_static_static_pb.UpstreamSpec, 12));
};


/** @param {?proto.static.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setStatic = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearStatic = function() {
  this.setStatic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasStatic = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional pipe.options.gloo.solo.io.UpstreamSpec pipe = 13;
 * @return {?proto.pipe.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getPipe = function() {
  return /** @type{?proto.pipe.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_pipe_pipe_pb.UpstreamSpec, 13));
};


/** @param {?proto.pipe.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setPipe = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearPipe = function() {
  this.setPipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasPipe = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional aws.options.gloo.solo.io.UpstreamSpec aws = 14;
 * @return {?proto.aws.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getAws = function() {
  return /** @type{?proto.aws.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_aws_aws_pb.UpstreamSpec, 14));
};


/** @param {?proto.aws.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setAws = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearAws = function() {
  this.setAws(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasAws = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional azure.options.gloo.solo.io.UpstreamSpec azure = 15;
 * @return {?proto.azure.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getAzure = function() {
  return /** @type{?proto.azure.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_azure_azure_pb.UpstreamSpec, 15));
};


/** @param {?proto.azure.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setAzure = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearAzure = function() {
  this.setAzure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasAzure = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional consul.options.gloo.solo.io.UpstreamSpec consul = 16;
 * @return {?proto.consul.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getConsul = function() {
  return /** @type{?proto.consul.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_consul_consul_pb.UpstreamSpec, 16));
};


/** @param {?proto.consul.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setConsul = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearConsul = function() {
  this.setConsul(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasConsul = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional aws_ec2.options.gloo.solo.io.UpstreamSpec aws_ec2 = 17;
 * @return {?proto.aws_ec2.options.gloo.solo.io.UpstreamSpec}
 */
proto.gloo.solo.io.Upstream.prototype.getAwsEc2 = function() {
  return /** @type{?proto.aws_ec2.options.gloo.solo.io.UpstreamSpec} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_options_aws_ec2_aws_ec2_pb.UpstreamSpec, 17));
};


/** @param {?proto.aws_ec2.options.gloo.solo.io.UpstreamSpec|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setAwsEc2 = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.gloo.solo.io.Upstream.oneofGroups_[0], value);
};


proto.gloo.solo.io.Upstream.prototype.clearAwsEc2 = function() {
  this.setAwsEc2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasAwsEc2 = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Failover failover = 18;
 * @return {?proto.gloo.solo.io.Failover}
 */
proto.gloo.solo.io.Upstream.prototype.getFailover = function() {
  return /** @type{?proto.gloo.solo.io.Failover} */ (
    jspb.Message.getWrapperField(this, gloo_projects_gloo_api_v1_failover_pb.Failover, 18));
};


/** @param {?proto.gloo.solo.io.Failover|undefined} value */
proto.gloo.solo.io.Upstream.prototype.setFailover = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.gloo.solo.io.Upstream.prototype.clearFailover = function() {
  this.setFailover(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.gloo.solo.io.Upstream.prototype.hasFailover = function() {
  return jspb.Message.getField(this, 18) != null;
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
proto.gloo.solo.io.DiscoveryMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gloo.solo.io.DiscoveryMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gloo.solo.io.DiscoveryMetadata.displayName = 'proto.gloo.solo.io.DiscoveryMetadata';
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
proto.gloo.solo.io.DiscoveryMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.gloo.solo.io.DiscoveryMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gloo.solo.io.DiscoveryMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.DiscoveryMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.gloo.solo.io.DiscoveryMetadata}
 */
proto.gloo.solo.io.DiscoveryMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gloo.solo.io.DiscoveryMetadata;
  return proto.gloo.solo.io.DiscoveryMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gloo.solo.io.DiscoveryMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gloo.solo.io.DiscoveryMetadata}
 */
proto.gloo.solo.io.DiscoveryMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.gloo.solo.io.DiscoveryMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gloo.solo.io.DiscoveryMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gloo.solo.io.DiscoveryMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gloo.solo.io.DiscoveryMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.gloo.solo.io);
