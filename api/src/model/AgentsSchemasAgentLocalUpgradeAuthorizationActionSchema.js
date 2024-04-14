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
    define(['ApiClient', 'model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData', 'model/AgentsSchemasAgentsBroadcastActionSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData'), require('./AgentsSchemasAgentsBroadcastActionSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData, root.S1MgmtApi.AgentsSchemasAgentsBroadcastActionSchemaFilter);
  }
}(this, function(ApiClient, AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData, AgentsSchemasAgentsBroadcastActionSchemaFilter) {
  'use strict';

  /**
   * The AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema model module.
   * @module model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema</code>.
   * @alias module:model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema
   * @class
   * @param filter {module:model/AgentsSchemasAgentsBroadcastActionSchemaFilter} 
   * @param data {module:model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema} The populated <code>AgentsSchemasAgentLocalUpgradeAuthorizationActionSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = AgentsSchemasAgentsBroadcastActionSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/AgentsSchemasAgentsBroadcastActionSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/AgentsSchemasAgentLocalUpgradeAuthorizationActionSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
