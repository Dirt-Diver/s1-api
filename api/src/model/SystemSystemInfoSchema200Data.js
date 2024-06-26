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
    root.S1MgmtApi.SystemSystemInfoSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SystemSystemInfoSchema200Data model module.
   * @module model/SystemSystemInfoSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>SystemSystemInfoSchema200Data</code>.
   * Response data
   * @alias module:model/SystemSystemInfoSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SystemSystemInfoSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemSystemInfoSchema200Data} obj Optional instance to populate.
   * @return {module:model/SystemSystemInfoSchema200Data} The populated <code>SystemSystemInfoSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('build'))
        obj.build = ApiClient.convertToType(data['build'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('release'))
        obj.release = ApiClient.convertToType(data['release'], 'String');
      if (data.hasOwnProperty('patch'))
        obj.patch = ApiClient.convertToType(data['patch'], 'String');
      if (data.hasOwnProperty('latestAgentVersion'))
        obj.latestAgentVersion = ApiClient.convertToType(data['latestAgentVersion'], 'String');
    }
    return obj;
  }

  /**
   * Build
   * @member {String} build
   */
  exports.prototype.build = undefined;

  /**
   * Version
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * Release
   * @member {String} release
   */
  exports.prototype.release = undefined;

  /**
   * Patch
   * @member {String} patch
   */
  exports.prototype.patch = undefined;

  /**
   * Latest agent version
   * @member {String} latestAgentVersion
   */
  exports.prototype.latestAgentVersion = undefined;


  return exports;

}));
