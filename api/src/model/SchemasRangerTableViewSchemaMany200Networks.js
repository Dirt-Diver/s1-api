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
    root.S1MgmtApi.SchemasRangerTableViewSchemaMany200Networks = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SchemasRangerTableViewSchemaMany200Networks model module.
   * @module model/SchemasRangerTableViewSchemaMany200Networks
   * @version 2.1
   */

  /**
   * Constructs a new <code>SchemasRangerTableViewSchemaMany200Networks</code>.
   * @alias module:model/SchemasRangerTableViewSchemaMany200Networks
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SchemasRangerTableViewSchemaMany200Networks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchemasRangerTableViewSchemaMany200Networks} obj Optional instance to populate.
   * @return {module:model/SchemasRangerTableViewSchemaMany200Networks} The populated <code>SchemasRangerTableViewSchemaMany200Networks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gatewayIpAddress'))
        obj.gatewayIpAddress = ApiClient.convertToType(data['gatewayIpAddress'], 'String');
      if (data.hasOwnProperty('gatewayMacAddress'))
        obj.gatewayMacAddress = ApiClient.convertToType(data['gatewayMacAddress'], 'String');
      if (data.hasOwnProperty('externalIp'))
        obj.externalIp = ApiClient.convertToType(data['externalIp'], 'String');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
      if (data.hasOwnProperty('networkName'))
        obj.networkName = ApiClient.convertToType(data['networkName'], 'String');
      if (data.hasOwnProperty('subnetAddress'))
        obj.subnetAddress = ApiClient.convertToType(data['subnetAddress'], 'String');
    }
    return obj;
  }

  /**
   * Main gateway IP address
   * @member {String} gatewayIpAddress
   */
  exports.prototype.gatewayIpAddress = undefined;

  /**
   * Main gateway MAC address
   * @member {String} gatewayMacAddress
   */
  exports.prototype.gatewayMacAddress = undefined;

  /**
   * Main Gateway Visible IP
   * @member {String} externalIp
   */
  exports.prototype.externalIp = undefined;

  /**
   * The IP of the device in the network
   * @member {String} ip
   */
  exports.prototype.ip = undefined;

  /**
   * The network name
   * @member {String} networkName
   */
  exports.prototype.networkName = undefined;

  /**
   * Main subnet address
   * @member {String} subnetAddress
   */
  exports.prototype.subnetAddress = undefined;


  return exports;

}));