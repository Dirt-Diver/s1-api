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
    root.S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema model module.
   * @module model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema</code>.
   * @alias module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema
   * @class
   * @param query {String} Events matching the query search term will be returned
   * @param fromDate {Date} Events created after this timestamp
   * @param toDate {Date} Events created before or at this timestamp
   */
  var exports = function(query, fromDate, toDate) {
    this.query = query;
    this.fromDate = fromDate;
    this.toDate = toDate;
  };

  /**
   * Constructs a <code>DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema} obj Optional instance to populate.
   * @return {module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema} The populated <code>DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('timeFrame'))
        obj.timeFrame = ApiClient.convertToType(data['timeFrame'], 'String');
      if (data.hasOwnProperty('queryType'))
        obj.queryType = ApiClient.convertToType(data['queryType'], ['String']);
      if (data.hasOwnProperty('siteIds'))
        obj.siteIds = ApiClient.convertToType(data['siteIds'], ['String']);
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['String']);
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('isVerbose'))
        obj.isVerbose = ApiClient.convertToType(data['isVerbose'], 'Boolean');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('fromDate'))
        obj.fromDate = ApiClient.convertToType(data['fromDate'], 'Date');
      if (data.hasOwnProperty('toDate'))
        obj.toDate = ApiClient.convertToType(data['toDate'], 'Date');
    }
    return obj;
  }

  /**
   * Time frame that the query was performed on, when omitted defaults to \"Last 48 Hours\"
   * @member {String} timeFrame
   * @default 'Last 48 Hours'
   */
  exports.prototype.timeFrame = 'Last 48 Hours';

  /**
   * Query Search Type - only one is allowed
   * @member {Array.<module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema.QueryTypeEnum>} queryType
   */
  exports.prototype.queryType = undefined;

  /**
   * List of Site IDs to filter by
   * @member {Array.<String>} siteIds
   */
  exports.prototype.siteIds = undefined;

  /**
   * List of Account IDs to filter by
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;

  /**
   * Limit number of returned items (1-100000)
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * Show all fields or just priority fields
   * @member {Boolean} isVerbose
   */
  exports.prototype.isVerbose = undefined;

  /**
   * Events matching the query search term will be returned
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * Events created after this timestamp
   * @member {Date} fromDate
   */
  exports.prototype.fromDate = undefined;

  /**
   * Events created before or at this timestamp
   * @member {Date} toDate
   */
  exports.prototype.toDate = undefined;



  /**
   * Allowed values for the <code>queryType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QueryTypeEnum = {
    /**
     * value: "events"
     * @const
     */
    events: "events",

    /**
     * value: "processState"
     * @const
     */
    processState: "processState"
  };

  return exports;

}));