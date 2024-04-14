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
    root.S1MgmtApi.SitesReactivateSiteSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesReactivateSiteSchemaData model module.
   * @module model/SitesReactivateSiteSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesReactivateSiteSchemaData</code>.
   * Data
   * @alias module:model/SitesReactivateSiteSchemaData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesReactivateSiteSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesReactivateSiteSchemaData} obj Optional instance to populate.
   * @return {module:model/SitesReactivateSiteSchemaData} The populated <code>SitesReactivateSiteSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('unlimited'))
        obj.unlimited = ApiClient.convertToType(data['unlimited'], 'Boolean');
    }
    return obj;
  }

  /**
   * New expiration date for the site
   * @member {Date} expiration
   */
  exports.prototype.expiration = undefined;

  /**
   * If false an expiration should be supplied
   * @member {Boolean} unlimited
   * @default false
   */
  exports.prototype.unlimited = false;


  return exports;

}));