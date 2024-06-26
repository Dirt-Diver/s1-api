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
    root.S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200DataAgentResults = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21DataExporterSchemaSkylightUploadResults200DataAgentResults model module.
   * @module model/V21DataExporterSchemaSkylightUploadResults200DataAgentResults
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21DataExporterSchemaSkylightUploadResults200DataAgentResults</code>.
   * Agent results
   * @alias module:model/V21DataExporterSchemaSkylightUploadResults200DataAgentResults
   * @class
   * @param isEmpty {Boolean} Indicates if not results returned
   * @param url {String} Url to relevant data source
   * @param hasFailures {Boolean} Indicates if not failures has occurred during upload returned
   */
  var exports = function(isEmpty, url, hasFailures) {
    this.isEmpty = isEmpty;
    this.url = url;
    this.hasFailures = hasFailures;
  };

  /**
   * Constructs a <code>V21DataExporterSchemaSkylightUploadResults200DataAgentResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21DataExporterSchemaSkylightUploadResults200DataAgentResults} obj Optional instance to populate.
   * @return {module:model/V21DataExporterSchemaSkylightUploadResults200DataAgentResults} The populated <code>V21DataExporterSchemaSkylightUploadResults200DataAgentResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isEmpty'))
        obj.isEmpty = ApiClient.convertToType(data['isEmpty'], 'Boolean');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
      if (data.hasOwnProperty('hasFailures'))
        obj.hasFailures = ApiClient.convertToType(data['hasFailures'], 'Boolean');
    }
    return obj;
  }

  /**
   * Indicates if not results returned
   * @member {Boolean} isEmpty
   */
  exports.prototype.isEmpty = undefined;

  /**
   * Url to relevant data source
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Last error message
   * @member {String} errorMessage
   */
  exports.prototype.errorMessage = undefined;

  /**
   * Indicates if not failures has occurred during upload returned
   * @member {Boolean} hasFailures
   */
  exports.prototype.hasFailures = undefined;


  return exports;

}));
