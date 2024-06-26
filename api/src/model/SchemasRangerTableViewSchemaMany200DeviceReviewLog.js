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
    root.S1MgmtApi.SchemasRangerTableViewSchemaMany200DeviceReviewLog = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SchemasRangerTableViewSchemaMany200DeviceReviewLog model module.
   * @module model/SchemasRangerTableViewSchemaMany200DeviceReviewLog
   * @version 2.1
   */

  /**
   * Constructs a new <code>SchemasRangerTableViewSchemaMany200DeviceReviewLog</code>.
   * @alias module:model/SchemasRangerTableViewSchemaMany200DeviceReviewLog
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SchemasRangerTableViewSchemaMany200DeviceReviewLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchemasRangerTableViewSchemaMany200DeviceReviewLog} obj Optional instance to populate.
   * @return {module:model/SchemasRangerTableViewSchemaMany200DeviceReviewLog} The populated <code>SchemasRangerTableViewSchemaMany200DeviceReviewLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('reasonDetails'))
        obj.reasonDetails = ApiClient.convertToType(data['reasonDetails'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'String');
      if (data.hasOwnProperty('current'))
        obj.current = ApiClient.convertToType(data['current'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('previous'))
        obj.previous = ApiClient.convertToType(data['previous'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype.username = undefined;

  /**
   * @member {String} reasonDetails
   */
  exports.prototype.reasonDetails = undefined;

  /**
   * @member {String} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * @member {String} current
   */
  exports.prototype.current = undefined;

  /**
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * @member {String} previous
   */
  exports.prototype.previous = undefined;


  return exports;

}));
