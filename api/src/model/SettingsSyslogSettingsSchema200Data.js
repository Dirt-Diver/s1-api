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
    root.S1MgmtApi.SettingsSyslogSettingsSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SettingsSyslogSettingsSchema200Data model module.
   * @module model/SettingsSyslogSettingsSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>SettingsSyslogSettingsSchema200Data</code>.
   * Response data
   * @alias module:model/SettingsSyslogSettingsSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SettingsSyslogSettingsSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsSyslogSettingsSchema200Data} obj Optional instance to populate.
   * @return {module:model/SettingsSyslogSettingsSchema200Data} The populated <code>SettingsSyslogSettingsSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ssl'))
        obj.ssl = ApiClient.convertToType(data['ssl'], 'Boolean');
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'Number');
      if (data.hasOwnProperty('clientKeyContent'))
        obj.clientKeyContent = ApiClient.convertToType(data['clientKeyContent'], 'String');
      if (data.hasOwnProperty('serverCertContent'))
        obj.serverCertContent = ApiClient.convertToType(data['serverCertContent'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('clientCertName'))
        obj.clientCertName = ApiClient.convertToType(data['clientCertName'], 'String');
      if (data.hasOwnProperty('clientKeyName'))
        obj.clientKeyName = ApiClient.convertToType(data['clientKeyName'], 'String');
      if (data.hasOwnProperty('serverCertName'))
        obj.serverCertName = ApiClient.convertToType(data['serverCertName'], 'String');
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('format'))
        obj.format = ApiClient.convertToType(data['format'], 'String');
      if (data.hasOwnProperty('clientCertContent'))
        obj.clientCertContent = ApiClient.convertToType(data['clientCertContent'], 'String');
    }
    return obj;
  }

  /**
   * SysLog service uses ssl
   * @member {Boolean} ssl
   */
  exports.prototype.ssl = undefined;

  /**
   * SysLog service port
   * @member {Number} port
   */
  exports.prototype.port = undefined;

  /**
   *  SysLog service client key content in Base64
   * @member {String} clientKeyContent
   */
  exports.prototype.clientKeyContent = undefined;

  /**
   * SysLog service server certificate content in Base64
   * @member {String} serverCertContent
   */
  exports.prototype.serverCertContent = undefined;

  /**
   * SysLog server token
   * @member {String} token
   */
  exports.prototype.token = undefined;

  /**
   * SysLog service is enabled
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * SysLog service client certificate name
   * @member {String} clientCertName
   */
  exports.prototype.clientCertName = undefined;

  /**
   * SysLog service client key name
   * @member {String} clientKeyName
   */
  exports.prototype.clientKeyName = undefined;

  /**
   * SysLog service server certificate name
   * @member {String} serverCertName
   */
  exports.prototype.serverCertName = undefined;

  /**
   * SysLog service host
   * @member {String} host
   */
  exports.prototype.host = undefined;

  /**
   * SysLog service format
   * @member {module:model/SettingsSyslogSettingsSchema200Data.FormatEnum} format
   */
  exports.prototype.format = undefined;

  /**
   * SysLog service client certificate content in Base64
   * @member {String} clientCertContent
   */
  exports.prototype.clientCertContent = undefined;



  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FormatEnum = {
    /**
     * value: "cef"
     * @const
     */
    cef: "cef",

    /**
     * value: "stix"
     * @const
     */
    stix: "stix",

    /**
     * value: "ioc"
     * @const
     */
    ioc: "ioc",

    /**
     * value: "cef2"
     * @const
     */
    cef2: "cef2",

    /**
     * value: "rfc-5424"
     * @const
     */
    rfc5424: "rfc-5424"
  };

  return exports;

}));
