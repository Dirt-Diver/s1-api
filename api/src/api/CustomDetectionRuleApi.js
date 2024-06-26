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
    define(['ApiClient', 'model/AffectedResultsSchema200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema404', 'model/V21RulesSchemasFilterRuleSchema', 'model/V21RulesSchemasPostRuleSchema', 'model/V21RulesSchemasRuleDeleteSchema', 'model/V21RulesSchemasRuleResponseSchema200', 'model/V21RulesSchemasRuleViewSchemaMany200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AffectedResultsSchema200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema404'), require('../model/V21RulesSchemasFilterRuleSchema'), require('../model/V21RulesSchemasPostRuleSchema'), require('../model/V21RulesSchemasRuleDeleteSchema'), require('../model/V21RulesSchemasRuleResponseSchema200'), require('../model/V21RulesSchemasRuleViewSchemaMany200'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.CustomDetectionRuleApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AffectedResultsSchema200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema404, root.S1MgmtApi.V21RulesSchemasFilterRuleSchema, root.S1MgmtApi.V21RulesSchemasPostRuleSchema, root.S1MgmtApi.V21RulesSchemasRuleDeleteSchema, root.S1MgmtApi.V21RulesSchemasRuleResponseSchema200, root.S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200);
  }
}(this, function(ApiClient, AffectedResultsSchema200, NoDataSchema400, NoDataSchema401, NoDataSchema404, V21RulesSchemasFilterRuleSchema, V21RulesSchemasPostRuleSchema, V21RulesSchemasRuleDeleteSchema, V21RulesSchemasRuleResponseSchema200, V21RulesSchemasRuleViewSchemaMany200) {
  'use strict';

  /**
   * CustomDetectionRule service.
   * @module api/CustomDetectionRuleApi
   * @version 2.1
   */

  /**
   * Constructs a new CustomDetectionRuleApi. 
   * @alias module:api/CustomDetectionRuleApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiCloudDetectionRulesDelete operation.
     * @callback module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Rules
     * Deletes Custom Detection Rules that match a filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21RulesSchemasRuleDeleteSchema} opts.body 
     * @param {module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiCloudDetectionRulesDelete = function(opts, callback) {
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
        '/web/api/v2.1/cloud-detection/rules', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionRulesDisablePut operation.
     * @callback module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesDisablePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable Rules
     * Disable Custom Detection Rules based on a filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21RulesSchemasFilterRuleSchema} opts.body 
     * @param {module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesDisablePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiCloudDetectionRulesDisablePut = function(opts, callback) {
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
        '/web/api/v2.1/cloud-detection/rules/disable', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionRulesEnablePut operation.
     * @callback module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesEnablePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate Rules
     * Activate Custom Detection Rules based on a filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21RulesSchemasFilterRuleSchema} opts.body 
     * @param {module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesEnablePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiCloudDetectionRulesEnablePut = function(opts, callback) {
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
        '/web/api/v2.1/cloud-detection/rules/enable', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionRulesGet operation.
     * @callback module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21RulesSchemasRuleViewSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Rules
     * Get a list of Custom Detection Rules for a given scope. <br>Note:  You can create and see rules only for your highest available scope. For example, if your username has an access level of scope Account, you cannot see rules created for the Global scope or rules created for a specific Site.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Boolean} opts.activeResponse The active response status for the rule.
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Array.<String>} opts.query Free-text filter by S1 query. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
     * @param {Array.<String>} opts.s1qlContains Free-text filter by S1 query. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Boolean} opts.expired Rule expired or not.
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.reachedLimit Rule reached limit or not.
     * @param {module:model/String} opts.expirationMode The expiration mode. Example: \"Permanent\".
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {Array.<module:model/String>} opts.status To filter by status, enter one or more statuses, separated by commas. Example: \"Draft\".
     * @param {Array.<String>} opts.nameContains Free-text filter by rule name. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
     * @param {Array.<String>} opts.ids To filter by Rule ID, enter one or more Rule IDs, separated by commas. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.creatorContains Free-text filter by rule creator. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
     * @param {Array.<module:model/String>} opts.scopes To filter by scope, enter one or more scopes, separated by commas. Example: \"account\".
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {module:model/String} opts.queryType The query type. Example: \"events\".
     * @param {Array.<String>} opts.descriptionContains Free-text filter by rule description. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
     * @param {Boolean} opts.disablePagination If True, all rules for the requested scope will be returned.
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21RulesSchemasRuleViewSchemaMany200}
     */
    this.webApiCloudDetectionRulesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'activeResponse': opts['activeResponse'],
        'cursor': opts['cursor'],
        'sortOrder': opts['sortOrder'],
        'sortBy': opts['sortBy'],
        'expired': opts['expired'],
        'reachedLimit': opts['reachedLimit'],
        'expirationMode': opts['expirationMode'],
        'skipCount': opts['skipCount'],
        'skip': opts['skip'],
        'queryType': opts['queryType'],
        'disablePagination': opts['disablePagination'],
        'countOnly': opts['countOnly'],
      };
      var collectionQueryParams = {
        'query': {
          value: opts['query'],
          collectionFormat: 'csv'
        },
        's1ql__contains': {
          value: opts['s1qlContains'],
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
        'accountIds': {
          value: opts['accountIds'],
          collectionFormat: 'csv'
        },
        'status': {
          value: opts['status'],
          collectionFormat: 'csv'
        },
        'name__contains': {
          value: opts['nameContains'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'creator__contains': {
          value: opts['creatorContains'],
          collectionFormat: 'csv'
        },
        'scopes': {
          value: opts['scopes'],
          collectionFormat: 'csv'
        },
        'description__contains': {
          value: opts['descriptionContains'],
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
      var returnType = V21RulesSchemasRuleViewSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/cloud-detection/rules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionRulesPost operation.
     * @callback module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21RulesSchemasRuleResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Rule
     * Create a Custom Detection Rule for a scope specified by ID. To get the ID, run \"accounts\", \"sites\", \"groups\", or set \"tenant\" to \"true\" for Global.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21RulesSchemasPostRuleSchema} opts.body 
     * @param {module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21RulesSchemasRuleResponseSchema200}
     */
    this.webApiCloudDetectionRulesPost = function(opts, callback) {
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
      var returnType = V21RulesSchemasRuleResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/cloud-detection/rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionRulesruleIdPut operation.
     * @callback module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesruleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21RulesSchemasRuleResponseSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Rule
     * Change a Custom Detection rule. <br>This command requires the rule ID. (See Get Rules).
     * @param {String} ruleId The Rule ID in the URL path. Example: \"225494730938493804\".
     * @param {Object} opts Optional parameters
     * @param {module:model/V21RulesSchemasPostRuleSchema} opts.body 
     * @param {module:api/CustomDetectionRuleApi~webApiCloudDetectionRulesruleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21RulesSchemasRuleResponseSchema200}
     */
    this.webApiCloudDetectionRulesruleIdPut = function(ruleId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw new Error("Missing the required parameter 'ruleId' when calling webApiCloudDetectionRulesruleIdPut");
      }


      var pathParams = {
        'rule_id': ruleId
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
      var returnType = V21RulesSchemasRuleResponseSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/cloud-detection/rules/{rule_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
