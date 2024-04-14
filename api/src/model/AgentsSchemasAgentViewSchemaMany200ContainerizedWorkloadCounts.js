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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts model module.
   * @module model/AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts</code>.
   * Containerized workload counts
   * @alias module:model/AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts} The populated <code>AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('podsCount'))
        obj.podsCount = ApiClient.convertToType(data['podsCount'], 'Number');
      if (data.hasOwnProperty('tasksCount'))
        obj.tasksCount = ApiClient.convertToType(data['tasksCount'], 'Number');
      if (data.hasOwnProperty('containersCount'))
        obj.containersCount = ApiClient.convertToType(data['containersCount'], 'Number');
    }
    return obj;
  }

  /**
   * Number of K8s pods the agent is currently protecting
   * @member {Number} podsCount
   */
  exports.prototype.podsCount = undefined;

  /**
   * Number of tasks the agent is currently protecting
   * @member {Number} tasksCount
   */
  exports.prototype.tasksCount = undefined;

  /**
   * Number of containers the agent is currently protecting
   * @member {Number} containersCount
   */
  exports.prototype.containersCount = undefined;


  return exports;

}));