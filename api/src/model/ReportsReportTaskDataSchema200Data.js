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
    root.S1MgmtApi.ReportsReportTaskDataSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportsReportTaskDataSchema200Data model module.
   * @module model/ReportsReportTaskDataSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>ReportsReportTaskDataSchema200Data</code>.
   * Response data
   * @alias module:model/ReportsReportTaskDataSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportsReportTaskDataSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportsReportTaskDataSchema200Data} obj Optional instance to populate.
   * @return {module:model/ReportsReportTaskDataSchema200Data} The populated <code>ReportsReportTaskDataSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attachmentTypes'))
        obj.attachmentTypes = ApiClient.convertToType(data['attachmentTypes'], ['String']);
      if (data.hasOwnProperty('toDate'))
        obj.toDate = ApiClient.convertToType(data['toDate'], 'Date');
      if (data.hasOwnProperty('scheduleType'))
        obj.scheduleType = ApiClient.convertToType(data['scheduleType'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('recipients'))
        obj.recipients = ApiClient.convertToType(data['recipients'], ['String']);
      if (data.hasOwnProperty('day'))
        obj.day = ApiClient.convertToType(data['day'], Object);
      if (data.hasOwnProperty('creatorId'))
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'String');
      if (data.hasOwnProperty('sites'))
        obj.sites = ApiClient.convertToType(data['sites'], 'String');
      if (data.hasOwnProperty('insightTypes'))
        obj.insightTypes = ApiClient.convertToType(data['insightTypes'], [Object]);
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ApiClient.convertToType(data['frequency'], 'String');
      if (data.hasOwnProperty('creatorName'))
        obj.creatorName = ApiClient.convertToType(data['creatorName'], 'String');
      if (data.hasOwnProperty('fromDate'))
        obj.fromDate = ApiClient.convertToType(data['fromDate'], 'Date');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('isTrend'))
        obj.isTrend = ApiClient.convertToType(data['isTrend'], 'Boolean');
    }
    return obj;
  }

  /**
   * Type of documents for the report
   * @member {Array.<String>} attachmentTypes
   */
  exports.prototype.attachmentTypes = undefined;

  /**
   * To date
   * @member {Date} toDate
   */
  exports.prototype.toDate = undefined;

  /**
   * Report type
   * @member {module:model/ReportsReportTaskDataSchema200Data.ScheduleTypeEnum} scheduleType
   */
  exports.prototype.scheduleType = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Recipients
   * @member {Array.<String>} recipients
   */
  exports.prototype.recipients = undefined;

  /**
   * Day
   * @member {Object} day
   */
  exports.prototype.day = undefined;

  /**
   * Creator id
   * @member {String} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * Sites associated to the report
   * @member {String} sites
   */
  exports.prototype.sites = undefined;

  /**
   * Insight types
   * @member {Array.<Object>} insightTypes
   */
  exports.prototype.insightTypes = undefined;

  /**
   * Frequency
   * @member {module:model/ReportsReportTaskDataSchema200Data.FrequencyEnum} frequency
   */
  exports.prototype.frequency = undefined;

  /**
   * Creator name
   * @member {String} creatorName
   */
  exports.prototype.creatorName = undefined;

  /**
   * From date
   * @member {Date} fromDate
   */
  exports.prototype.fromDate = undefined;

  /**
   * Scope
   * @member {module:model/ReportsReportTaskDataSchema200Data.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;

  /**
   * Is trend
   * @member {Boolean} isTrend
   */
  exports.prototype.isTrend = undefined;



  /**
   * Allowed values for the <code>scheduleType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScheduleTypeEnum = {
    /**
     * value: "manually"
     * @const
     */
    manually: "manually",

    /**
     * value: "scheduled"
     * @const
     */
    scheduled: "scheduled"
  };


  /**
   * Allowed values for the <code>frequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyEnum = {
    /**
     * value: "manually"
     * @const
     */
    manually: "manually",

    /**
     * value: "weekly"
     * @const
     */
    weekly: "weekly",

    /**
     * value: "monthly"
     * @const
     */
    monthly: "monthly"
  };


  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "site"
     * @const
     */
    site: "site",

    /**
     * value: "group"
     * @const
     */
    group: "group",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "global"
     * @const
     */
    global: "global"
  };

  return exports;

}));