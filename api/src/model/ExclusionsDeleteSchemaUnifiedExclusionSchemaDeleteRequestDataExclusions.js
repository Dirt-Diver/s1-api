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
    root.S1MgmtApi.ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions model module.
   * @module model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions</code>.
   * @alias module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions
   * @class
   * @param exclusionType {module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions.ExclusionTypeEnum} Exclusion type
   * @param id {String} Id
   */
  var exports = function(exclusionType, id) {
    this.exclusionType = exclusionType;
    this.id = id;
  };

  /**
   * Constructs a <code>ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions} obj Optional instance to populate.
   * @return {module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions} The populated <code>ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exclusionType'))
        obj.exclusionType = ApiClient.convertToType(data['exclusionType'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }

  /**
   * Exclusion type
   * @member {module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequestDataExclusions.ExclusionTypeEnum} exclusionType
   */
  exports.prototype.exclusionType = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;



  /**
   * Allowed values for the <code>exclusionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExclusionTypeEnum = {
    /**
     * value: "EDR"
     * @const
     */
    EDR: "EDR",

    /**
     * value: "IDR"
     * @const
     */
    IDR: "IDR"
  };

  return exports;

}));
