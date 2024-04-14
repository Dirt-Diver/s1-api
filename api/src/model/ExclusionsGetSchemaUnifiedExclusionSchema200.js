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
    root.S1MgmtApi.ExclusionsGetSchemaUnifiedExclusionSchema200 = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExclusionsGetSchemaUnifiedExclusionSchema200 model module.
   * @module model/ExclusionsGetSchemaUnifiedExclusionSchema200
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsGetSchemaUnifiedExclusionSchema200</code>.
   * @alias module:model/ExclusionsGetSchemaUnifiedExclusionSchema200
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExclusionsGetSchemaUnifiedExclusionSchema200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsGetSchemaUnifiedExclusionSchema200} obj Optional instance to populate.
   * @return {module:model/ExclusionsGetSchemaUnifiedExclusionSchema200} The populated <code>ExclusionsGetSchemaUnifiedExclusionSchema200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Object]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
    }
    return obj;
  }

  /**
   * Errors
   * @member {Array.<Object>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * Response data
   * @member {Object} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
