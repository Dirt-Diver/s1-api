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
    root.S1MgmtApi.V21ForensicsSchemaIsCollectionFileResponseSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21ForensicsSchemaIsCollectionFileResponseSchema200Data model module.
   * @module model/V21ForensicsSchemaIsCollectionFileResponseSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ForensicsSchemaIsCollectionFileResponseSchema200Data</code>.
   * Response data
   * @alias module:model/V21ForensicsSchemaIsCollectionFileResponseSchema200Data
   * @class
   * @param agentId {String} Agent's ID
   * @param signature {String} File's Signature
   * @param siteId {String} Site's ID
   */
  var exports = function(agentId, signature, siteId) {
    this.agentId = agentId;
    this.signature = signature;
    this.siteId = siteId;
  };

  /**
   * Constructs a <code>V21ForensicsSchemaIsCollectionFileResponseSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ForensicsSchemaIsCollectionFileResponseSchema200Data} obj Optional instance to populate.
   * @return {module:model/V21ForensicsSchemaIsCollectionFileResponseSchema200Data} The populated <code>V21ForensicsSchemaIsCollectionFileResponseSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agentId'))
        obj.agentId = ApiClient.convertToType(data['agentId'], 'String');
      if (data.hasOwnProperty('uploadedTimestamp'))
        obj.uploadedTimestamp = ApiClient.convertToType(data['uploadedTimestamp'], 'String');
      if (data.hasOwnProperty('signature'))
        obj.signature = ApiClient.convertToType(data['signature'], 'String');
      if (data.hasOwnProperty('signatureType'))
        obj.signatureType = ApiClient.convertToType(data['signatureType'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
    }
    return obj;
  }

  /**
   * Agent's ID
   * @member {String} agentId
   */
  exports.prototype.agentId = undefined;

  /**
   * Collection file uploaded DateTime iso-formatted
   * @member {String} uploadedTimestamp
   */
  exports.prototype.uploadedTimestamp = undefined;

  /**
   * File's Signature
   * @member {String} signature
   */
  exports.prototype.signature = undefined;

  /**
   * Signature type
   * @member {String} signatureType
   */
  exports.prototype.signatureType = undefined;

  /**
   * Site's ID
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;


  return exports;

}));
