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
    define(['ApiClient', 'model/AccountsSchemasAccountGetSchema200', 'model/AccountsSchemasAccountPutSchema', 'model/AccountsSchemasAccountViewSchema200', 'model/AccountsSchemasAccountViewSchemaMany200', 'model/AccountsSchemasPostAccountSchema', 'model/AccountsSchemasReactivateAccountSchema', 'model/AccountsSchemasUninstallPasswordGenerateRequestSchema', 'model/AccountsSchemasUninstallPasswordGenerateResponseSchema200', 'model/AccountsSchemasUninstallPasswordMetadataResponseSchema200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema403', 'model/NoDataSchema404', 'model/PoliciesSchemasRevertPolicySchema', 'model/SuccessResponseSchema200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccountsSchemasAccountGetSchema200'), require('../model/AccountsSchemasAccountPutSchema'), require('../model/AccountsSchemasAccountViewSchema200'), require('../model/AccountsSchemasAccountViewSchemaMany200'), require('../model/AccountsSchemasPostAccountSchema'), require('../model/AccountsSchemasReactivateAccountSchema'), require('../model/AccountsSchemasUninstallPasswordGenerateRequestSchema'), require('../model/AccountsSchemasUninstallPasswordGenerateResponseSchema200'), require('../model/AccountsSchemasUninstallPasswordMetadataResponseSchema200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema403'), require('../model/NoDataSchema404'), require('../model/PoliciesSchemasRevertPolicySchema'), require('../model/SuccessResponseSchema200'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AccountsApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AccountsSchemasAccountGetSchema200, root.S1MgmtApi.AccountsSchemasAccountPutSchema, root.S1MgmtApi.AccountsSchemasAccountViewSchema200, root.S1MgmtApi.AccountsSchemasAccountViewSchemaMany200, root.S1MgmtApi.AccountsSchemasPostAccountSchema, root.S1MgmtApi.AccountsSchemasReactivateAccountSchema, root.S1MgmtApi.AccountsSchemasUninstallPasswordGenerateRequestSchema, root.S1MgmtApi.AccountsSchemasUninstallPasswordGenerateResponseSchema200, root.S1MgmtApi.AccountsSchemasUninstallPasswordMetadataResponseSchema200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema403, root.S1MgmtApi.NoDataSchema404, root.S1MgmtApi.PoliciesSchemasRevertPolicySchema, root.S1MgmtApi.SuccessResponseSchema200);
  }
}(this, function(ApiClient, AccountsSchemasAccountGetSchema200, AccountsSchemasAccountPutSchema, AccountsSchemasAccountViewSchema200, AccountsSchemasAccountViewSchemaMany200, AccountsSchemasPostAccountSchema, AccountsSchemasReactivateAccountSchema, AccountsSchemasUninstallPasswordGenerateRequestSchema, AccountsSchemasUninstallPasswordGenerateResponseSchema200, AccountsSchemasUninstallPasswordMetadataResponseSchema200, NoDataSchema400, NoDataSchema401, NoDataSchema403, NoDataSchema404, PoliciesSchemasRevertPolicySchema, SuccessResponseSchema200) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 2.1
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiAccountsGet operation.
     * @callback module:api/AccountsApi~webApiAccountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasAccountViewSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Accounts
     * Get the Accounts, and their data, that match the filter. This command gives the Account IDs, which other commands require. <br>Accounts are created by a Global User or by SentinelOne. Each Account contains Sites, which can inherit assets and settings. Each Account has one or more SKUs, that you assign to the Sites. To have both Core and Complete Sites in an Account, the Account must have both SKUs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Array.<module:model/String>} opts.features Filter the list of Accounts for those that support this feature. Example: \"firewall-control\".
     * @param {Date} opts.updatedAt Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.expiration Expiration. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.query Full text search for fields: name. (Note: on single-Account Consoles, the Account name will not be matched)
     * @param {Array.<String>} opts.ids A list of Account IDs. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.isDefault Is default
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {Number} opts.activeLicenses Active licenses
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {module:model/String} opts.accountType Account type. Example: \"Trial\".
     * @param {Number} opts.totalLicenses Total licenses
     * @param {module:model/String} opts.usageType Usage type. Example: \"customer\".
     * @param {Array.<String>} opts.states Filter by state, such as active or expired.
     * @param {module:model/String} opts.billingMode Billing mode. Example: \"subscription\".
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {String} opts.name Name. Example: \"My Account\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to search for. Example: \"225494730938493804,225494730938493915\".
     * @param {Date} opts.createdAt Timestamp of Account creation. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {module:api/AccountsApi~webApiAccountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasAccountViewSchemaMany200}
     */
    this.webApiAccountsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'updatedAt': opts['updatedAt'],
        'expiration': opts['expiration'],
        'query': opts['query'],
        'isDefault': opts['isDefault'],
        'countOnly': opts['countOnly'],
        'limit': opts['limit'],
        'skip': opts['skip'],
        'skipCount': opts['skipCount'],
        'activeLicenses': opts['activeLicenses'],
        'sortOrder': opts['sortOrder'],
        'accountType': opts['accountType'],
        'totalLicenses': opts['totalLicenses'],
        'usageType': opts['usageType'],
        'billingMode': opts['billingMode'],
        'sortBy': opts['sortBy'],
        'name': opts['name'],
        'createdAt': opts['createdAt'],
      };
      var collectionQueryParams = {
        'features': {
          value: opts['features'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'states': {
          value: opts['states'],
          collectionFormat: 'csv'
        },
        'accountIds': {
          value: opts['accountIds'],
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
      var returnType = AccountsSchemasAccountViewSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsPost operation.
     * @callback module:api/AccountsApi~webApiAccountsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Account
     * Create a new Account. This command requires Global permissions and an MSSP deployment. Consult with your SE before you run this command. An Account is a logical segment with permissions to configure features for specific Sites. Multiple Accounts can be useful for deployments with multiple Sites for third-parties (such as MSSP). Each Account has one or more SKUs, that you assign to Sites. If an Account has the Complete SKU, and you create a new Site in the Account, it will automatically have the Complete SKU. Best practice: Run \"name-available\" first, to make sure the name is unique in your deployment.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountsSchemasPostAccountSchema} opts.body 
     * @param {module:api/AccountsApi~webApiAccountsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webApiAccountsPost = function(opts, callback) {
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
        '/web/api/v2.1/accounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdExpireNowPost operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdExpireNowPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasAccountGetSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Expire an Account
     * Expire an Account immediately. The user must have Global access or Account acces with permissions for the Account. Best practice: Consult with Support before you use this command.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {module:api/AccountsApi~webApiAccountsaccountIdExpireNowPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasAccountGetSchema200}
     */
    this.webApiAccountsaccountIdExpireNowPost = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdExpireNowPost");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasAccountGetSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}/expire-now', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdGet operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasAccountViewSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account by ID
     * Get Account data from a given Account ID. To get an Account ID, run \"accounts\".
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {module:api/AccountsApi~webApiAccountsaccountIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasAccountViewSchema200}
     */
    this.webApiAccountsaccountIdGet = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdGet");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasAccountViewSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdPut operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasAccountGetSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Account
     * Change the data of an Account. This command requires a Global user or an Account user and Admin role. Use this command to change the name, ID, SKUs and how they are distributed among Sites and Agents, and more. (See the Body sample.) Best practice:  Consult with your SentinelOne SE. 
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountsSchemasAccountPutSchema} opts.body 
     * @param {module:api/AccountsApi~webApiAccountsaccountIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasAccountGetSchema200}
     */
    this.webApiAccountsaccountIdPut = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdPut");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasAccountGetSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdReactivatePut operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdReactivatePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reactivate Account
     * Reactivate an expired Account. This command requires a Global user or Support. Consult with your SentinelOne SE.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountsSchemasReactivateAccountSchema} opts.body 
     * @param {module:api/AccountsApi~webApiAccountsaccountIdReactivatePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema200}
     */
    this.webApiAccountsaccountIdReactivatePut = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdReactivatePut");
      }


      var pathParams = {
        'account_id': accountId
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
        '/web/api/v2.1/accounts/{account_id}/reactivate', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdRevertPolicyPut operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdRevertPolicyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revert Policy
     * The policy of the Account is based on the default Global policy and is enforced by all endpoints in the Sites and Groups of the Account (if you did not change the Site or Group policies). If you change the Account policy, you can use this command to revert it to the default Global policy.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/PoliciesSchemasRevertPolicySchema} opts.body 
     * @param {module:api/AccountsApi~webApiAccountsaccountIdRevertPolicyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponseSchema200}
     */
    this.webApiAccountsaccountIdRevertPolicyPut = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdRevertPolicyPut");
      }


      var pathParams = {
        'account_id': accountId
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
        '/web/api/v2.1/accounts/{account_id}/revert-policy', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdUninstallPasswordGeneratePost operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordGeneratePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasUninstallPasswordMetadataResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate/Regenerate Uninstall Password
     * You can uninstall all Agents of one Account with one command that requires a password. This command sets a new account-level uninstall password.<br>To enable this feature, submit a ticket with Support.<br>Best Practice: After you uninstall the Agents and install again, revoke the passphrase.<br>Applicable on Windows (versions 4.4+) and Linux (versions 21.7+) Agents.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountsSchemasUninstallPasswordGenerateRequestSchema} opts.body 
     * @param {module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordGeneratePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasUninstallPasswordMetadataResponseSchema200}
     */
    this.webApiAccountsaccountIdUninstallPasswordGeneratePost = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdUninstallPasswordGeneratePost");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasUninstallPasswordMetadataResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}/uninstall-password/generate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdUninstallPasswordMetadataGet operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordMetadataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasUninstallPasswordMetadataResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Uninstall Password Metadata
     * Get the uninstall password metadata, such as which user created and revoked it and when.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordMetadataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasUninstallPasswordMetadataResponseSchema200}
     */
    this.webApiAccountsaccountIdUninstallPasswordMetadataGet = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdUninstallPasswordMetadataGet");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasUninstallPasswordMetadataResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}/uninstall-password/metadata', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdUninstallPasswordRevokePost operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordRevokePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasUninstallPasswordMetadataResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke Uninstall Password
     * Delete the account-level uninstall password. If you do not delete it, you or another Console user can mistakenly use the Account passphrase (and uninstall all Agents) when you mean to uninstall one Agent.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordRevokePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasUninstallPasswordMetadataResponseSchema200}
     */
    this.webApiAccountsaccountIdUninstallPasswordRevokePost = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdUninstallPasswordRevokePost");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasUninstallPasswordMetadataResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}/uninstall-password/revoke', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiAccountsaccountIdUninstallPasswordViewGet operation.
     * @callback module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordViewGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountsSchemasUninstallPasswordGenerateResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Uninstall Password
     * Get the uninstall password to uninstall several Agents of one Account with one command.
     * @param {String} accountId Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".
     * @param {module:api/AccountsApi~webApiAccountsaccountIdUninstallPasswordViewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountsSchemasUninstallPasswordGenerateResponseSchema200}
     */
    this.webApiAccountsaccountIdUninstallPasswordViewGet = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling webApiAccountsaccountIdUninstallPasswordViewGet");
      }


      var pathParams = {
        'account_id': accountId
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
      var returnType = AccountsSchemasUninstallPasswordGenerateResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/accounts/{account_id}/uninstall-password/view', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiExportAccountsGet operation.
     * @callback module:api/AccountsApi~webApiExportAccountsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Accounts
     * Export Accounts data to a CSV, for Accounts that match the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name. Example: \"My Account\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to search for. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.query Full text search for fields: name. (Note: on single-Account Consoles, the Account name will not be matched)
     * @param {Date} opts.createdAt Timestamp of Account creation. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Number} opts.activeLicenses Active licenses
     * @param {Array.<String>} opts.states Filter by state, such as active or expired.
     * @param {Date} opts.updatedAt Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {module:model/String} opts.accountType Account type. Example: \"Trial\".
     * @param {Array.<module:model/String>} opts.features Filter the list of Accounts for those that support this feature. Example: \"firewall-control\".
     * @param {Date} opts.expiration Expiration. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Number} opts.totalLicenses Total licenses
     * @param {module:model/String} opts.usageType Usage type. Example: \"customer\".
     * @param {Array.<String>} opts.ids A list of Account IDs. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.isDefault Is default
     * @param {module:model/String} opts.billingMode Billing mode. Example: \"subscription\".
     * @param {module:api/AccountsApi~webApiExportAccountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webApiExportAccountsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'query': opts['query'],
        'createdAt': opts['createdAt'],
        'activeLicenses': opts['activeLicenses'],
        'updatedAt': opts['updatedAt'],
        'accountType': opts['accountType'],
        'expiration': opts['expiration'],
        'totalLicenses': opts['totalLicenses'],
        'usageType': opts['usageType'],
        'isDefault': opts['isDefault'],
        'billingMode': opts['billingMode'],
      };
      var collectionQueryParams = {
        'accountIds': {
          value: opts['accountIds'],
          collectionFormat: 'csv'
        },
        'states': {
          value: opts['states'],
          collectionFormat: 'csv'
        },
        'features': {
          value: opts['features'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/web/api/v2.1/export/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));