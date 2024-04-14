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
    define(['ApiClient', 'model/ThreatsSchemasThreatMitigationActionSchema200DataSkipped', 'model/ThreatsSchemasThreatSchemaMany200MitigationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ThreatsSchemasThreatMitigationActionSchema200DataSkipped'), require('./ThreatsSchemasThreatSchemaMany200MitigationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ThreatsSchemasThreatMitigationActionSchema200DataDetails = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ThreatsSchemasThreatMitigationActionSchema200DataSkipped, root.S1MgmtApi.ThreatsSchemasThreatSchemaMany200MitigationStatus);
  }
}(this, function(ApiClient, ThreatsSchemasThreatMitigationActionSchema200DataSkipped, ThreatsSchemasThreatSchemaMany200MitigationStatus) {
  'use strict';

  /**
   * The ThreatsSchemasThreatMitigationActionSchema200DataDetails model module.
   * @module model/ThreatsSchemasThreatMitigationActionSchema200DataDetails
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatMitigationActionSchema200DataDetails</code>.
   * @alias module:model/ThreatsSchemasThreatMitigationActionSchema200DataDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatMitigationActionSchema200DataDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatMitigationActionSchema200DataDetails} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatMitigationActionSchema200DataDetails} The populated <code>ThreatsSchemasThreatMitigationActionSchema200DataDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('skipped'))
        obj.skipped = ApiClient.convertToType(data['skipped'], [ThreatsSchemasThreatMitigationActionSchema200DataSkipped]);
      if (data.hasOwnProperty('reports'))
        obj.reports = ApiClient.convertToType(data['reports'], [ThreatsSchemasThreatSchemaMany200MitigationStatus]);
      if (data.hasOwnProperty('threatId'))
        obj.threatId = ApiClient.convertToType(data['threatId'], 'String');
    }
    return obj;
  }

  /**
   * List of skipped mitigation actions with additional details.
   * @member {Array.<module:model/ThreatsSchemasThreatMitigationActionSchema200DataSkipped>} skipped
   */
  exports.prototype.skipped = undefined;

  /**
   * List of latest mitigation reports created by the action trigger.
   * @member {Array.<module:model/ThreatsSchemasThreatSchemaMany200MitigationStatus>} reports
   */
  exports.prototype.reports = undefined;

  /**
   * Threat id
   * @member {String} threatId
   */
  exports.prototype.threatId = undefined;


  return exports;

}));
