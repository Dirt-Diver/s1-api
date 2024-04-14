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
    define(['ApiClient', 'model/SettingsAdSettingsPutSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingsAdSettingsPutSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SettingsAdSettingsPutSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SettingsAdSettingsPutSchemaData);
  }
}(this, function(ApiClient, SettingsAdSettingsPutSchemaData) {
  'use strict';

  /**
   * The SettingsAdSettingsPutSchema model module.
   * @module model/SettingsAdSettingsPutSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>SettingsAdSettingsPutSchema</code>.
   * @alias module:model/SettingsAdSettingsPutSchema
   * @class
   * @param data {module:model/SettingsAdSettingsPutSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>SettingsAdSettingsPutSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsAdSettingsPutSchema} obj Optional instance to populate.
   * @return {module:model/SettingsAdSettingsPutSchema} The populated <code>SettingsAdSettingsPutSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = SettingsAdSettingsPutSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/SettingsAdSettingsPutSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));