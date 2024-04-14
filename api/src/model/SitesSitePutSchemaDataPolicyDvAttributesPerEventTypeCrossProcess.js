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
    root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess model module.
   * @module model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess</code>.
   * Cross process event
   * @alias module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess} The populated <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dvEventTypeCrossProcessOpenProcess'))
        obj.dvEventTypeCrossProcessOpenProcess = ApiClient.convertToType(data['dvEventTypeCrossProcessOpenProcess'], 'Boolean');
      if (data.hasOwnProperty('dvEventTypeCrossProcessRemoteThread'))
        obj.dvEventTypeCrossProcessRemoteThread = ApiClient.convertToType(data['dvEventTypeCrossProcessRemoteThread'], 'Boolean');
      if (data.hasOwnProperty('dvEventTypeCrossProcessDuplicateProcess'))
        obj.dvEventTypeCrossProcessDuplicateProcess = ApiClient.convertToType(data['dvEventTypeCrossProcessDuplicateProcess'], 'Boolean');
      if (data.hasOwnProperty('dvEventTypeCrossProcessDuplicateThread'))
        obj.dvEventTypeCrossProcessDuplicateThread = ApiClient.convertToType(data['dvEventTypeCrossProcessDuplicateThread'], 'Boolean');
    }
    return obj;
  }

  /**
   * Open Process Event Type
   * @member {Boolean} dvEventTypeCrossProcessOpenProcess
   */
  exports.prototype.dvEventTypeCrossProcessOpenProcess = undefined;

  /**
   * Remote Thread Event Type
   * @member {Boolean} dvEventTypeCrossProcessRemoteThread
   */
  exports.prototype.dvEventTypeCrossProcessRemoteThread = undefined;

  /**
   * Duplicate Process Event Type
   * @member {Boolean} dvEventTypeCrossProcessDuplicateProcess
   */
  exports.prototype.dvEventTypeCrossProcessDuplicateProcess = undefined;

  /**
   * Duplicate Thread Event Type
   * @member {Boolean} dvEventTypeCrossProcessDuplicateThread
   */
  exports.prototype.dvEventTypeCrossProcessDuplicateThread = undefined;


  return exports;

}));