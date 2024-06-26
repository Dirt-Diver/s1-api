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
    define(['ApiClient', 'model/UsersSchemasGenerateApiTokenSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersSchemasGenerateApiTokenSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.UsersSchemasGenerateApiTokenSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.UsersSchemasGenerateApiTokenSchemaData);
  }
}(this, function(ApiClient, UsersSchemasGenerateApiTokenSchemaData) {
  'use strict';

  /**
   * The UsersSchemasGenerateApiTokenSchema model module.
   * @module model/UsersSchemasGenerateApiTokenSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasGenerateApiTokenSchema</code>.
   * @alias module:model/UsersSchemasGenerateApiTokenSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UsersSchemasGenerateApiTokenSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasGenerateApiTokenSchema} obj Optional instance to populate.
   * @return {module:model/UsersSchemasGenerateApiTokenSchema} The populated <code>UsersSchemasGenerateApiTokenSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = UsersSchemasGenerateApiTokenSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/UsersSchemasGenerateApiTokenSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
