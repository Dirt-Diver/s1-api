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
    define(['ApiClient', 'model/ConfigOverridesPutConfigOverrideSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigOverridesPutConfigOverrideSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ConfigOverridesPutConfigOverrideSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ConfigOverridesPutConfigOverrideSchemaData);
  }
}(this, function(ApiClient, ConfigOverridesPutConfigOverrideSchemaData) {
  'use strict';

  /**
   * The ConfigOverridesPutConfigOverrideSchema model module.
   * @module model/ConfigOverridesPutConfigOverrideSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>ConfigOverridesPutConfigOverrideSchema</code>.
   * @alias module:model/ConfigOverridesPutConfigOverrideSchema
   * @class
   * @param data {module:model/ConfigOverridesPutConfigOverrideSchemaData} 
   */
  var exports = function(data) {
    this.data = data;
  };

  /**
   * Constructs a <code>ConfigOverridesPutConfigOverrideSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigOverridesPutConfigOverrideSchema} obj Optional instance to populate.
   * @return {module:model/ConfigOverridesPutConfigOverrideSchema} The populated <code>ConfigOverridesPutConfigOverrideSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = ApiClient.convertToType(data['filter'], Object);
      if (data.hasOwnProperty('data'))
        obj.data = ConfigOverridesPutConfigOverrideSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * Filter
   * @member {Object} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/ConfigOverridesPutConfigOverrideSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
