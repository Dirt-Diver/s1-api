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
    root.S1MgmtApi.ThreatAnalysisSchemasTimelineViewSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ThreatAnalysisSchemasTimelineViewSchemaMany200Data model module.
   * @module model/ThreatAnalysisSchemasTimelineViewSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatAnalysisSchemasTimelineViewSchemaMany200Data</code>.
   * @alias module:model/ThreatAnalysisSchemasTimelineViewSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ThreatAnalysisSchemasTimelineViewSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatAnalysisSchemasTimelineViewSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/ThreatAnalysisSchemasTimelineViewSchemaMany200Data} The populated <code>ThreatAnalysisSchemasTimelineViewSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('secondaryDescription'))
        obj.secondaryDescription = ApiClient.convertToType(data['secondaryDescription'], 'String');
      if (data.hasOwnProperty('agentUpdatedVersion'))
        obj.agentUpdatedVersion = ApiClient.convertToType(data['agentUpdatedVersion'], 'String');
      if (data.hasOwnProperty('osFamily'))
        obj.osFamily = ApiClient.convertToType(data['osFamily'], 'String');
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('activityType'))
        obj.activityType = ApiClient.convertToType(data['activityType'], 'Number');
      if (data.hasOwnProperty('threatId'))
        obj.threatId = ApiClient.convertToType(data['threatId'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('primaryDescription'))
        obj.primaryDescription = ApiClient.convertToType(data['primaryDescription'], 'String');
      if (data.hasOwnProperty('agentId'))
        obj.agentId = ApiClient.convertToType(data['agentId'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
    }
    return obj;
  }

  /**
   * Related group (If applicable)
   * @member {String} groupId
   */
  exports.prototype.groupId = undefined;

  /**
   * Activity ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Activity creation time (UTC)
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Secondary description
   * @member {String} secondaryDescription
   */
  exports.prototype.secondaryDescription = undefined;

  /**
   * Agent's new version (If applicable)
   * @member {String} agentUpdatedVersion
   */
  exports.prototype.agentUpdatedVersion = undefined;

  /**
   * Agent's OS type (if applicable)
   * @member {module:model/ThreatAnalysisSchemasTimelineViewSchemaMany200Data.OsFamilyEnum} osFamily
   */
  exports.prototype.osFamily = undefined;

  /**
   * Related account (If applicable)
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * Activity last updated time (UTC)
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Threat file hash (If applicable)
   * @member {String} hash
   */
  exports.prototype.hash = undefined;

  /**
   * Activity type
   * @member {Number} activityType
   */
  exports.prototype.activityType = undefined;

  /**
   * Related threat (If applicable)
   * @member {String} threatId
   */
  exports.prototype.threatId = undefined;

  /**
   * Related site (If applicable)
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * The user who invoked the activity (If applicable)
   * @member {String} userId
   */
  exports.prototype.userId = undefined;

  /**
   * Primary description
   * @member {String} primaryDescription
   */
  exports.prototype.primaryDescription = undefined;

  /**
   * Related Agent (If applicable)
   * @member {String} agentId
   */
  exports.prototype.agentId = undefined;

  /**
   * Extra activity specific data
   * @member {Object} data
   */
  exports.prototype.data = undefined;



  /**
   * Allowed values for the <code>osFamily</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OsFamilyEnum = {
    /**
     * value: "windows"
     * @const
     */
    windows: "windows",

    /**
     * value: "macos"
     * @const
     */
    macos: "macos",

    /**
     * value: "linux"
     * @const
     */
    linux: "linux",

    /**
     * value: "windows_legacy"
     * @const
     */
    windowsLegacy: "windows_legacy"
  };

  return exports;

}));