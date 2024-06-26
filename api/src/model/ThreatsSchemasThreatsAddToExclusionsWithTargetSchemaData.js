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
    define(['ApiClient', 'model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules);
  }
}(this, function(ApiClient, ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules) {
  'use strict';

  /**
   * The ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData model module.
   * @module model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData</code>.
   * Data
   * @alias module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData
   * @class
   * @param targetScope {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData.TargetScopeEnum} Scope to be used for Exclusions
   * @param type {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData.TypeEnum} Selected Exclusion type
   */
  var exports = function(targetScope, type) {
    this.targetScope = targetScope;
    this.type = type;
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData} The populated <code>ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData</code> instance.
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
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('externalTicketId'))
        obj.externalTicketId = ApiClient.convertToType(data['externalTicketId'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('pathExclusionType'))
        obj.pathExclusionType = ApiClient.convertToType(data['pathExclusionType'], 'String');
      if (data.hasOwnProperty('actions'))
        obj.actions = ApiClient.convertToType(data['actions'], ['String']);
      if (data.hasOwnProperty('macroModules'))
        obj.macroModules = ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules.constructFromObject(data['macroModules']);
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Scope to be used for Exclusions
   * @member {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData.TargetScopeEnum} targetScope
   */
  exports.prototype.targetScope = undefined;

  /**
   * Note
   * @member {String} note
   * @default 'null'
   */
  exports.prototype.note = 'null';

  /**
   * Exclusion mode (path exclusion only)
   * @member {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData.ModeEnum} mode
   */
  exports.prototype.mode = undefined;

  /**
   * Selected Exclusion type
   * @member {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * External ticket id
   * @member {String} externalTicketId
   * @default 'null'
   */
  exports.prototype.externalTicketId = 'null';

  /**
   * Optional. If not provided, the relevant value from the Threat will be used
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * Excluded path for a path exclusion list
   * @member {String} pathExclusionType
   */
  exports.prototype.pathExclusionType = undefined;

  /**
   * Actions to perform
   * @member {Array.<module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData.ActionsEnum>} actions
   */
  exports.prototype.actions = undefined;

  /**
   * @member {module:model/ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules} macroModules
   */
  exports.prototype.macroModules = undefined;



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


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "suppress"
     * @const
     */
    suppress: "suppress",

    /**
     * value: "suppress_dynamic_only"
     * @const
     */
    suppressDynamicOnly: "suppress_dynamic_only",

    /**
     * value: "suppress_dfi_only"
     * @const
     */
    suppressDfiOnly: "suppress_dfi_only",

    /**
     * value: "disable_in_process_monitor"
     * @const
     */
    disableInProcessMonitor: "disable_in_process_monitor",

    /**
     * value: "disable_in_process_monitor_deep"
     * @const
     */
    disableInProcessMonitorDeep: "disable_in_process_monitor_deep",

    /**
     * value: "disable_all_monitors"
     * @const
     */
    disableAllMonitors: "disable_all_monitors",

    /**
     * value: "disable_all_monitors_deep"
     * @const
     */
    disableAllMonitorsDeep: "disable_all_monitors_deep",

    /**
     * value: "suppress_app_control"
     * @const
     */
    suppressAppControl: "suppress_app_control"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "hash"
     * @const
     */
    hash: "hash",

    /**
     * value: "path"
     * @const
     */
    path: "path",

    /**
     * value: "certificate"
     * @const
     */
    certificate: "certificate",

    /**
     * value: "browser"
     * @const
     */
    browser: "browser",

    /**
     * value: "file_type"
     * @const
     */
    fileType: "file_type"
  };


  /**
   * Allowed values for the <code>actions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionsEnum = {
    /**
     * value: "upload"
     * @const
     */
    upload: "upload",

    /**
     * value: "detect"
     * @const
     */
    detect: "detect"
  };

  return exports;

}));
