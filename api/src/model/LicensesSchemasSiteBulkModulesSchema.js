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
    define(['ApiClient', 'model/LicensesSchemasSiteBulkModulesSchemaData', 'model/SitesSiteBulkPutSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicensesSchemasSiteBulkModulesSchemaData'), require('./SitesSiteBulkPutSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.LicensesSchemasSiteBulkModulesSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.LicensesSchemasSiteBulkModulesSchemaData, root.S1MgmtApi.SitesSiteBulkPutSchemaFilter);
  }
}(this, function(ApiClient, LicensesSchemasSiteBulkModulesSchemaData, SitesSiteBulkPutSchemaFilter) {
  'use strict';

  /**
   * The LicensesSchemasSiteBulkModulesSchema model module.
   * @module model/LicensesSchemasSiteBulkModulesSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>LicensesSchemasSiteBulkModulesSchema</code>.
   * @alias module:model/LicensesSchemasSiteBulkModulesSchema
   * @class
   * @param filter {module:model/SitesSiteBulkPutSchemaFilter} 
   * @param data {module:model/LicensesSchemasSiteBulkModulesSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>LicensesSchemasSiteBulkModulesSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicensesSchemasSiteBulkModulesSchema} obj Optional instance to populate.
   * @return {module:model/LicensesSchemasSiteBulkModulesSchema} The populated <code>LicensesSchemasSiteBulkModulesSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = SitesSiteBulkPutSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = LicensesSchemasSiteBulkModulesSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/SitesSiteBulkPutSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/LicensesSchemasSiteBulkModulesSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
