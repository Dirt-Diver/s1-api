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
    define(['ApiClient', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200', 'model/RbacSchemasNewRoleTemplate200', 'model/RbacSchemasRbacCreateRoleSchema', 'model/RbacSchemasRbacDeleteRoleSchema', 'model/RbacSchemasRbacUpdateRoleSchema', 'model/RbacSchemasRolePermissions200', 'model/SuccessResponseSchema200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200'), require('../model/RbacSchemasNewRoleTemplate200'), require('../model/RbacSchemasRbacCreateRoleSchema'), require('../model/RbacSchemasRbacDeleteRoleSchema'), require('../model/RbacSchemasRbacUpdateRoleSchema'), require('../model/RbacSchemasRolePermissions200'), require('../model/SuccessResponseSchema200'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RBACApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.RbacSchemasFlatRoleWithAccountOrSiteNameMany200, root.S1MgmtApi.RbacSchemasNewRoleTemplate200, root.S1MgmtApi.RbacSchemasRbacCreateRoleSchema, root.S1MgmtApi.RbacSchemasRbacDeleteRoleSchema, root.S1MgmtApi.RbacSchemasRbacUpdateRoleSchema, root.S1MgmtApi.RbacSchemasRolePermissions200, root.S1MgmtApi.SuccessResponseSchema200);
  }
}(this, function(ApiClient, NoDataSchema400, NoDataSchema401, RbacSchemasFlatRoleWithAccountOrSiteNameMany200, RbacSchemasNewRoleTemplate200, RbacSchemasRbacCreateRoleSchema, RbacSchemasRbacDeleteRoleSchema, RbacSchemasRbacUpdateRoleSchema, RbacSchemasRolePermissions200, SuccessResponseSchema200) {
  'use strict';

  /**
   * RBAC service.
   * @module api/RBACApi
   * @version 2.1
   */

  /**
   * Constructs a new RBACApi. 
   * @alias module:api/RBACApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiRbacRoleGet operation.
     * @callback module:api/RBACApi~webApiRbacRoleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RbacSchemasNewRoleTemplate200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get template for new role
     * Get the template for a new role.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {module:api/RBACApi~webApiRbacRoleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RbacSchemasNewRoleTemplate200}
     */
    this.webApiRbacRoleGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tenant': opts['tenant'],
      };
      var collectionQueryParams = {
        'accountIds': {
          value: opts['accountIds'],
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
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RbacSchemasNewRoleTemplate200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rbac/role', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRbacRolePost operation.
     * @callback module:api/RBACApi~webApiRbacRolePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RbacSchemasRolePermissions200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new role
     * Create a new role for Role-Based Access Control (RBAC).
     * @param {Object} opts Optional parameters
     * @param {module:model/RbacSchemasRbacCreateRoleSchema} opts.body 
     * @param {module:api/RBACApi~webApiRbacRolePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RbacSchemasRolePermissions200}
     */
    this.webApiRbacRolePost = function(opts, callback) {
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
      var returnType = RbacSchemasRolePermissions200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rbac/role', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRbacRoleroleIdDelete operation.
     * @callback module:api/RBACApi~webApiRbacRoleroleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete role
     * With the ID of a role (see Get All Roles), you can delete a role. If there are users assigned to the role, specify the ID of their new role.
     * @param {String} roleId Role ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/RbacSchemasRbacDeleteRoleSchema} opts.body 
     * @param {module:api/RBACApi~webApiRbacRoleroleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema200}
     */
    this.webApiRbacRoleroleIdDelete = function(roleId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling webApiRbacRoleroleIdDelete");
      }


      var pathParams = {
        'role_id': roleId
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
        '/web/api/v2.1/rbac/role/{role_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRbacRoleroleIdGet operation.
     * @callback module:api/RBACApi~webApiRbacRoleroleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RbacSchemasRolePermissions200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Specific Role Definition
     * With the ID of a role (see Get All Roles) you can see the permissions of that role. <br>The definition of a role can change in different scopes and SKUs. For example, an Admin role with the scope access of a Site does not have Ranger permissions, but an IT role with the scope access of an Account with a Ranger license does have permissions on Ranger. <br>The Response shows role permissions to see views in the WebUI and to use Console features.
     * @param {String} roleId Role ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAtGt Return RBAC roles created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.updatedAtBetween Return RBAC roles updated within this range (inclusive). Example: \"1514978764288-1514978999999\".
     * @param {Date} opts.createdAtGte Return RBAC roles created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.name Return RBAC role matching the name
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.query Free text search on role name, and description
     * @param {Date} opts.updatedAtGt Return RBAC roles updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.updatedAtLt Return RBAC roles updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.createdAtLte Return RBAC roles created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {String} opts.createdAtBetween Return RBAC roles created within this range (inclusive). Example: \"1514978764288-1514978999999\".
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Date} opts.updatedAtLte Return RBAC roles updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.createdAtLt Return RBAC roles created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.updatedAtGte Return RBAC roles updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {module:api/RBACApi~webApiRbacRoleroleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RbacSchemasRolePermissions200}
     */
    this.webApiRbacRoleroleIdGet = function(roleId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling webApiRbacRoleroleIdGet");
      }


      var pathParams = {
        'role_id': roleId
      };
      var queryParams = {
        'createdAt__gt': opts['createdAtGt'],
        'updatedAt__between': opts['updatedAtBetween'],
        'createdAt__gte': opts['createdAtGte'],
        'name': opts['name'],
        'query': opts['query'],
        'updatedAt__gt': opts['updatedAtGt'],
        'updatedAt__lt': opts['updatedAtLt'],
        'createdAt__lte': opts['createdAtLte'],
        'tenant': opts['tenant'],
        'createdAt__between': opts['createdAtBetween'],
        'updatedAt__lte': opts['updatedAtLte'],
        'createdAt__lt': opts['createdAtLt'],
        'updatedAt__gte': opts['updatedAtGte'],
      };
      var collectionQueryParams = {
        'accountIds': {
          value: opts['accountIds'],
          collectionFormat: 'csv'
        },
        'siteIds': {
          value: opts['siteIds'],
          collectionFormat: 'csv'
        },
        'groupIds': {
          value: opts['groupIds'],
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
      var returnType = RbacSchemasRolePermissions200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rbac/role/{role_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRbacRoleroleIdPut operation.
     * @callback module:api/RBACApi~webApiRbacRoleroleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RbacSchemasRolePermissions200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update role
     * With the ID of a role (see Get All Roles), you can update the permissions of users with this role.
     * @param {String} roleId Role ID. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/RbacSchemasRbacUpdateRoleSchema} opts.body 
     * @param {module:api/RBACApi~webApiRbacRoleroleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RbacSchemasRolePermissions200}
     */
    this.webApiRbacRoleroleIdPut = function(roleId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling webApiRbacRoleroleIdPut");
      }


      var pathParams = {
        'role_id': roleId
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
      var returnType = RbacSchemasRolePermissions200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rbac/role/{role_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRbacRolesGet operation.
     * @callback module:api/RBACApi~webApiRbacRolesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Roles
     * See roles assigned to users that match the filter, a basic description of the roles, and the number of users for each role. <br>Role-Based Access Control (RBAC) has predefined roles. (Currently, customized roles are not supported.), This command gives the ID of the role, which you can use in other commands.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Date} opts.createdAtGt Return RBAC roles created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.includeChildren Include child scopes roles (default to false)
     * @param {Date} opts.updatedAt Updated at. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.updatedAtLt Return RBAC roles updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.query Free text search on role name, and description
     * @param {Array.<String>} opts.ids List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Date} opts.createdAtLt Return RBAC roles created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Date} opts.updatedAtGte Return RBAC roles updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.predefinedRole Filter only system/custom roles
     * @param {String} opts.accountName Name of the account that contains the role
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {String} opts.creatorId Id of the creating user. Example: \"225494730938493804\".
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Date} opts.updatedAtGt Return RBAC roles updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.updatedById Id of the updating user. Example: \"225494730938493804\".
     * @param {Date} opts.createdAtLte Return RBAC roles created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.includeParents Include parent scopes roles (default to true)
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {String} opts.createdAtBetween Return RBAC roles created within this range (inclusive). Example: \"1514978764288-1514978999999\".
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Date} opts.updatedAtLte Return RBAC roles updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.description Description
     * @param {String} opts.updatedAtBetween Return RBAC roles updated within this range (inclusive). Example: \"1514978764288-1514978999999\".
     * @param {String} opts.updatedBy Email of the updating user
     * @param {Date} opts.createdAtGte Return RBAC roles created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.siteName Name of the site that contains the role
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.name Return RBAC role matching the name
     * @param {String} opts.creator Email of the creating user
     * @param {Date} opts.createdAt Created at. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.tenancyIds List of Tenancies IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Number} opts.usersInRoles How many users use this role
     * @param {module:api/RBACApi~webApiRbacRolesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RbacSchemasFlatRoleWithAccountOrSiteNameMany200}
     */
    this.webApiRbacRolesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'createdAt__gt': opts['createdAtGt'],
        'includeChildren': opts['includeChildren'],
        'updatedAt': opts['updatedAt'],
        'updatedAt__lt': opts['updatedAtLt'],
        'query': opts['query'],
        'countOnly': opts['countOnly'],
        'createdAt__lt': opts['createdAtLt'],
        'limit': opts['limit'],
        'updatedAt__gte': opts['updatedAtGte'],
        'predefinedRole': opts['predefinedRole'],
        'accountName': opts['accountName'],
        'skip': opts['skip'],
        'skipCount': opts['skipCount'],
        'creatorId': opts['creatorId'],
        'sortOrder': opts['sortOrder'],
        'updatedAt__gt': opts['updatedAtGt'],
        'updatedById': opts['updatedById'],
        'createdAt__lte': opts['createdAtLte'],
        'includeParents': opts['includeParents'],
        'sortBy': opts['sortBy'],
        'tenant': opts['tenant'],
        'createdAt__between': opts['createdAtBetween'],
        'updatedAt__lte': opts['updatedAtLte'],
        'description': opts['description'],
        'updatedAt__between': opts['updatedAtBetween'],
        'updatedBy': opts['updatedBy'],
        'createdAt__gte': opts['createdAtGte'],
        'siteName': opts['siteName'],
        'name': opts['name'],
        'creator': opts['creator'],
        'createdAt': opts['createdAt'],
        'usersInRoles': opts['usersInRoles'],
      };
      var collectionQueryParams = {
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
        'tenancyIds': {
          value: opts['tenancyIds'],
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
      var returnType = RbacSchemasFlatRoleWithAccountOrSiteNameMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rbac/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
