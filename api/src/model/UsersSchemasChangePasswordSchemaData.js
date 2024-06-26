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
    root.S1MgmtApi.UsersSchemasChangePasswordSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasChangePasswordSchemaData model module.
   * @module model/UsersSchemasChangePasswordSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasChangePasswordSchemaData</code>.
   * Data
   * @alias module:model/UsersSchemasChangePasswordSchemaData
   * @class
   * @param id {String} User ID
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>UsersSchemasChangePasswordSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasChangePasswordSchemaData} obj Optional instance to populate.
   * @return {module:model/UsersSchemasChangePasswordSchemaData} The populated <code>UsersSchemasChangePasswordSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('confirmNewPassword'))
        obj.confirmNewPassword = ApiClient.convertToType(data['confirmNewPassword'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('twoFaCode'))
        obj.twoFaCode = ApiClient.convertToType(data['twoFaCode'], 'String');
      if (data.hasOwnProperty('newPassword'))
        obj.newPassword = ApiClient.convertToType(data['newPassword'], 'String');
      if (data.hasOwnProperty('currentPassword'))
        obj.currentPassword = ApiClient.convertToType(data['currentPassword'], 'String');
    }
    return obj;
  }

  /**
   * Confirm new password
   * @member {String} confirmNewPassword
   */
  exports.prototype.confirmNewPassword = undefined;

  /**
   * User ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Two-Factor Authorization code
   * @member {String} twoFaCode
   */
  exports.prototype.twoFaCode = undefined;

  /**
   * New password
   * @member {String} newPassword
   */
  exports.prototype.newPassword = undefined;

  /**
   * Current password
   * @member {String} currentPassword
   */
  exports.prototype.currentPassword = undefined;


  return exports;

}));
