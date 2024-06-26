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
    root.S1MgmtApi.UsersSchemasLoginContinueResponseSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasLoginContinueResponseSchema200Data model module.
   * @module model/UsersSchemasLoginContinueResponseSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasLoginContinueResponseSchema200Data</code>.
   * Response data
   * @alias module:model/UsersSchemasLoginContinueResponseSchema200Data
   * @class
   * @param token {String} Generated authentication token
   */
  var exports = function(token) {
    this.token = token;
  };

  /**
   * Constructs a <code>UsersSchemasLoginContinueResponseSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasLoginContinueResponseSchema200Data} obj Optional instance to populate.
   * @return {module:model/UsersSchemasLoginContinueResponseSchema200Data} The populated <code>UsersSchemasLoginContinueResponseSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('csrf'))
        obj.csrf = ApiClient.convertToType(data['csrf'], 'String');
    }
    return obj;
  }

  /**
   * Generated authentication token
   * @member {String} token
   */
  exports.prototype.token = undefined;

  /**
   * Generated csrf token
   * @member {String} csrf
   */
  exports.prototype.csrf = undefined;


  return exports;

}));
