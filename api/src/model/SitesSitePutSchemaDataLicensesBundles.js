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
    define(['ApiClient', 'model/SitesSitePutSchemaDataLicensesSurfaces'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitesSitePutSchemaDataLicensesSurfaces'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SitesSitePutSchemaDataLicensesBundles = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SitesSitePutSchemaDataLicensesSurfaces);
  }
}(this, function(ApiClient, SitesSitePutSchemaDataLicensesSurfaces) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataLicensesBundles model module.
   * @module model/SitesSitePutSchemaDataLicensesBundles
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataLicensesBundles</code>.
   * @alias module:model/SitesSitePutSchemaDataLicensesBundles
   * @class
   * @param surfaces {Array.<module:model/SitesSitePutSchemaDataLicensesSurfaces>} 
   * @param name {String} 
   */
  var exports = function(surfaces, name) {
    this.surfaces = surfaces;
    this.name = name;
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataLicensesBundles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataLicensesBundles} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataLicensesBundles} The populated <code>SitesSitePutSchemaDataLicensesBundles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('surfaces'))
        obj.surfaces = ApiClient.convertToType(data['surfaces'], [SitesSitePutSchemaDataLicensesSurfaces]);
      if (data.hasOwnProperty('majorVersion'))
        obj.majorVersion = ApiClient.convertToType(data['majorVersion'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SitesSitePutSchemaDataLicensesSurfaces>} surfaces
   */
  exports.prototype.surfaces = undefined;

  /**
   * @member {Number} majorVersion
   */
  exports.prototype.majorVersion = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
