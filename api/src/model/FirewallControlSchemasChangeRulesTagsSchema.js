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
    define(['ApiClient', 'model/FirewallControlSchemasChangeRulesTagsSchemaData', 'model/FirewallControlSchemasRuleDeleteSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirewallControlSchemasChangeRulesTagsSchemaData'), require('./FirewallControlSchemasRuleDeleteSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.FirewallControlSchemasChangeRulesTagsSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.FirewallControlSchemasChangeRulesTagsSchemaData, root.S1MgmtApi.FirewallControlSchemasRuleDeleteSchemaFilter);
  }
}(this, function(ApiClient, FirewallControlSchemasChangeRulesTagsSchemaData, FirewallControlSchemasRuleDeleteSchemaFilter) {
  'use strict';

  /**
   * The FirewallControlSchemasChangeRulesTagsSchema model module.
   * @module model/FirewallControlSchemasChangeRulesTagsSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>FirewallControlSchemasChangeRulesTagsSchema</code>.
   * @alias module:model/FirewallControlSchemasChangeRulesTagsSchema
   * @class
   * @param filter {module:model/FirewallControlSchemasRuleDeleteSchemaFilter} 
   * @param data {module:model/FirewallControlSchemasChangeRulesTagsSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>FirewallControlSchemasChangeRulesTagsSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallControlSchemasChangeRulesTagsSchema} obj Optional instance to populate.
   * @return {module:model/FirewallControlSchemasChangeRulesTagsSchema} The populated <code>FirewallControlSchemasChangeRulesTagsSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = FirewallControlSchemasRuleDeleteSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = FirewallControlSchemasChangeRulesTagsSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/FirewallControlSchemasRuleDeleteSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/FirewallControlSchemasChangeRulesTagsSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
