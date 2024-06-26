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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors model module.
   * @module model/V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors</code>.
   * @alias module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors
   * @class
   * @param errorCode {String} Code for the type of the error
   */
  var exports = function(errorCode) {
    this.errorCode = errorCode;
  };

  /**
   * Constructs a <code>V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors} obj Optional instance to populate.
   * @return {module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors} The populated <code>V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], ['String']);
      if (data.hasOwnProperty('errorCode'))
        obj.errorCode = ApiClient.convertToType(data['errorCode'], 'String');
    }
    return obj;
  }

  /**
   * Optional array of parameters
   * @member {Array.<String>} params
   */
  exports.prototype.params = undefined;

  /**
   * Code for the type of the error
   * @member {String} errorCode
   */
  exports.prototype.errorCode = undefined;


  return exports;

}));
