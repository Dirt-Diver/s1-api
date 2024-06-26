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
    define(['ApiClient', 'model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200', 'model/ExclusionsPostSchemaPostUnifiedExclusionSchema', 'model/ExclusionsValidationSchemaValidateExclusionOutputSchema200', 'model/ExclusionsValidationSchemaValidateExclusionSchema', 'model/NoDataSchema400', 'model/NoDataSchema401'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200'), require('../model/ExclusionsPostSchemaPostUnifiedExclusionSchema'), require('../model/ExclusionsValidationSchemaValidateExclusionOutputSchema200'), require('../model/ExclusionsValidationSchemaValidateExclusionSchema'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.CreateExclusionApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ExclusionsGetSchemaUnifiedExclusionSchemaMany200, root.S1MgmtApi.ExclusionsPostSchemaPostUnifiedExclusionSchema, root.S1MgmtApi.ExclusionsValidationSchemaValidateExclusionOutputSchema200, root.S1MgmtApi.ExclusionsValidationSchemaValidateExclusionSchema, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401);
  }
}(this, function(ApiClient, ExclusionsGetSchemaUnifiedExclusionSchemaMany200, ExclusionsPostSchemaPostUnifiedExclusionSchema, ExclusionsValidationSchemaValidateExclusionOutputSchema200, ExclusionsValidationSchemaValidateExclusionSchema, NoDataSchema400, NoDataSchema401) {
  'use strict';

  /**
   * CreateExclusion service.
   * @module api/CreateExclusionApi
   * @version 2.1
   */

  /**
   * Constructs a new CreateExclusionApi. 
   * @alias module:api/CreateExclusionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiUnifiedExclusionsPost operation.
     * @callback module:api/CreateExclusionApi~webApiUnifiedExclusionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Unified Exclusion
     * Create Exclusions to make your Agents suppress alerts and mitigation for items that you consider to be benign or which you require for interoperability.<br>IMPORTANT! Every Exclusion is a possible security hole. Do not create Exclusions unless you are sure this hash, path, certificate signer, file type, or browser is always benign.<br>Of course, if you can make the Exclusion by its hash or path, that is much more secure than excluding all detections of a specific signer, file type, or browser. We do not recommend the last types for Exclusions on production endpoints. These Exclusions might be helpful in a lab or pentester group. When you create an Exclusion, make sure you set the filter to the smallest possible scope. For example, if you can exclude security for this item on a group, do not enter values for siteIds or accountIds.<br>We recommend that you read \"Not Recommended Exclusions: https://support.sentinelone.com/hc/en-us/articles/360007532894<br> and Best Practices for Exclusions: https://support.sentinelone.com/hc/en-us/articles/360008709014
     * @param {Object} opts Optional parameters
     * @param {module:model/ExclusionsPostSchemaPostUnifiedExclusionSchema} opts.body 
     * @param {module:api/CreateExclusionApi~webApiUnifiedExclusionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200}
     */
    this.webApiUnifiedExclusionsPost = function(opts, callback) {
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
      var returnType = ExclusionsGetSchemaUnifiedExclusionSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/unified-exclusions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiUnifiedExclusionsValidatePost operation.
     * @callback module:api/CreateExclusionApi~webApiUnifiedExclusionsValidatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExclusionsValidationSchemaValidateExclusionOutputSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Exclusion Item
     * Check if an exclusion is on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\". This API returns one of the following statuses:<br> * Not Recommended: This item is not recommended by SentinelOne because it decreases security. For example, If you accidentally exclude a path that is too broad, malware can enter your environment.<br>* Not Allowed: This exclusion can harm the product and lead to unexpected functionality. From version North Pole SP3 you are prevented from creating Not Allowed exclusions.* None: This item is not on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\".<br>Additionally, the API can return an optional message with a detailing validation error.
     * @param {Object} opts Optional parameters
     * @param {module:model/ExclusionsValidationSchemaValidateExclusionSchema} opts.body 
     * @param {module:api/CreateExclusionApi~webApiUnifiedExclusionsValidatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExclusionsValidationSchemaValidateExclusionOutputSchema200}
     */
    this.webApiUnifiedExclusionsValidatePost = function(opts, callback) {
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
      var returnType = ExclusionsValidationSchemaValidateExclusionOutputSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/unified-exclusions/validate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
