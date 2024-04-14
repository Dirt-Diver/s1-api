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
    root.S1MgmtApi.AgentsSchemasAgentApplicationsSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AgentsSchemasAgentApplicationsSchemaMany200Data model module.
   * @module model/AgentsSchemasAgentApplicationsSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentApplicationsSchemaMany200Data</code>.
   * @alias module:model/AgentsSchemasAgentApplicationsSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AgentsSchemasAgentApplicationsSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentApplicationsSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentApplicationsSchemaMany200Data} The populated <code>AgentsSchemasAgentApplicationsSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('publisher'))
        obj.publisher = ApiClient.convertToType(data['publisher'], 'String');
      if (data.hasOwnProperty('installedDate'))
        obj.installedDate = ApiClient.convertToType(data['installedDate'], 'Date');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
    }
    return obj;
  }

  /**
   * Publisher
   * @member {String} publisher
   */
  exports.prototype.publisher = undefined;

  /**
   * Installed date
   * @member {Date} installedDate
   */
  exports.prototype.installedDate = undefined;

  /**
   * Version
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Size
   * @member {Number} size
   */
  exports.prototype.size = undefined;


  return exports;

}));
