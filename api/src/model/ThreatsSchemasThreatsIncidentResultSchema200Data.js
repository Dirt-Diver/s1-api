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
    define(['ApiClient', 'model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ThreatsSchemasThreatsIncidentResultSchema200DataDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ThreatsSchemasThreatsIncidentResultSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ThreatsSchemasThreatsIncidentResultSchema200DataDetails);
  }
}(this, function(ApiClient, ThreatsSchemasThreatsIncidentResultSchema200DataDetails) {
  'use strict';

  /**
   * The ThreatsSchemasThreatsIncidentResultSchema200Data model module.
   * @module model/ThreatsSchemasThreatsIncidentResultSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatsIncidentResultSchema200Data</code>.
   * Response data
   * @alias module:model/ThreatsSchemasThreatsIncidentResultSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatsIncidentResultSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatsIncidentResultSchema200Data} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatsIncidentResultSchema200Data} The populated <code>ThreatsSchemasThreatsIncidentResultSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('affected'))
        obj.affected = ApiClient.convertToType(data['affected'], 'Number');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [ThreatsSchemasThreatsIncidentResultSchema200DataDetails]);
    }
    return obj;
  }

  /**
   * Number of entities affected by the requested operation
   * @member {Number} affected
   */
  exports.prototype.affected = undefined;

  /**
   * Result details for each threat
   * @member {Array.<module:model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails>} details
   */
  exports.prototype.details = undefined;


  return exports;

}));
