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
    root.S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Enrichment = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21RulesSchemasRuleViewSchemaMany200Enrichment model module.
   * @module model/V21RulesSchemasRuleViewSchemaMany200Enrichment
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21RulesSchemasRuleViewSchemaMany200Enrichment</code>.
   * Enrichment
   * @alias module:model/V21RulesSchemasRuleViewSchemaMany200Enrichment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21RulesSchemasRuleViewSchemaMany200Enrichment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21RulesSchemasRuleViewSchemaMany200Enrichment} obj Optional instance to populate.
   * @return {module:model/V21RulesSchemasRuleViewSchemaMany200Enrichment} The populated <code>V21RulesSchemasRuleViewSchemaMany200Enrichment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scopeName'))
        obj.scopeName = ApiClient.convertToType(data['scopeName'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('updater'))
        obj.updater = ApiClient.convertToType(data['updater'], 'String');
    }
    return obj;
  }

  /**
   * scope id
   * @member {String} scopeName
   */
  exports.prototype.scopeName = undefined;

  /**
   * The ID of the user that created the Rule.
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * The ID of the user that last updated the Rule.
   * @member {String} updater
   */
  exports.prototype.updater = undefined;


  return exports;

}));
