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
    define(['ApiClient', 'model/V21ActivationSchemasUserActivationIdsRequestWrapperFilter', 'model/V21PolicySchemasPolicyRequestData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ActivationSchemasUserActivationIdsRequestWrapperFilter'), require('./V21PolicySchemasPolicyRequestData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21PolicySchemasPolicyRequest = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ActivationSchemasUserActivationIdsRequestWrapperFilter, root.S1MgmtApi.V21PolicySchemasPolicyRequestData);
  }
}(this, function(ApiClient, V21ActivationSchemasUserActivationIdsRequestWrapperFilter, V21PolicySchemasPolicyRequestData) {
  'use strict';

  /**
   * The V21PolicySchemasPolicyRequest model module.
   * @module model/V21PolicySchemasPolicyRequest
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21PolicySchemasPolicyRequest</code>.
   * @alias module:model/V21PolicySchemasPolicyRequest
   * @class
   * @param data {module:model/V21PolicySchemasPolicyRequestData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>V21PolicySchemasPolicyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21PolicySchemasPolicyRequest} obj Optional instance to populate.
   * @return {module:model/V21PolicySchemasPolicyRequest} The populated <code>V21PolicySchemasPolicyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = V21PolicySchemasPolicyRequestData.constructFromObject(data['data']);
      if (data.hasOwnProperty('filter'))
        obj.filter = V21ActivationSchemasUserActivationIdsRequestWrapperFilter.constructFromObject(data['filter']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21PolicySchemasPolicyRequestData} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/V21ActivationSchemasUserActivationIdsRequestWrapperFilter} filter
   */
  exports.prototype.filter = undefined;


  return exports;

}));
