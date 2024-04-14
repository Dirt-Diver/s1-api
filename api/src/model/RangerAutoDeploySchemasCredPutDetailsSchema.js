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
    define(['ApiClient', 'model/RangerAutoDeploySchemasCredPutDetailsSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RangerAutoDeploySchemasCredPutDetailsSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RangerAutoDeploySchemasCredPutDetailsSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.RangerAutoDeploySchemasCredPutDetailsSchemaData);
  }
}(this, function(ApiClient, RangerAutoDeploySchemasCredPutDetailsSchemaData) {
  'use strict';

  /**
   * The RangerAutoDeploySchemasCredPutDetailsSchema model module.
   * @module model/RangerAutoDeploySchemasCredPutDetailsSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerAutoDeploySchemasCredPutDetailsSchema</code>.
   * @alias module:model/RangerAutoDeploySchemasCredPutDetailsSchema
   * @class
   * @param data {module:model/RangerAutoDeploySchemasCredPutDetailsSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>RangerAutoDeploySchemasCredPutDetailsSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerAutoDeploySchemasCredPutDetailsSchema} obj Optional instance to populate.
   * @return {module:model/RangerAutoDeploySchemasCredPutDetailsSchema} The populated <code>RangerAutoDeploySchemasCredPutDetailsSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = RangerAutoDeploySchemasCredPutDetailsSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/RangerAutoDeploySchemasCredPutDetailsSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));