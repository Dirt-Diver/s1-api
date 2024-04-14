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
    root.S1MgmtApi.V21MgmtTagManagerSchemasPostTagSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21MgmtTagManagerSchemasPostTagSchemaData model module.
   * @module model/V21MgmtTagManagerSchemasPostTagSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21MgmtTagManagerSchemasPostTagSchemaData</code>.
   * Data
   * @alias module:model/V21MgmtTagManagerSchemasPostTagSchemaData
   * @class
   * @param key {String} Key
   * @param value {String} Value
   * @param type {String} Type
   */
  var exports = function(key, value, type) {
    this.key = key;
    this.value = value;
    this.type = type;
  };

  /**
   * Constructs a <code>V21MgmtTagManagerSchemasPostTagSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21MgmtTagManagerSchemasPostTagSchemaData} obj Optional instance to populate.
   * @return {module:model/V21MgmtTagManagerSchemasPostTagSchemaData} The populated <code>V21MgmtTagManagerSchemasPostTagSchemaData</code> instance.
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
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
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
   * @default ''
   */
  exports.prototype.description = '';

  /**
   * Value
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * Type
   * @member {String} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
