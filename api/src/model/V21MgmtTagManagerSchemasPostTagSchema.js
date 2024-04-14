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
    define(['ApiClient', 'model/V21MgmtTagManagerSchemasPostTagSchemaData', 'model/V21MgmtTagManagerSchemasPostTagSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21MgmtTagManagerSchemasPostTagSchemaData'), require('./V21MgmtTagManagerSchemasPostTagSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21MgmtTagManagerSchemasPostTagSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21MgmtTagManagerSchemasPostTagSchemaData, root.S1MgmtApi.V21MgmtTagManagerSchemasPostTagSchemaFilter);
  }
}(this, function(ApiClient, V21MgmtTagManagerSchemasPostTagSchemaData, V21MgmtTagManagerSchemasPostTagSchemaFilter) {
  'use strict';

  /**
   * The V21MgmtTagManagerSchemasPostTagSchema model module.
   * @module model/V21MgmtTagManagerSchemasPostTagSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21MgmtTagManagerSchemasPostTagSchema</code>.
   * @alias module:model/V21MgmtTagManagerSchemasPostTagSchema
   * @class
   * @param filter {module:model/V21MgmtTagManagerSchemasPostTagSchemaFilter} 
   */
  var exports = function(filter) {
    this.filter = filter;
  };

  /**
   * Constructs a <code>V21MgmtTagManagerSchemasPostTagSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21MgmtTagManagerSchemasPostTagSchema} obj Optional instance to populate.
   * @return {module:model/V21MgmtTagManagerSchemasPostTagSchema} The populated <code>V21MgmtTagManagerSchemasPostTagSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = V21MgmtTagManagerSchemasPostTagSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = V21MgmtTagManagerSchemasPostTagSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21MgmtTagManagerSchemasPostTagSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/V21MgmtTagManagerSchemasPostTagSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));