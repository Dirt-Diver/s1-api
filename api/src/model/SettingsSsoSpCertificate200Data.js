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
    root.S1MgmtApi.SettingsSsoSpCertificate200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SettingsSsoSpCertificate200Data model module.
   * @module model/SettingsSsoSpCertificate200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>SettingsSsoSpCertificate200Data</code>.
   * Response data
   * @alias module:model/SettingsSsoSpCertificate200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SettingsSsoSpCertificate200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SettingsSsoSpCertificate200Data} obj Optional instance to populate.
   * @return {module:model/SettingsSsoSpCertificate200Data} The populated <code>SettingsSsoSpCertificate200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiresAt'))
        obj.expiresAt = ApiClient.convertToType(data['expiresAt'], 'Date');
      if (data.hasOwnProperty('issuedAt'))
        obj.issuedAt = ApiClient.convertToType(data['issuedAt'], 'Date');
      if (data.hasOwnProperty('fileName'))
        obj.fileName = ApiClient.convertToType(data['fileName'], 'String');
      if (data.hasOwnProperty('pem'))
        obj.pem = ApiClient.convertToType(data['pem'], 'String');
    }
    return obj;
  }

  /**
   * Certificate expires at
   * @member {Date} expiresAt
   */
  exports.prototype.expiresAt = undefined;

  /**
   * Certificate issued at
   * @member {Date} issuedAt
   */
  exports.prototype.issuedAt = undefined;

  /**
   * File name of the signing certificate used by the service provider to sign SAML requests
   * @member {String} fileName
   */
  exports.prototype.fileName = undefined;

  /**
   * Certificate in PEM format
   * @member {String} pem
   */
  exports.prototype.pem = undefined;


  return exports;

}));