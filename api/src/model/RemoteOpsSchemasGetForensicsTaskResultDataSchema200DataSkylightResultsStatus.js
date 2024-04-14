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
    root.S1MgmtApi.RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus model module.
   * @module model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus
   * @version 2.1
   */

  /**
   * Constructs a new <code>RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus</code>.
   * Status of Skylight results
   * @alias module:model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus
   * @class
   * @param hasFailures {Boolean} Indicates if there were failures during uploading data to Skylight
   * @param isEmpty {Boolean} Indicates if the collection contains no data store in Skylight
   */
  var exports = function(hasFailures, isEmpty) {
    this.hasFailures = hasFailures;
    this.isEmpty = isEmpty;
  };

  /**
   * Constructs a <code>RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus} obj Optional instance to populate.
   * @return {module:model/RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus} The populated <code>RemoteOpsSchemasGetForensicsTaskResultDataSchema200DataSkylightResultsStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
      if (data.hasOwnProperty('hasFailures'))
        obj.hasFailures = ApiClient.convertToType(data['hasFailures'], 'Boolean');
      if (data.hasOwnProperty('isEmpty'))
        obj.isEmpty = ApiClient.convertToType(data['isEmpty'], 'Boolean');
    }
    return obj;
  }

  /**
   * Last error message if there were failures during upload
   * @member {String} errorMessage
   */
  exports.prototype.errorMessage = undefined;

  /**
   * Indicates if there were failures during uploading data to Skylight
   * @member {Boolean} hasFailures
   */
  exports.prototype.hasFailures = undefined;

  /**
   * Indicates if the collection contains no data store in Skylight
   * @member {Boolean} isEmpty
   */
  exports.prototype.isEmpty = undefined;


  return exports;

}));