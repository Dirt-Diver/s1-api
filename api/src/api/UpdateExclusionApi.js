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
    define(['ApiClient', 'model/ExclusionsGetSchemaUnifiedExclusionSchema200', 'model/ExclusionsPutSchemaPutUnifiedExclusionSchema', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema404'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExclusionsGetSchemaUnifiedExclusionSchema200'), require('../model/ExclusionsPutSchemaPutUnifiedExclusionSchema'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema404'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.UpdateExclusionApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ExclusionsGetSchemaUnifiedExclusionSchema200, root.S1MgmtApi.ExclusionsPutSchemaPutUnifiedExclusionSchema, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema404);
  }
}(this, function(ApiClient, ExclusionsGetSchemaUnifiedExclusionSchema200, ExclusionsPutSchemaPutUnifiedExclusionSchema, NoDataSchema400, NoDataSchema401, NoDataSchema404) {
  'use strict';

  /**
   * UpdateExclusion service.
   * @module api/UpdateExclusionApi
   * @version 2.1
   */

  /**
   * Constructs a new UpdateExclusionApi. 
   * @alias module:api/UpdateExclusionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiUnifiedExclusionsPut operation.
     * @callback module:api/UpdateExclusionApi~webApiUnifiedExclusionsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExclusionsGetSchemaUnifiedExclusionSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Exclusions
     * Change the properties of an Exclusion through the data fields. To get the original data, run \"exclusions\" with a filter to give the item you want.
     * @param {Object} opts Optional parameters
     * @param {module:model/ExclusionsPutSchemaPutUnifiedExclusionSchema} opts.body 
     * @param {module:api/UpdateExclusionApi~webApiUnifiedExclusionsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExclusionsGetSchemaUnifiedExclusionSchema200}
     */
    this.webApiUnifiedExclusionsPut = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ExclusionsGetSchemaUnifiedExclusionSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/unified-exclusions', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));