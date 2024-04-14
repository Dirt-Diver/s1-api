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
    root.S1MgmtApi.UsersSchemasCreateIFrameUserSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasCreateIFrameUserSchemaData model module.
   * @module model/UsersSchemasCreateIFrameUserSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasCreateIFrameUserSchemaData</code>.
   * Data
   * @alias module:model/UsersSchemasCreateIFrameUserSchemaData
   * @class
   * @param accountId {String} Account id
   */
  var exports = function(accountId) {
    this.accountId = accountId;
  };

  /**
   * Constructs a <code>UsersSchemasCreateIFrameUserSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasCreateIFrameUserSchemaData} obj Optional instance to populate.
   * @return {module:model/UsersSchemasCreateIFrameUserSchemaData} The populated <code>UsersSchemasCreateIFrameUserSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('agentUuids'))
        obj.agentUuids = ApiClient.convertToType(data['agentUuids'], ['String']);
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('userName'))
        obj.userName = ApiClient.convertToType(data['userName'], 'String');
      if (data.hasOwnProperty('roleName'))
        obj.roleName = ApiClient.convertToType(data['roleName'], 'String');
    }
    return obj;
  }

  /**
   * Account id
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * A list of included UUIDs
   * @member {Array.<String>} agentUuids
   */
  exports.prototype.agentUuids = undefined;

  /**
   * [DEPRECATED]Name of the role
   * @member {String} role
   */
  exports.prototype.role = undefined;

  /**
   * The username that will be displayed
   * @member {String} userName
   */
  exports.prototype.userName = undefined;

  /**
   * RBAC role name
   * @member {String} roleName
   */
  exports.prototype.roleName = undefined;


  return exports;

}));