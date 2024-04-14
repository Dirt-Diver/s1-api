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
    root.S1MgmtApi.AgentsSchemasGetAgentApprovalResponse200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AgentsSchemasGetAgentApprovalResponse200Data model module.
   * @module model/AgentsSchemasGetAgentApprovalResponse200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasGetAgentApprovalResponse200Data</code>.
   * Response data
   * @alias module:model/AgentsSchemasGetAgentApprovalResponse200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AgentsSchemasGetAgentApprovalResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasGetAgentApprovalResponse200Data} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasGetAgentApprovalResponse200Data} The populated <code>AgentsSchemasGetAgentApprovalResponse200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('siteAuthorization'))
        obj.siteAuthorization = ApiClient.convertToType(data['siteAuthorization'], 'String');
      if (data.hasOwnProperty('agentAuthorization'))
        obj.agentAuthorization = ApiClient.convertToType(data['agentAuthorization'], 'String');
    }
    return obj;
  }

  /**
   * Site authorization
   * @member {String} siteAuthorization
   */
  exports.prototype.siteAuthorization = undefined;

  /**
   * Agent authorization
   * @member {String} agentAuthorization
   */
  exports.prototype.agentAuthorization = undefined;


  return exports;

}));
