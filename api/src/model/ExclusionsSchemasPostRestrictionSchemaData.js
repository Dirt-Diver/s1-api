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
    root.S1MgmtApi.ExclusionsSchemasPostRestrictionSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExclusionsSchemasPostRestrictionSchemaData model module.
   * @module model/ExclusionsSchemasPostRestrictionSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsSchemasPostRestrictionSchemaData</code>.
   * Data
   * @alias module:model/ExclusionsSchemasPostRestrictionSchemaData
   * @class
   * @param osType {module:model/ExclusionsSchemasPostRestrictionSchemaData.OsTypeEnum} OS type
   * @param type {module:model/ExclusionsSchemasPostRestrictionSchemaData.TypeEnum} Restriction type
   * @param value {Object} SHA1 of the file to add to the blocklist
   */
  var exports = function(osType, type, value) {
    this.osType = osType;
    this.type = type;
    this.value = value;
  };

  /**
   * Constructs a <code>ExclusionsSchemasPostRestrictionSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsSchemasPostRestrictionSchemaData} obj Optional instance to populate.
   * @return {module:model/ExclusionsSchemasPostRestrictionSchemaData} The populated <code>ExclusionsSchemasPostRestrictionSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('osType'))
        obj.osType = ApiClient.convertToType(data['osType'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], Object);
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * OS type
   * @member {module:model/ExclusionsSchemasPostRestrictionSchemaData.OsTypeEnum} osType
   */
  exports.prototype.osType = undefined;

  /**
   * Restriction type
   * @member {module:model/ExclusionsSchemasPostRestrictionSchemaData.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Source
   * @member {String} source
   */
  exports.prototype.source = undefined;

  /**
   * SHA1 of the file to add to the blocklist
   * @member {Object} value
   */
  exports.prototype.value = undefined;



  /**
   * Allowed values for the <code>osType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OsTypeEnum = {
    /**
     * value: "windows"
     * @const
     */
    windows: "windows",

    /**
     * value: "macos"
     * @const
     */
    macos: "macos",

    /**
     * value: "linux"
     * @const
     */
    linux: "linux",

    /**
     * value: "windows_legacy"
     * @const
     */
    windowsLegacy: "windows_legacy"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "black_hash"
     * @const
     */
    blackHash: "black_hash"
  };

  return exports;

}));
