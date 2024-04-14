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
    define(['ApiClient', 'model/AccountsSchemasPostAccountSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountsSchemasPostAccountSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AccountsSchemasPostAccountSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AccountsSchemasPostAccountSchemaData);
  }
}(this, function(ApiClient, AccountsSchemasPostAccountSchemaData) {
  'use strict';

  /**
   * The AccountsSchemasPostAccountSchema model module.
   * @module model/AccountsSchemasPostAccountSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>AccountsSchemasPostAccountSchema</code>.
   * @alias module:model/AccountsSchemasPostAccountSchema
   * @class
   * @param data {module:model/AccountsSchemasPostAccountSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>AccountsSchemasPostAccountSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountsSchemasPostAccountSchema} obj Optional instance to populate.
   * @return {module:model/AccountsSchemasPostAccountSchema} The populated <code>AccountsSchemasPostAccountSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = AccountsSchemasPostAccountSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/AccountsSchemasPostAccountSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));