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
    define(['ApiClient', 'model/V21PolicySchemasPolicy200DataEngines'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21PolicySchemasPolicy200DataEngines'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21PolicySchemasPolicyRequestData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21PolicySchemasPolicy200DataEngines);
  }
}(this, function(ApiClient, V21PolicySchemasPolicy200DataEngines) {
  'use strict';

  /**
   * The V21PolicySchemasPolicyRequestData model module.
   * @module model/V21PolicySchemasPolicyRequestData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21PolicySchemasPolicyRequestData</code>.
   * Data
   * @alias module:model/V21PolicySchemasPolicyRequestData
   * @class
   * @param alertOnDeviceAlert {String} Alertondevicealert
   * @param alerts {String} Alerts
   * @param engines {module:model/V21PolicySchemasPolicy200DataEngines} 
   * @param threatPhishingPrevention {String} Threatphishingprevention
   * @param threatOnDeviceAlert {String} Threatondevicealert
   * @param threats {String} Threats
   */
  var exports = function(alertOnDeviceAlert, alerts, engines, threatPhishingPrevention, threatOnDeviceAlert, threats) {
    this.alertOnDeviceAlert = alertOnDeviceAlert;
    this.alerts = alerts;
    this.engines = engines;
    this.threatPhishingPrevention = threatPhishingPrevention;
    this.threatOnDeviceAlert = threatOnDeviceAlert;
    this.threats = threats;
  };

  /**
   * Constructs a <code>V21PolicySchemasPolicyRequestData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21PolicySchemasPolicyRequestData} obj Optional instance to populate.
   * @return {module:model/V21PolicySchemasPolicyRequestData} The populated <code>V21PolicySchemasPolicyRequestData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('threatResponseGroupId'))
        obj.threatResponseGroupId = ApiClient.convertToType(data['threatResponseGroupId'], 'String');
      if (data.hasOwnProperty('alertResponseGroupId'))
        obj.alertResponseGroupId = ApiClient.convertToType(data['alertResponseGroupId'], 'String');
      if (data.hasOwnProperty('alertOnDeviceAlert'))
        obj.alertOnDeviceAlert = ApiClient.convertToType(data['alertOnDeviceAlert'], 'String');
      if (data.hasOwnProperty('alerts'))
        obj.alerts = ApiClient.convertToType(data['alerts'], 'String');
      if (data.hasOwnProperty('engines'))
        obj.engines = V21PolicySchemasPolicy200DataEngines.constructFromObject(data['engines']);
      if (data.hasOwnProperty('threatPhishingPrevention'))
        obj.threatPhishingPrevention = ApiClient.convertToType(data['threatPhishingPrevention'], 'String');
      if (data.hasOwnProperty('threatOnDeviceAlert'))
        obj.threatOnDeviceAlert = ApiClient.convertToType(data['threatOnDeviceAlert'], 'String');
      if (data.hasOwnProperty('threats'))
        obj.threats = ApiClient.convertToType(data['threats'], 'String');
    }
    return obj;
  }

  /**
   * Threatresponsegroupid
   * @member {String} threatResponseGroupId
   * @default 'null'
   */
  exports.prototype.threatResponseGroupId = 'null';

  /**
   * Alertresponsegroupid
   * @member {String} alertResponseGroupId
   * @default 'null'
   */
  exports.prototype.alertResponseGroupId = 'null';

  /**
   * Alertondevicealert
   * @member {String} alertOnDeviceAlert
   */
  exports.prototype.alertOnDeviceAlert = undefined;

  /**
   * Alerts
   * @member {String} alerts
   */
  exports.prototype.alerts = undefined;

  /**
   * @member {module:model/V21PolicySchemasPolicy200DataEngines} engines
   */
  exports.prototype.engines = undefined;

  /**
   * Threatphishingprevention
   * @member {String} threatPhishingPrevention
   */
  exports.prototype.threatPhishingPrevention = undefined;

  /**
   * Threatondevicealert
   * @member {String} threatOnDeviceAlert
   */
  exports.prototype.threatOnDeviceAlert = undefined;

  /**
   * Threats
   * @member {String} threats
   */
  exports.prototype.threats = undefined;


  return exports;

}));
