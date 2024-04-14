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
    root.S1MgmtApi.UsersSchemasCreateUserSchemaDataSiteRoles = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasCreateUserSchemaDataSiteRoles model module.
   * @module model/UsersSchemasCreateUserSchemaDataSiteRoles
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasCreateUserSchemaDataSiteRoles</code>.
   * @alias module:model/UsersSchemasCreateUserSchemaDataSiteRoles
   * @class
   * @param id {String} Site ID
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>UsersSchemasCreateUserSchemaDataSiteRoles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasCreateUserSchemaDataSiteRoles} obj Optional instance to populate.
   * @return {module:model/UsersSchemasCreateUserSchemaDataSiteRoles} The populated <code>UsersSchemasCreateUserSchemaDataSiteRoles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('roleId'))
        obj.roleId = ApiClient.convertToType(data['roleId'], 'String');
      if (data.hasOwnProperty('roles'))
        obj.roles = ApiClient.convertToType(data['roles'], ['String']);
      if (data.hasOwnProperty('roleName'))
        obj.roleName = ApiClient.convertToType(data['roleName'], 'String');
    }
    return obj;
  }

  /**
   * [DEPRECATED] Site name
   * @member {String} name
   * @default 'null'
   */
  exports.prototype.name = 'null';

  /**
   * Site ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * ID of the wanted role
   * @member {String} roleId
   */
  exports.prototype.roleId = undefined;

  /**
   * [DEPRECATED] List containing the desired role name in this scope. Use role_id instead.
   * @member {Array.<String>} roles
   */
  exports.prototype.roles = undefined;

  /**
   * [DEPRECATED] Name of the role, will work only for predefined roles
   * @member {String} roleName
   */
  exports.prototype.roleName = undefined;


  return exports;

}));