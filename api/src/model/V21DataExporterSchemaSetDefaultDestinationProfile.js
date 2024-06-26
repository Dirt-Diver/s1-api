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
    define(['ApiClient', 'model/V21DataExporterSchemaSetDefaultDestinationProfileData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21DataExporterSchemaSetDefaultDestinationProfileData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21DataExporterSchemaSetDefaultDestinationProfile = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21DataExporterSchemaSetDefaultDestinationProfileData);
  }
}(this, function(ApiClient, V21DataExporterSchemaSetDefaultDestinationProfileData) {
  'use strict';

  /**
   * The V21DataExporterSchemaSetDefaultDestinationProfile model module.
   * @module model/V21DataExporterSchemaSetDefaultDestinationProfile
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21DataExporterSchemaSetDefaultDestinationProfile</code>.
   * @alias module:model/V21DataExporterSchemaSetDefaultDestinationProfile
   * @class
   * @param data {module:model/V21DataExporterSchemaSetDefaultDestinationProfileData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>V21DataExporterSchemaSetDefaultDestinationProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21DataExporterSchemaSetDefaultDestinationProfile} obj Optional instance to populate.
   * @return {module:model/V21DataExporterSchemaSetDefaultDestinationProfile} The populated <code>V21DataExporterSchemaSetDefaultDestinationProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = V21DataExporterSchemaSetDefaultDestinationProfileData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21DataExporterSchemaSetDefaultDestinationProfileData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
