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
    root.S1MgmtApi.DownloadMultipleScriptsResultsSchema200DataDataErrors = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DownloadMultipleScriptsResultsSchema200DataDataErrors model module.
   * @module model/DownloadMultipleScriptsResultsSchema200DataDataErrors
   * @version 2.1
   */

  /**
   * Constructs a new <code>DownloadMultipleScriptsResultsSchema200DataDataErrors</code>.
   * @alias module:model/DownloadMultipleScriptsResultsSchema200DataDataErrors
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DownloadMultipleScriptsResultsSchema200DataDataErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadMultipleScriptsResultsSchema200DataDataErrors} obj Optional instance to populate.
   * @return {module:model/DownloadMultipleScriptsResultsSchema200DataDataErrors} The populated <code>DownloadMultipleScriptsResultsSchema200DataDataErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errorString'))
        obj.errorString = ApiClient.convertToType(data['errorString'], 'String');
      if (data.hasOwnProperty('taskId'))
        obj.taskId = ApiClient.convertToType(data['taskId'], 'String');
    }
    return obj;
  }

  /**
   * the error string for failing to fetch a download link
   * @member {String} errorString
   */
  exports.prototype.errorString = undefined;

  /**
   * the failed to fetch file task id
   * @member {String} taskId
   */
  exports.prototype.taskId = undefined;


  return exports;

}));
