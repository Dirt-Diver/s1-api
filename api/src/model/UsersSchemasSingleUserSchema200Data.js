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
    define(['ApiClient', 'model/RbacSchemasRolePermissions200DataPages', 'model/UsersSchemasSingleUserSchema200DataAccount', 'model/UsersSchemasUserSchema200DataApiToken', 'model/UsersSchemasUserSchema200DataScopeRoles', 'model/UsersSchemasUserSchema200DataSiteRoles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RbacSchemasRolePermissions200DataPages'), require('./UsersSchemasSingleUserSchema200DataAccount'), require('./UsersSchemasUserSchema200DataApiToken'), require('./UsersSchemasUserSchema200DataScopeRoles'), require('./UsersSchemasUserSchema200DataSiteRoles'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.UsersSchemasSingleUserSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.RbacSchemasRolePermissions200DataPages, root.S1MgmtApi.UsersSchemasSingleUserSchema200DataAccount, root.S1MgmtApi.UsersSchemasUserSchema200DataApiToken, root.S1MgmtApi.UsersSchemasUserSchema200DataScopeRoles, root.S1MgmtApi.UsersSchemasUserSchema200DataSiteRoles);
  }
}(this, function(ApiClient, RbacSchemasRolePermissions200DataPages, UsersSchemasSingleUserSchema200DataAccount, UsersSchemasUserSchema200DataApiToken, UsersSchemasUserSchema200DataScopeRoles, UsersSchemasUserSchema200DataSiteRoles) {
  'use strict';

  /**
   * The UsersSchemasSingleUserSchema200Data model module.
   * @module model/UsersSchemasSingleUserSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasSingleUserSchema200Data</code>.
   * Response data
   * @alias module:model/UsersSchemasSingleUserSchema200Data
   * @class
   * @param scope {module:model/UsersSchemasSingleUserSchema200Data.ScopeEnum} User Scope
   */
  var exports = function(scope) {
    this.scope = scope;
  };

  /**
   * Constructs a <code>UsersSchemasSingleUserSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasSingleUserSchema200Data} obj Optional instance to populate.
   * @return {module:model/UsersSchemasSingleUserSchema200Data} The populated <code>UsersSchemasSingleUserSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('emailVerified'))
        obj.emailVerified = ApiClient.convertToType(data['emailVerified'], 'Boolean');
      if (data.hasOwnProperty('canGenerateApiToken'))
        obj.canGenerateApiToken = ApiClient.convertToType(data['canGenerateApiToken'], 'Boolean');
      if (data.hasOwnProperty('apiToken'))
        obj.apiToken = UsersSchemasUserSchema200DataApiToken.constructFromObject(data['apiToken']);
      if (data.hasOwnProperty('isSystem'))
        obj.isSystem = ApiClient.convertToType(data['isSystem'], 'Boolean');
      if (data.hasOwnProperty('elevatedSessionDurationMinutes'))
        obj.elevatedSessionDurationMinutes = ApiClient.convertToType(data['elevatedSessionDurationMinutes'], 'Number');
      if (data.hasOwnProperty('scopeRoles'))
        obj.scopeRoles = ApiClient.convertToType(data['scopeRoles'], [UsersSchemasUserSchema200DataScopeRoles]);
      if (data.hasOwnProperty('primaryTwoFaMethod'))
        obj.primaryTwoFaMethod = ApiClient.convertToType(data['primaryTwoFaMethod'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('lastLogin'))
        obj.lastLogin = ApiClient.convertToType(data['lastLogin'], 'Date');
      if (data.hasOwnProperty('twoFaEnabledReadOnly'))
        obj.twoFaEnabledReadOnly = ApiClient.convertToType(data['twoFaEnabledReadOnly'], 'Boolean');
      if (data.hasOwnProperty('siteRoles'))
        obj.siteRoles = ApiClient.convertToType(data['siteRoles'], [UsersSchemasUserSchema200DataSiteRoles]);
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('pages'))
        obj.pages = ApiClient.convertToType(data['pages'], [RbacSchemasRolePermissions200DataPages]);
      if (data.hasOwnProperty('dateJoined'))
        obj.dateJoined = ApiClient.convertToType(data['dateJoined'], 'Date');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('allowRemoteShell'))
        obj.allowRemoteShell = ApiClient.convertToType(data['allowRemoteShell'], 'Boolean');
      if (data.hasOwnProperty('fullNameReadOnly'))
        obj.fullNameReadOnly = ApiClient.convertToType(data['fullNameReadOnly'], 'Boolean');
      if (data.hasOwnProperty('account'))
        obj.account = UsersSchemasSingleUserSchema200DataAccount.constructFromObject(data['account']);
      if (data.hasOwnProperty('twoFaStatus'))
        obj.twoFaStatus = ApiClient.convertToType(data['twoFaStatus'], 'String');
      if (data.hasOwnProperty('twoFaConfigured'))
        obj.twoFaConfigured = ApiClient.convertToType(data['twoFaConfigured'], 'Boolean');
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('isExternalLoginUser'))
        obj.isExternalLoginUser = ApiClient.convertToType(data['isExternalLoginUser'], 'Boolean');
      if (data.hasOwnProperty('groupsReadOnly'))
        obj.groupsReadOnly = ApiClient.convertToType(data['groupsReadOnly'], 'Boolean');
      if (data.hasOwnProperty('agreedEula'))
        obj.agreedEula = ApiClient.convertToType(data['agreedEula'], 'Boolean');
      if (data.hasOwnProperty('tenantRoles'))
        obj.tenantRoles = ApiClient.convertToType(data['tenantRoles'], [Object]);
      if (data.hasOwnProperty('firstLogin'))
        obj.firstLogin = ApiClient.convertToType(data['firstLogin'], 'Date');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('emailReadOnly'))
        obj.emailReadOnly = ApiClient.convertToType(data['emailReadOnly'], 'Boolean');
      if (data.hasOwnProperty('agreementUrl'))
        obj.agreementUrl = ApiClient.convertToType(data['agreementUrl'], 'String');
      if (data.hasOwnProperty('lowestRole'))
        obj.lowestRole = ApiClient.convertToType(data['lowestRole'], 'String');
      if (data.hasOwnProperty('twoFaEnabled'))
        obj.twoFaEnabled = ApiClient.convertToType(data['twoFaEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * True if user verification completed successfully
   * @member {Boolean} emailVerified
   */
  exports.prototype.emailVerified = undefined;

  /**
   * Can generate api token
   * @member {Boolean} canGenerateApiToken
   */
  exports.prototype.canGenerateApiToken = undefined;

  /**
   * @member {module:model/UsersSchemasUserSchema200DataApiToken} apiToken
   */
  exports.prototype.apiToken = undefined;

  /**
   * @member {Boolean} isSystem
   */
  exports.prototype.isSystem = undefined;

  /**
   * Defines for how many minutes can the user call protected actions once their session is elevated.
   * @member {Number} elevatedSessionDurationMinutes
   */
  exports.prototype.elevatedSessionDurationMinutes = undefined;

  /**
   * Roles of the scope user
   * @member {Array.<module:model/UsersSchemasUserSchema200DataScopeRoles>} scopeRoles
   */
  exports.prototype.scopeRoles = undefined;

  /**
   * Primary two fa method
   * @member {String} primaryTwoFaMethod
   */
  exports.prototype.primaryTwoFaMethod = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Last login
   * @member {Date} lastLogin
   */
  exports.prototype.lastLogin = undefined;

  /**
   * True if two fa option cannot be modified
   * @member {Boolean} twoFaEnabledReadOnly
   */
  exports.prototype.twoFaEnabledReadOnly = undefined;

  /**
   * [DEPRECATED] Role and site ids for the user. Using scopeRoles is more consistent.
   * @member {Array.<module:model/UsersSchemasUserSchema200DataSiteRoles>} siteRoles
   */
  exports.prototype.siteRoles = undefined;

  /**
   * Source
   * @member {String} source
   */
  exports.prototype.source = undefined;

  /**
   * Pages
   * @member {Array.<module:model/RbacSchemasRolePermissions200DataPages>} pages
   */
  exports.prototype.pages = undefined;

  /**
   * Date joined
   * @member {Date} dateJoined
   */
  exports.prototype.dateJoined = undefined;

  /**
   * Email
   * @member {String} email
   * @default 'null'
   */
  exports.prototype.email = 'null';

  /**
   * [DEPRECATED] Unused field. The user's role will determine if it is allowed to use remote_shell.
   * @member {Boolean} allowRemoteShell
   */
  exports.prototype.allowRemoteShell = undefined;

  /**
   * True if full name cannot be modified
   * @member {Boolean} fullNameReadOnly
   */
  exports.prototype.fullNameReadOnly = undefined;

  /**
   * @member {module:model/UsersSchemasSingleUserSchema200DataAccount} account
   */
  exports.prototype.account = undefined;

  /**
   * State of 2FA setup
   * @member {module:model/UsersSchemasSingleUserSchema200Data.TwoFaStatusEnum} twoFaStatus
   */
  exports.prototype.twoFaStatus = undefined;

  /**
   * User 2FA Auth is configured
   * @member {Boolean} twoFaConfigured
   */
  exports.prototype.twoFaConfigured = undefined;

  /**
   * Full name
   * @member {String} fullName
   * @default 'null'
   */
  exports.prototype.fullName = 'null';

  /**
   * Is external login user
   * @member {Boolean} isExternalLoginUser
   */
  exports.prototype.isExternalLoginUser = undefined;

  /**
   * [Deprecated]
   * @member {Boolean} groupsReadOnly
   */
  exports.prototype.groupsReadOnly = undefined;

  /**
   * True if EULA was agreed for user's sites
   * @member {Boolean} agreedEula
   */
  exports.prototype.agreedEula = undefined;

  /**
   * [DEPRECATED] Role ids for the tenant user. Using scopeRoles is more consistent.
   * @member {Array.<Object>} tenantRoles
   */
  exports.prototype.tenantRoles = undefined;

  /**
   * First login
   * @member {Date} firstLogin
   */
  exports.prototype.firstLogin = undefined;

  /**
   * User Scope
   * @member {module:model/UsersSchemasSingleUserSchema200Data.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;

  /**
   * True if email cannot be modified
   * @member {Boolean} emailReadOnly
   */
  exports.prototype.emailReadOnly = undefined;

  /**
   * Link to EULA agreement if it was not agreed yet
   * @member {String} agreementUrl
   */
  exports.prototype.agreementUrl = undefined;

  /**
   * [DEPRECATED] in RBAC there's no 'lowest' role. Returns Admin if user has admin permission on all sites, otherwise a different role.
   * @member {String} lowestRole
   */
  exports.prototype.lowestRole = undefined;

  /**
   * Two fa enabled
   * @member {Boolean} twoFaEnabled
   */
  exports.prototype.twoFaEnabled = undefined;



  /**
   * Allowed values for the <code>twoFaStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TwoFaStatusEnum = {
    /**
     * value: "configured"
     * @const
     */
    configured: "configured",

    /**
     * value: "not_configured"
     * @const
     */
    notConfigured: "not_configured",

    /**
     * value: "enrolled"
     * @const
     */
    enrolled: "enrolled",

    /**
     * value: "enrollment_expired"
     * @const
     */
    enrollmentExpired: "enrollment_expired"
  };


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
