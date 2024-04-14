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
    root.S1MgmtApi.UsersSchemasGetApiTokenSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasGetApiTokenSchema200Data model module.
   * @module model/UsersSchemasGetApiTokenSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasGetApiTokenSchema200Data</code>.
   * Response data
   * @alias module:model/UsersSchemasGetApiTokenSchema200Data
   * @class
   * @param token {String} User's API token
   */
  var exports = function(token) {
    this.token = token;
  };

  /**
   * Constructs a <code>UsersSchemasGetApiTokenSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasGetApiTokenSchema200Data} obj Optional instance to populate.
   * @return {module:model/UsersSchemasGetApiTokenSchema200Data} The populated <code>UsersSchemasGetApiTokenSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
    }
    return obj;
  }

  /**
   * User's API token
   * @member {String} token
   */
  exports.prototype.token = undefined;


  return exports;

}));
