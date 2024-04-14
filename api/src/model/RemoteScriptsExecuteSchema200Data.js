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
    root.S1MgmtApi.RemoteScriptsExecuteSchema200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RemoteScriptsExecuteSchema200Data model module.
   * @module model/RemoteScriptsExecuteSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>RemoteScriptsExecuteSchema200Data</code>.
   * Response data
   * @alias module:model/RemoteScriptsExecuteSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RemoteScriptsExecuteSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoteScriptsExecuteSchema200Data} obj Optional instance to populate.
   * @return {module:model/RemoteScriptsExecuteSchema200Data} The populated <code>RemoteScriptsExecuteSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('parentTaskId'))
        obj.parentTaskId = ApiClient.convertToType(data['parentTaskId'], 'String');
      if (data.hasOwnProperty('affected'))
        obj.affected = ApiClient.convertToType(data['affected'], 'Number');
      if (data.hasOwnProperty('pendingExecutionId'))
        obj.pendingExecutionId = ApiClient.convertToType(data['pendingExecutionId'], 'String');
      if (data.hasOwnProperty('pending'))
        obj.pending = ApiClient.convertToType(data['pending'], 'Boolean');
    }
    return obj;
  }

  /**
   * The parent task id of the script execution task, null in case of pending execution
   * @member {String} parentTaskId
   */
  exports.prototype.parentTaskId = undefined;

  /**
   * Number of entities affected by the requested operation
   * @member {Number} affected
   */
  exports.prototype.affected = undefined;

  /**
   * ID of created pending execution, present only if pending flag is true
   * @member {String} pendingExecutionId
   */
  exports.prototype.pendingExecutionId = undefined;

  /**
   * Flag indicating if requested script execution requires approval and is created as pending execution
   * @member {Boolean} pending
   */
  exports.prototype.pending = undefined;


  return exports;

}));