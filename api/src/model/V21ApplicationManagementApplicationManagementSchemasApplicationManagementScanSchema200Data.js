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
    root.S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data model module.
   * @module model/V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data</code>.
   * Response data
   * @alias module:model/V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data} obj Optional instance to populate.
   * @return {module:model/V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data} The populated <code>V21ApplicationManagementApplicationManagementSchemasApplicationManagementScanSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scanDisabledUntil'))
        obj.scanDisabledUntil = ApiClient.convertToType(data['scanDisabledUntil'], 'Date');
      if (data.hasOwnProperty('isAvailable'))
        obj.isAvailable = ApiClient.convertToType(data['isAvailable'], 'Boolean');
      if (data.hasOwnProperty('lastScan'))
        obj.lastScan = ApiClient.convertToType(data['lastScan'], 'Date');
      if (data.hasOwnProperty('nextScan'))
        obj.nextScan = ApiClient.convertToType(data['nextScan'], 'Date');
      if (data.hasOwnProperty('scanDisabledSecondsPeriod'))
        obj.scanDisabledSecondsPeriod = ApiClient.convertToType(data['scanDisabledSecondsPeriod'], 'Number');
    }
    return obj;
  }

  /**
   * Time when it will be possible to initiate scan again.
   * @member {Date} scanDisabledUntil
   */
  exports.prototype.scanDisabledUntil = undefined;

  /**
   * True if selected scope is available for scanning.
   * @member {Boolean} isAvailable
   */
  exports.prototype.isAvailable = undefined;

  /**
   * Time of the last scan.
   * @member {Date} lastScan
   */
  exports.prototype.lastScan = undefined;

  /**
   * Time of the next scheduled scan.
   * @member {Date} nextScan
   */
  exports.prototype.nextScan = undefined;

  /**
   * Scan disabled seconds period
   * @member {Number} scanDisabledSecondsPeriod
   */
  exports.prototype.scanDisabledSecondsPeriod = undefined;


  return exports;

}));
