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
    define(['ApiClient', 'model/ForensicsApplicationContentFields200DataResultFile', 'model/ForensicsApplicationContentFields200DataResultProcess', 'model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverview'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ForensicsApplicationContentFields200DataResultFile'), require('./ForensicsApplicationContentFields200DataResultProcess'), require('./ForensicsApplicationDetailsContentFields200DataResultSummaryOverview'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ForensicsApplicationDetailsContentFields200DataResult = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ForensicsApplicationContentFields200DataResultFile, root.S1MgmtApi.ForensicsApplicationContentFields200DataResultProcess, root.S1MgmtApi.ForensicsApplicationDetailsContentFields200DataResultSummaryOverview);
  }
}(this, function(ApiClient, ForensicsApplicationContentFields200DataResultFile, ForensicsApplicationContentFields200DataResultProcess, ForensicsApplicationDetailsContentFields200DataResultSummaryOverview) {
  'use strict';

  /**
   * The ForensicsApplicationDetailsContentFields200DataResult model module.
   * @module model/ForensicsApplicationDetailsContentFields200DataResult
   * @version 2.1
   */

  /**
   * Constructs a new <code>ForensicsApplicationDetailsContentFields200DataResult</code>.
   * Result
   * @alias module:model/ForensicsApplicationDetailsContentFields200DataResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ForensicsApplicationDetailsContentFields200DataResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForensicsApplicationDetailsContentFields200DataResult} obj Optional instance to populate.
   * @return {module:model/ForensicsApplicationDetailsContentFields200DataResult} The populated <code>ForensicsApplicationDetailsContentFields200DataResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('process'))
        obj.process = ForensicsApplicationContentFields200DataResultProcess.constructFromObject(data['process']);
      if (data.hasOwnProperty('fetch_story_sent_at'))
        obj.fetchStorySentAt = ApiClient.convertToType(data['fetch_story_sent_at'], 'Date');
      if (data.hasOwnProperty('application_id'))
        obj.applicationId = ApiClient.convertToType(data['application_id'], 'String');
      if (data.hasOwnProperty('fetch_story_error_at'))
        obj.fetchStoryErrorAt = ApiClient.convertToType(data['fetch_story_error_at'], 'Date');
      if (data.hasOwnProperty('agent'))
        obj.agent = ApiClient.convertToType(data['agent'], 'String');
      if (data.hasOwnProperty('file'))
        obj.file = ForensicsApplicationContentFields200DataResultFile.constructFromObject(data['file']);
      if (data.hasOwnProperty('seen_on_network'))
        obj.seenOnNetwork = ApiClient.convertToType(data['seen_on_network'], 'Number');
      if (data.hasOwnProperty('summary_overview'))
        obj.summaryOverview = ForensicsApplicationDetailsContentFields200DataResultSummaryOverview.constructFromObject(data['summary_overview']);
      if (data.hasOwnProperty('last_event_seen_at'))
        obj.lastEventSeenAt = ApiClient.convertToType(data['last_event_seen_at'], 'Date');
      if (data.hasOwnProperty('raw_data'))
        obj.rawData = ApiClient.convertToType(data['raw_data'], Object);
      if (data.hasOwnProperty('process_created_at'))
        obj.processCreatedAt = ApiClient.convertToType(data['process_created_at'], 'Date');
      if (data.hasOwnProperty('process_display_name'))
        obj.processDisplayName = ApiClient.convertToType(data['process_display_name'], 'String');
      if (data.hasOwnProperty('category_scores'))
        obj.categoryScores = ApiClient.convertToType(data['category_scores'], Object);
      if (data.hasOwnProperty('application_duration'))
        obj.applicationDuration = ApiClient.convertToType(data['application_duration'], 'String');
      if (data.hasOwnProperty('application_created'))
        obj.applicationCreated = ApiClient.convertToType(data['application_created'], 'Date');
      if (data.hasOwnProperty('fetch_story_status'))
        obj.fetchStoryStatus = ApiClient.convertToType(data['fetch_story_status'], 'String');
      if (data.hasOwnProperty('graph'))
        obj.graph = ApiClient.convertToType(data['graph'], Object);
      if (data.hasOwnProperty('summary'))
        obj.summary = ApiClient.convertToType(data['summary'], Object);
    }
    return obj;
  }

  /**
   * @member {module:model/ForensicsApplicationContentFields200DataResultProcess} process
   */
  exports.prototype.process = undefined;

  /**
   * Fetch story sent at
   * @member {Date} fetchStorySentAt
   */
  exports.prototype.fetchStorySentAt = undefined;

  /**
   * Application id
   * @member {String} applicationId
   */
  exports.prototype.applicationId = undefined;

  /**
   * Fetch story error at
   * @member {Date} fetchStoryErrorAt
   */
  exports.prototype.fetchStoryErrorAt = undefined;

  /**
   * Agent
   * @member {String} agent
   */
  exports.prototype.agent = undefined;

  /**
   * @member {module:model/ForensicsApplicationContentFields200DataResultFile} file
   */
  exports.prototype.file = undefined;

  /**
   * Seen on network
   * @member {Number} seenOnNetwork
   */
  exports.prototype.seenOnNetwork = undefined;

  /**
   * @member {module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverview} summaryOverview
   */
  exports.prototype.summaryOverview = undefined;

  /**
   * Last event seen at
   * @member {Date} lastEventSeenAt
   */
  exports.prototype.lastEventSeenAt = undefined;

  /**
   * Raw data
   * @member {Object} rawData
   */
  exports.prototype.rawData = undefined;

  /**
   * Process created at
   * @member {Date} processCreatedAt
   */
  exports.prototype.processCreatedAt = undefined;

  /**
   * Process display name
   * @member {String} processDisplayName
   */
  exports.prototype.processDisplayName = undefined;

  /**
   * Category scores
   * @member {Object} categoryScores
   */
  exports.prototype.categoryScores = undefined;

  /**
   * Application duration
   * @member {String} applicationDuration
   */
  exports.prototype.applicationDuration = undefined;

  /**
   * Application created
   * @member {Date} applicationCreated
   */
  exports.prototype.applicationCreated = undefined;

  /**
   * Fetch story status
   * @member {String} fetchStoryStatus
   */
  exports.prototype.fetchStoryStatus = undefined;

  /**
   * Graph
   * @member {Object} graph
   */
  exports.prototype.graph = undefined;

  /**
   * Summary
   * @member {Object} summary
   */
  exports.prototype.summary = undefined;


  return exports;

}));