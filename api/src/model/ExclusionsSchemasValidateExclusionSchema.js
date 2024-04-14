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
    define(['ApiClient', 'model/ExclusionsSchemasValidateExclusionSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExclusionsSchemasValidateExclusionSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ExclusionsSchemasValidateExclusionSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ExclusionsSchemasValidateExclusionSchemaData);
  }
}(this, function(ApiClient, ExclusionsSchemasValidateExclusionSchemaData) {
  'use strict';

  /**
   * The ExclusionsSchemasValidateExclusionSchema model module.
   * @module model/ExclusionsSchemasValidateExclusionSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsSchemasValidateExclusionSchema</code>.
   * @alias module:model/ExclusionsSchemasValidateExclusionSchema
   * @class
   * @param data {module:model/ExclusionsSchemasValidateExclusionSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>ExclusionsSchemasValidateExclusionSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsSchemasValidateExclusionSchema} obj Optional instance to populate.
   * @return {module:model/ExclusionsSchemasValidateExclusionSchema} The populated <code>ExclusionsSchemasValidateExclusionSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = ExclusionsSchemasValidateExclusionSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/ExclusionsSchemasValidateExclusionSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));