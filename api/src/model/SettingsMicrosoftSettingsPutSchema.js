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
    define(['ApiClient', 'model/GroupsPutRanksSchemaFilter', 'model/SettingsMicrosoftSettingsPutSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupsPutRanksSchemaFilter'), require('./SettingsMicrosoftSettingsPutSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SettingsMicrosoftSettingsPutSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.GroupsPutRanksSchemaFilter, root.S1MgmtApi.SettingsMicrosoftSettingsPutSchemaData);
  }
}(this, function(ApiClient, GroupsPutRanksSchemaFilter, SettingsMicrosoftSettingsPutSchemaData) {
  'use strict';

  /**
   * The SettingsMicrosoftSettingsPutSchema model module.
   * @module model/SettingsMicrosoftSettingsPutSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>SettingsMicrosoftSettingsPutSchema</code>.
   * @alias module:model/SettingsMicrosoftSettingsPutSchema
   * @class
   * @param filter {module:model/GroupsPutRanksSchemaFilter} 
   * @param data {module:model/SettingsMicrosoftSettingsPutSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>SettingsMicrosoftSettingsPutSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsMicrosoftSettingsPutSchema} obj Optional instance to populate.
   * @return {module:model/SettingsMicrosoftSettingsPutSchema} The populated <code>SettingsMicrosoftSettingsPutSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = GroupsPutRanksSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = SettingsMicrosoftSettingsPutSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/GroupsPutRanksSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/SettingsMicrosoftSettingsPutSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
