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
    root.S1MgmtApi.ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data model module.
   * @module model/ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data</code>.
   * Response data
   * @alias module:model/ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data} obj Optional instance to populate.
   * @return {module:model/ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data} The populated <code>ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('reportId'))
        obj.reportId = ApiClient.convertToType(data['reportId'], 'String');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('succeeded'))
        obj.succeeded = ApiClient.convertToType(data['succeeded'], 'Number');
    }
    return obj;
  }

  /**
   * The ID of the Validation Report generated for the import. It can help you fix entries that did not import successfully.
   * @member {String} reportId
   */
  exports.prototype.reportId = undefined;

  /**
   * The number of rows in the file
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * The number of entries that imported successfully
   * @member {Number} succeeded
   */
  exports.prototype.succeeded = undefined;


  return exports;

}));