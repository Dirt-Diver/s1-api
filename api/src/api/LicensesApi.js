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
    define(['ApiClient', 'model/AffectedResultsSchema200', 'model/LicensesSchemasSiteBulkModulesSchema', 'model/NoDataSchema400', 'model/NoDataSchema401'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AffectedResultsSchema200'), require('../model/LicensesSchemasSiteBulkModulesSchema'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.LicensesApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AffectedResultsSchema200, root.S1MgmtApi.LicensesSchemasSiteBulkModulesSchema, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401);
  }
}(this, function(ApiClient, AffectedResultsSchema200, LicensesSchemasSiteBulkModulesSchema, NoDataSchema400, NoDataSchema401) {
  'use strict';

  /**
   * Licenses service.
   * @module api/LicensesApi
   * @version 2.1
   */

  /**
   * Constructs a new LicensesApi. 
   * @alias module:api/LicensesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiLicensesUpdateSitesModulesPut operation.
     * @callback module:api/LicensesApi~webApiLicensesUpdateSitesModulesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update sites add-ons
     * Change the add-ons of the sites by a given filter
     * @param {Object} opts Optional parameters
     * @param {module:model/LicensesSchemasSiteBulkModulesSchema} opts.body 
     * @param {module:api/LicensesApi~webApiLicensesUpdateSitesModulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiLicensesUpdateSitesModulesPut = function(opts, callback) {
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
      var returnType = AffectedResultsSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/licenses/update-sites-modules', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));