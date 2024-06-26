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
    define(['ApiClient', 'model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo);
  }
}(this, function(ApiClient, DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo) {
  'use strict';

  /**
   * The DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data model module.
   * @module model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data</code>.
   * Response data
   * @alias module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data
   * @class
   * @param queryId {String} A query unique identifier
   */
  var exports = function(queryId) {
    this.queryId = queryId;
  };

  /**
   * Constructs a <code>DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data} obj Optional instance to populate.
   * @return {module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data} The populated <code>DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('queryId'))
        obj.queryId = ApiClient.convertToType(data['queryId'], 'String');
      if (data.hasOwnProperty('queryModeInfo'))
        obj.queryModeInfo = DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo.constructFromObject(data['queryModeInfo']);
    }
    return obj;
  }

  /**
   * A query unique identifier
   * @member {String} queryId
   */
  exports.prototype.queryId = undefined;

  /**
   * @member {module:model/DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo} queryModeInfo
   */
  exports.prototype.queryModeInfo = undefined;


  return exports;

}));
