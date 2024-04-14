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
    root.S1MgmtApi.V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data model module.
   * @module model/V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data</code>.
   * @alias module:model/V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data} obj Optional instance to populate.
   * @return {module:model/V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data} The populated <code>V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('detectedAt'))
        obj.detectedAt = ApiClient.convertToType(data['detectedAt'], 'Date');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('recommendedAction'))
        obj.recommendedAction = ApiClient.convertToType(data['recommendedAction'], 'String');
      if (data.hasOwnProperty('healthStatus'))
        obj.healthStatus = ApiClient.convertToType(data['healthStatus'], 'String');
      if (data.hasOwnProperty('cloudProviderAccountId'))
        obj.cloudProviderAccountId = ApiClient.convertToType(data['cloudProviderAccountId'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * Detected at
   * @member {Date} detectedAt
   */
  exports.prototype.detectedAt = undefined;

  /**
   * Title
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * Recommended action
   * @member {String} recommendedAction
   */
  exports.prototype.recommendedAction = undefined;

  /**
   * Health status
   * @member {String} healthStatus
   */
  exports.prototype.healthStatus = undefined;

  /**
   * Cloud Provider Account ID
   * @member {String} cloudProviderAccountId
   */
  exports.prototype.cloudProviderAccountId = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;


  return exports;

}));