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
    define(['ApiClient', 'model/ExclusionsSchemasPostExclusionSchemaData', 'model/ExclusionsSchemasPostExclusionSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExclusionsSchemasPostExclusionSchemaData'), require('./ExclusionsSchemasPostExclusionSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ExclusionsSchemasPostExclusionSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ExclusionsSchemasPostExclusionSchemaData, root.S1MgmtApi.ExclusionsSchemasPostExclusionSchemaFilter);
  }
}(this, function(ApiClient, ExclusionsSchemasPostExclusionSchemaData, ExclusionsSchemasPostExclusionSchemaFilter) {
  'use strict';

  /**
   * The ExclusionsSchemasPostExclusionSchema model module.
   * @module model/ExclusionsSchemasPostExclusionSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsSchemasPostExclusionSchema</code>.
   * @alias module:model/ExclusionsSchemasPostExclusionSchema
   * @class
   * @param filter {module:model/ExclusionsSchemasPostExclusionSchemaFilter} 
   * @param data {module:model/ExclusionsSchemasPostExclusionSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>ExclusionsSchemasPostExclusionSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsSchemasPostExclusionSchema} obj Optional instance to populate.
   * @return {module:model/ExclusionsSchemasPostExclusionSchema} The populated <code>ExclusionsSchemasPostExclusionSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = ExclusionsSchemasPostExclusionSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = ExclusionsSchemasPostExclusionSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/ExclusionsSchemasPostExclusionSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/ExclusionsSchemasPostExclusionSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
