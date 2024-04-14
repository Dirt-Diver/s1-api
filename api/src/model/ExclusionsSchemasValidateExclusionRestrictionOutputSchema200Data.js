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
    root.S1MgmtApi.ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data model module.
   * @module model/ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data</code>.
   * Response data
   * @alias module:model/ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data} obj Optional instance to populate.
   * @return {module:model/ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data} The populated <code>ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * Recommendation for the exclusion/blocklist item
   * @member {module:model/ExclusionsSchemasValidateExclusionRestrictionOutputSchema200Data.StatusEnum} status
   */
  exports.prototype.status = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Not recommended"
     * @const
     */
    notRecommended: "Not recommended",

    /**
     * value: "Not allowed"
     * @const
     */
    notAllowed: "Not allowed",

    /**
     * value: "NONE"
     * @const
     */
    NONE: "NONE"
  };

  return exports;

}));
