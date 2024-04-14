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
    root.S1MgmtApi.AgentsSchemasAgentPassphraseSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AgentsSchemasAgentPassphraseSchemaMany200Data model module.
   * @module model/AgentsSchemasAgentPassphraseSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>AgentsSchemasAgentPassphraseSchemaMany200Data</code>.
   * @alias module:model/AgentsSchemasAgentPassphraseSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AgentsSchemasAgentPassphraseSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentsSchemasAgentPassphraseSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/AgentsSchemasAgentPassphraseSchemaMany200Data} The populated <code>AgentsSchemasAgentPassphraseSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lastLoggedInUserName'))
        obj.lastLoggedInUserName = ApiClient.convertToType(data['lastLoggedInUserName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('passphrase'))
        obj.passphrase = ApiClient.convertToType(data['passphrase'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('computerName'))
        obj.computerName = ApiClient.convertToType(data['computerName'], 'String');
    }
    return obj;
  }

  /**
   * Last logged in user name
   * @member {String} lastLoggedInUserName
   */
  exports.prototype.lastLoggedInUserName = undefined;

  /**
   * Agent ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Generated passphrase for the agent
   * @member {String} passphrase
   */
  exports.prototype.passphrase = undefined;

  /**
   * Network domain
   * @member {String} domain
   */
  exports.prototype.domain = undefined;

  /**
   * Agent's universally unique identifier
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * Computer name
   * @member {String} computerName
   */
  exports.prototype.computerName = undefined;


  return exports;

}));