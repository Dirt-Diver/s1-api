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
    define(['ApiClient', 'model/FirewallControlSchemasFirewallSchemaMany200Location', 'model/FirewallControlSchemasFirewallSchemaMany200RemoteHosts', 'model/FirewallControlSchemasFirewallSchemaMany200Tags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirewallControlSchemasFirewallSchemaMany200Location'), require('./FirewallControlSchemasFirewallSchemaMany200RemoteHosts'), require('./FirewallControlSchemasFirewallSchemaMany200Tags'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200Location, root.S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200RemoteHosts, root.S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200Tags);
  }
}(this, function(ApiClient, FirewallControlSchemasFirewallSchemaMany200Location, FirewallControlSchemasFirewallSchemaMany200RemoteHosts, FirewallControlSchemasFirewallSchemaMany200Tags) {
  'use strict';

  /**
   * The FirewallControlSchemasFirewallSchemaMany200Data model module.
   * @module model/FirewallControlSchemasFirewallSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>FirewallControlSchemasFirewallSchemaMany200Data</code>.
   * @alias module:model/FirewallControlSchemasFirewallSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FirewallControlSchemasFirewallSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallControlSchemasFirewallSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/FirewallControlSchemasFirewallSchemaMany200Data} The populated <code>FirewallControlSchemasFirewallSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('productId'))
        obj.productId = ApiClient.convertToType(data['productId'], 'String');
      if (data.hasOwnProperty('application'))
        obj.application = ApiClient.convertToType(data['application'], Object);
      if (data.hasOwnProperty('remotePort'))
        obj.remotePort = ApiClient.convertToType(data['remotePort'], Object);
      if (data.hasOwnProperty('tagIds'))
        obj.tagIds = ApiClient.convertToType(data['tagIds'], ['String']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('tagNames'))
        obj.tagNames = ApiClient.convertToType(data['tagNames'], ['String']);
      if (data.hasOwnProperty('remoteHost'))
        obj.remoteHost = ApiClient.convertToType(data['remoteHost'], Object);
      if (data.hasOwnProperty('creatorId'))
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'String');
      if (data.hasOwnProperty('osTypes'))
        obj.osTypes = ApiClient.convertToType(data['osTypes'], ['String']);
      if (data.hasOwnProperty('localHost'))
        obj.localHost = ApiClient.convertToType(data['localHost'], Object);
      if (data.hasOwnProperty('location'))
        obj.location = FirewallControlSchemasFirewallSchemaMany200Location.constructFromObject(data['location']);
      if (data.hasOwnProperty('remoteHosts'))
        obj.remoteHosts = ApiClient.convertToType(data['remoteHosts'], [FirewallControlSchemasFirewallSchemaMany200RemoteHosts]);
      if (data.hasOwnProperty('protocol'))
        obj.protocol = ApiClient.convertToType(data['protocol'], 'String');
      if (data.hasOwnProperty('localPort'))
        obj.localPort = ApiClient.convertToType(data['localPort'], Object);
      if (data.hasOwnProperty('ruleCategory'))
        obj.ruleCategory = ApiClient.convertToType(data['ruleCategory'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('order'))
        obj.order = ApiClient.convertToType(data['order'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('editable'))
        obj.editable = ApiClient.convertToType(data['editable'], 'Boolean');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('osType'))
        obj.osType = ApiClient.convertToType(data['osType'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [FirewallControlSchemasFirewallSchemaMany200Tags]);
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
    }
    return obj;
  }

  /**
   * The group or site id depending on the scope. null if it is global.
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * Date of last update
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Product identifier. Unique for a specific product module, per vendor ID, Interface.
   * @member {String} productId
   */
  exports.prototype.productId = undefined;

  /**
   * Application for the rule
   * @member {Object} application
   */
  exports.prototype.application = undefined;

  /**
   * Remote ports
   * @member {Object} remotePort
   */
  exports.prototype.remotePort = undefined;

  /**
   * Tag ids
   * @member {Array.<String>} tagIds
   */
  exports.prototype.tagIds = undefined;

  /**
   * Rule ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Tag names
   * @member {Array.<String>} tagNames
   */
  exports.prototype.tagNames = undefined;

  /**
   * [DEPRECATED] First remote host in the rule. Full list in remote_hosts
   * @member {Object} remoteHost
   */
  exports.prototype.remoteHost = undefined;

  /**
   * Id of the creating user
   * @member {String} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * Os types
   * @member {Array.<module:model/FirewallControlSchemasFirewallSchemaMany200Data.OsTypesEnum>} osTypes
   */
  exports.prototype.osTypes = undefined;

  /**
   * Local host
   * @member {Object} localHost
   */
  exports.prototype.localHost = undefined;

  /**
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Location} location
   */
  exports.prototype.location = undefined;

  /**
   * List of remote hosts
   * @member {Array.<module:model/FirewallControlSchemasFirewallSchemaMany200RemoteHosts>} remoteHosts
   */
  exports.prototype.remoteHosts = undefined;

  /**
   * The protocol.
   * @member {String} protocol
   */
  exports.prototype.protocol = undefined;

  /**
   * Local ports
   * @member {Object} localPort
   */
  exports.prototype.localPort = undefined;

  /**
   * Network quarantine rule or standard firewall rule
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Data.RuleCategoryEnum} ruleCategory
   */
  exports.prototype.ruleCategory = undefined;

  /**
   * Scope of the rule
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Data.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Defines if agent shall Block or Allow use of firewalls which matches the rule parameters.
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Data.ActionEnum} action
   */
  exports.prototype.action = undefined;

  /**
   * Position in the list of rules
   * @member {Number} order
   */
  exports.prototype.order = undefined;

  /**
   * The name of the firewall rule.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Date of rule creation
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * True if the rule can be modified at this scope level
   * @member {Boolean} editable
   */
  exports.prototype.editable = undefined;

  /**
   * Full name of the creating user
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * [DEPRECATED] Please use os_types since multiple os types are supported.This field will return the first os_type, not necessarily the only one.
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Data.OsTypeEnum} osType
   */
  exports.prototype.osType = undefined;

  /**
   * Tags
   * @member {Array.<module:model/FirewallControlSchemasFirewallSchemaMany200Tags>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * Defines the Direction of the Firewall rule.
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Data.DirectionEnum} direction
   */
  exports.prototype.direction = undefined;

  /**
   * Defines if rule is Enabled or Disabled
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200Data.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * [DEPRECATED] Free text to describe the rule. Please use description instead.
   * @member {String} tag
   */
  exports.prototype.tag = undefined;



  /**
   * Allowed values for the <code>osTypes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OsTypesEnum = {
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


  /**
   * Allowed values for the <code>ruleCategory</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RuleCategoryEnum = {
    /**
     * value: "firewall"
     * @const
     */
    firewall: "firewall",

    /**
     * value: "network_quarantine"
     * @const
     */
    networkQuarantine: "network_quarantine"
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


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "Allow"
     * @const
     */
    allow: "Allow",

    /**
     * value: "Block"
     * @const
     */
    block: "Block"
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


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "any"
     * @const
     */
    any: "any",

    /**
     * value: "inbound"
     * @const
     */
    inbound: "inbound",

    /**
     * value: "outbound"
     * @const
     */
    outbound: "outbound"
  };


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Enabled"
     * @const
     */
    enabled: "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled"
  };

  return exports;

}));