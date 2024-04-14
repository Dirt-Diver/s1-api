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
    define(['ApiClient', 'model/UsersSchemasCreateUserSchemaDataScopeRoles', 'model/UsersSchemasCreateUserSchemaDataSiteRoles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersSchemasCreateUserSchemaDataScopeRoles'), require('./UsersSchemasCreateUserSchemaDataSiteRoles'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.UsersSchemasCreateUserSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.UsersSchemasCreateUserSchemaDataScopeRoles, root.S1MgmtApi.UsersSchemasCreateUserSchemaDataSiteRoles);
  }
}(this, function(ApiClient, UsersSchemasCreateUserSchemaDataScopeRoles, UsersSchemasCreateUserSchemaDataSiteRoles) {
  'use strict';

  /**
   * The UsersSchemasCreateUserSchemaData model module.
   * @module model/UsersSchemasCreateUserSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasCreateUserSchemaData</code>.
   * Data
   * @alias module:model/UsersSchemasCreateUserSchemaData
   * @class
   * @param fullName {String} Full name of the user
   * @param email {String} The email of the user
   * @param scope {module:model/UsersSchemasCreateUserSchemaData.ScopeEnum} User scope
   */
  var exports = function(fullName, email, scope) {
    this.fullName = fullName;
    this.email = email;
    this.scope = scope;
  };

  /**
   * Constructs a <code>UsersSchemasCreateUserSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasCreateUserSchemaData} obj Optional instance to populate.
   * @return {module:model/UsersSchemasCreateUserSchemaData} The populated <code>UsersSchemasCreateUserSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allowRemoteShell'))
        obj.allowRemoteShell = ApiClient.convertToType(data['allowRemoteShell'], 'Boolean');
      if (data.hasOwnProperty('scopeRoles'))
        obj.scopeRoles = ApiClient.convertToType(data['scopeRoles'], [UsersSchemasCreateUserSchemaDataScopeRoles]);
      if (data.hasOwnProperty('siteRoles'))
        obj.siteRoles = ApiClient.convertToType(data['siteRoles'], [UsersSchemasCreateUserSchemaDataSiteRoles]);
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('tenantRoles'))
        obj.tenantRoles = ApiClient.convertToType(data['tenantRoles'], ['String']);
      if (data.hasOwnProperty('twoFaEnabled'))
        obj.twoFaEnabled = ApiClient.convertToType(data['twoFaEnabled'], 'Boolean');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
    }
    return obj;
  }

  /**
   * [DEPRECATED] Unused field. The user's role will determine if it is allowed to use remote_shell.
   * @member {Boolean} allowRemoteShell
   */
  exports.prototype.allowRemoteShell = undefined;

  /**
   * List of id and role id, id is mandatory for user in scope account/site. Role name is deprecated and will work only for predefined roles, please use role id. User in tenant (global) role does not need to provide an id.
   * @member {Array.<module:model/UsersSchemasCreateUserSchemaDataScopeRoles>} scopeRoles
   */
  exports.prototype.scopeRoles = undefined;

  /**
   * [DEPRECATED] Please use scopeRoles instead.
   * @member {Array.<module:model/UsersSchemasCreateUserSchemaDataSiteRoles>} siteRoles
   */
  exports.prototype.siteRoles = undefined;

  /**
   * Full name of the user
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * User password. Not allowed if automatic onboarding feature is enabled.
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * [DEPRECATED] Use roles instead. List of tenant roles.
   * @member {Array.<String>} tenantRoles
   */
  exports.prototype.tenantRoles = undefined;

  /**
   * Two fa enabled
   * @member {Boolean} twoFaEnabled
   */
  exports.prototype.twoFaEnabled = undefined;

  /**
   * The email of the user
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * User scope
   * @member {module:model/UsersSchemasCreateUserSchemaData.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;



  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "tenant"
     * @const
     */
    tenant: "tenant",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "site"
     * @const
     */
    site: "site"
  };

  return exports;

}));
