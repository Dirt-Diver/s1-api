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
    define(['ApiClient', 'model/UsersSchemasUserIdSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersSchemasUserIdSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.UsersSchemasUserIdSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.UsersSchemasUserIdSchemaData);
  }
}(this, function(ApiClient, UsersSchemasUserIdSchemaData) {
  'use strict';

  /**
   * The UsersSchemasUserIdSchema model module.
   * @module model/UsersSchemasUserIdSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasUserIdSchema</code>.
   * @alias module:model/UsersSchemasUserIdSchema
   * @class
   * @param data {module:model/UsersSchemasUserIdSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>UsersSchemasUserIdSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasUserIdSchema} obj Optional instance to populate.
   * @return {module:model/UsersSchemasUserIdSchema} The populated <code>UsersSchemasUserIdSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = UsersSchemasUserIdSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/UsersSchemasUserIdSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
