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
    define(['ApiClient', 'model/V21ModelsPaginationInfo', 'model/V21ModelsPoliciesCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ModelsPaginationInfo'), require('./V21ModelsPoliciesCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ModelsGetPoliciesResponse = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ModelsPaginationInfo, root.S1MgmtApi.V21ModelsPoliciesCollection);
  }
}(this, function(ApiClient, V21ModelsPaginationInfo, V21ModelsPoliciesCollection) {
  'use strict';

  /**
   * The V21ModelsGetPoliciesResponse model module.
   * @module model/V21ModelsGetPoliciesResponse
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ModelsGetPoliciesResponse</code>.
   * @alias module:model/V21ModelsGetPoliciesResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21ModelsGetPoliciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ModelsGetPoliciesResponse} obj Optional instance to populate.
   * @return {module:model/V21ModelsGetPoliciesResponse} The populated <code>V21ModelsGetPoliciesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = V21ModelsPoliciesCollection.constructFromObject(data['data']);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = V21ModelsPaginationInfo.constructFromObject(data['pagination']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21ModelsPoliciesCollection} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/V21ModelsPaginationInfo} pagination
   */
  exports.prototype.pagination = undefined;


  return exports;

}));
