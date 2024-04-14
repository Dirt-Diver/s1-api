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
    root.S1MgmtApi.UsersSchemasTokenSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasTokenSchema200Data model module.
   * @module model/UsersSchemasTokenSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasTokenSchema200Data</code>.
   * Response data
   * @alias module:model/UsersSchemasTokenSchema200Data
   * @class
   * @param token {String} User token
   */
  var exports = function(token) {
    this.token = token;
  };

  /**
   * Constructs a <code>UsersSchemasTokenSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasTokenSchema200Data} obj Optional instance to populate.
   * @return {module:model/UsersSchemasTokenSchema200Data} The populated <code>UsersSchemasTokenSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('realUser'))
        obj.realUser = ApiClient.convertToType(data['realUser'], 'String');
      if (data.hasOwnProperty('redirectTo'))
        obj.redirectTo = ApiClient.convertToType(data['redirectTo'], 'String');
      if (data.hasOwnProperty('redirectToParams'))
        obj.redirectToParams = ApiClient.convertToType(data['redirectToParams'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('removedSavedScope'))
        obj.removedSavedScope = ApiClient.convertToType(data['removedSavedScope'], 'String');
    }
    return obj;
  }

  /**
   * When logging in from Atlas, specifies the actual user who logged in
   * @member {String} realUser
   */
  exports.prototype.realUser = undefined;

  /**
   * Relative url to redirect to
   * @member {String} redirectTo
   */
  exports.prototype.redirectTo = undefined;

  /**
   * Query params for the redirect to, without '?' prefix
   * @member {String} redirectToParams
   */
  exports.prototype.redirectToParams = undefined;

  /**
   * User token
   * @member {String} token
   */
  exports.prototype.token = undefined;

  /**
   * Removed saved scope
   * @member {String} removedSavedScope
   */
  exports.prototype.removedSavedScope = undefined;


  return exports;

}));
