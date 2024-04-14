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
    root.S1MgmtApi.SitesSitePutSchemaDataPolicyRemoteScriptOrchestration = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataPolicyRemoteScriptOrchestration model module.
   * @module model/SitesSitePutSchemaDataPolicyRemoteScriptOrchestration
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataPolicyRemoteScriptOrchestration</code>.
   * Remote script orchestration upload limits configuration
   * @alias module:model/SitesSitePutSchemaDataPolicyRemoteScriptOrchestration
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataPolicyRemoteScriptOrchestration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataPolicyRemoteScriptOrchestration} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataPolicyRemoteScriptOrchestration} The populated <code>SitesSitePutSchemaDataPolicyRemoteScriptOrchestration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alwaysUploadStreamToCloud'))
        obj.alwaysUploadStreamToCloud = ApiClient.convertToType(data['alwaysUploadStreamToCloud'], 'Boolean');
      if (data.hasOwnProperty('maxLocalPackageDiskUsageLimit'))
        obj.maxLocalPackageDiskUsageLimit = ApiClient.convertToType(data['maxLocalPackageDiskUsageLimit'], 'Number');
      if (data.hasOwnProperty('maxDailyFileUploadLimit'))
        obj.maxDailyFileUploadLimit = ApiClient.convertToType(data['maxDailyFileUploadLimit'], 'Number');
      if (data.hasOwnProperty('maxLocalPackageDiskUsage'))
        obj.maxLocalPackageDiskUsage = ApiClient.convertToType(data['maxLocalPackageDiskUsage'], 'Number');
      if (data.hasOwnProperty('maxDailyFileDownloadLimit'))
        obj.maxDailyFileDownloadLimit = ApiClient.convertToType(data['maxDailyFileDownloadLimit'], 'Number');
      if (data.hasOwnProperty('maxFileSizeLimit'))
        obj.maxFileSizeLimit = ApiClient.convertToType(data['maxFileSizeLimit'], 'Number');
      if (data.hasOwnProperty('maxDailyFileDownload'))
        obj.maxDailyFileDownload = ApiClient.convertToType(data['maxDailyFileDownload'], 'Number');
      if (data.hasOwnProperty('maxFileSize'))
        obj.maxFileSize = ApiClient.convertToType(data['maxFileSize'], 'Number');
      if (data.hasOwnProperty('maxDailyFileUpload'))
        obj.maxDailyFileUpload = ApiClient.convertToType(data['maxDailyFileUpload'], 'Number');
    }
    return obj;
  }

  /**
   * Always upload streams to cloud
   * @member {Boolean} alwaysUploadStreamToCloud
   */
  exports.prototype.alwaysUploadStreamToCloud = undefined;

  /**
   * Limit for the maximum local disk usage (MB) for packages
   * @member {Number} maxLocalPackageDiskUsageLimit
   */
  exports.prototype.maxLocalPackageDiskUsageLimit = undefined;

  /**
   * Limit for the maximum size (MB) to upload daily
   * @member {Number} maxDailyFileUploadLimit
   */
  exports.prototype.maxDailyFileUploadLimit = undefined;

  /**
   * Maximum local disk usage (MB) for packages
   * @member {Number} maxLocalPackageDiskUsage
   */
  exports.prototype.maxLocalPackageDiskUsage = undefined;

  /**
   * Limit for the maximum size (MB) to download daily
   * @member {Number} maxDailyFileDownloadLimit
   */
  exports.prototype.maxDailyFileDownloadLimit = undefined;

  /**
   * Limit for the maximum file size (MB) to upload
   * @member {Number} maxFileSizeLimit
   */
  exports.prototype.maxFileSizeLimit = undefined;

  /**
   * Maximum size (MB) to download daily
   * @member {Number} maxDailyFileDownload
   */
  exports.prototype.maxDailyFileDownload = undefined;

  /**
   * Maximum size in bytes for single file
   * @member {Number} maxFileSize
   */
  exports.prototype.maxFileSize = undefined;

  /**
   * Maximum size (MB) to upload daily
   * @member {Number} maxDailyFileUpload
   */
  exports.prototype.maxDailyFileUpload = undefined;


  return exports;

}));
