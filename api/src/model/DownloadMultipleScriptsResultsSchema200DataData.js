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
    define(['ApiClient', 'model/DownloadMultipleScriptsResultsSchema200DataDataDownloadLinks', 'model/DownloadMultipleScriptsResultsSchema200DataDataErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DownloadMultipleScriptsResultsSchema200DataDataDownloadLinks'), require('./DownloadMultipleScriptsResultsSchema200DataDataErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.DownloadMultipleScriptsResultsSchema200DataData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.DownloadMultipleScriptsResultsSchema200DataDataDownloadLinks, root.S1MgmtApi.DownloadMultipleScriptsResultsSchema200DataDataErrors);
  }
}(this, function(ApiClient, DownloadMultipleScriptsResultsSchema200DataDataDownloadLinks, DownloadMultipleScriptsResultsSchema200DataDataErrors) {
  'use strict';

  /**
   * The DownloadMultipleScriptsResultsSchema200DataData model module.
   * @module model/DownloadMultipleScriptsResultsSchema200DataData
   * @version 2.1
   */

  /**
   * Constructs a new <code>DownloadMultipleScriptsResultsSchema200DataData</code>.
   * Data
   * @alias module:model/DownloadMultipleScriptsResultsSchema200DataData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DownloadMultipleScriptsResultsSchema200DataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadMultipleScriptsResultsSchema200DataData} obj Optional instance to populate.
   * @return {module:model/DownloadMultipleScriptsResultsSchema200DataData} The populated <code>DownloadMultipleScriptsResultsSchema200DataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [DownloadMultipleScriptsResultsSchema200DataDataErrors]);
      if (data.hasOwnProperty('downloadLinks'))
        obj.downloadLinks = ApiClient.convertToType(data['downloadLinks'], [DownloadMultipleScriptsResultsSchema200DataDataDownloadLinks]);
    }
    return obj;
  }

  /**
   * Task id's and detailed errors for tasks which a download link couldn't be fetched
   * @member {Array.<module:model/DownloadMultipleScriptsResultsSchema200DataDataErrors>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * List of download links
   * @member {Array.<module:model/DownloadMultipleScriptsResultsSchema200DataDataDownloadLinks>} downloadLinks
   */
  exports.prototype.downloadLinks = undefined;


  return exports;

}));