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
    define(['ApiClient', 'model/HandlersTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HandlersTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.HandlersListTokensResponse = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.HandlersTokenResponse);
  }
}(this, function(ApiClient, HandlersTokenResponse) {
  'use strict';

  /**
   * The HandlersListTokensResponse model module.
   * @module model/HandlersListTokensResponse
   * @version 2.1
   */

  /**
   * Constructs a new <code>HandlersListTokensResponse</code>.
   * @alias module:model/HandlersListTokensResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>HandlersListTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HandlersListTokensResponse} obj Optional instance to populate.
   * @return {module:model/HandlersListTokensResponse} The populated <code>HandlersListTokensResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [HandlersTokenResponse]);
    }
    return obj;
  }

  /**
   * List of existing tokens
   * @member {Array.<module:model/HandlersTokenResponse>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
