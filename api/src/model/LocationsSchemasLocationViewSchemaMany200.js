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
    define(['ApiClient', 'model/ActivitiesActivityViewSchemaMany200Pagination', 'model/LocationsSchemasLocationViewSchemaMany200Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivitiesActivityViewSchemaMany200Pagination'), require('./LocationsSchemasLocationViewSchemaMany200Data'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.LocationsSchemasLocationViewSchemaMany200 = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ActivitiesActivityViewSchemaMany200Pagination, root.S1MgmtApi.LocationsSchemasLocationViewSchemaMany200Data);
  }
}(this, function(ApiClient, ActivitiesActivityViewSchemaMany200Pagination, LocationsSchemasLocationViewSchemaMany200Data) {
  'use strict';

  /**
   * The LocationsSchemasLocationViewSchemaMany200 model module.
   * @module model/LocationsSchemasLocationViewSchemaMany200
   * @version 2.1
   */

  /**
   * Constructs a new <code>LocationsSchemasLocationViewSchemaMany200</code>.
   * @alias module:model/LocationsSchemasLocationViewSchemaMany200
   * @class
   * @param pagination {module:model/ActivitiesActivityViewSchemaMany200Pagination} 
   */
  var exports = function(pagination) {
    this.pagination = pagination;
  };

  /**
   * Constructs a <code>LocationsSchemasLocationViewSchemaMany200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationsSchemasLocationViewSchemaMany200} obj Optional instance to populate.
   * @return {module:model/LocationsSchemasLocationViewSchemaMany200} The populated <code>LocationsSchemasLocationViewSchemaMany200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Object]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = ActivitiesActivityViewSchemaMany200Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [LocationsSchemasLocationViewSchemaMany200Data]);
    }
    return obj;
  }

  /**
   * Errors
   * @member {Array.<Object>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * @member {module:model/ActivitiesActivityViewSchemaMany200Pagination} pagination
   */
  exports.prototype.pagination = undefined;

  /**
   * Response data
   * @member {Array.<module:model/LocationsSchemasLocationViewSchemaMany200Data>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
