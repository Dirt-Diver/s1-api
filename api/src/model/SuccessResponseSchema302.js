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
    define(['ApiClient', 'model/NoDataSchema400Errors', 'model/SuccessResponseSchema200Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NoDataSchema400Errors'), require('./SuccessResponseSchema200Data'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SuccessResponseSchema302 = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.NoDataSchema400Errors, root.S1MgmtApi.SuccessResponseSchema200Data);
  }
}(this, function(ApiClient, NoDataSchema400Errors, SuccessResponseSchema200Data) {
  'use strict';

  /**
   * The SuccessResponseSchema302 model module.
   * @module model/SuccessResponseSchema302
   * @version 2.1
   */

  /**
   * Constructs a new <code>SuccessResponseSchema302</code>.
   * @alias module:model/SuccessResponseSchema302
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SuccessResponseSchema302</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuccessResponseSchema302} obj Optional instance to populate.
   * @return {module:model/SuccessResponseSchema302} The populated <code>SuccessResponseSchema302</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [NoDataSchema400Errors]);
      if (data.hasOwnProperty('data'))
        obj.data = SuccessResponseSchema200Data.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * A list of encountered errors
   * @member {Array.<module:model/NoDataSchema400Errors>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * @member {module:model/SuccessResponseSchema200Data} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
