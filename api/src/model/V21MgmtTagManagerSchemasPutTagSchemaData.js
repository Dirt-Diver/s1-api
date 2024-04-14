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
    root.S1MgmtApi.V21MgmtTagManagerSchemasPutTagSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21MgmtTagManagerSchemasPutTagSchemaData model module.
   * @module model/V21MgmtTagManagerSchemasPutTagSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21MgmtTagManagerSchemasPutTagSchemaData</code>.
   * Data
   * @alias module:model/V21MgmtTagManagerSchemasPutTagSchemaData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21MgmtTagManagerSchemasPutTagSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21MgmtTagManagerSchemasPutTagSchemaData} obj Optional instance to populate.
   * @return {module:model/V21MgmtTagManagerSchemasPutTagSchemaData} The populated <code>V21MgmtTagManagerSchemasPutTagSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * Key
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Value
   * @member {String} value
   */
  exports.prototype.value = undefined;


  return exports;

}));
