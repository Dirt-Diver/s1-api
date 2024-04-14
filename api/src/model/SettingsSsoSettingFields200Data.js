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
    root.S1MgmtApi.SettingsSsoSettingFields200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SettingsSsoSettingFields200Data model module.
   * @module model/SettingsSsoSettingFields200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>SettingsSsoSettingFields200Data</code>.
   * Response data
   * @alias module:model/SettingsSsoSettingFields200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SettingsSsoSettingFields200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsSsoSettingFields200Data} obj Optional instance to populate.
   * @return {module:model/SettingsSsoSettingFields200Data} The populated <code>SettingsSsoSettingFields200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('defaultUserRole'))
        obj.defaultUserRole = ApiClient.convertToType(data['defaultUserRole'], 'String');
      if (data.hasOwnProperty('ssoElevatedSessionReauthType'))
        obj.ssoElevatedSessionReauthType = ApiClient.convertToType(data['ssoElevatedSessionReauthType'], 'String');
      if (data.hasOwnProperty('autoProvisioning'))
        obj.autoProvisioning = ApiClient.convertToType(data['autoProvisioning'], 'Boolean');
      if (data.hasOwnProperty('ssoElevatedSessionReauthTypeEnabled'))
        obj.ssoElevatedSessionReauthTypeEnabled = ApiClient.convertToType(data['ssoElevatedSessionReauthTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('spEntityId'))
        obj.spEntityId = ApiClient.convertToType(data['spEntityId'], 'String');
      if (data.hasOwnProperty('domains'))
        obj.domains = ApiClient.convertToType(data['domains'], ['String']);
      if (data.hasOwnProperty('idpEntityId'))
        obj.idpEntityId = ApiClient.convertToType(data['idpEntityId'], 'String');
      if (data.hasOwnProperty('idpSsoUrl'))
        obj.idpSsoUrl = ApiClient.convertToType(data['idpSsoUrl'], 'String');
      if (data.hasOwnProperty('ssoInheritableDomains'))
        obj.ssoInheritableDomains = ApiClient.convertToType(data['ssoInheritableDomains'], Object);
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('signRequest'))
        obj.signRequest = ApiClient.convertToType(data['signRequest'], 'Boolean');
      if (data.hasOwnProperty('defaultUserRoleId'))
        obj.defaultUserRoleId = ApiClient.convertToType(data['defaultUserRoleId'], 'String');
      if (data.hasOwnProperty('spAcsUrl'))
        obj.spAcsUrl = ApiClient.convertToType(data['spAcsUrl'], 'String');
      if (data.hasOwnProperty('ssoPropagateDomainsToChildren'))
        obj.ssoPropagateDomainsToChildren = ApiClient.convertToType(data['ssoPropagateDomainsToChildren'], 'Boolean');
      if (data.hasOwnProperty('ssoInheritDomainsFrom'))
        obj.ssoInheritDomainsFrom = ApiClient.convertToType(data['ssoInheritDomainsFrom'], ['String']);
      if (data.hasOwnProperty('idpCertName'))
        obj.idpCertName = ApiClient.convertToType(data['idpCertName'], 'String');
    }
    return obj;
  }

  /**
   * The role name of the default role for a new user logging in via SSO for the first time
   * @member {String} defaultUserRole
   */
  exports.prototype.defaultUserRole = undefined;

  /**
   * Type of re-authentication used for session elevation.
   * @member {module:model/SettingsSsoSettingFields200Data.SsoElevatedSessionReauthTypeEnum} ssoElevatedSessionReauthType
   */
  exports.prototype.ssoElevatedSessionReauthType = undefined;

  /**
   * True if the user should be auto provisioned
   * @member {Boolean} autoProvisioning
   */
  exports.prototype.autoProvisioning = undefined;

  /**
   * Marks whether re-auth type choice should be available in SSO settings
   * @member {Boolean} ssoElevatedSessionReauthTypeEnabled
   */
  exports.prototype.ssoElevatedSessionReauthTypeEnabled = undefined;

  /**
   * Identifier the Management console creates to dialogue with the SSO provider.
   * @member {String} spEntityId
   */
  exports.prototype.spEntityId = undefined;

  /**
   * A list of domain names associated with the scope
   * @member {Array.<String>} domains
   */
  exports.prototype.domains = undefined;

  /**
   * Identity provider's Entity ID (a.k.a. Issuer)
   * @member {String} idpEntityId
   */
  exports.prototype.idpEntityId = undefined;

  /**
   * The SSO URL of the Identity Provider (Login URL)
   * @member {String} idpSsoUrl
   */
  exports.prototype.idpSsoUrl = undefined;

  /**
   * A dictionary of inheritable domains
   * @member {Object} ssoInheritableDomains
   */
  exports.prototype.ssoInheritableDomains = undefined;

  /**
   * Indicates if SSO is enabled
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * Indicates if SAML Request Signing is enabled
   * @member {Boolean} signRequest
   */
  exports.prototype.signRequest = undefined;

  /**
   * The role name of the default role for a new user logging in via SSO for the first time
   * @member {String} defaultUserRoleId
   */
  exports.prototype.defaultUserRoleId = undefined;

  /**
   * Management console Assertion Consumer Service (ACS) URL. This is were IDP should send the authentication request
   * @member {String} spAcsUrl
   */
  exports.prototype.spAcsUrl = undefined;

  /**
   * True if the domains should be propagated to children scopes
   * @member {Boolean} ssoPropagateDomainsToChildren
   */
  exports.prototype.ssoPropagateDomainsToChildren = undefined;

  /**
   * Scope(s) to inherit domains from
   * @member {Array.<module:model/SettingsSsoSettingFields200Data.SsoInheritDomainsFromEnum>} ssoInheritDomainsFrom
   */
  exports.prototype.ssoInheritDomainsFrom = undefined;

  /**
   * Identity provider's certificate file name (If not provided, cert name and content will stay untouched in the DB)
   * @member {String} idpCertName
   */
  exports.prototype.idpCertName = undefined;



  /**
   * Allowed values for the <code>ssoElevatedSessionReauthType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SsoElevatedSessionReauthTypeEnum = {
    /**
     * value: "totp"
     * @const
     */
    totp: "totp",

    /**
     * value: "idp"
     * @const
     */
    idp: "idp"
  };


  /**
   * Allowed values for the <code>ssoInheritDomainsFrom</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SsoInheritDomainsFromEnum = {
    /**
     * value: "group"
     * @const
     */
    group: "group",

    /**
     * value: "site"
     * @const
     */
    site: "site",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "tenant"
     * @const
     */
    tenant: "tenant"
  };

  return exports;

}));