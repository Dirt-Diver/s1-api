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
    root.S1MgmtApi.ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData model module.
   * @module model/ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData</code>.
   * Data
   * @alias module:model/ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData
   * @class
   * @param targetScope {module:model/ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData.TargetScopeEnum} Scope to be used for Restrictions
   */
  var exports = function(targetScope) {
    this.targetScope = targetScope;
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData} The populated <code>ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('targetScope'))
        obj.targetScope = ApiClient.convertToType(data['targetScope'], 'String');
      if (data.hasOwnProperty('note'))
        obj.note = ApiClient.convertToType(data['note'], 'String');
      if (data.hasOwnProperty('externalTicketId'))
        obj.externalTicketId = ApiClient.convertToType(data['externalTicketId'], 'String');
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Scope to be used for Restrictions
   * @member {module:model/ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData.TargetScopeEnum} targetScope
   */
  exports.prototype.targetScope = undefined;

  /**
   * Note
   * @member {String} note
   * @default 'null'
   */
  exports.prototype.note = 'null';

  /**
   * External ticket id
   * @member {String} externalTicketId
   * @default 'null'
   */
  exports.prototype.externalTicketId = 'null';



  /**
   * Allowed values for the <code>targetScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TargetScopeEnum = {
    /**
     * value: "group"
     * @const
     */
    group: "group",

    /**
     * value: "site"
     * @const
     */
    site: "site",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "tenant"
     * @const
     */
    tenant: "tenant"
  };

  return exports;

}));
