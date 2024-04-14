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
    root.S1MgmtApi.AccountsSchemasPostAccountSchemaDataLicensesSettings = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountsSchemasPostAccountSchemaDataLicensesSettings model module.
   * @module model/AccountsSchemasPostAccountSchemaDataLicensesSettings
   * @version 2.1
   */

  /**
   * Constructs a new <code>AccountsSchemasPostAccountSchemaDataLicensesSettings</code>.
   * @alias module:model/AccountsSchemasPostAccountSchemaDataLicensesSettings
   * @class
   * @param setting {String} 
   * @param groupName {String} 
   */
  var exports = function(setting, groupName) {
    this.setting = setting;
    this.groupName = groupName;
  };

  /**
   * Constructs a <code>AccountsSchemasPostAccountSchemaDataLicensesSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountsSchemasPostAccountSchemaDataLicensesSettings} obj Optional instance to populate.
   * @return {module:model/AccountsSchemasPostAccountSchemaDataLicensesSettings} The populated <code>AccountsSchemasPostAccountSchemaDataLicensesSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('setting'))
        obj.setting = ApiClient.convertToType(data['setting'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} setting
   */
  exports.prototype.setting = undefined;

  /**
   * @member {String} groupName
   */
  exports.prototype.groupName = undefined;


  return exports;

}));