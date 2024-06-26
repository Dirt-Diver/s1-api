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
    define(['ApiClient', 'model/LocationsSchemasNewLocationSchemaData', 'model/LocationsSchemasNewLocationSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocationsSchemasNewLocationSchemaData'), require('./LocationsSchemasNewLocationSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.LocationsSchemasNewLocationSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.LocationsSchemasNewLocationSchemaData, root.S1MgmtApi.LocationsSchemasNewLocationSchemaFilter);
  }
}(this, function(ApiClient, LocationsSchemasNewLocationSchemaData, LocationsSchemasNewLocationSchemaFilter) {
  'use strict';

  /**
   * The LocationsSchemasNewLocationSchema model module.
   * @module model/LocationsSchemasNewLocationSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>LocationsSchemasNewLocationSchema</code>.
   * @alias module:model/LocationsSchemasNewLocationSchema
   * @class
   * @param filter {module:model/LocationsSchemasNewLocationSchemaFilter} 
   * @param data {module:model/LocationsSchemasNewLocationSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>LocationsSchemasNewLocationSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationsSchemasNewLocationSchema} obj Optional instance to populate.
   * @return {module:model/LocationsSchemasNewLocationSchema} The populated <code>LocationsSchemasNewLocationSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = LocationsSchemasNewLocationSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = LocationsSchemasNewLocationSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/LocationsSchemasNewLocationSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/LocationsSchemasNewLocationSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
