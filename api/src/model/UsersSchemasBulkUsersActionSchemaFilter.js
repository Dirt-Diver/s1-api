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
    root.S1MgmtApi.UsersSchemasBulkUsersActionSchemaFilter = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasBulkUsersActionSchemaFilter model module.
   * @module model/UsersSchemasBulkUsersActionSchemaFilter
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasBulkUsersActionSchemaFilter</code>.
   * Filter
   * @alias module:model/UsersSchemasBulkUsersActionSchemaFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UsersSchemasBulkUsersActionSchemaFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasBulkUsersActionSchemaFilter} obj Optional instance to populate.
   * @return {module:model/UsersSchemasBulkUsersActionSchemaFilter} The populated <code>UsersSchemasBulkUsersActionSchemaFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('createdAt__gt'))
        obj.createdAtGt = ApiClient.convertToType(data['createdAt__gt'], 'Date');
      if (data.hasOwnProperty('emailVerified'))
        obj.emailVerified = ApiClient.convertToType(data['emailVerified'], 'Boolean');
      if (data.hasOwnProperty('canGenerateApiToken'))
        obj.canGenerateApiToken = ApiClient.convertToType(data['canGenerateApiToken'], 'Boolean');
      if (data.hasOwnProperty('lastActivation__between'))
        obj.lastActivationBetween = ApiClient.convertToType(data['lastActivation__between'], 'String');
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('apiTokenExpiresAt__lte'))
        obj.apiTokenExpiresAtLte = ApiClient.convertToType(data['apiTokenExpiresAt__lte'], 'Date');
      if (data.hasOwnProperty('createdAt__lt'))
        obj.createdAtLt = ApiClient.convertToType(data['createdAt__lt'], 'Date');
      if (data.hasOwnProperty('lastActivation__lte'))
        obj.lastActivationLte = ApiClient.convertToType(data['lastActivation__lte'], 'Date');
      if (data.hasOwnProperty('sources'))
        obj.sources = ApiClient.convertToType(data['sources'], ['String']);
      if (data.hasOwnProperty('primaryTwoFaMethod'))
        obj.primaryTwoFaMethod = ApiClient.convertToType(data['primaryTwoFaMethod'], 'String');
      if (data.hasOwnProperty('lastLogin'))
        obj.lastLogin = ApiClient.convertToType(data['lastLogin'], 'Date');
      if (data.hasOwnProperty('lastActivation__lt'))
        obj.lastActivationLt = ApiClient.convertToType(data['lastActivation__lt'], 'Date');
      if (data.hasOwnProperty('hasValidApiToken'))
        obj.hasValidApiToken = ApiClient.convertToType(data['hasValidApiToken'], 'Boolean');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('createdAt__lte'))
        obj.createdAtLte = ApiClient.convertToType(data['createdAt__lte'], 'Date');
      if (data.hasOwnProperty('dateJoined'))
        obj.dateJoined = ApiClient.convertToType(data['dateJoined'], 'Date');
      if (data.hasOwnProperty('roleIds'))
        obj.roleIds = ApiClient.convertToType(data['roleIds'], ['String']);
      if (data.hasOwnProperty('fullName__contains'))
        obj.fullNameContains = ApiClient.convertToType(data['fullName__contains'], ['String']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('apiTokenExpiresAt__gt'))
        obj.apiTokenExpiresAtGt = ApiClient.convertToType(data['apiTokenExpiresAt__gt'], 'Date');
      if (data.hasOwnProperty('twoFaStatuses'))
        obj.twoFaStatuses = ApiClient.convertToType(data['twoFaStatuses'], ['String']);
      if (data.hasOwnProperty('fullNameReadOnly'))
        obj.fullNameReadOnly = ApiClient.convertToType(data['fullNameReadOnly'], 'Boolean');
      if (data.hasOwnProperty('twoFaStatus'))
        obj.twoFaStatus = ApiClient.convertToType(data['twoFaStatus'], 'String');
      if (data.hasOwnProperty('apiTokenExpiresAt__gte'))
        obj.apiTokenExpiresAtGte = ApiClient.convertToType(data['apiTokenExpiresAt__gte'], 'Date');
      if (data.hasOwnProperty('fullName'))
        obj.fullName = ApiClient.convertToType(data['fullName'], 'String');
      if (data.hasOwnProperty('groupsReadOnly'))
        obj.groupsReadOnly = ApiClient.convertToType(data['groupsReadOnly'], 'Boolean');
      if (data.hasOwnProperty('apiTokenExpiresAt__between'))
        obj.apiTokenExpiresAtBetween = ApiClient.convertToType(data['apiTokenExpiresAt__between'], 'String');
      if (data.hasOwnProperty('createdAt__between'))
        obj.createdAtBetween = ApiClient.convertToType(data['createdAt__between'], 'String');
      if (data.hasOwnProperty('firstLogin'))
        obj.firstLogin = ApiClient.convertToType(data['firstLogin'], 'Date');
      if (data.hasOwnProperty('emailReadOnly'))
        obj.emailReadOnly = ApiClient.convertToType(data['emailReadOnly'], 'Boolean');
      if (data.hasOwnProperty('createdAt__gte'))
        obj.createdAtGte = ApiClient.convertToType(data['createdAt__gte'], 'Date');
      if (data.hasOwnProperty('lastActivation__gt'))
        obj.lastActivationGt = ApiClient.convertToType(data['lastActivation__gt'], 'Date');
      if (data.hasOwnProperty('apiTokenExpiresAt__lt'))
        obj.apiTokenExpiresAtLt = ApiClient.convertToType(data['apiTokenExpiresAt__lt'], 'Date');
      if (data.hasOwnProperty('email__contains'))
        obj.emailContains = ApiClient.convertToType(data['email__contains'], ['String']);
      if (data.hasOwnProperty('lastActivation__gte'))
        obj.lastActivationGte = ApiClient.convertToType(data['lastActivation__gte'], 'Date');
      if (data.hasOwnProperty('twoFaEnabled'))
        obj.twoFaEnabled = ApiClient.convertToType(data['twoFaEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * User was created after this timestamp
   * @member {Date} createdAtGt
   */
  exports.prototype.createdAtGt = undefined;

  /**
   * Return only verified/unverified users
   * @member {Boolean} emailVerified
   */
  exports.prototype.emailVerified = undefined;

  /**
   * Can generate api token
   * @member {Boolean} canGenerateApiToken
   */
  exports.prototype.canGenerateApiToken = undefined;

  /**
   * Date range for when the user was last active (format: <from_timestamp>-<to_timestamp>, inclusive)
   * @member {String} lastActivationBetween
   */
  exports.prototype.lastActivationBetween = undefined;

  /**
   * List of user IDs to filter by
   * @member {Array.<String>} ids
   */
  exports.prototype.ids = undefined;

  /**
   * Full text search for fields: full_name, email, description
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * API token expires before or at this timestamp
   * @member {Date} apiTokenExpiresAtLte
   */
  exports.prototype.apiTokenExpiresAtLte = undefined;

  /**
   * User was created before this timestamp
   * @member {Date} createdAtLt
   */
  exports.prototype.createdAtLt = undefined;

  /**
   * User was last active before or at this timestamp
   * @member {Date} lastActivationLte
   */
  exports.prototype.lastActivationLte = undefined;

  /**
   * Source in
   * @member {Array.<module:model/UsersSchemasBulkUsersActionSchemaFilter.SourcesEnum>} sources
   */
  exports.prototype.sources = undefined;

  /**
   * Primary two fa method
   * @member {String} primaryTwoFaMethod
   */
  exports.prototype.primaryTwoFaMethod = undefined;

  /**
   * Last login
   * @member {Date} lastLogin
   */
  exports.prototype.lastLogin = undefined;

  /**
   * User was last active before this timestamp
   * @member {Date} lastActivationLt
   */
  exports.prototype.lastActivationLt = undefined;

  /**
   * Has valid api token
   * @member {Boolean} hasValidApiToken
   */
  exports.prototype.hasValidApiToken = undefined;

  /**
   * User Source
   * @member {module:model/UsersSchemasBulkUsersActionSchemaFilter.SourceEnum} source
   */
  exports.prototype.source = undefined;

  /**
   * User was created before or at this timestamp
   * @member {Date} createdAtLte
   */
  exports.prototype.createdAtLte = undefined;

  /**
   * Date joined
   * @member {Date} dateJoined
   */
  exports.prototype.dateJoined = undefined;

  /**
   * List of rbac roles to filter by
   * @member {Array.<String>} roleIds
   */
  exports.prototype.roleIds = undefined;

  /**
   * Match full name partially (substring)
   * @member {Array.<String>} fullNameContains
   */
  exports.prototype.fullNameContains = undefined;

  /**
   * Email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * API token expires after this timestamp
   * @member {Date} apiTokenExpiresAtGt
   */
  exports.prototype.apiTokenExpiresAtGt = undefined;

  /**
   * Two fa status in
   * @member {Array.<String>} twoFaStatuses
   */
  exports.prototype.twoFaStatuses = undefined;

  /**
   * True if full name cannot be changed
   * @member {Boolean} fullNameReadOnly
   */
  exports.prototype.fullNameReadOnly = undefined;

  /**
   * Two fa status
   * @member {String} twoFaStatus
   */
  exports.prototype.twoFaStatus = undefined;

  /**
   * API token expires after or at this timestamp
   * @member {Date} apiTokenExpiresAtGte
   */
  exports.prototype.apiTokenExpiresAtGte = undefined;

  /**
   * Full name
   * @member {String} fullName
   */
  exports.prototype.fullName = undefined;

  /**
   * [DEPRECATED] True if permissions cannot be changed
   * @member {Boolean} groupsReadOnly
   */
  exports.prototype.groupsReadOnly = undefined;

  /**
   * Date range for when the API token expires (format: <from_timestamp>-<to_timestamp>, inclusive)
   * @member {String} apiTokenExpiresAtBetween
   */
  exports.prototype.apiTokenExpiresAtBetween = undefined;

  /**
   * Date range for when the user was created (format: <from_timestamp>-<to_timestamp>, inclusive)
   * @member {String} createdAtBetween
   */
  exports.prototype.createdAtBetween = undefined;

  /**
   * First login
   * @member {Date} firstLogin
   */
  exports.prototype.firstLogin = undefined;

  /**
   * True if email cannot be changed
   * @member {Boolean} emailReadOnly
   */
  exports.prototype.emailReadOnly = undefined;

  /**
   * User was created after or at this timestamp
   * @member {Date} createdAtGte
   */
  exports.prototype.createdAtGte = undefined;

  /**
   * User was last active after this timestamp
   * @member {Date} lastActivationGt
   */
  exports.prototype.lastActivationGt = undefined;

  /**
   * API token expires before this timestamp
   * @member {Date} apiTokenExpiresAtLt
   */
  exports.prototype.apiTokenExpiresAtLt = undefined;

  /**
   * Match email partially (substring)
   * @member {Array.<String>} emailContains
   */
  exports.prototype.emailContains = undefined;

  /**
   * User was last active after or at this timestamp
   * @member {Date} lastActivationGte
   */
  exports.prototype.lastActivationGte = undefined;

  /**
   * Two fa enabled
   * @member {Boolean} twoFaEnabled
   */
  exports.prototype.twoFaEnabled = undefined;



  /**
   * Allowed values for the <code>sources</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourcesEnum = {
    /**
     * value: "mgmt"
     * @const
     */
    mgmt: "mgmt",

    /**
     * value: "sso_saml"
     * @const
     */
    ssoSaml: "sso_saml",

    /**
     * value: "active_directory"
     * @const
     */
    activeDirectory: "active_directory"
  };


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "mgmt"
     * @const
     */
    mgmt: "mgmt",

    /**
     * value: "sso_saml"
     * @const
     */
    ssoSaml: "sso_saml",

    /**
     * value: "active_directory"
     * @const
     */
    activeDirectory: "active_directory"
  };

  return exports;

}));