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
    define(['ApiClient', 'model/ActivitiesActivityViewSchemaMany200Pagination', 'model/ExclusionsSchemasExclusionSchemaGetMany200Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivitiesActivityViewSchemaMany200Pagination'), require('./ExclusionsSchemasExclusionSchemaGetMany200Data'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ExclusionsSchemasExclusionSchemaGetMany200 = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ActivitiesActivityViewSchemaMany200Pagination, root.S1MgmtApi.ExclusionsSchemasExclusionSchemaGetMany200Data);
  }
}(this, function(ApiClient, ActivitiesActivityViewSchemaMany200Pagination, ExclusionsSchemasExclusionSchemaGetMany200Data) {
  'use strict';

  /**
   * The ExclusionsSchemasExclusionSchemaGetMany200 model module.
   * @module model/ExclusionsSchemasExclusionSchemaGetMany200
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsSchemasExclusionSchemaGetMany200</code>.
   * @alias module:model/ExclusionsSchemasExclusionSchemaGetMany200
   * @class
   * @param pagination {module:model/ActivitiesActivityViewSchemaMany200Pagination} 
   */
  var exports = function(pagination) {
    this.pagination = pagination;
  };

  /**
   * Constructs a <code>ExclusionsSchemasExclusionSchemaGetMany200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsSchemasExclusionSchemaGetMany200} obj Optional instance to populate.
   * @return {module:model/ExclusionsSchemasExclusionSchemaGetMany200} The populated <code>ExclusionsSchemasExclusionSchemaGetMany200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Object]);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = ActivitiesActivityViewSchemaMany200Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ExclusionsSchemasExclusionSchemaGetMany200Data]);
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
   * @member {Array.<module:model/ExclusionsSchemasExclusionSchemaGetMany200Data>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));