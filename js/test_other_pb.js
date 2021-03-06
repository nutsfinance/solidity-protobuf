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

var SolidityTypes_pb = require('./SolidityTypes_pb.js');
goog.object.extend(proto, SolidityTypes_pb);
goog.exportSymbol('proto.TestOther', null, global);
goog.exportSymbol('proto.TestOther.Corpus', null, global);
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
proto.TestOther = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestOther, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TestOther.displayName = 'proto.TestOther';
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
proto.TestOther.prototype.toObject = function(opt_includeInstance) {
  return proto.TestOther.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestOther} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestOther.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytesField: msg.getBytesField_asB64(),
    stringField: jspb.Message.getFieldWithDefault(msg, 2, ""),
    boolField: jspb.Message.getFieldWithDefault(msg, 3, false),
    enumField: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.TestOther}
 */
proto.TestOther.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestOther;
  return proto.TestOther.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestOther} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestOther}
 */
proto.TestOther.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringField(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolField(value);
      break;
    case 4:
      var value = /** @type {!proto.TestOther.Corpus} */ (reader.readEnum());
      msg.setEnumField(value);
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
proto.TestOther.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestOther.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestOther} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestOther.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytesField_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStringField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBoolField();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEnumField();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.TestOther.Corpus = {
  UNIVERSAL: 0,
  WEB: 1,
  IMAGES: 2,
  LOCAL: 3,
  NEWS: 4,
  PRODUCTS: 5,
  VIDEO: 6
};

/**
 * optional bytes bytes_field = 1;
 * @return {!(string|Uint8Array)}
 */
proto.TestOther.prototype.getBytesField = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes bytes_field = 1;
 * This is a type-conversion wrapper around `getBytesField()`
 * @return {string}
 */
proto.TestOther.prototype.getBytesField_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesField()));
};


/**
 * optional bytes bytes_field = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesField()`
 * @return {!Uint8Array}
 */
proto.TestOther.prototype.getBytesField_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesField()));
};


/** @param {!(string|Uint8Array)} value */
proto.TestOther.prototype.setBytesField = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string string_field = 2;
 * @return {string}
 */
proto.TestOther.prototype.getStringField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.TestOther.prototype.setStringField = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool bool_field = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.TestOther.prototype.getBoolField = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.TestOther.prototype.setBoolField = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Corpus enum_field = 4;
 * @return {!proto.TestOther.Corpus}
 */
proto.TestOther.prototype.getEnumField = function() {
  return /** @type {!proto.TestOther.Corpus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.TestOther.Corpus} value */
proto.TestOther.prototype.setEnumField = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto);
