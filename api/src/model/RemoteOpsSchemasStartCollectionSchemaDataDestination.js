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
    define(['ApiClient', 'model/AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RemoteOpsSchemasStartCollectionSchemaDataDestination = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope);
  }
}(this, function(ApiClient, AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope) {
  'use strict';

  /**
   * The RemoteOpsSchemasStartCollectionSchemaDataDestination model module.
   * @module model/RemoteOpsSchemasStartCollectionSchemaDataDestination
   * @version 2.1
   */

  /**
   * Constructs a new <code>RemoteOpsSchemasStartCollectionSchemaDataDestination</code>.
   * Destination
   * @alias module:model/RemoteOpsSchemasStartCollectionSchemaDataDestination
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RemoteOpsSchemasStartCollectionSchemaDataDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoteOpsSchemasStartCollectionSchemaDataDestination} obj Optional instance to populate.
   * @return {module:model/RemoteOpsSchemasStartCollectionSchemaDataDestination} The populated <code>RemoteOpsSchemasStartCollectionSchemaDataDestination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('passwordFromScope'))
        obj.passwordFromScope = AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope.constructFromObject(data['passwordFromScope']);
      if (data.hasOwnProperty('profileId'))
        obj.profileId = ApiClient.convertToType(data['profileId'], 'String');
    }
    return obj;
  }

  /**
   * Password for encrypting uploaded binary artifacts
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * @member {module:model/AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope} passwordFromScope
   */
  exports.prototype.passwordFromScope = undefined;

  /**
   * ID of profile for destination of exported collection date
   * @member {String} profileId
   */
  exports.prototype.profileId = undefined;


  return exports;

}));
