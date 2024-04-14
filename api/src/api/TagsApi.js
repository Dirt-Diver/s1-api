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
    define(['ApiClient', 'model/AffectedResultsSchema200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/TagsSchemasGetTagSchema200', 'model/TagsSchemasGetTagSchemaMany200', 'model/TagsSchemasPostTagSchema', 'model/TagsSchemasPutTagSchema', 'model/TagsSchemasTagDeleteSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AffectedResultsSchema200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/TagsSchemasGetTagSchema200'), require('../model/TagsSchemasGetTagSchemaMany200'), require('../model/TagsSchemasPostTagSchema'), require('../model/TagsSchemasPutTagSchema'), require('../model/TagsSchemasTagDeleteSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.TagsApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AffectedResultsSchema200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.TagsSchemasGetTagSchema200, root.S1MgmtApi.TagsSchemasGetTagSchemaMany200, root.S1MgmtApi.TagsSchemasPostTagSchema, root.S1MgmtApi.TagsSchemasPutTagSchema, root.S1MgmtApi.TagsSchemasTagDeleteSchema);
  }
}(this, function(ApiClient, AffectedResultsSchema200, NoDataSchema400, NoDataSchema401, TagsSchemasGetTagSchema200, TagsSchemasGetTagSchemaMany200, TagsSchemasPostTagSchema, TagsSchemasPutTagSchema, TagsSchemasTagDeleteSchema) {
  'use strict';

  /**
   * Tags service.
   * @module api/TagsApi
   * @version 2.1
   */

  /**
   * Constructs a new TagsApi. 
   * @alias module:api/TagsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiTagsDelete operation.
     * @callback module:api/TagsApi~webApiTagsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Tags
     * Delete tags by given filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/TagsSchemasTagDeleteSchema} opts.body 
     * @param {module:api/TagsApi~webApiTagsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiTagsDelete = function(opts, callback) {
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
        '/web/api/v2.1/tags', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiTagsGet operation.
     * @callback module:api/TagsApi~webApiTagsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagsSchemasGetTagSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Tags
     * Get tags.
     * @param {Array.<module:model/String>} type Type in. Example: \"firewall\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Array.<String>} opts.nameContains Free-text filter by tag name. Example: \"tag_name,tag_na\".
     * @param {String} opts.kind Returns tags of this specific kind
     * @param {String} opts.query Free text search on tag name
     * @param {Array.<String>} opts.ids List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Boolean} opts.disablePagination If true, all tags for requested filters will be returned
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {module:model/String} opts.scope Return tags from given scope level. Example: \"site\".
     * @param {Boolean} opts.onlyParents If true returns all tags possible to inherit from parent scopes, otherwise returns all tags already inherited and tags from this scope. (default to false)
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {module:api/TagsApi~webApiTagsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagsSchemasGetTagSchemaMany200}
     */
    this.webApiTagsGet = function(type, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling webApiTagsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'kind': opts['kind'],
        'query': opts['query'],
        'countOnly': opts['countOnly'],
        'limit': opts['limit'],
        'skip': opts['skip'],
        'skipCount': opts['skipCount'],
        'sortOrder': opts['sortOrder'],
        'disablePagination': opts['disablePagination'],
        'sortBy': opts['sortBy'],
        'tenant': opts['tenant'],
        'scope': opts['scope'],
        'onlyParents': opts['onlyParents'],
      };
      var collectionQueryParams = {
        'name__contains': {
          value: opts['nameContains'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'groupIds': {
          value: opts['groupIds'],
          collectionFormat: 'csv'
        },
        'siteIds': {
          value: opts['siteIds'],
          collectionFormat: 'csv'
        },
        'accountIds': {
          value: opts['accountIds'],
          collectionFormat: 'csv'
        },
        'type': {
          value: type,
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TagsSchemasGetTagSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiTagsPost operation.
     * @callback module:api/TagsApi~webApiTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagsSchemasGetTagSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Tags
     * Add tags to create user-defined logical groups.
     * @param {Object} opts Optional parameters
     * @param {module:model/TagsSchemasPostTagSchema} opts.body 
     * @param {module:api/TagsApi~webApiTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagsSchemasGetTagSchema200}
     */
    this.webApiTagsPost = function(opts, callback) {
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
      var returnType = TagsSchemasGetTagSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiTagstagIdDelete operation.
     * @callback module:api/TagsApi~webApiTagstagIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Tag by ID
     * Delete tag by ID.
     * @param {String} tagId Rule ID. Example: \"225494730938493804\".
     * @param {module:api/TagsApi~webApiTagstagIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiTagstagIdDelete = function(tagId, callback) {
      var postBody = null;

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling webApiTagstagIdDelete");
      }


      var pathParams = {
        'tag_id': tagId
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
      var returnType = AffectedResultsSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/tags/{tag_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiTagstagIdPut operation.
     * @callback module:api/TagsApi~webApiTagstagIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TagsSchemasGetTagSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Tag
     * Edit tag
     * @param {String} tagId Rule ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/TagsSchemasPutTagSchema} opts.body 
     * @param {module:api/TagsApi~webApiTagstagIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TagsSchemasGetTagSchema200}
     */
    this.webApiTagstagIdPut = function(tagId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling webApiTagstagIdPut");
      }


      var pathParams = {
        'tag_id': tagId
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
      var returnType = TagsSchemasGetTagSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/tags/{tag_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));