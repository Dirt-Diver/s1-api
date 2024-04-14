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
    define(['ApiClient', 'model/V21DataExporterSchemaSkylightUploadResults200DataAgentResults', 'model/V21DataExporterSchemaSkylightUploadResults200DataTaskResults', 'model/V21DataExporterSchemaSkylightUploadResults200DataThreatResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21DataExporterSchemaSkylightUploadResults200DataAgentResults'), require('./V21DataExporterSchemaSkylightUploadResults200DataTaskResults'), require('./V21DataExporterSchemaSkylightUploadResults200DataThreatResults'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200DataAgentResults, root.S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200DataTaskResults, root.S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200DataThreatResults);
  }
}(this, function(ApiClient, V21DataExporterSchemaSkylightUploadResults200DataAgentResults, V21DataExporterSchemaSkylightUploadResults200DataTaskResults, V21DataExporterSchemaSkylightUploadResults200DataThreatResults) {
  'use strict';

  /**
   * The V21DataExporterSchemaSkylightUploadResults200Data model module.
   * @module model/V21DataExporterSchemaSkylightUploadResults200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21DataExporterSchemaSkylightUploadResults200Data</code>.
   * Response data
   * @alias module:model/V21DataExporterSchemaSkylightUploadResults200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21DataExporterSchemaSkylightUploadResults200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21DataExporterSchemaSkylightUploadResults200Data} obj Optional instance to populate.
   * @return {module:model/V21DataExporterSchemaSkylightUploadResults200Data} The populated <code>V21DataExporterSchemaSkylightUploadResults200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('agentResults'))
        obj.agentResults = V21DataExporterSchemaSkylightUploadResults200DataAgentResults.constructFromObject(data['agentResults']);
      if (data.hasOwnProperty('taskResults'))
        obj.taskResults = V21DataExporterSchemaSkylightUploadResults200DataTaskResults.constructFromObject(data['taskResults']);
      if (data.hasOwnProperty('threatResults'))
        obj.threatResults = V21DataExporterSchemaSkylightUploadResults200DataThreatResults.constructFromObject(data['threatResults']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21DataExporterSchemaSkylightUploadResults200DataAgentResults} agentResults
   */
  exports.prototype.agentResults = undefined;

  /**
   * @member {module:model/V21DataExporterSchemaSkylightUploadResults200DataTaskResults} taskResults
   */
  exports.prototype.taskResults = undefined;

  /**
   * @member {module:model/V21DataExporterSchemaSkylightUploadResults200DataThreatResults} threatResults
   */
  exports.prototype.threatResults = undefined;


  return exports;

}));
