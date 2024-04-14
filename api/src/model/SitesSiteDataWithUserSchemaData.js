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
    define(['ApiClient', 'model/SitesPostSiteSchemaDataPolicy', 'model/SitesSiteDataWithUserSchemaDataUser', 'model/SitesSitePutSchemaDataLicenses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitesPostSiteSchemaDataPolicy'), require('./SitesSiteDataWithUserSchemaDataUser'), require('./SitesSitePutSchemaDataLicenses'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SitesSiteDataWithUserSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SitesPostSiteSchemaDataPolicy, root.S1MgmtApi.SitesSiteDataWithUserSchemaDataUser, root.S1MgmtApi.SitesSitePutSchemaDataLicenses);
  }
}(this, function(ApiClient, SitesPostSiteSchemaDataPolicy, SitesSiteDataWithUserSchemaDataUser, SitesSitePutSchemaDataLicenses) {
  'use strict';

  /**
   * The SitesSiteDataWithUserSchemaData model module.
   * @module model/SitesSiteDataWithUserSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSiteDataWithUserSchemaData</code>.
   * Data
   * @alias module:model/SitesSiteDataWithUserSchemaData
   * @class
   * @param name {String} Name
   * @param user {module:model/SitesSiteDataWithUserSchemaDataUser} 
   */
  var exports = function(name, user) {
    this.name = name;
    this.user = user;
  };

  /**
   * Constructs a <code>SitesSiteDataWithUserSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSiteDataWithUserSchemaData} obj Optional instance to populate.
   * @return {module:model/SitesSiteDataWithUserSchemaData} The populated <code>SitesSiteDataWithUserSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('suite'))
        obj.suite = ApiClient.convertToType(data['suite'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('licenses'))
        obj.licenses = SitesSitePutSchemaDataLicenses.constructFromObject(data['licenses']);
      if (data.hasOwnProperty('unlimitedExpiration'))
        obj.unlimitedExpiration = ApiClient.convertToType(data['unlimitedExpiration'], 'Boolean');
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('unlimitedLicenses'))
        obj.unlimitedLicenses = ApiClient.convertToType(data['unlimitedLicenses'], 'Boolean');
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('policy'))
        obj.policy = SitesPostSiteSchemaDataPolicy.constructFromObject(data['policy']);
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('siteType'))
        obj.siteType = ApiClient.convertToType(data['siteType'], 'String');
      if (data.hasOwnProperty('totalLicenses'))
        obj.totalLicenses = ApiClient.convertToType(data['totalLicenses'], 'Number');
      if (data.hasOwnProperty('accountSfId'))
        obj.accountSfId = ApiClient.convertToType(data['accountSfId'], 'String');
      if (data.hasOwnProperty('inherits'))
        obj.inherits = ApiClient.convertToType(data['inherits'], 'Boolean');
      if (data.hasOwnProperty('user'))
        obj.user = SitesSiteDataWithUserSchemaDataUser.constructFromObject(data['user']);
    }
    return obj;
  }

  /**
   * The user-defined description for the Site
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Id of CRM external system
   * @member {String} externalId
   * @default 'null'
   */
  exports.prototype.externalId = 'null';

  /**
   * [DEPRECATED] Use licenses instead
   * @member {module:model/SitesSiteDataWithUserSchemaData.SuiteEnum} suite
   */
  exports.prototype.suite = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataLicenses} licenses
   */
  exports.prototype.licenses = undefined;

  /**
   * Is expiration unlimited, if not expiration should be supplied 
   * @member {Boolean} unlimitedExpiration
   * @default false
   */
  exports.prototype.unlimitedExpiration = false;

  /**
   * [DEPRECATED] Use licenses instead
   * @member {module:model/SitesSiteDataWithUserSchemaData.SkuEnum} sku
   */
  exports.prototype.sku = undefined;

  /**
   * Is the site unlimited, if not then total_licenses must be supplied
   * @member {Boolean} unlimitedLicenses
   * @default false
   */
  exports.prototype.unlimitedLicenses = false;

  /**
   * Associated account. Leave empty in single-account management consoles.
   * @member {String} accountId
   * @default 'null'
   */
  exports.prototype.accountId = 'null';

  /**
   * @member {module:model/SitesPostSiteSchemaDataPolicy} policy
   */
  exports.prototype.policy = undefined;

  /**
   * Expiration
   * @member {Date} expiration
   */
  exports.prototype.expiration = undefined;

  /**
   * Site types
   * @member {module:model/SitesSiteDataWithUserSchemaData.SiteTypeEnum} siteType
   * @default 'Paid'
   */
  exports.prototype.siteType = 'Paid';

  /**
   * Total licenses
   * @member {Number} totalLicenses
   */
  exports.prototype.totalLicenses = undefined;

  /**
   * @member {String} accountSfId
   * @default 'null'
   */
  exports.prototype.accountSfId = 'null';

  /**
   * True if the policy is inherited from Tenant, False if the site has its own edited policy
   * @member {Boolean} inherits
   */
  exports.prototype.inherits = undefined;

  /**
   * @member {module:model/SitesSiteDataWithUserSchemaDataUser} user
   */
  exports.prototype.user = undefined;



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


  /**
   * Allowed values for the <code>sku</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SkuEnum = {
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

  return exports;

}));
