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
    define(['ApiClient', 'model/GroupsPutRanksSchemaData', 'model/GroupsPutRanksSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupsPutRanksSchemaData'), require('./GroupsPutRanksSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.GroupsPutRanksSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.GroupsPutRanksSchemaData, root.S1MgmtApi.GroupsPutRanksSchemaFilter);
  }
}(this, function(ApiClient, GroupsPutRanksSchemaData, GroupsPutRanksSchemaFilter) {
  'use strict';

  /**
   * The GroupsPutRanksSchema model module.
   * @module model/GroupsPutRanksSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>GroupsPutRanksSchema</code>.
   * @alias module:model/GroupsPutRanksSchema
   * @class
   * @param filter {module:model/GroupsPutRanksSchemaFilter} 
   * @param data {module:model/GroupsPutRanksSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>GroupsPutRanksSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupsPutRanksSchema} obj Optional instance to populate.
   * @return {module:model/GroupsPutRanksSchema} The populated <code>GroupsPutRanksSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['String']);
      if (data.hasOwnProperty('filter'))
        obj.filter = GroupsPutRanksSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = GroupsPutRanksSchemaData.constructFromObject(data['data']);
      if (data.hasOwnProperty('siteIds'))
        obj.siteIds = ApiClient.convertToType(data['siteIds'], ['String']);
    }
    return obj;
  }

  /**
   * List of Account IDs to filter by
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;

  /**
   * @member {module:model/GroupsPutRanksSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/GroupsPutRanksSchemaData} data
   */
  exports.prototype.data = undefined;

  /**
   * List of Site IDs to filter by
   * @member {Array.<String>} siteIds
   */
  exports.prototype.siteIds = undefined;


  return exports;

}));