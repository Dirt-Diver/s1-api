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
    define(['ApiClient', 'model/AgentsSchemasAgentStartProfilingActionSchemaData', 'model/AgentsSchemasAgentsBroadcastActionSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentsSchemasAgentStartProfilingActionSchemaData'), require('./AgentsSchemasAgentsBroadcastActionSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AgentsSchemasAgentStartProfilingActionSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AgentsSchemasAgentStartProfilingActionSchemaData, root.S1MgmtApi.AgentsSchemasAgentsBroadcastActionSchemaFilter);
  }
}(this, function(ApiClient, AgentsSchemasAgentStartProfilingActionSchemaData, AgentsSchemasAgentsBroadcastActionSchemaFilter) {
  'use strict';

  /**
   * The AgentsSchemasAgentStartProfilingActionSchema model module.
   * @module model/AgentsSchemasAgentStartProfilingActionSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentStartProfilingActionSchema</code>.
   * @alias module:model/AgentsSchemasAgentStartProfilingActionSchema
   * @class
   * @param filter {module:model/AgentsSchemasAgentsBroadcastActionSchemaFilter} 
   */
  var exports = function(filter) {
    this.filter = filter;
  };

  /**
   * Constructs a <code>AgentsSchemasAgentStartProfilingActionSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentStartProfilingActionSchema} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentStartProfilingActionSchema} The populated <code>AgentsSchemasAgentStartProfilingActionSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = AgentsSchemasAgentsBroadcastActionSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = AgentsSchemasAgentStartProfilingActionSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/AgentsSchemasAgentsBroadcastActionSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/AgentsSchemasAgentStartProfilingActionSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
