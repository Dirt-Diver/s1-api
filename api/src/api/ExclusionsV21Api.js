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
    define(['ApiClient', 'model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest', 'model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200', 'model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema403'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest'), require('../model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200'), require('../model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema403'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ExclusionsV21Api = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest, root.S1MgmtApi.ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200, root.S1MgmtApi.ExclusionsGetSchemaUnifiedExclusionSchemaMany200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema403);
  }
}(this, function(ApiClient, ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest, ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200, ExclusionsGetSchemaUnifiedExclusionSchemaMany200, NoDataSchema400, NoDataSchema401, NoDataSchema403) {
  'use strict';

  /**
   * ExclusionsV21 service.
   * @module api/ExclusionsV21Api
   * @version 2.1
   */

  /**
   * Constructs a new ExclusionsV21Api. 
   * @alias module:api/ExclusionsV21Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiUnifiedExclusionsDelete operation.
     * @callback module:api/ExclusionsV21Api~webApiUnifiedExclusionsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Exclusions
     * @param {Object} opts Optional parameters
     * @param {module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest} opts.body 
     * @param {module:api/ExclusionsV21Api~webApiUnifiedExclusionsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200}
     */
    this.webApiUnifiedExclusionsDelete = function(opts, callback) {
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
      var returnType = ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200;

      return this.apiClient.callApi(
        '/web/api/v2.1/unified-exclusions', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiUnifiedExclusionsGet operation.
     * @callback module:api/ExclusionsV21Api~webApiUnifiedExclusionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Exclusions
     * Get a list of all the Exclusions that match the filter. <br>Note: To filter the results for a scope: <br>* Global - Make sure \"tenant\" is \"true\" and no other scope ID is given.<br>* Account - Make sure \"tenant\" is \"false\" and at least one Account ID is given.<br>* Site - Make sure \"tenant\" is \"false\" and at least one Site ID is given.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Date} opts.createdAtGt Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.includeChildren Return filters from children scope levels (Default: false)
     * @param {Date} opts.updatedAtLt Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.scopePathContains Free-text filter by scope path
     * @param {Array.<String>} opts.ids List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Date} opts.createdAtLt Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.valueContains Free-text filter by value
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Date} opts.updatedAtGte Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<module:model/String>} opts.source List sources to filter by. Example: \"user\".
     * @param {Array.<module:model/String>} opts.osTypes List of Os types to filter by. Example: \"windows\".
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {Array.<module:model/String>} opts.notRecommended List of recommendations to filter by. Example: \"Not recommended\".
     * @param {Array.<module:model/String>} opts.engines List of engines to filter by. Example: \"suppress\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Date} opts.updatedAtGt Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<module:model/String>} opts.pathExclusionTypes List of excluded paths in an exclusion (Path exclusions only). Example: \"file\".
     * @param {Boolean} opts.imported indication whether the exclusion was imported by a bulk operation or not
     * @param {Date} opts.createdAtLte Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.exclusionNameContains Free-text filter by exclusion name
     * @param {Array.<module:model/String>} opts.conditions List of conditions to filter by. Example: \"white_hash\".
     * @param {Boolean} opts.includeParents Return filters from parent scope levels (Default: false)
     * @param {Array.<String>} opts.userContains Free-text filter by user name
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Date} opts.updatedAtLte Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {String} opts.createdAtBetween Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<module:model/String>} opts.interactionLevel List of interaction levels to filter by. Example: \"disable_all_monitors\".
     * @param {Array.<module:model/String>} opts.threatType List of threat types to filter by. Example: \"EDR\".
     * @param {String} opts.updatedAtBetween Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
     * @param {Date} opts.createdAtGte Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.descriptionContains Free-text filter by description
     * @param {Array.<String>} opts.userIds List of user ids to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.applicationNameContains Free-text filter by application name
     * @param {module:model/String} opts.modeType Agent interaction \\ Suppression. Example: \"suppression\".
     * @param {module:api/ExclusionsV21Api~webApiUnifiedExclusionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExclusionsGetSchemaUnifiedExclusionSchemaMany200}
     */
    this.webApiUnifiedExclusionsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'createdAt__gt': opts['createdAtGt'],
        'includeChildren': opts['includeChildren'],
        'updatedAt__lt': opts['updatedAtLt'],
        'countOnly': opts['countOnly'],
        'createdAt__lt': opts['createdAtLt'],
        'limit': opts['limit'],
        'updatedAt__gte': opts['updatedAtGte'],
        'skip': opts['skip'],
        'skipCount': opts['skipCount'],
        'sortOrder': opts['sortOrder'],
        'updatedAt__gt': opts['updatedAtGt'],
        'imported': opts['imported'],
        'createdAt__lte': opts['createdAtLte'],
        'includeParents': opts['includeParents'],
        'sortBy': opts['sortBy'],
        'updatedAt__lte': opts['updatedAtLte'],
        'tenant': opts['tenant'],
        'createdAt__between': opts['createdAtBetween'],
        'updatedAt__between': opts['updatedAtBetween'],
        'createdAt__gte': opts['createdAtGte'],
        'modeType': opts['modeType'],
      };
      var collectionQueryParams = {
        'scopePath__contains': {
          value: opts['scopePathContains'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'value__contains': {
          value: opts['valueContains'],
          collectionFormat: 'csv'
        },
        'source': {
          value: opts['source'],
          collectionFormat: 'csv'
        },
        'osTypes': {
          value: opts['osTypes'],
          collectionFormat: 'csv'
        },
        'notRecommended': {
          value: opts['notRecommended'],
          collectionFormat: 'csv'
        },
        'engines': {
          value: opts['engines'],
          collectionFormat: 'csv'
        },
        'pathExclusionTypes': {
          value: opts['pathExclusionTypes'],
          collectionFormat: 'csv'
        },
        'exclusionName__contains': {
          value: opts['exclusionNameContains'],
          collectionFormat: 'csv'
        },
        'conditions': {
          value: opts['conditions'],
          collectionFormat: 'csv'
        },
        'user__contains': {
          value: opts['userContains'],
          collectionFormat: 'csv'
        },
        'groupIds': {
          value: opts['groupIds'],
          collectionFormat: 'csv'
        },
        'interactionLevel': {
          value: opts['interactionLevel'],
          collectionFormat: 'csv'
        },
        'threatType': {
          value: opts['threatType'],
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
        'description__contains': {
          value: opts['descriptionContains'],
          collectionFormat: 'csv'
        },
        'userIds': {
          value: opts['userIds'],
          collectionFormat: 'csv'
        },
        'applicationName__contains': {
          value: opts['applicationNameContains'],
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
      var returnType = ExclusionsGetSchemaUnifiedExclusionSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/unified-exclusions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));