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
    root.S1MgmtApi.SitesSitePutSchemaDataLicensesSurfaces = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataLicensesSurfaces model module.
   * @module model/SitesSitePutSchemaDataLicensesSurfaces
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataLicensesSurfaces</code>.
   * @alias module:model/SitesSitePutSchemaDataLicensesSurfaces
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    this.name = name;
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataLicensesSurfaces</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataLicensesSurfaces} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataLicensesSurfaces} The populated <code>SitesSitePutSchemaDataLicensesSurfaces</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * The number of licenses per Surface. -1 indicates unlimited count.
   * @member {Number} count
   * @default 0
   */
  exports.prototype.count = 0;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
