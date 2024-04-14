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
    define(['ApiClient', 'model/SystemSystemConfigurationSchema200DataAllowedDomains'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SystemSystemConfigurationSchema200DataAllowedDomains'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SystemPutSystemConfigurationData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SystemSystemConfigurationSchema200DataAllowedDomains);
  }
}(this, function(ApiClient, SystemSystemConfigurationSchema200DataAllowedDomains) {
  'use strict';

  /**
   * The SystemPutSystemConfigurationData model module.
   * @module model/SystemPutSystemConfigurationData
   * @version 2.1
   */

  /**
   * Constructs a new <code>SystemPutSystemConfigurationData</code>.
   * Data
   * @alias module:model/SystemPutSystemConfigurationData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SystemPutSystemConfigurationData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemPutSystemConfigurationData} obj Optional instance to populate.
   * @return {module:model/SystemPutSystemConfigurationData} The populated <code>SystemPutSystemConfigurationData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('passwordExpiration'))
        obj.passwordExpiration = ApiClient.convertToType(data['passwordExpiration'], 'Number');
      if (data.hasOwnProperty('uiInactivityTimeoutSeconds'))
        obj.uiInactivityTimeoutSeconds = ApiClient.convertToType(data['uiInactivityTimeoutSeconds'], Object);
      if (data.hasOwnProperty('rememberMeLength'))
        obj.rememberMeLength = ApiClient.convertToType(data['rememberMeLength'], 'Number');
      if (data.hasOwnProperty('accessibleUrl'))
        obj.accessibleUrl = ApiClient.convertToType(data['accessibleUrl'], 'String');
      if (data.hasOwnProperty('earlyAccessPlatforms'))
        obj.earlyAccessPlatforms = ApiClient.convertToType(data['earlyAccessPlatforms'], ['String']);
      if (data.hasOwnProperty('globalTwoFaEnabled'))
        obj.globalTwoFaEnabled = ApiClient.convertToType(data['globalTwoFaEnabled'], 'Boolean');
      if (data.hasOwnProperty('earlyAccess'))
        obj.earlyAccess = ApiClient.convertToType(data['earlyAccess'], 'Boolean');
      if (data.hasOwnProperty('cloudIntelligenceOn'))
        obj.cloudIntelligenceOn = ApiClient.convertToType(data['cloudIntelligenceOn'], 'Boolean');
      if (data.hasOwnProperty('allowedDomains'))
        obj.allowedDomains = ApiClient.convertToType(data['allowedDomains'], [SystemSystemConfigurationSchema200DataAllowedDomains]);
      if (data.hasOwnProperty('cloudLastConnectionTime'))
        obj.cloudLastConnectionTime = ApiClient.convertToType(data['cloudLastConnectionTime'], 'Date');
      if (data.hasOwnProperty('tfaEnrollmentExpiration'))
        obj.tfaEnrollmentExpiration = ApiClient.convertToType(data['tfaEnrollmentExpiration'], Object);
      if (data.hasOwnProperty('allowDuplicateSite'))
        obj.allowDuplicateSite = ApiClient.convertToType(data['allowDuplicateSite'], 'Boolean');
      if (data.hasOwnProperty('advancedMode'))
        obj.advancedMode = ApiClient.convertToType(data['advancedMode'], 'Boolean');
    }
    return obj;
  }

  /**
   * Time in days until a user password expires
   * @member {Number} passwordExpiration
   */
  exports.prototype.passwordExpiration = undefined;

  /**
   * Length of UI inactivity period
   * @member {Object} uiInactivityTimeoutSeconds
   */
  exports.prototype.uiInactivityTimeoutSeconds = undefined;

  /**
   * Time in minutes until a user session expires
   * @member {Number} rememberMeLength
   */
  exports.prototype.rememberMeLength = undefined;

  /**
   * External DNS name of the management
   * @member {String} accessibleUrl
   */
  exports.prototype.accessibleUrl = undefined;

  /**
   * Early access platforms
   * @member {Array.<module:model/SystemPutSystemConfigurationData.EarlyAccessPlatformsEnum>} earlyAccessPlatforms
   */
  exports.prototype.earlyAccessPlatforms = undefined;

  /**
   * Global two fa enabled
   * @member {Boolean} globalTwoFaEnabled
   */
  exports.prototype.globalTwoFaEnabled = undefined;

  /**
   * Early access
   * @member {Boolean} earlyAccess
   */
  exports.prototype.earlyAccess = undefined;

  /**
   * [DEPRECATED] Cloud intelligence on
   * @member {Boolean} cloudIntelligenceOn
   */
  exports.prototype.cloudIntelligenceOn = undefined;

  /**
   * list of allowed domains for user creation.
   * @member {Array.<module:model/SystemSystemConfigurationSchema200DataAllowedDomains>} allowedDomains
   */
  exports.prototype.allowedDomains = undefined;

  /**
   * Cloud last connection time
   * @member {Date} cloudLastConnectionTime
   */
  exports.prototype.cloudLastConnectionTime = undefined;

  /**
   * 2FA expiration period
   * @member {Object} tfaEnrollmentExpiration
   */
  exports.prototype.tfaEnrollmentExpiration = undefined;

  /**
   * [DEPRECATED] Allow site admins to duplicate sites in their accounts
   * @member {Boolean} allowDuplicateSite
   */
  exports.prototype.allowDuplicateSite = undefined;

  /**
   * Advanced mode
   * @member {Boolean} advancedMode
   */
  exports.prototype.advancedMode = undefined;



  /**
   * Allowed values for the <code>earlyAccessPlatforms</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EarlyAccessPlatformsEnum = {
    /**
     * value: "sdk"
     * @const
     */
    sdk: "sdk",

    /**
     * value: "linux"
     * @const
     */
    linux: "linux",

    /**
     * value: "threat_detection_netapp"
     * @const
     */
    threatDetectionNetapp: "threat_detection_netapp",

    /**
     * value: "threat_detection_s3"
     * @const
     */
    threatDetectionS3: "threat_detection_s3",

    /**
     * value: "macos"
     * @const
     */
    macos: "macos",

    /**
     * value: "windows_legacy"
     * @const
     */
    windowsLegacy: "windows_legacy",

    /**
     * value: "linux_k8s"
     * @const
     */
    linuxK8s: "linux_k8s",

    /**
     * value: "windows"
     * @const
     */
    windows: "windows"
  };

  return exports;

}));
