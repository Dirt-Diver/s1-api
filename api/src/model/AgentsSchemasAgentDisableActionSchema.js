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
    define(['ApiClient', 'model/AgentsSchemasAgentDisableActionSchemaData', 'model/AgentsSchemasAgentsBroadcastActionSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentsSchemasAgentDisableActionSchemaData'), require('./AgentsSchemasAgentsBroadcastActionSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AgentsSchemasAgentDisableActionSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AgentsSchemasAgentDisableActionSchemaData, root.S1MgmtApi.AgentsSchemasAgentsBroadcastActionSchemaFilter);
  }
}(this, function(ApiClient, AgentsSchemasAgentDisableActionSchemaData, AgentsSchemasAgentsBroadcastActionSchemaFilter) {
  'use strict';

  /**
   * The AgentsSchemasAgentDisableActionSchema model module.
   * @module model/AgentsSchemasAgentDisableActionSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentDisableActionSchema</code>.
   * @alias module:model/AgentsSchemasAgentDisableActionSchema
   * @class
   * @param filter {module:model/AgentsSchemasAgentsBroadcastActionSchemaFilter} 
   * @param data {module:model/AgentsSchemasAgentDisableActionSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>AgentsSchemasAgentDisableActionSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentDisableActionSchema} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentDisableActionSchema} The populated <code>AgentsSchemasAgentDisableActionSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = AgentsSchemasAgentsBroadcastActionSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = AgentsSchemasAgentDisableActionSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/AgentsSchemasAgentsBroadcastActionSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/AgentsSchemasAgentDisableActionSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
