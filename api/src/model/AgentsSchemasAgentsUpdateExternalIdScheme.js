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
    define(['ApiClient', 'model/AgentsSchemasAgentsUpdateExternalIdSchemeData', 'model/AgentsSchemasAgentsUpdateExternalIdSchemeFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentsSchemasAgentsUpdateExternalIdSchemeData'), require('./AgentsSchemasAgentsUpdateExternalIdSchemeFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AgentsSchemasAgentsUpdateExternalIdScheme = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AgentsSchemasAgentsUpdateExternalIdSchemeData, root.S1MgmtApi.AgentsSchemasAgentsUpdateExternalIdSchemeFilter);
  }
}(this, function(ApiClient, AgentsSchemasAgentsUpdateExternalIdSchemeData, AgentsSchemasAgentsUpdateExternalIdSchemeFilter) {
  'use strict';

  /**
   * The AgentsSchemasAgentsUpdateExternalIdScheme model module.
   * @module model/AgentsSchemasAgentsUpdateExternalIdScheme
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentsUpdateExternalIdScheme</code>.
   * @alias module:model/AgentsSchemasAgentsUpdateExternalIdScheme
   * @class
   * @param filter {module:model/AgentsSchemasAgentsUpdateExternalIdSchemeFilter} 
   * @param data {module:model/AgentsSchemasAgentsUpdateExternalIdSchemeData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>AgentsSchemasAgentsUpdateExternalIdScheme</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentsUpdateExternalIdScheme} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentsUpdateExternalIdScheme} The populated <code>AgentsSchemasAgentsUpdateExternalIdScheme</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = AgentsSchemasAgentsUpdateExternalIdSchemeFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = AgentsSchemasAgentsUpdateExternalIdSchemeData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/AgentsSchemasAgentsUpdateExternalIdSchemeFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/AgentsSchemasAgentsUpdateExternalIdSchemeData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
