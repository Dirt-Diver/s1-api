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
    root.S1MgmtApi.UsersSchemasResetTfaSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsersSchemasResetTfaSchemaData model module.
   * @module model/UsersSchemasResetTfaSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>UsersSchemasResetTfaSchemaData</code>.
   * Data
   * @alias module:model/UsersSchemasResetTfaSchemaData
   * @class
   * @param ids {Array.<String>} A list of user ids
   */
  var exports = function(ids) {
    this.ids = ids;
  };

  /**
   * Constructs a <code>UsersSchemasResetTfaSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersSchemasResetTfaSchemaData} obj Optional instance to populate.
   * @return {module:model/UsersSchemasResetTfaSchemaData} The populated <code>UsersSchemasResetTfaSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (data.hasOwnProperty('enroll'))
        obj.enroll = ApiClient.convertToType(data['enroll'], 'Boolean');
    }
    return obj;
  }

  /**
   * A list of user ids
   * @member {Array.<String>} ids
   */
  exports.prototype.ids = undefined;

  /**
   * [DEPRECATED] Not used, deprecated
   * @member {Boolean} enroll
   */
  exports.prototype.enroll = undefined;


  return exports;

}));
