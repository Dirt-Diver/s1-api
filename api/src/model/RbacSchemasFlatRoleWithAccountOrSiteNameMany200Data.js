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
    root.S1MgmtApi.RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data model module.
   * @module model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data</code>.
   * @alias module:model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data} obj Optional instance to populate.
   * @return {module:model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data} The populated <code>RbacSchemasFlatRoleWithAccountOrSiteNameMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('updatedBy'))
        obj.updatedBy = ApiClient.convertToType(data['updatedBy'], 'String');
      if (data.hasOwnProperty('predefinedRole'))
        obj.predefinedRole = ApiClient.convertToType(data['predefinedRole'], 'Boolean');
      if (data.hasOwnProperty('siteName'))
        obj.siteName = ApiClient.convertToType(data['siteName'], 'String');
      if (data.hasOwnProperty('accountName'))
        obj.accountName = ApiClient.convertToType(data['accountName'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('creatorId'))
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('updatedById'))
        obj.updatedById = ApiClient.convertToType(data['updatedById'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('usersInRoles'))
        obj.usersInRoles = ApiClient.convertToType(data['usersInRoles'], 'Number');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Email of the updating user
   * @member {String} updatedBy
   */
  exports.prototype.updatedBy = undefined;

  /**
   * Whether this role is a system role
   * @member {Boolean} predefinedRole
   */
  exports.prototype.predefinedRole = undefined;

  /**
   * Site name
   * @member {String} siteName
   */
  exports.prototype.siteName = undefined;

  /**
   * Account name
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Created at
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Email of the creating user
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * Id of the creating user
   * @member {String} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * Updated at
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Id of the creating user
   * @member {String} updatedById
   */
  exports.prototype.updatedById = undefined;

  /**
   * Id of the containing scope
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * How many users use this role
   * @member {Number} usersInRoles
   */
  exports.prototype.usersInRoles = undefined;

  /**
   * Scope of the role (Group/Site/Account/Tenant)
   * @member {String} scope
   */
  exports.prototype.scope = undefined;


  return exports;

}));
