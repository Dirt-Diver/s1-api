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
    root.S1MgmtApi.SitesSiteBulkPutSchemaFilter = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSiteBulkPutSchemaFilter model module.
   * @module model/SitesSiteBulkPutSchemaFilter
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSiteBulkPutSchemaFilter</code>.
   * Filter
   * @alias module:model/SitesSiteBulkPutSchemaFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSiteBulkPutSchemaFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSiteBulkPutSchemaFilter} obj Optional instance to populate.
   * @return {module:model/SitesSiteBulkPutSchemaFilter} The populated <code>SitesSiteBulkPutSchemaFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name__contains'))
        obj.nameContains = ApiClient.convertToType(data['name__contains'], ['String']);
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('availableMoveSites'))
        obj.availableMoveSites = ApiClient.convertToType(data['availableMoveSites'], 'Boolean');
      if (data.hasOwnProperty('healthStatus'))
        obj.healthStatus = ApiClient.convertToType(data['healthStatus'], 'Boolean');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('features'))
        obj.features = ApiClient.convertToType(data['features'], ['String']);
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('siteType'))
        obj.siteType = ApiClient.convertToType(data['siteType'], 'String');
      if (data.hasOwnProperty('adminOnly'))
        obj.adminOnly = ApiClient.convertToType(data['adminOnly'], 'Boolean');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('activeLicenses'))
        obj.activeLicenses = ApiClient.convertToType(data['activeLicenses'], 'Number');
      if (data.hasOwnProperty('totalLicenses'))
        obj.totalLicenses = ApiClient.convertToType(data['totalLicenses'], 'Number');
      if (data.hasOwnProperty('states'))
        obj.states = ApiClient.convertToType(data['states'], ['String']);
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('suite'))
        obj.suite = ApiClient.convertToType(data['suite'], 'String');
      if (data.hasOwnProperty('accountName__contains'))
        obj.accountNameContains = ApiClient.convertToType(data['accountName__contains'], ['String']);
      if (data.hasOwnProperty('registrationToken'))
        obj.registrationToken = ApiClient.convertToType(data['registrationToken'], 'String');
      if (data.hasOwnProperty('module'))
        obj.module = ApiClient.convertToType(data['module'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['String']);
      if (data.hasOwnProperty('siteIds'))
        obj.siteIds = ApiClient.convertToType(data['siteIds'], ['String']);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('description__contains'))
        obj.descriptionContains = ApiClient.convertToType(data['description__contains'], ['String']);
    }
    return obj;
  }

  /**
   * Free-text filter by site name (supports multiple values)
   * @member {Array.<String>} nameContains
   */
  exports.prototype.nameContains = undefined;

  /**
   * Account id
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * Only return sites the user can move agents to
   * @member {Boolean} availableMoveSites
   */
  exports.prototype.availableMoveSites = undefined;

  /**
   * Health status
   * @member {Boolean} healthStatus
   */
  exports.prototype.healthStatus = undefined;

  /**
   * Timestamp of last update
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * If sent return only sites that support this features
   * @member {Array.<module:model/SitesSiteBulkPutSchemaFilter.FeaturesEnum>} features
   */
  exports.prototype.features = undefined;

  /**
   * Expiration
   * @member {Date} expiration
   */
  exports.prototype.expiration = undefined;

  /**
   * Site type
   * @member {module:model/SitesSiteBulkPutSchemaFilter.SiteTypeEnum} siteType
   */
  exports.prototype.siteType = undefined;

  /**
   * Show sites the user has Admin privileges to
   * @member {Boolean} adminOnly
   */
  exports.prototype.adminOnly = undefined;

  /**
   * Full text search for fields: name, account_name, description. (Note: on single-account consoles account name will not be matched)
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * Is default
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;

  /**
   * Site state
   * @member {module:model/SitesSiteBulkPutSchemaFilter.StateEnum} state
   */
  exports.prototype.state = undefined;

  /**
   * Active licenses
   * @member {Number} activeLicenses
   */
  exports.prototype.activeLicenses = undefined;

  /**
   * Total licenses
   * @member {Number} totalLicenses
   */
  exports.prototype.totalLicenses = undefined;

  /**
   * List of states to filter
   * @member {Array.<String>} states
   */
  exports.prototype.states = undefined;

  /**
   * Id in a CRM external system
   * @member {String} externalId
   */
  exports.prototype.externalId = undefined;

  /**
   * [DEPRECATED] Use sku instead
   * @member {module:model/SitesSiteBulkPutSchemaFilter.SuiteEnum} suite
   */
  exports.prototype.suite = undefined;

  /**
   * Free-text filter by account name (supports multiple values)
   * @member {Array.<String>} accountNameContains
   */
  exports.prototype.accountNameContains = undefined;

  /**
   * Registration token
   * @member {String} registrationToken
   */
  exports.prototype.registrationToken = undefined;

  /**
   * Module
   * @member {String} module
   */
  exports.prototype.module = undefined;

  /**
   * The description for the Site
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * List of Account IDs to filter by
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;

  /**
   * List of Site IDs to filter by
   * @member {Array.<String>} siteIds
   */
  exports.prototype.siteIds = undefined;

  /**
   * Timestamp of site creation
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Sku
   * @member {String} sku
   */
  exports.prototype.sku = undefined;

  /**
   * Free-text filter by site description (supports multiple values)
   * @member {Array.<String>} descriptionContains
   */
  exports.prototype.descriptionContains = undefined;



  /**
   * Allowed values for the <code>features</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeaturesEnum = {
    /**
     * value: "firewall-control"
     * @const
     */
    firewallControl: "firewall-control",

    /**
     * value: "device-control"
     * @const
     */
    deviceControl: "device-control",

    /**
     * value: "ioc"
     * @const
     */
    ioc: "ioc"
  };


  /**
   * Allowed values for the <code>siteType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SiteTypeEnum = {
    /**
     * value: "Trial"
     * @const
     */
    trial: "Trial",

    /**
     * value: "Paid"
     * @const
     */
    paid: "Paid"
  };


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "active"
     * @const
     */
    active: "active",

    /**
     * value: "expired"
     * @const
     */
    expired: "expired",

    /**
     * value: "deleted"
     * @const
     */
    deleted: "deleted"
  };


  /**
   * Allowed values for the <code>suite</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SuiteEnum = {
    /**
     * value: "Core"
     * @const
     */
    core: "Core",

    /**
     * value: "Control"
     * @const
     */
    control: "Control",

    /**
     * value: "Complete"
     * @const
     */
    complete: "Complete"
  };

  return exports;

}));