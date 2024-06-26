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
    define(['ApiClient', 'model/AccountsSchemasAccountPutSchemaDataLicenses', 'model/AccountsSchemasPostAccountSchemaDataSkus', 'model/SitesSitePutSchemaDataPolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsSchemasAccountPutSchemaDataLicenses'), require('./AccountsSchemasPostAccountSchemaDataSkus'), require('./SitesSitePutSchemaDataPolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AccountsSchemasAccountPutSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AccountsSchemasAccountPutSchemaDataLicenses, root.S1MgmtApi.AccountsSchemasPostAccountSchemaDataSkus, root.S1MgmtApi.SitesSitePutSchemaDataPolicy);
  }
}(this, function(ApiClient, AccountsSchemasAccountPutSchemaDataLicenses, AccountsSchemasPostAccountSchemaDataSkus, SitesSitePutSchemaDataPolicy) {
  'use strict';

  /**
   * The AccountsSchemasAccountPutSchemaData model module.
   * @module model/AccountsSchemasAccountPutSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>AccountsSchemasAccountPutSchemaData</code>.
   * Data
   * @alias module:model/AccountsSchemasAccountPutSchemaData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AccountsSchemasAccountPutSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountsSchemasAccountPutSchemaData} obj Optional instance to populate.
   * @return {module:model/AccountsSchemasAccountPutSchemaData} The populated <code>AccountsSchemasAccountPutSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('unlimitedExpiration'))
        obj.unlimitedExpiration = ApiClient.convertToType(data['unlimitedExpiration'], 'Boolean');
      if (data.hasOwnProperty('licenses'))
        obj.licenses = AccountsSchemasAccountPutSchemaDataLicenses.constructFromObject(data['licenses']);
      if (data.hasOwnProperty('accountType'))
        obj.accountType = ApiClient.convertToType(data['accountType'], 'String');
      if (data.hasOwnProperty('policy'))
        obj.policy = SitesSitePutSchemaDataPolicy.constructFromObject(data['policy']);
      if (data.hasOwnProperty('salesforceId'))
        obj.salesforceId = ApiClient.convertToType(data['salesforceId'], 'String');
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('skus'))
        obj.skus = ApiClient.convertToType(data['skus'], [AccountsSchemasPostAccountSchemaDataSkus]);
      if (data.hasOwnProperty('usageType'))
        obj.usageType = ApiClient.convertToType(data['usageType'], 'String');
      if (data.hasOwnProperty('inherits'))
        obj.inherits = ApiClient.convertToType(data['inherits'], 'Boolean');
      if (data.hasOwnProperty('billingMode'))
        obj.billingMode = ApiClient.convertToType(data['billingMode'], 'String');
    }
    return obj;
  }

  /**
   * ID of CRM external system
   * @member {String} externalId
   */
  exports.prototype.externalId = undefined;

  /**
   * Name
   * @member {String} name
   * @default 'null'
   */
  exports.prototype.name = 'null';

  /**
   * If expiration is not limited, enter the expiration date and time yyyy-mm-ddThh:mm:ss
   * @member {Boolean} unlimitedExpiration
   */
  exports.prototype.unlimitedExpiration = undefined;

  /**
   * @member {module:model/AccountsSchemasAccountPutSchemaDataLicenses} licenses
   */
  exports.prototype.licenses = undefined;

  /**
   * Account type
   * @member {module:model/AccountsSchemasAccountPutSchemaData.AccountTypeEnum} accountType
   * @default 'null'
   */
  exports.prototype.accountType = 'null';

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicy} policy
   */
  exports.prototype.policy = undefined;

  /**
   * @member {String} salesforceId
   */
  exports.prototype.salesforceId = undefined;

  /**
   * Expiration
   * @member {Date} expiration
   */
  exports.prototype.expiration = undefined;

  /**
   * [DEPRECATED] Use licenses instead
   * @member {Array.<module:model/AccountsSchemasPostAccountSchemaDataSkus>} skus
   */
  exports.prototype.skus = undefined;

  /**
   * Usage type
   * @member {module:model/AccountsSchemasAccountPutSchemaData.UsageTypeEnum} usageType
   */
  exports.prototype.usageType = undefined;

  /**
   * True if the policy is inherited from Global, False if the Account has its own edited policy
   * @member {Boolean} inherits
   * @default false
   */
  exports.prototype.inherits = false;

  /**
   * Billing mode
   * @member {module:model/AccountsSchemasAccountPutSchemaData.BillingModeEnum} billingMode
   */
  exports.prototype.billingMode = undefined;



  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = {
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
