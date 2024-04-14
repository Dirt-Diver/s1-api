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
    root.S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo model module.
   * @module model/V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo</code>.
   * Target process info
   * @alias module:model/V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo} obj Optional instance to populate.
   * @return {module:model/V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo} The populated <code>V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tgtFileCreatedAt'))
        obj.tgtFileCreatedAt = ApiClient.convertToType(data['tgtFileCreatedAt'], 'Date');
      if (data.hasOwnProperty('tgtProcSignedStatus'))
        obj.tgtProcSignedStatus = ApiClient.convertToType(data['tgtProcSignedStatus'], 'String');
      if (data.hasOwnProperty('tgtFilePath'))
        obj.tgtFilePath = ApiClient.convertToType(data['tgtFilePath'], 'String');
      if (data.hasOwnProperty('tgtFileHashSha256'))
        obj.tgtFileHashSha256 = ApiClient.convertToType(data['tgtFileHashSha256'], 'String');
      if (data.hasOwnProperty('tgtFileModifiedAt'))
        obj.tgtFileModifiedAt = ApiClient.convertToType(data['tgtFileModifiedAt'], 'Date');
      if (data.hasOwnProperty('tgtProcName'))
        obj.tgtProcName = ApiClient.convertToType(data['tgtProcName'], 'String');
      if (data.hasOwnProperty('tgtProcImagePath'))
        obj.tgtProcImagePath = ApiClient.convertToType(data['tgtProcImagePath'], 'String');
      if (data.hasOwnProperty('tgtFileHashSha1'))
        obj.tgtFileHashSha1 = ApiClient.convertToType(data['tgtFileHashSha1'], 'String');
      if (data.hasOwnProperty('tgtFileIsSigned'))
        obj.tgtFileIsSigned = ApiClient.convertToType(data['tgtFileIsSigned'], 'String');
      if (data.hasOwnProperty('tgtProcStorylineId'))
        obj.tgtProcStorylineId = ApiClient.convertToType(data['tgtProcStorylineId'], 'String');
      if (data.hasOwnProperty('tgtProcPid'))
        obj.tgtProcPid = ApiClient.convertToType(data['tgtProcPid'], 'String');
      if (data.hasOwnProperty('tgtProcIntegrityLevel'))
        obj.tgtProcIntegrityLevel = ApiClient.convertToType(data['tgtProcIntegrityLevel'], 'String');
      if (data.hasOwnProperty('tgtProcCmdLine'))
        obj.tgtProcCmdLine = ApiClient.convertToType(data['tgtProcCmdLine'], 'String');
      if (data.hasOwnProperty('tgtFileId'))
        obj.tgtFileId = ApiClient.convertToType(data['tgtFileId'], 'String');
      if (data.hasOwnProperty('tgtProcUid'))
        obj.tgtProcUid = ApiClient.convertToType(data['tgtProcUid'], 'String');
      if (data.hasOwnProperty('tgtProcessStartTime'))
        obj.tgtProcessStartTime = ApiClient.convertToType(data['tgtProcessStartTime'], 'Date');
      if (data.hasOwnProperty('tgtFileOldPath'))
        obj.tgtFileOldPath = ApiClient.convertToType(data['tgtFileOldPath'], 'String');
    }
    return obj;
  }

  /**
   * Date and Time of File Creation
   * @member {Date} tgtFileCreatedAt
   */
  exports.prototype.tgtFileCreatedAt = undefined;

  /**
   * Target Process Signed Status
   * @member {String} tgtProcSignedStatus
   */
  exports.prototype.tgtProcSignedStatus = undefined;

  /**
   * Path and filename
   * @member {String} tgtFilePath
   */
  exports.prototype.tgtFilePath = undefined;

  /**
   * SHA256 Signature of File
   * @member {String} tgtFileHashSha256
   */
  exports.prototype.tgtFileHashSha256 = undefined;

  /**
   * Date and time file was modified
   * @member {Date} tgtFileModifiedAt
   */
  exports.prototype.tgtFileModifiedAt = undefined;

  /**
   * Target Process Name
   * @member {String} tgtProcName
   */
  exports.prototype.tgtProcName = undefined;

  /**
   * Target Process Image path
   * @member {String} tgtProcImagePath
   */
  exports.prototype.tgtProcImagePath = undefined;

  /**
   * SHA1 Signature of File
   * @member {String} tgtFileHashSha1
   */
  exports.prototype.tgtFileHashSha1 = undefined;

  /**
   * Is file signed
   * @member {String} tgtFileIsSigned
   */
  exports.prototype.tgtFileIsSigned = undefined;

  /**
   * Target Process StoryLine ID
   * @member {String} tgtProcStorylineId
   */
  exports.prototype.tgtProcStorylineId = undefined;

  /**
   * Target Process ID (PID)
   * @member {String} tgtProcPid
   */
  exports.prototype.tgtProcPid = undefined;

  /**
   * Integrity level of target process 
   * @member {module:model/V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo.TgtProcIntegrityLevelEnum} tgtProcIntegrityLevel
   */
  exports.prototype.tgtProcIntegrityLevel = undefined;

  /**
   * Target Process Command Line
   * @member {String} tgtProcCmdLine
   */
  exports.prototype.tgtProcCmdLine = undefined;

  /**
   * Unique ID of file
   * @member {String} tgtFileId
   */
  exports.prototype.tgtFileId = undefined;

  /**
   * Target Process Unique ID
   * @member {String} tgtProcUid
   */
  exports.prototype.tgtProcUid = undefined;

  /**
   * Target Process Start Time
   * @member {Date} tgtProcessStartTime
   */
  exports.prototype.tgtProcessStartTime = undefined;

  /**
   * Old path before 'Rename'
   * @member {String} tgtFileOldPath
   */
  exports.prototype.tgtFileOldPath = undefined;



  /**
   * Allowed values for the <code>tgtProcIntegrityLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TgtProcIntegrityLevelEnum = {
    /**
     * value: "unknown"
     * @const
     */
    unknown: "unknown",

    /**
     * value: "untrusted"
     * @const
     */
    untrusted: "untrusted",

    /**
     * value: "low"
     * @const
     */
    low: "low",

    /**
     * value: "medium"
     * @const
     */
    medium: "medium",

    /**
     * value: "high"
     * @const
     */
    high: "high",

    /**
     * value: "system"
     * @const
     */
    system: "system"
  };

  return exports;

}));