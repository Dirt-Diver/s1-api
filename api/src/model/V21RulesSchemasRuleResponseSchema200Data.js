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
    define(['ApiClient', 'model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21RulesSchemasRuleViewSchemaMany200CorrelationParams'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21RulesSchemasRuleResponseSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams);
  }
}(this, function(ApiClient, V21RulesSchemasRuleViewSchemaMany200CorrelationParams) {
  'use strict';

  /**
   * The V21RulesSchemasRuleResponseSchema200Data model module.
   * @module model/V21RulesSchemasRuleResponseSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21RulesSchemasRuleResponseSchema200Data</code>.
   * Response data
   * @alias module:model/V21RulesSchemasRuleResponseSchema200Data
   * @class
   * @param name {String} The name of the custom detection rule.
   * @param expirationMode {module:model/V21RulesSchemasRuleResponseSchema200Data.ExpirationModeEnum} Whether the rule is Temporary or Permanent.
   * @param status {module:model/V21RulesSchemasRuleResponseSchema200Data.StatusEnum} Enabled (Activated and sends alerts if triggered) or Disabled.
   * @param severity {module:model/V21RulesSchemasRuleResponseSchema200Data.SeverityEnum} The rule severity in your environment.
   * @param queryType {module:model/V21RulesSchemasRuleResponseSchema200Data.QueryTypeEnum} The query type - Correlation (made of multiple subqueries), Event (single query), or Processes (Deprecated).
   */
  var exports = function(name, expirationMode, status, severity, queryType) {
    this.name = name;
    this.expirationMode = expirationMode;
    this.status = status;
    this.severity = severity;
    this.queryType = queryType;
  };

  /**
   * Constructs a <code>V21RulesSchemasRuleResponseSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21RulesSchemasRuleResponseSchema200Data} obj Optional instance to populate.
   * @return {module:model/V21RulesSchemasRuleResponseSchema200Data} The populated <code>V21RulesSchemasRuleResponseSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('queryLang'))
        obj.queryLang = ApiClient.convertToType(data['queryLang'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('creatorId'))
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'String');
      if (data.hasOwnProperty('correlationParams'))
        obj.correlationParams = V21RulesSchemasRuleViewSchemaMany200CorrelationParams.constructFromObject(data['correlationParams']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('editable'))
        obj.editable = ApiClient.convertToType(data['editable'], 'Boolean');
      if (data.hasOwnProperty('expired'))
        obj.expired = ApiClient.convertToType(data['expired'], 'Boolean');
      if (data.hasOwnProperty('updaterId'))
        obj.updaterId = ApiClient.convertToType(data['updaterId'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('reachedLimit'))
        obj.reachedLimit = ApiClient.convertToType(data['reachedLimit'], 'Boolean');
      if (data.hasOwnProperty('treatAsThreat'))
        obj.treatAsThreat = ApiClient.convertToType(data['treatAsThreat'], 'String');
      if (data.hasOwnProperty('expirationMode'))
        obj.expirationMode = ApiClient.convertToType(data['expirationMode'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('networkQuarantine'))
        obj.networkQuarantine = ApiClient.convertToType(data['networkQuarantine'], 'Boolean');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('statusReason'))
        obj.statusReason = ApiClient.convertToType(data['statusReason'], 'String');
      if (data.hasOwnProperty('severity'))
        obj.severity = ApiClient.convertToType(data['severity'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('queryType'))
        obj.queryType = ApiClient.convertToType(data['queryType'], 'String');
      if (data.hasOwnProperty('s1ql'))
        obj.s1ql = ApiClient.convertToType(data['s1ql'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], ['String']);
    }
    return obj;
  }

  /**
   * The full name of the user that created the rule.
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * The scope of the rule. Can be Global, Account, Site, or Group.
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;

  /**
   * The s1ql version query language of the rule. Can be 1.0 or 2.0.
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.QueryLangEnum} queryLang
   * @default '1.0'
   */
  exports.prototype.queryLang = '1.0';

  /**
   * The name of the custom detection rule.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The ID of the user that created the rule.
   * @member {String} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * @member {module:model/V21RulesSchemasRuleViewSchemaMany200CorrelationParams} correlationParams
   */
  exports.prototype.correlationParams = undefined;

  /**
   * The description of the custom detection rule.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * True if the rule can be modified at this scope level.
   * @member {Boolean} editable
   */
  exports.prototype.editable = undefined;

  /**
   * True if the Rule has expired.
   * @member {Boolean} expired
   */
  exports.prototype.expired = undefined;

  /**
   * The ID of the user that last updated the rule.
   * @member {String} updaterId
   */
  exports.prototype.updaterId = undefined;

  /**
   * Rule ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * If Temporary, the expiration date for the rule.
   * @member {Date} expiration
   */
  exports.prototype.expiration = undefined;

  /**
   * True if the Rule reached the 5k/hour or 10k/day alert limit. If the limit has been reached, the Rule is disabled.
   * @member {Boolean} reachedLimit
   */
  exports.prototype.reachedLimit = undefined;

  /**
   * The Treat as threat auto response - UNDEFINED/suspicious/malicious
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.TreatAsThreatEnum} treatAsThreat
   * @default 'undefined'
   */
  exports.prototype.treatAsThreat = 'undefined';

  /**
   * Whether the rule is Temporary or Permanent.
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.ExpirationModeEnum} expirationMode
   */
  exports.prototype.expirationMode = undefined;

  /**
   * Enabled (Activated and sends alerts if triggered) or Disabled.
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * True if the network quarantine is on.
   * @member {Boolean} networkQuarantine
   */
  exports.prototype.networkQuarantine = undefined;

  /**
   * The date the rule was last updated.
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * The reason why the Rule has its current status.
   * @member {String} statusReason
   */
  exports.prototype.statusReason = undefined;

  /**
   * The rule severity in your environment.
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.SeverityEnum} severity
   */
  exports.prototype.severity = undefined;

  /**
   * The date the rule was created.
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * The query type - Correlation (made of multiple subqueries), Event (single query), or Processes (Deprecated).
   * @member {module:model/V21RulesSchemasRuleResponseSchema200Data.QueryTypeEnum} queryType
   */
  exports.prototype.queryType = undefined;

  /**
   * The query.
   * @member {String} s1ql
   */
  exports.prototype.s1ql = undefined;

  /**
   * The Account, Site, or Group ID, depending on the scope. Null if the scope is Global.
   * @member {Array.<String>} scopeId
   */
  exports.prototype.scopeId = undefined;



  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "account"
     * @const
     */
    account: "account",

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
     * value: "global"
     * @const
     */
    global: "global"
  };


  /**
   * Allowed values for the <code>queryLang</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QueryLangEnum = {
    /**
     * value: "1.0"
     * @const
     */
    _10: "1.0",

    /**
     * value: "2.0"
     * @const
     */
    _20: "2.0"
  };


  /**
   * Allowed values for the <code>treatAsThreat</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TreatAsThreatEnum = {
    /**
     * value: "UNDEFINED"
     * @const
     */
    UNDEFINED: "UNDEFINED",

    /**
     * value: "Suspicious"
     * @const
     */
    suspicious: "Suspicious",

    /**
     * value: "Malicious"
     * @const
     */
    malicious: "Malicious"
  };


  /**
   * Allowed values for the <code>expirationMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExpirationModeEnum = {
    /**
     * value: "Permanent"
     * @const
     */
    permanent: "Permanent",

    /**
     * value: "Temporary"
     * @const
     */
    temporary: "Temporary"
  };


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Draft"
     * @const
     */
    draft: "Draft",

    /**
     * value: "Activating"
     * @const
     */
    activating: "Activating",

    /**
     * value: "Active"
     * @const
     */
    active: "Active",

    /**
     * value: "Disabling"
     * @const
     */
    disabling: "Disabling",

    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled",

    /**
     * value: "Deleted"
     * @const
     */
    deleted: "Deleted",

    /**
     * value: "Deleting"
     * @const
     */
    deleting: "Deleting"
  };


  /**
   * Allowed values for the <code>severity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SeverityEnum = {
    /**
     * value: "Low"
     * @const
     */
    low: "Low",

    /**
     * value: "Medium"
     * @const
     */
    medium: "Medium",

    /**
     * value: "High"
     * @const
     */
    high: "High",

    /**
     * value: "Critical"
     * @const
     */
    critical: "Critical"
  };


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
     * value: "processes"
     * @const
     */
    processes: "processes",

    /**
     * value: "correlation"
     * @const
     */
    correlation: "correlation"
  };

  return exports;

}));
