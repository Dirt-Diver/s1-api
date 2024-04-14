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
    root.S1MgmtApi.UsersSchemasGenerateApiTokenSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasGenerateApiTokenSchemaData model module.
   * @module model/UsersSchemasGenerateApiTokenSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasGenerateApiTokenSchemaData</code>.
   * Data
   * @alias module:model/UsersSchemasGenerateApiTokenSchemaData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UsersSchemasGenerateApiTokenSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasGenerateApiTokenSchemaData} obj Optional instance to populate.
   * @return {module:model/UsersSchemasGenerateApiTokenSchemaData} The populated <code>UsersSchemasGenerateApiTokenSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('forceLegacy'))
        obj.forceLegacy = ApiClient.convertToType(data['forceLegacy'], 'Boolean');
    }
    return obj;
  }

  /**
   * Temporary attribute for WA: If the flag is set to True the legacy token will be generated even if the auth_tokens global switch is turned on
   * @member {Boolean} forceLegacy
   */
  exports.prototype.forceLegacy = undefined;


  return exports;

}));