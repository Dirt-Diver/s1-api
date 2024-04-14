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
    root.S1MgmtApi.ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken model module.
   * @module model/ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken
   * @version 2.1
   */

  /**
   * Constructs a new <code>ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken</code>.
   * Api token
   * @alias module:model/ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken} obj Optional instance to populate.
   * @return {module:model/ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken} The populated <code>ServiceUsersSchemasCreatedServiceUserSchema200DataApiToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('expiresAt'))
        obj.expiresAt = ApiClient.convertToType(data['expiresAt'], 'Date');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * Created at
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Expires at
   * @member {Date} expiresAt
   */
  exports.prototype.expiresAt = undefined;

  /**
   * Value
   * @member {String} value
   */
  exports.prototype.value = undefined;


  return exports;

}));