/*
 * S1 MGMT API
 * SentinelOne Management Console API specification.
 *
 * OpenAPI spec version: 2.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile model module.
   * @module model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile
   * @version 2.1
   */

  /**
   * Constructs a new <code>RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile</code>.
   * Details of the collection file, if exists
   * @alias module:model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile
   * @class
   * @param signature {String} File Signature
   * @param siteId {String} Site id
   * @param uploadedTimestamp {String} Uploaded timestamp
   * @param agentId {String} Agent id
   */
  var exports = function(signature, siteId, uploadedTimestamp, agentId) {
    this.signature = signature;
    this.siteId = siteId;
    this.uploadedTimestamp = uploadedTimestamp;
    this.agentId = agentId;
  };

  /**
   * Constructs a <code>RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile} obj Optional instance to populate.
   * @return {module:model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile} The populated <code>RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataCollectionFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('signature'))
        obj.signature = ApiClient.convertToType(data['signature'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('uploadedTimestamp'))
        obj.uploadedTimestamp = ApiClient.convertToType(data['uploadedTimestamp'], 'String');
      if (data.hasOwnProperty('signatureType'))
        obj.signatureType = ApiClient.convertToType(data['signatureType'], 'String');
      if (data.hasOwnProperty('agentId'))
        obj.agentId = ApiClient.convertToType(data['agentId'], 'String');
    }
    return obj;
  }

  /**
   * File Signature
   * @member {String} signature
   */
  exports.prototype.signature = undefined;

  /**
   * Site id
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Uploaded timestamp
   * @member {String} uploadedTimestamp
   */
  exports.prototype.uploadedTimestamp = undefined;

  /**
   * Signature type
   * @member {String} signatureType
   */
  exports.prototype.signatureType = undefined;

  /**
   * Agent id
   * @member {String} agentId
   */
  exports.prototype.agentId = undefined;


  return exports;

}));
