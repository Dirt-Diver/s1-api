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
    root.S1MgmtApi.SitesSiteResponseSchema200DataLicensesSettings = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSiteResponseSchema200DataLicensesSettings model module.
   * @module model/SitesSiteResponseSchema200DataLicensesSettings
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSiteResponseSchema200DataLicensesSettings</code>.
   * @alias module:model/SitesSiteResponseSchema200DataLicensesSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSiteResponseSchema200DataLicensesSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSiteResponseSchema200DataLicensesSettings} obj Optional instance to populate.
   * @return {module:model/SitesSiteResponseSchema200DataLicensesSettings} The populated <code>SitesSiteResponseSchema200DataLicensesSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('settingGroup'))
        obj.settingGroup = ApiClient.convertToType(data['settingGroup'], 'String');
      if (data.hasOwnProperty('setting'))
        obj.setting = ApiClient.convertToType(data['setting'], Object);
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], Object);
      if (data.hasOwnProperty('settingGroupDisplayName'))
        obj.settingGroupDisplayName = ApiClient.convertToType(data['settingGroupDisplayName'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
    }
    return obj;
  }

  /**
   * [DEPRECATED] The Setting group name
   * @member {String} settingGroup
   */
  exports.prototype.settingGroup = undefined;

  /**
   * The Setting display name
   * @member {Object} setting
   */
  exports.prototype.setting = undefined;

  /**
   * The Setting group name
   * @member {Object} groupName
   */
  exports.prototype.groupName = undefined;

  /**
   * The Setting group display name
   * @member {String} settingGroupDisplayName
   */
  exports.prototype.settingGroupDisplayName = undefined;

  /**
   * [DEPRECATED] The Setting display name
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;


  return exports;

}));