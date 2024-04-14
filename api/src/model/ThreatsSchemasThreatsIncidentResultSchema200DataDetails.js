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
    root.S1MgmtApi.ThreatsSchemasThreatsIncidentResultSchema200DataDetails = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ThreatsSchemasThreatsIncidentResultSchema200DataDetails model module.
   * @module model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatsIncidentResultSchema200DataDetails</code>.
   * @alias module:model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatsIncidentResultSchema200DataDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails} The populated <code>ThreatsSchemasThreatsIncidentResultSchema200DataDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('analystVerdict'))
        obj.analystVerdict = ApiClient.convertToType(data['analystVerdict'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], 'String');
      if (data.hasOwnProperty('threatId'))
        obj.threatId = ApiClient.convertToType(data['threatId'], 'String');
    }
    return obj;
  }

  /**
   * Result of changing the threat's analyst verdict as part of changing the threat's status
   * @member {module:model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails.AnalystVerdictEnum} analystVerdict
   */
  exports.prototype.analystVerdict = undefined;

  /**
   * Result of changing the threat's status
   * @member {module:model/ThreatsSchemasThreatsIncidentResultSchema200DataDetails.ResultEnum} result
   */
  exports.prototype.result = undefined;

  /**
   * Threat id
   * @member {String} threatId
   */
  exports.prototype.threatId = undefined;



  /**
   * Allowed values for the <code>analystVerdict</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnalystVerdictEnum = {
    /**
     * value: "updated"
     * @const
     */
    updated: "updated",

    /**
     * value: "not_changed"
     * @const
     */
    notChanged: "not_changed",

    /**
     * value: "already_set"
     * @const
     */
    alreadySet: "already_set",

    /**
     * value: "conditions_not_met"
     * @const
     */
    conditionsNotMet: "conditions_not_met",

    /**
     * value: "missing_permissions"
     * @const
     */
    missingPermissions: "missing_permissions"
  };


  /**
   * Allowed values for the <code>result</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResultEnum = {
    /**
     * value: "updated"
     * @const
     */
    updated: "updated",

    /**
     * value: "not_changed"
     * @const
     */
    notChanged: "not_changed",

    /**
     * value: "already_set"
     * @const
     */
    alreadySet: "already_set",

    /**
     * value: "conditions_not_met"
     * @const
     */
    conditionsNotMet: "conditions_not_met",

    /**
     * value: "missing_permissions"
     * @const
     */
    missingPermissions: "missing_permissions"
  };

  return exports;

}));
