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
    root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile model module.
   * @module model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile</code>.
   * File event
   * @alias module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile} The populated <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dvEventTypeFileModification'))
        obj.dvEventTypeFileModification = ApiClient.convertToType(data['dvEventTypeFileModification'], 'Boolean');
      if (data.hasOwnProperty('dvEventTypeFileCreation'))
        obj.dvEventTypeFileCreation = ApiClient.convertToType(data['dvEventTypeFileCreation'], 'Boolean');
      if (data.hasOwnProperty('dvEventTypeFileRename'))
        obj.dvEventTypeFileRename = ApiClient.convertToType(data['dvEventTypeFileRename'], 'Boolean');
      if (data.hasOwnProperty('dvEventTypeFileDeletion'))
        obj.dvEventTypeFileDeletion = ApiClient.convertToType(data['dvEventTypeFileDeletion'], 'Boolean');
      if (data.hasOwnProperty('fullDiskScan'))
        obj.fullDiskScan = ApiClient.convertToType(data['fullDiskScan'], 'Boolean');
    }
    return obj;
  }

  /**
   * File Modification Event Type
   * @member {Boolean} dvEventTypeFileModification
   */
  exports.prototype.dvEventTypeFileModification = undefined;

  /**
   * File Creation Event Type
   * @member {Boolean} dvEventTypeFileCreation
   */
  exports.prototype.dvEventTypeFileCreation = undefined;

  /**
   * File Rename Event Type
   * @member {Boolean} dvEventTypeFileRename
   */
  exports.prototype.dvEventTypeFileRename = undefined;

  /**
   * File Deletion Event Type
   * @member {Boolean} dvEventTypeFileDeletion
   */
  exports.prototype.dvEventTypeFileDeletion = undefined;

  /**
   * File Scan Event Type
   * @member {Boolean} fullDiskScan
   */
  exports.prototype.fullDiskScan = undefined;


  return exports;

}));