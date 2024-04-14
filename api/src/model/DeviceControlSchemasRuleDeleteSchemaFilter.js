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
    root.S1MgmtApi.DeviceControlSchemasRuleDeleteSchemaFilter = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceControlSchemasRuleDeleteSchemaFilter model module.
   * @module model/DeviceControlSchemasRuleDeleteSchemaFilter
   * @version 2.1
   */

  /**
   * Constructs a new <code>DeviceControlSchemasRuleDeleteSchemaFilter</code>.
   * Filter
   * @alias module:model/DeviceControlSchemasRuleDeleteSchemaFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DeviceControlSchemasRuleDeleteSchemaFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceControlSchemasRuleDeleteSchemaFilter} obj Optional instance to populate.
   * @return {module:model/DeviceControlSchemasRuleDeleteSchemaFilter} The populated <code>DeviceControlSchemasRuleDeleteSchemaFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('createdAt__gt'))
        obj.createdAtGt = ApiClient.convertToType(data['createdAt__gt'], 'Date');
      if (data.hasOwnProperty('versions'))
        obj.versions = ApiClient.convertToType(data['versions'], ['String']);
      if (data.hasOwnProperty('uids'))
        obj.uids = ApiClient.convertToType(data['uids'], ['String']);
      if (data.hasOwnProperty('actions'))
        obj.actions = ApiClient.convertToType(data['actions'], ['String']);
      if (data.hasOwnProperty('deviceNames'))
        obj.deviceNames = ApiClient.convertToType(data['deviceNames'], ['String']);
      if (data.hasOwnProperty('interfaces'))
        obj.interfaces = ApiClient.convertToType(data['interfaces'], ['String']);
      if (data.hasOwnProperty('deviceClasses'))
        obj.deviceClasses = ApiClient.convertToType(data['deviceClasses'], ['String']);
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (data.hasOwnProperty('createdAt__lt'))
        obj.createdAtLt = ApiClient.convertToType(data['createdAt__lt'], 'Date');
      if (data.hasOwnProperty('createdAt__lte'))
        obj.createdAtLte = ApiClient.convertToType(data['createdAt__lte'], 'Date');
      if (data.hasOwnProperty('accessPermissions'))
        obj.accessPermissions = ApiClient.convertToType(data['accessPermissions'], ['String']);
      if (data.hasOwnProperty('scopes'))
        obj.scopes = ApiClient.convertToType(data['scopes'], ['String']);
      if (data.hasOwnProperty('statuses'))
        obj.statuses = ApiClient.convertToType(data['statuses'], ['String']);
      if (data.hasOwnProperty('deviceIds'))
        obj.deviceIds = ApiClient.convertToType(data['deviceIds'], ['String']);
      if (data.hasOwnProperty('productIds'))
        obj.productIds = ApiClient.convertToType(data['productIds'], ['String']);
      if (data.hasOwnProperty('ruleName'))
        obj.ruleName = ApiClient.convertToType(data['ruleName'], 'String');
      if (data.hasOwnProperty('bluetoothAddresses'))
        obj.bluetoothAddresses = ApiClient.convertToType(data['bluetoothAddresses'], ['String']);
      if (data.hasOwnProperty('vendorIds'))
        obj.vendorIds = ApiClient.convertToType(data['vendorIds'], ['String']);
      if (data.hasOwnProperty('tenant'))
        obj.tenant = ApiClient.convertToType(data['tenant'], 'Boolean');
      if (data.hasOwnProperty('createdAt__between'))
        obj.createdAtBetween = ApiClient.convertToType(data['createdAt__between'], 'String');
      if (data.hasOwnProperty('groupIds'))
        obj.groupIds = ApiClient.convertToType(data['groupIds'], ['String']);
      if (data.hasOwnProperty('gattServices'))
        obj.gattServices = ApiClient.convertToType(data['gattServices'], ['String']);
      if (data.hasOwnProperty('createdAt__gte'))
        obj.createdAtGte = ApiClient.convertToType(data['createdAt__gte'], 'Date');
      if (data.hasOwnProperty('siteIds'))
        obj.siteIds = ApiClient.convertToType(data['siteIds'], ['String']);
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['String']);
      if (data.hasOwnProperty('deviceInformationServiceInfoKeys'))
        obj.deviceInformationServiceInfoKeys = ApiClient.convertToType(data['deviceInformationServiceInfoKeys'], ['String']);
      if (data.hasOwnProperty('manufacturerNames'))
        obj.manufacturerNames = ApiClient.convertToType(data['manufacturerNames'], ['String']);
      if (data.hasOwnProperty('serviceClasses'))
        obj.serviceClasses = ApiClient.convertToType(data['serviceClasses'], ['String']);
      if (data.hasOwnProperty('minorClasses'))
        obj.minorClasses = ApiClient.convertToType(data['minorClasses'], ['String']);
    }
    return obj;
  }

  /**
   * Return device rules created after this timestamp.
   * @member {Date} createdAtGt
   */
  exports.prototype.createdAtGt = undefined;

  /**
   * Return device rules with the filtered versions.
   * @member {Array.<String>} versions
   */
  exports.prototype.versions = undefined;

  /**
   * Return device rules with the filtered uId.
   * @member {Array.<String>} uids
   */
  exports.prototype.uids = undefined;

  /**
   * Return device rules with the filtered action.
   * @member {Array.<module:model/DeviceControlSchemasRuleDeleteSchemaFilter.ActionsEnum>} actions
   */
  exports.prototype.actions = undefined;

  /**
   * Return device rules with the filtered device names.
   * @member {Array.<String>} deviceNames
   */
  exports.prototype.deviceNames = undefined;

  /**
   * Return device rules with the filtered interface.
   * @member {Array.<module:model/DeviceControlSchemasRuleDeleteSchemaFilter.InterfacesEnum>} interfaces
   */
  exports.prototype.interfaces = undefined;

  /**
   * Return device rules with the filtered device class.
   * @member {Array.<String>} deviceClasses
   */
  exports.prototype.deviceClasses = undefined;

  /**
   * A free-text search term, will match applicable attributes.
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * List of ids to filter by
   * @member {Array.<String>} ids
   */
  exports.prototype.ids = undefined;

  /**
   * Return device rules created before this timestamp.
   * @member {Date} createdAtLt
   */
  exports.prototype.createdAtLt = undefined;

  /**
   * Return device rules created before or at this timestamp.
   * @member {Date} createdAtLte
   */
  exports.prototype.createdAtLte = undefined;

  /**
   * Access permission in
   * @member {Array.<module:model/DeviceControlSchemasRuleDeleteSchemaFilter.AccessPermissionsEnum>} accessPermissions
   */
  exports.prototype.accessPermissions = undefined;

  /**
   * Return only device rules in this scope
   * @member {Array.<module:model/DeviceControlSchemasRuleDeleteSchemaFilter.ScopesEnum>} scopes
   */
  exports.prototype.scopes = undefined;

  /**
   * Return device rules with the filtered status.
   * @member {Array.<module:model/DeviceControlSchemasRuleDeleteSchemaFilter.StatusesEnum>} statuses
   */
  exports.prototype.statuses = undefined;

  /**
   * Return device rules with the filtered device id.
   * @member {Array.<String>} deviceIds
   */
  exports.prototype.deviceIds = undefined;

  /**
   * Return device rules with the filtered product id.
   * @member {Array.<String>} productIds
   */
  exports.prototype.productIds = undefined;

  /**
   * Return device rules with the filtered rule name.
   * @member {String} ruleName
   */
  exports.prototype.ruleName = undefined;

  /**
   * Return device rules with the filtered bluetooth addresses.
   * @member {Array.<String>} bluetoothAddresses
   */
  exports.prototype.bluetoothAddresses = undefined;

  /**
   * Return device rules with the filtered vendor id.
   * @member {Array.<String>} vendorIds
   */
  exports.prototype.vendorIds = undefined;

  /**
   * Indicates a tenant scope request
   * @member {Boolean} tenant
   */
  exports.prototype.tenant = undefined;

  /**
   * Return device rules created within this range (inclusive)
   * @member {String} createdAtBetween
   */
  exports.prototype.createdAtBetween = undefined;

  /**
   * List of Group IDs to filter by
   * @member {Array.<String>} groupIds
   */
  exports.prototype.groupIds = undefined;

  /**
   * Return device rules with the filtered GATT services.
   * @member {Array.<String>} gattServices
   */
  exports.prototype.gattServices = undefined;

  /**
   * Return device rules created after or at this timestamp.
   * @member {Date} createdAtGte
   */
  exports.prototype.createdAtGte = undefined;

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
   * Return device rules with the filtered device information service info keys.
   * @member {Array.<String>} deviceInformationServiceInfoKeys
   */
  exports.prototype.deviceInformationServiceInfoKeys = undefined;

  /**
   * Return device rules with the filtered manufacturer names.
   * @member {Array.<String>} manufacturerNames
   */
  exports.prototype.manufacturerNames = undefined;

  /**
   * Return device rules with the filtered service class.
   * @member {Array.<String>} serviceClasses
   */
  exports.prototype.serviceClasses = undefined;

  /**
   * Return device rules with the filtered minor classes.
   * @member {Array.<String>} minorClasses
   */
  exports.prototype.minorClasses = undefined;



  /**
   * Allowed values for the <code>actions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionsEnum = {
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
   * Allowed values for the <code>interfaces</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InterfacesEnum = {
    /**
     * value: "USB"
     * @const
     */
    USB: "USB",

    /**
     * value: "Bluetooth"
     * @const
     */
    bluetooth: "Bluetooth",

    /**
     * value: "Thunderbolt"
     * @const
     */
    thunderbolt: "Thunderbolt"
  };


  /**
   * Allowed values for the <code>accessPermissions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessPermissionsEnum = {
    /**
     * value: "Read-Only"
     * @const
     */
    readOnly: "Read-Only",

    /**
     * value: "Read-Write"
     * @const
     */
    readWrite: "Read-Write",

    /**
     * value: "Not-Applicable"
     * @const
     */
    notApplicable: "Not-Applicable"
  };


  /**
   * Allowed values for the <code>scopes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopesEnum = {
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
   * Allowed values for the <code>statuses</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusesEnum = {
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