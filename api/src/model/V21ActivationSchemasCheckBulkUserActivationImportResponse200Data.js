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
    define(['ApiClient', 'model/V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ActivationSchemasCheckBulkUserActivationImportResponse200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors);
  }
}(this, function(ApiClient, V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors) {
  'use strict';

  /**
   * The V21ActivationSchemasCheckBulkUserActivationImportResponse200Data model module.
   * @module model/V21ActivationSchemasCheckBulkUserActivationImportResponse200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ActivationSchemasCheckBulkUserActivationImportResponse200Data</code>.
   * Response data
   * @alias module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200Data
   * @class
   * @param total {Number} The number of rows in the file
   */
  var exports = function(total) {
    this.total = total;
  };

  /**
   * Constructs a <code>V21ActivationSchemasCheckBulkUserActivationImportResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200Data} obj Optional instance to populate.
   * @return {module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200Data} The populated <code>V21ActivationSchemasCheckBulkUserActivationImportResponse200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors]);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
    }
    return obj;
  }

  /**
   * Validation errors
   * @member {Array.<module:model/V21ActivationSchemasCheckBulkUserActivationImportResponse200DataErrors>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * The number of rows in the file
   * @member {Number} total
   */
  exports.prototype.total = undefined;


  return exports;

}));
