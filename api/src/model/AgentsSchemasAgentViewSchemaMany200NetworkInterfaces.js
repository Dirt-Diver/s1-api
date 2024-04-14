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
    root.S1MgmtApi.AgentsSchemasAgentViewSchemaMany200NetworkInterfaces = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AgentsSchemasAgentViewSchemaMany200NetworkInterfaces model module.
   * @module model/AgentsSchemasAgentViewSchemaMany200NetworkInterfaces
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentViewSchemaMany200NetworkInterfaces</code>.
   * @alias module:model/AgentsSchemasAgentViewSchemaMany200NetworkInterfaces
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AgentsSchemasAgentViewSchemaMany200NetworkInterfaces</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentViewSchemaMany200NetworkInterfaces} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentViewSchemaMany200NetworkInterfaces} The populated <code>AgentsSchemasAgentViewSchemaMany200NetworkInterfaces</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('physical'))
        obj.physical = ApiClient.convertToType(data['physical'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('gatewayMacAddress'))
        obj.gatewayMacAddress = ApiClient.convertToType(data['gatewayMacAddress'], 'String');
      if (data.hasOwnProperty('gatewayIp'))
        obj.gatewayIp = ApiClient.convertToType(data['gatewayIp'], 'String');
      if (data.hasOwnProperty('inet'))
        obj.inet = ApiClient.convertToType(data['inet'], ['String']);
      if (data.hasOwnProperty('inet6'))
        obj.inet6 = ApiClient.convertToType(data['inet6'], ['String']);
    }
    return obj;
  }

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Interface's MAC address
   * @member {String} physical
   */
  exports.prototype.physical = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The default gateway mac address
   * @member {String} gatewayMacAddress
   */
  exports.prototype.gatewayMacAddress = undefined;

  /**
   * The default gateway ip
   * @member {String} gatewayIp
   */
  exports.prototype.gatewayIp = undefined;

  /**
   * IPv4 addresses
   * @member {Array.<String>} inet
   */
  exports.prototype.inet = undefined;

  /**
   * IPv6 addresses
   * @member {Array.<String>} inet6
   */
  exports.prototype.inet6 = undefined;


  return exports;

}));