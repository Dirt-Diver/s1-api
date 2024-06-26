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
    define(['ApiClient', 'model/SystemPutSystemConfigurationData', 'model/SystemPutSystemConfigurationFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SystemPutSystemConfigurationData'), require('./SystemPutSystemConfigurationFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SystemPutSystemConfiguration = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SystemPutSystemConfigurationData, root.S1MgmtApi.SystemPutSystemConfigurationFilter);
  }
}(this, function(ApiClient, SystemPutSystemConfigurationData, SystemPutSystemConfigurationFilter) {
  'use strict';

  /**
   * The SystemPutSystemConfiguration model module.
   * @module model/SystemPutSystemConfiguration
   * @version 2.1
   */

  /**
   * Constructs a new <code>SystemPutSystemConfiguration</code>.
   * @alias module:model/SystemPutSystemConfiguration
   * @class
   * @param filter {module:model/SystemPutSystemConfigurationFilter} 
   * @param data {module:model/SystemPutSystemConfigurationData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>SystemPutSystemConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemPutSystemConfiguration} obj Optional instance to populate.
   * @return {module:model/SystemPutSystemConfiguration} The populated <code>SystemPutSystemConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = SystemPutSystemConfigurationFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = SystemPutSystemConfigurationData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/SystemPutSystemConfigurationFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/SystemPutSystemConfigurationData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
