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
    define(['ApiClient', 'model/AccountsSchemasAccountViewSchemaMany200Licenses', 'model/AccountsSchemasAccountViewSchemaMany200Skus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsSchemasAccountViewSchemaMany200Licenses'), require('./AccountsSchemasAccountViewSchemaMany200Skus'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AccountsSchemasAccountGetSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AccountsSchemasAccountViewSchemaMany200Licenses, root.S1MgmtApi.AccountsSchemasAccountViewSchemaMany200Skus);
  }
}(this, function(ApiClient, AccountsSchemasAccountViewSchemaMany200Licenses, AccountsSchemasAccountViewSchemaMany200Skus) {
  'use strict';

  /**
   * The AccountsSchemasAccountGetSchema200Data model module.
   * @module model/AccountsSchemasAccountGetSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>AccountsSchemasAccountGetSchema200Data</code>.
   * Response data
   * @alias module:model/AccountsSchemasAccountGetSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsSchemasAccountGetSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountsSchemasAccountGetSchema200Data} obj Optional instance to populate.
   * @return {module:model/AccountsSchemasAccountGetSchema200Data} The populated <code>AccountsSchemasAccountGetSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('creatorId'))
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'String');
      if (data.hasOwnProperty('accountType'))
        obj.accountType = ApiClient.convertToType(data['accountType'], 'String');
      if (data.hasOwnProperty('salesforceId'))
        obj.salesforceId = ApiClient.convertToType(data['salesforceId'], 'String');
      if (data.hasOwnProperty('skus'))
        obj.skus = ApiClient.convertToType(data['skus'], [AccountsSchemasAccountViewSchemaMany200Skus]);
      if (data.hasOwnProperty('totalLicenses'))
        obj.totalLicenses = ApiClient.convertToType(data['totalLicenses'], 'Number');
      if (data.hasOwnProperty('usageType'))
        obj.usageType = ApiClient.convertToType(data['usageType'], 'String');
      if (data.hasOwnProperty('billingMode'))
        obj.billingMode = ApiClient.convertToType(data['billingMode'], 'String');
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('unlimitedExpiration'))
        obj.unlimitedExpiration = ApiClient.convertToType(data['unlimitedExpiration'], Object);
      if (data.hasOwnProperty('licenses'))
        obj.licenses = AccountsSchemasAccountViewSchemaMany200Licenses.constructFromObject(data['licenses']);
      if (data.hasOwnProperty('activeAgents'))
        obj.activeAgents = ApiClient.convertToType(data['activeAgents'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
    }
    return obj;
  }

  /**
   * Timestamp of last update
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Expiration
   * @member {Date} expiration
   */
  exports.prototype.expiration = undefined;

  /**
   * Is default
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;

  /**
   * Account state
   * @member {module:model/AccountsSchemasAccountGetSchema200Data.StateEnum} state
   */
  exports.prototype.state = undefined;

  /**
   * Account ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The ID of the user that created the group
   * @member {String} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * Account type
   * @member {String} accountType
   */
  exports.prototype.accountType = undefined;

  /**
   * @member {String} salesforceId
   */
  exports.prototype.salesforceId = undefined;

  /**
   * [DEPRECATED] The list of SKUs for the Account.
   * @member {Array.<module:model/AccountsSchemasAccountViewSchemaMany200Skus>} skus
   */
  exports.prototype.skus = undefined;

  /**
   * The total number of licenses on all Surfaces for all Bundles.
   * @member {Number} totalLicenses
   */
  exports.prototype.totalLicenses = undefined;

  /**
   * Usage type
   * @member {module:model/AccountsSchemasAccountGetSchema200Data.UsageTypeEnum} usageType
   */
  exports.prototype.usageType = undefined;

  /**
   * Billing mode
   * @member {module:model/AccountsSchemasAccountGetSchema200Data.BillingModeEnum} billingMode
   */
  exports.prototype.billingMode = undefined;

  /**
   * ID of CRM external system
   * @member {String} externalId
   */
  exports.prototype.externalId = undefined;

  /**
   * The Account does not expire
   * @member {Object} unlimitedExpiration
   */
  exports.prototype.unlimitedExpiration = undefined;

  /**
   * @member {module:model/AccountsSchemasAccountViewSchemaMany200Licenses} licenses
   */
  exports.prototype.licenses = undefined;

  /**
   * Total Agents in the Account
   * @member {Number} activeAgents
   */
  exports.prototype.activeAgents = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Timestamp of Account creation
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * The user that created the group
   * @member {String} creator
   */
  exports.prototype.creator = undefined;



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
   * Allowed values for the <code>usageType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UsageTypeEnum = {
    /**
     * value: "customer"
     * @const
     */
    customer: "customer",

    /**
     * value: "mssp"
     * @const
     */
    mssp: "mssp"
  };


  /**
   * Allowed values for the <code>billingMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingModeEnum = {
    /**
     * value: "subscription"
     * @const
     */
    subscription: "subscription",

    /**
     * value: "consumption"
     * @const
     */
    consumption: "consumption"
  };

  return exports;

}));