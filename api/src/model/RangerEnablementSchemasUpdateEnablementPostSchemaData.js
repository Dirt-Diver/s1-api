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
    root.S1MgmtApi.RangerEnablementSchemasUpdateEnablementPostSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RangerEnablementSchemasUpdateEnablementPostSchemaData model module.
   * @module model/RangerEnablementSchemasUpdateEnablementPostSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerEnablementSchemasUpdateEnablementPostSchemaData</code>.
   * Data
   * @alias module:model/RangerEnablementSchemasUpdateEnablementPostSchemaData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RangerEnablementSchemasUpdateEnablementPostSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerEnablementSchemasUpdateEnablementPostSchemaData} obj Optional instance to populate.
   * @return {module:model/RangerEnablementSchemasUpdateEnablementPostSchemaData} The populated <code>RangerEnablementSchemasUpdateEnablementPostSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enable'))
        obj.enable = ApiClient.convertToType(data['enable'], 'Boolean');
    }
    return obj;
  }

  /**
   * enable: true/false
   * @member {Boolean} enable
   */
  exports.prototype.enable = undefined;


  return exports;

}));
