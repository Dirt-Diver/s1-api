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
    define(['ApiClient', 'model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope);
  }
}(this, function(ApiClient, V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope) {
  'use strict';

  /**
   * The V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData model module.
   * @module model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData</code>.
   * Execution data
   * @alias module:model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData
   * @class
   * @param taskDescription {String} Task description
   * @param scriptId {String} Script id
   * @param outputDestination {module:model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData.OutputDestinationEnum} Output destination
   */
  var exports = function(taskDescription, scriptId, outputDestination) {
    this.taskDescription = taskDescription;
    this.scriptId = scriptId;
    this.outputDestination = outputDestination;
  };

  /**
   * Constructs a <code>V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData} obj Optional instance to populate.
   * @return {module:model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData} The populated <code>V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('destinationProfileKeyword'))
        obj.destinationProfileKeyword = ApiClient.convertToType(data['destinationProfileKeyword'], 'String');
      if (data.hasOwnProperty('taskDescription'))
        obj.taskDescription = ApiClient.convertToType(data['taskDescription'], 'String');
      if (data.hasOwnProperty('singularityxdrKeyword'))
        obj.singularityxdrKeyword = ApiClient.convertToType(data['singularityxdrKeyword'], 'String');
      if (data.hasOwnProperty('outputDirectory'))
        obj.outputDirectory = ApiClient.convertToType(data['outputDirectory'], 'String');
      if (data.hasOwnProperty('requiresApproval'))
        obj.requiresApproval = ApiClient.convertToType(data['requiresApproval'], 'Boolean');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('passwordFromScope'))
        obj.passwordFromScope = V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope.constructFromObject(data['passwordFromScope']);
      if (data.hasOwnProperty('inputParams'))
        obj.inputParams = ApiClient.convertToType(data['inputParams'], 'String');
      if (data.hasOwnProperty('destinationProfileId'))
        obj.destinationProfileId = ApiClient.convertToType(data['destinationProfileId'], 'String');
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
      if (data.hasOwnProperty('outputFilePaths'))
        obj.outputFilePaths = ApiClient.convertToType(data['outputFilePaths'], ['String']);
      if (data.hasOwnProperty('scriptRuntimeTimeoutSeconds'))
        obj.scriptRuntimeTimeoutSeconds = ApiClient.convertToType(data['scriptRuntimeTimeoutSeconds'], 'Number');
      if (data.hasOwnProperty('scriptId'))
        obj.scriptId = ApiClient.convertToType(data['scriptId'], 'String');
      if (data.hasOwnProperty('outputDestination'))
        obj.outputDestination = ApiClient.convertToType(data['outputDestination'], 'String');
      if (data.hasOwnProperty('singularityxdrUrl'))
        obj.singularityxdrUrl = ApiClient.convertToType(data['singularityxdrUrl'], 'String');
    }
    return obj;
  }

  /**
   * Destination profile keyword
   * @member {String} destinationProfileKeyword
   */
  exports.prototype.destinationProfileKeyword = undefined;

  /**
   * Task description
   * @member {String} taskDescription
   */
  exports.prototype.taskDescription = undefined;

  /**
   * Singularityxdr keyword
   * @member {String} singularityxdrKeyword
   */
  exports.prototype.singularityxdrKeyword = undefined;

  /**
   * Output directory
   * @member {String} outputDirectory
   */
  exports.prototype.outputDirectory = undefined;

  /**
   * If set to true, execution will require approval
   * @member {Boolean} requiresApproval
   */
  exports.prototype.requiresApproval = undefined;

  /**
   * Password
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * @member {module:model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope} passwordFromScope
   */
  exports.prototype.passwordFromScope = undefined;

  /**
   * Input params
   * @member {String} inputParams
   */
  exports.prototype.inputParams = undefined;

  /**
   * Id of destination profile to use
   * @member {String} destinationProfileId
   */
  exports.prototype.destinationProfileId = undefined;

  /**
   * Api key
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;

  /**
   * Output file paths
   * @member {Array.<String>} outputFilePaths
   */
  exports.prototype.outputFilePaths = undefined;

  /**
   * Script runtime timout in seconds for current execution
   * @member {Number} scriptRuntimeTimeoutSeconds
   */
  exports.prototype.scriptRuntimeTimeoutSeconds = undefined;

  /**
   * Script id
   * @member {String} scriptId
   */
  exports.prototype.scriptId = undefined;

  /**
   * Output destination
   * @member {module:model/V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData.OutputDestinationEnum} outputDestination
   */
  exports.prototype.outputDestination = undefined;

  /**
   * Singularityxdr url
   * @member {String} singularityxdrUrl
   */
  exports.prototype.singularityxdrUrl = undefined;



  /**
   * Allowed values for the <code>outputDestination</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OutputDestinationEnum = {
    /**
     * value: "None"
     * @const
     */
    none: "None",

    /**
     * value: "Local"
     * @const
     */
    local: "Local",

    /**
     * value: "SentinelCloud"
     * @const
     */
    sentinelCloud: "SentinelCloud",

    /**
     * value: "SingularityXDR"
     * @const
     */
    singularityXDR: "SingularityXDR"
  };

  return exports;

}));
