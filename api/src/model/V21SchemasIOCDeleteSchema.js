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
    define(['ApiClient', 'model/V21SchemasIOCDeleteSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21SchemasIOCDeleteSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21SchemasIOCDeleteSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21SchemasIOCDeleteSchemaFilter);
  }
}(this, function(ApiClient, V21SchemasIOCDeleteSchemaFilter) {
  'use strict';

  /**
   * The V21SchemasIOCDeleteSchema model module.
   * @module model/V21SchemasIOCDeleteSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21SchemasIOCDeleteSchema</code>.
   * @alias module:model/V21SchemasIOCDeleteSchema
   * @class
   * @param filter {module:model/V21SchemasIOCDeleteSchemaFilter} 
   */
  var exports = function(filter) {
    this.filter = filter;
  };

  /**
   * Constructs a <code>V21SchemasIOCDeleteSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21SchemasIOCDeleteSchema} obj Optional instance to populate.
   * @return {module:model/V21SchemasIOCDeleteSchema} The populated <code>V21SchemasIOCDeleteSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = V21SchemasIOCDeleteSchemaFilter.constructFromObject(data['filter']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21SchemasIOCDeleteSchemaFilter} filter
   */
  exports.prototype.filter = undefined;


  return exports;

}));
