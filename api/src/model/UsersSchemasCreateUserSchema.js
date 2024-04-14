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
    define(['ApiClient', 'model/UsersSchemasCreateUserSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersSchemasCreateUserSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.UsersSchemasCreateUserSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.UsersSchemasCreateUserSchemaData);
  }
}(this, function(ApiClient, UsersSchemasCreateUserSchemaData) {
  'use strict';

  /**
   * The UsersSchemasCreateUserSchema model module.
   * @module model/UsersSchemasCreateUserSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasCreateUserSchema</code>.
   * @alias module:model/UsersSchemasCreateUserSchema
   * @class
   * @param data {module:model/UsersSchemasCreateUserSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>UsersSchemasCreateUserSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasCreateUserSchema} obj Optional instance to populate.
   * @return {module:model/UsersSchemasCreateUserSchema} The populated <code>UsersSchemasCreateUserSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = UsersSchemasCreateUserSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/UsersSchemasCreateUserSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
