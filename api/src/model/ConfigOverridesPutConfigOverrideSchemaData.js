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
    define(['ApiClient', 'model/ConfigOverridesConfigOverrideSchemaMany200Account', 'model/ConfigOverridesConfigOverrideSchemaMany200Group', 'model/ConfigOverridesConfigOverrideSchemaMany200Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigOverridesConfigOverrideSchemaMany200Account'), require('./ConfigOverridesConfigOverrideSchemaMany200Group'), require('./ConfigOverridesConfigOverrideSchemaMany200Site'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ConfigOverridesPutConfigOverrideSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Account, root.S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Group, root.S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Site);
  }
}(this, function(ApiClient, ConfigOverridesConfigOverrideSchemaMany200Account, ConfigOverridesConfigOverrideSchemaMany200Group, ConfigOverridesConfigOverrideSchemaMany200Site) {
  'use strict';

  /**
   * The ConfigOverridesPutConfigOverrideSchemaData model module.
   * @module model/ConfigOverridesPutConfigOverrideSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>ConfigOverridesPutConfigOverrideSchemaData</code>.
   * Data
   * @alias module:model/ConfigOverridesPutConfigOverrideSchemaData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConfigOverridesPutConfigOverrideSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigOverridesPutConfigOverrideSchemaData} obj Optional instance to populate.
   * @return {module:model/ConfigOverridesPutConfigOverrideSchemaData} The populated <code>ConfigOverridesPutConfigOverrideSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('agentVersion'))
        obj.agentVersion = ApiClient.convertToType(data['agentVersion'], 'String');
      if (data.hasOwnProperty('group'))
        obj.group = ConfigOverridesConfigOverrideSchemaMany200Group.constructFromObject(data['group']);
      if (data.hasOwnProperty('versionOption'))
        obj.versionOption = ApiClient.convertToType(data['versionOption'], 'String');
      if (data.hasOwnProperty('account'))
        obj.account = ConfigOverridesConfigOverrideSchemaMany200Account.constructFromObject(data['account']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('osType'))
        obj.osType = ApiClient.convertToType(data['osType'], 'String');
      if (data.hasOwnProperty('config'))
        obj.config = ApiClient.convertToType(data['config'], Object);
      if (data.hasOwnProperty('site'))
        obj.site = ConfigOverridesConfigOverrideSchemaMany200Site.constructFromObject(data['site']);
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Agent version
   * @member {String} agentVersion
   */
  exports.prototype.agentVersion = undefined;

  /**
   * @member {module:model/ConfigOverridesConfigOverrideSchemaMany200Group} group
   */
  exports.prototype.group = undefined;

  /**
   * Version option
   * @member {module:model/ConfigOverridesPutConfigOverrideSchemaData.VersionOptionEnum} versionOption
   * @default 'SPECIFIC'
   */
  exports.prototype.versionOption = 'SPECIFIC';

  /**
   * @member {module:model/ConfigOverridesConfigOverrideSchemaMany200Account} account
   */
  exports.prototype.account = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Scope level
   * @member {module:model/ConfigOverridesPutConfigOverrideSchemaData.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;

  /**
   * OS type
   * @member {module:model/ConfigOverridesPutConfigOverrideSchemaData.OsTypeEnum} osType
   */
  exports.prototype.osType = undefined;

  /**
   * Config
   * @member {Object} config
   */
  exports.prototype.config = undefined;

  /**
   * @member {module:model/ConfigOverridesConfigOverrideSchemaMany200Site} site
   */
  exports.prototype.site = undefined;



  /**
   * Allowed values for the <code>versionOption</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VersionOptionEnum = {
    /**
     * value: "ALL"
     * @const
     */
    ALL: "ALL",

    /**
     * value: "SPECIFIC"
     * @const
     */
    SPECIFIC: "SPECIFIC"
  };


  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
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
   * Allowed values for the <code>osType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OsTypeEnum = {
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