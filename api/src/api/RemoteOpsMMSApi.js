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
    define(['ApiClient', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema403', 'model/NoDataSchema404', 'model/V21DataExporterSchemaDeleteDestinationProfilesRequestSchema', 'model/V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200', 'model/V21DataExporterSchemaGetDestinationProfileResultSchema200', 'model/V21DataExporterSchemaGetDestinationProfileResultSchemaMany200', 'model/V21DataExporterSchemaPostDestinationProfileRequestSchema', 'model/V21DataExporterSchemaProfileIdResponseSchema200', 'model/V21DataExporterSchemaPutDestinationProfileRequestSchema', 'model/V21DataExporterSchemaSetDefaultDestinationProfile', 'model/V21DataExporterSchemaSkylightUploadResults200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema403'), require('../model/NoDataSchema404'), require('../model/V21DataExporterSchemaDeleteDestinationProfilesRequestSchema'), require('../model/V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200'), require('../model/V21DataExporterSchemaGetDestinationProfileResultSchema200'), require('../model/V21DataExporterSchemaGetDestinationProfileResultSchemaMany200'), require('../model/V21DataExporterSchemaPostDestinationProfileRequestSchema'), require('../model/V21DataExporterSchemaProfileIdResponseSchema200'), require('../model/V21DataExporterSchemaPutDestinationProfileRequestSchema'), require('../model/V21DataExporterSchemaSetDefaultDestinationProfile'), require('../model/V21DataExporterSchemaSkylightUploadResults200'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RemoteOpsMMSApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema403, root.S1MgmtApi.NoDataSchema404, root.S1MgmtApi.V21DataExporterSchemaDeleteDestinationProfilesRequestSchema, root.S1MgmtApi.V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200, root.S1MgmtApi.V21DataExporterSchemaGetDestinationProfileResultSchema200, root.S1MgmtApi.V21DataExporterSchemaGetDestinationProfileResultSchemaMany200, root.S1MgmtApi.V21DataExporterSchemaPostDestinationProfileRequestSchema, root.S1MgmtApi.V21DataExporterSchemaProfileIdResponseSchema200, root.S1MgmtApi.V21DataExporterSchemaPutDestinationProfileRequestSchema, root.S1MgmtApi.V21DataExporterSchemaSetDefaultDestinationProfile, root.S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200);
  }
}(this, function(ApiClient, NoDataSchema400, NoDataSchema401, NoDataSchema403, NoDataSchema404, V21DataExporterSchemaDeleteDestinationProfilesRequestSchema, V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200, V21DataExporterSchemaGetDestinationProfileResultSchema200, V21DataExporterSchemaGetDestinationProfileResultSchemaMany200, V21DataExporterSchemaPostDestinationProfileRequestSchema, V21DataExporterSchemaProfileIdResponseSchema200, V21DataExporterSchemaPutDestinationProfileRequestSchema, V21DataExporterSchemaSetDefaultDestinationProfile, V21DataExporterSchemaSkylightUploadResults200) {
  'use strict';

  /**
   * RemoteOpsMMS service.
   * @module api/RemoteOpsMMSApi
   * @version 2.1
   */

  /**
   * Constructs a new RemoteOpsMMSApi. 
   * @alias module:api/RemoteOpsMMSApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesDelete operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete multiple Destination profiles by ID
     * Delete multiple Destination profiles. The profiles that are not possible to delete (e.g.non-existing or user does not have proper permissions) are skipped. IDs of successfully deleted profiles are returned in response.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21DataExporterSchemaDeleteDestinationProfilesRequestSchema} opts.body 
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200}
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesDelete = function(opts, callback) {
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
      var returnType = V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesGet operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21DataExporterSchemaGetDestinationProfileResultSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get available Destination profiles
     * Get Destination profiles available for the specified scope. The profiles are inherited downwards, e.g. the profiles from parent Account and Tenant scopes are available for a Site. At most one of returned destination profiles will be marked as default for the scope. If the scope does not have default profile defined, it's inherited from the higher scope, unless inheritance was broken
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scopeLevel Scope level to get Destination profile configuration. Example: \"tenant\".
     * @param {String} opts.scopeId Scope ID to get Destination profiles configuration. Example: \"225494730938493804\".
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21DataExporterSchemaGetDestinationProfileResultSchemaMany200}
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'scopeLevel': opts['scopeLevel'],
        'scopeId': opts['scopeId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = V21DataExporterSchemaGetDestinationProfileResultSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesPost operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21DataExporterSchemaProfileIdResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Destination profile.
     * Create Destination profile inside specified scope. If the created profile is requested to be default, the default profile of the specified scope is overriden.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema} opts.body 
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21DataExporterSchemaProfileIdResponseSchema200}
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesPost = function(opts, callback) {
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
      var returnType = V21DataExporterSchemaProfileIdResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set profile as default profile of the scope
     * Set profile as default profile of the scope
     * @param {Object} opts Optional parameters
     * @param {module:model/V21DataExporterSchemaSetDefaultDestinationProfile} opts.body 
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost = function(opts, callback) {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles/set-default', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesprofileIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Destination profile by ID
     * Delete Destination profile with specified ID. If the profile was used as default for a scope, the last created profile will be marked as default for that scope.
     * @param {String} profileId Profile ID. Example: \"225494730938493804\".
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesprofileIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete = function(profileId, callback) {
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete");
      }


      var pathParams = {
        'profile_id': profileId
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles/{profile_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesprofileIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21DataExporterSchemaGetDestinationProfileResultSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Destination profile by ID
     * Get Destination profile with specified ID
     * @param {String} profileId Profile ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scopeLevel Scope level to get Destination profile configuration. Example: \"tenant\".
     * @param {String} opts.scopeId Scope ID to get Destination profiles configuration. Example: \"225494730938493804\".
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesprofileIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21DataExporterSchemaGetDestinationProfileResultSchema200}
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet = function(profileId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet");
      }


      var pathParams = {
        'profile_id': profileId
      };
      var queryParams = {
        'scopeLevel': opts['scopeLevel'],
        'scopeId': opts['scopeId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = V21DataExporterSchemaGetDestinationProfileResultSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles/{profile_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesprofileIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21DataExporterSchemaProfileIdResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing Destination profile
     * Update contents of existing Destination profile with specified ID. All the profile data should be specified, even if the values are not changed. If the updated profile is requested to be default, the default profile of its scope is modified.
     * @param {String} profileId Profile ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/V21DataExporterSchemaPutDestinationProfileRequestSchema} opts.body 
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterDestinationProfilesprofileIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21DataExporterSchemaProfileIdResponseSchema200}
     */
    this.webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut = function(profileId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'profileId' is set
      if (profileId === undefined || profileId === null) {
        throw new Error("Missing the required parameter 'profileId' when calling webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut");
      }


      var pathParams = {
        'profile_id': profileId
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
      var returnType = V21DataExporterSchemaProfileIdResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/destination-profiles/{profile_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRemoteOpsDataExporterResultsGet operation.
     * @callback module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterResultsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21DataExporterSchemaSkylightUploadResults200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get results sent to data exporter
     * Get results sent to data exporter
     * @param {String} agentId Id of the agent the data came from
     * @param {Object} opts Optional parameters
     * @param {String} opts.maliciousGroupId Threat malicious group id
     * @param {String} opts.taskId Task id
     * @param {module:api/RemoteOpsMMSApi~webApiRemoteOpsDataExporterResultsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21DataExporterSchemaSkylightUploadResults200}
     */
    this.webApiRemoteOpsDataExporterResultsGet = function(agentId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling webApiRemoteOpsDataExporterResultsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'maliciousGroupId': opts['maliciousGroupId'],
        'agentId': agentId,
        'taskId': opts['taskId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = V21DataExporterSchemaSkylightUploadResults200;

      return this.apiClient.callApi(
        '/web/api/v2.1/remote-ops/data-exporter/results', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
