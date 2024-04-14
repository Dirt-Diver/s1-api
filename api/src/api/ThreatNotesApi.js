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
    define(['ApiClient', 'model/AffectedResultsSchema200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/SuccessResponseSchema200', 'model/ThreatsSchemasPostThreatNoteDataSchema', 'model/ThreatsSchemasThreatNoteSchema200', 'model/ThreatsSchemasThreatNoteSchemaMany200', 'model/ThreatsSchemasThreatsNoteCreateSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AffectedResultsSchema200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/SuccessResponseSchema200'), require('../model/ThreatsSchemasPostThreatNoteDataSchema'), require('../model/ThreatsSchemasThreatNoteSchema200'), require('../model/ThreatsSchemasThreatNoteSchemaMany200'), require('../model/ThreatsSchemasThreatsNoteCreateSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ThreatNotesApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AffectedResultsSchema200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.SuccessResponseSchema200, root.S1MgmtApi.ThreatsSchemasPostThreatNoteDataSchema, root.S1MgmtApi.ThreatsSchemasThreatNoteSchema200, root.S1MgmtApi.ThreatsSchemasThreatNoteSchemaMany200, root.S1MgmtApi.ThreatsSchemasThreatsNoteCreateSchema);
  }
}(this, function(ApiClient, AffectedResultsSchema200, NoDataSchema400, NoDataSchema401, SuccessResponseSchema200, ThreatsSchemasPostThreatNoteDataSchema, ThreatsSchemasThreatNoteSchema200, ThreatsSchemasThreatNoteSchemaMany200, ThreatsSchemasThreatsNoteCreateSchema) {
  'use strict';

  /**
   * ThreatNotes service.
   * @module api/ThreatNotesApi
   * @version 2.1
   */

  /**
   * Constructs a new ThreatNotesApi. 
   * @alias module:api/ThreatNotesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiThreatsNotesPost operation.
     * @callback module:api/ThreatNotesApi~webApiThreatsNotesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Note to Multiple
     * Add a threat note to multiple threats.
     * @param {Object} opts Optional parameters
     * @param {module:model/ThreatsSchemasThreatsNoteCreateSchema} opts.body 
     * @param {module:api/ThreatNotesApi~webApiThreatsNotesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiThreatsNotesPost = function(opts, callback) {
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
        '/web/api/v2.1/threats/notes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiThreatsthreatIdNotesGet operation.
     * @callback module:api/ThreatNotesApi~webApiThreatsthreatIdNotesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThreatsSchemasThreatNoteSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Threat Notes
     * Get the threat notes that match the filter.
     * @param {String} threatId Threat ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {String} opts.creatorLike Threat Note creator name (partially or full). Example: \"John\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {String} opts.creatorId Threat Note creator ID. Example: \"225494730938493804\".
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {module:api/ThreatNotesApi~webApiThreatsthreatIdNotesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ThreatsSchemasThreatNoteSchemaMany200}
     */
    this.webApiThreatsthreatIdNotesGet = function(threatId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'threatId' is set
      if (threatId === undefined || threatId === null) {
        throw new Error("Missing the required parameter 'threatId' when calling webApiThreatsthreatIdNotesGet");
      }


      var pathParams = {
        'threat_id': threatId
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'skip': opts['skip'],
        'creator__like': opts['creatorLike'],
        'skipCount': opts['skipCount'],
        'creatorId': opts['creatorId'],
        'sortOrder': opts['sortOrder'],
        'sortBy': opts['sortBy'],
        'countOnly': opts['countOnly'],
        'limit': opts['limit'],
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
      var returnType = ThreatsSchemasThreatNoteSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/threats/{threat_id}/notes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiThreatsthreatIdNotesnoteIdDelete operation.
     * @callback module:api/ThreatNotesApi~webApiThreatsthreatIdNotesnoteIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Threat Note
     * Delete a threat note.
     * @param {String} noteId Threat Note ID. Example: \"225494730938493804\".
     * @param {String} threatId Threat ID. Example: \"225494730938493804\".
     * @param {module:api/ThreatNotesApi~webApiThreatsthreatIdNotesnoteIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema200}
     */
    this.webApiThreatsthreatIdNotesnoteIdDelete = function(noteId, threatId, callback) {
      var postBody = null;

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling webApiThreatsthreatIdNotesnoteIdDelete");
      }

      // verify the required parameter 'threatId' is set
      if (threatId === undefined || threatId === null) {
        throw new Error("Missing the required parameter 'threatId' when calling webApiThreatsthreatIdNotesnoteIdDelete");
      }


      var pathParams = {
        'note_id': noteId,
        'threat_id': threatId
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
      var returnType = SuccessResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/threats/{threat_id}/notes/{note_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiThreatsthreatIdNotesnoteIdPut operation.
     * @callback module:api/ThreatNotesApi~webApiThreatsthreatIdNotesnoteIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ThreatsSchemasThreatNoteSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Threat Note
     * Change the text of a threat note.
     * @param {String} noteId Threat Note ID. Example: \"225494730938493804\".
     * @param {String} threatId Threat ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/ThreatsSchemasPostThreatNoteDataSchema} opts.body 
     * @param {module:api/ThreatNotesApi~webApiThreatsthreatIdNotesnoteIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ThreatsSchemasThreatNoteSchema200}
     */
    this.webApiThreatsthreatIdNotesnoteIdPut = function(noteId, threatId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling webApiThreatsthreatIdNotesnoteIdPut");
      }

      // verify the required parameter 'threatId' is set
      if (threatId === undefined || threatId === null) {
        throw new Error("Missing the required parameter 'threatId' when calling webApiThreatsthreatIdNotesnoteIdPut");
      }


      var pathParams = {
        'note_id': noteId,
        'threat_id': threatId
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
      var returnType = ThreatsSchemasThreatNoteSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/threats/{threat_id}/notes/{note_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
