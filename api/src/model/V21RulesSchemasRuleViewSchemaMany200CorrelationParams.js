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
    define(['ApiClient', 'model/V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries', 'model/V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries'), require('./V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries, root.S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow);
  }
}(this, function(ApiClient, V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries, V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow) {
  'use strict';

  /**
   * The V21RulesSchemasRuleViewSchemaMany200CorrelationParams model module.
   * @module model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21RulesSchemasRuleViewSchemaMany200CorrelationParams</code>.
   * Correlation params
   * @alias module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams
   * @class
   * @param matchInOrder {Boolean} Set to True to require subqueries to match in sequence to trigger an alert.
   * @param entity {module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams.EntityEnum} A common entity used to group matching events.
   */
  var exports = function(matchInOrder, entity) {
    this.matchInOrder = matchInOrder;
    this.entity = entity;
  };

  /**
   * Constructs a <code>V21RulesSchemasRuleViewSchemaMany200CorrelationParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams} obj Optional instance to populate.
   * @return {module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams} The populated <code>V21RulesSchemasRuleViewSchemaMany200CorrelationParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subQueries'))
        obj.subQueries = ApiClient.convertToType(data['subQueries'], [V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries]);
      if (data.hasOwnProperty('timeWindow'))
        obj.timeWindow = V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow.constructFromObject(data['timeWindow']);
      if (data.hasOwnProperty('matchInOrder'))
        obj.matchInOrder = ApiClient.convertToType(data['matchInOrder'], 'Boolean');
      if (data.hasOwnProperty('entity'))
        obj.entity = ApiClient.convertToType(data['entity'], 'String');
    }
    return obj;
  }

  /**
   * The list of subqueries for the custom detection rule.
   * @member {Array.<module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries>} subQueries
   */
  exports.prototype.subQueries = undefined;

  /**
   * @member {module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow} timeWindow
   */
  exports.prototype.timeWindow = undefined;

  /**
   * Set to True to require subqueries to match in sequence to trigger an alert.
   * @member {Boolean} matchInOrder
   */
  exports.prototype.matchInOrder = undefined;

  /**
   * A common entity used to group matching events.
   * @member {module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams.EntityEnum} entity
   */
  exports.prototype.entity = undefined;



  /**
   * Allowed values for the <code>entity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityEnum = {
    /**
     * value: "user"
     * @const
     */
    user: "user",

    /**
     * value: "process"
     * @const
     */
    process: "process",

    /**
     * value: "ip"
     * @const
     */
    ip: "ip",

    /**
     * value: "none"
     * @const
     */
    none: "none"
  };

  return exports;

}));