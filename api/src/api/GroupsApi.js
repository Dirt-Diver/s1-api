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
    define(['ApiClient', 'model/GroupsAddAgentsDataSchema204', 'model/GroupsGroupSchema200', 'model/GroupsGroupTokenGenerationSchema200', 'model/GroupsPostGroupSchema', 'model/GroupsPutAddAgentsSchema', 'model/GroupsPutGroupSchema', 'model/GroupsPutRanksSchema', 'model/GroupsRegenerateKeySchema200', 'model/GroupsSummarizedGroupSchemaMany200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema403', 'model/NoDataSchema404', 'model/NoDataSchema409', 'model/PoliciesSchemasRevertPolicySchema', 'model/SuccessResponseSchema200', 'model/SuccessResponseSchema204'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GroupsAddAgentsDataSchema204'), require('../model/GroupsGroupSchema200'), require('../model/GroupsGroupTokenGenerationSchema200'), require('../model/GroupsPostGroupSchema'), require('../model/GroupsPutAddAgentsSchema'), require('../model/GroupsPutGroupSchema'), require('../model/GroupsPutRanksSchema'), require('../model/GroupsRegenerateKeySchema200'), require('../model/GroupsSummarizedGroupSchemaMany200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema403'), require('../model/NoDataSchema404'), require('../model/NoDataSchema409'), require('../model/PoliciesSchemasRevertPolicySchema'), require('../model/SuccessResponseSchema200'), require('../model/SuccessResponseSchema204'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.GroupsApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.GroupsAddAgentsDataSchema204, root.S1MgmtApi.GroupsGroupSchema200, root.S1MgmtApi.GroupsGroupTokenGenerationSchema200, root.S1MgmtApi.GroupsPostGroupSchema, root.S1MgmtApi.GroupsPutAddAgentsSchema, root.S1MgmtApi.GroupsPutGroupSchema, root.S1MgmtApi.GroupsPutRanksSchema, root.S1MgmtApi.GroupsRegenerateKeySchema200, root.S1MgmtApi.GroupsSummarizedGroupSchemaMany200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema403, root.S1MgmtApi.NoDataSchema404, root.S1MgmtApi.NoDataSchema409, root.S1MgmtApi.PoliciesSchemasRevertPolicySchema, root.S1MgmtApi.SuccessResponseSchema200, root.S1MgmtApi.SuccessResponseSchema204);
  }
}(this, function(ApiClient, GroupsAddAgentsDataSchema204, GroupsGroupSchema200, GroupsGroupTokenGenerationSchema200, GroupsPostGroupSchema, GroupsPutAddAgentsSchema, GroupsPutGroupSchema, GroupsPutRanksSchema, GroupsRegenerateKeySchema200, GroupsSummarizedGroupSchemaMany200, NoDataSchema400, NoDataSchema401, NoDataSchema403, NoDataSchema404, NoDataSchema409, PoliciesSchemasRevertPolicySchema, SuccessResponseSchema200, SuccessResponseSchema204) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 2.1
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiGroupsGet operation.
     * @callback module:api/GroupsApi~webApiGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsSummarizedGroupSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Groups
     * Get data of groups that match the filter. Best practice: use as narrow a filter as you can. The data can be quite long for many groups. The response returns the ID of each group, which you can use in other commands.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Date} opts.updatedAtLt Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.query Free text search on fields name, description
     * @param {Boolean} opts.isDefault Is this the default group?
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Number} opts.limit Limit number of returned items (1-300). Example: \"10\". (default to 10)
     * @param {Date} opts.updatedAtGte Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {String} opts.id Id. Example: \"225494730938493804\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {Number} opts.rank The rank sets the priority of a dynamic group over others. Example: \"1\".
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Date} opts.updatedAtGt Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.registrationToken Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\".
     * @param {module:model/String} opts.type Group type. Example: \"static\".
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Date} opts.updatedAtLte Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.description The description for the Group
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.name Name
     * @param {Array.<module:model/String>} opts.types A list of Group types. Example: \"static\".
     * @param {module:api/GroupsApi~webApiGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsSummarizedGroupSchemaMany200}
     */
    this.webApiGroupsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'updatedAt__lt': opts['updatedAtLt'],
        'query': opts['query'],
        'isDefault': opts['isDefault'],
        'countOnly': opts['countOnly'],
        'limit': opts['limit'],
        'updatedAt__gte': opts['updatedAtGte'],
        'skip': opts['skip'],
        'id': opts['id'],
        'skipCount': opts['skipCount'],
        'rank': opts['rank'],
        'sortOrder': opts['sortOrder'],
        'updatedAt__gt': opts['updatedAtGt'],
        'registrationToken': opts['registrationToken'],
        'type': opts['type'],
        'sortBy': opts['sortBy'],
        'updatedAt__lte': opts['updatedAtLte'],
        'description': opts['description'],
        'name': opts['name'],
      };
      var collectionQueryParams = {
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
        'types': {
          value: opts['types'],
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
      var returnType = GroupsSummarizedGroupSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsPost operation.
     * @callback module:api/GroupsApi~webApiGroupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsGroupSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Group
     * Create a new group. You must create the Group in a Site (run \"sites\" to get the Site ID) for which you have permissions. If you create a dynamic Group, you must have the ID of a filter saved in the Site (run \"filters?siteIds=<id from sites>\").
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsPostGroupSchema} opts.body 
     * @param {module:api/GroupsApi~webApiGroupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsGroupSchema200}
     */
    this.webApiGroupsPost = function(opts, callback) {
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
      var returnType = GroupsGroupSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsRanksPut operation.
     * @callback module:api/GroupsApi~webApiGroupsRanksPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema204} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Ranks
     *  An Agent can belong to only one Group. If the Agent matches multiple Dynamic Groups, it goes to the Group with the highest rank. The \"rank\" parameter has a minimum of \"1\". The lower the integer, the higher priority it has to collect Agents. Make sure the IDs of the groups in this command are for Dynamic groups.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsPutRanksSchema} opts.body 
     * @param {module:api/GroupsApi~webApiGroupsRanksPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema204}
     */
    this.webApiGroupsRanksPut = function(opts, callback) {
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
      var returnType = SuccessResponseSchema204;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/ranks', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdDelete operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Group
     * Delete a Group given by the required Group ID (run \"groups\"). If there are Agents in the Group, and the Group is dynamic, the next dynamic Groups will collect matching Agents, and unmatched Agents will go to the Default Group. If this is a static Group with Agents, all the Agents will go to the Default Group. (Agents always go to matching dynamic Groups. If a static Group holds Agents, there are no matching dynamic Groups.)
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {module:api/GroupsApi~webApiGroupsgroupIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema200}
     */
    this.webApiGroupsgroupIdDelete = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdDelete");
      }


      var pathParams = {
        'group_id': groupId
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
        '/web/api/v2.1/groups/{group_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdGet operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsGroupSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Group by ID
     * Get data of a given Group. To get a Group ID, run \"groups\". This command responds with the ID of the Site of the Group, Group name, type (dynamic or static), and similar data. Your username must permissions for the Site.
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {module:api/GroupsApi~webApiGroupsgroupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsGroupSchema200}
     */
    this.webApiGroupsgroupIdGet = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdGet");
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = GroupsGroupSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/{group_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdMoveAgentsPut operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdMoveAgentsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsAddAgentsDataSchema204} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move Agents
     * Move Agents that match the filter to a Group. The Group ID (run \"groups\") is required and there can be only one. This will move the matched Agents that are in the same Site as the given Group.
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsPutAddAgentsSchema} opts.body 
     * @param {module:api/GroupsApi~webApiGroupsgroupIdMoveAgentsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsAddAgentsDataSchema204}
     */
    this.webApiGroupsgroupIdMoveAgentsPut = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdMoveAgentsPut");
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = GroupsAddAgentsDataSchema204;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/{group_id}/move-agents', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdPut operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsGroupSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Group
     * Change properties of a Group specified by its ID (run \"groups\"). The body of the request holds all the properties of a Group. You must have access permissions on the Site. Note: iocAttributes refers to Deep Visibility. If you do not have a Complete SKU, you can remove this set.
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsPutGroupSchema} opts.body 
     * @param {module:api/GroupsApi~webApiGroupsgroupIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsGroupSchema200}
     */
    this.webApiGroupsgroupIdPut = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdPut");
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = GroupsGroupSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/{group_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdRegenerateKeyPut operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdRegenerateKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsRegenerateKeySchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Regenerate Group Token
     * Get a new Group Token for a static Group. This command requires the Group ID (\"groups\") and you must have permissions for the Group. If you run this command on a dynamic Group, it ends in an error. If you use the API in scripts to add new endpoints with a Group Token rather than a Site Token, be aware that you must update the token value in your scripts.
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {module:api/GroupsApi~webApiGroupsgroupIdRegenerateKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsRegenerateKeySchema200}
     */
    this.webApiGroupsgroupIdRegenerateKeyPut = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdRegenerateKeyPut");
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = GroupsRegenerateKeySchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/{group_id}/regenerate-key', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdRevertPolicyPut operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdRevertPolicyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revert Policy
     * A Group can have a policy that is different from its Site policy. Use this command to revert the changes on the Group policy to inherit the Site policy. Your user must have permissions on the Site.
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/PoliciesSchemasRevertPolicySchema} opts.body 
     * @param {module:api/GroupsApi~webApiGroupsgroupIdRevertPolicyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema200}
     */
    this.webApiGroupsgroupIdRevertPolicyPut = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdRevertPolicyPut");
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = SuccessResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/{group_id}/revert-policy', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiGroupsgroupIdTokenGet operation.
     * @callback module:api/GroupsApi~webApiGroupsgroupIdTokenGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupsGroupTokenGenerationSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Site registration token by ID
     * Get the registration token of the Group of the ID.
     * @param {String} groupId Group ID. Example: \"225494730938493804\".
     * @param {module:api/GroupsApi~webApiGroupsgroupIdTokenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupsGroupTokenGenerationSchema200}
     */
    this.webApiGroupsgroupIdTokenGet = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling webApiGroupsgroupIdTokenGet");
      }


      var pathParams = {
        'group_id': groupId
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
      var returnType = GroupsGroupTokenGenerationSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/groups/{group_id}/token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
