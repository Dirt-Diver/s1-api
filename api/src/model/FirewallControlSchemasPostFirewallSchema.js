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
    define(['ApiClient', 'model/ExclusionsSchemasPostExclusionSchemaFilter', 'model/FirewallControlSchemasPostFirewallSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExclusionsSchemasPostExclusionSchemaFilter'), require('./FirewallControlSchemasPostFirewallSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.FirewallControlSchemasPostFirewallSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ExclusionsSchemasPostExclusionSchemaFilter, root.S1MgmtApi.FirewallControlSchemasPostFirewallSchemaData);
  }
}(this, function(ApiClient, ExclusionsSchemasPostExclusionSchemaFilter, FirewallControlSchemasPostFirewallSchemaData) {
  'use strict';

  /**
   * The FirewallControlSchemasPostFirewallSchema model module.
   * @module model/FirewallControlSchemasPostFirewallSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>FirewallControlSchemasPostFirewallSchema</code>.
   * @alias module:model/FirewallControlSchemasPostFirewallSchema
   * @class
   * @param filter {module:model/ExclusionsSchemasPostExclusionSchemaFilter} 
   * @param data {module:model/FirewallControlSchemasPostFirewallSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>FirewallControlSchemasPostFirewallSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallControlSchemasPostFirewallSchema} obj Optional instance to populate.
   * @return {module:model/FirewallControlSchemasPostFirewallSchema} The populated <code>FirewallControlSchemasPostFirewallSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = ExclusionsSchemasPostExclusionSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = FirewallControlSchemasPostFirewallSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/ExclusionsSchemasPostExclusionSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/FirewallControlSchemasPostFirewallSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));