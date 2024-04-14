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
    define(['ApiClient', 'model/AffectedResultsSchema200', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/V21AlertsSchemasAlertInformationSchemaMany200', 'model/V21AlertsSchemasAlertsAnalystVerdictSchema', 'model/V21AlertsSchemasAlertsIncidentSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AffectedResultsSchema200'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/V21AlertsSchemasAlertInformationSchemaMany200'), require('../model/V21AlertsSchemasAlertsAnalystVerdictSchema'), require('../model/V21AlertsSchemasAlertsIncidentSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.AlertsApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.AffectedResultsSchema200, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200, root.S1MgmtApi.V21AlertsSchemasAlertsAnalystVerdictSchema, root.S1MgmtApi.V21AlertsSchemasAlertsIncidentSchema);
  }
}(this, function(ApiClient, AffectedResultsSchema200, NoDataSchema400, NoDataSchema401, V21AlertsSchemasAlertInformationSchemaMany200, V21AlertsSchemasAlertsAnalystVerdictSchema, V21AlertsSchemasAlertsIncidentSchema) {
  'use strict';

  /**
   * Alerts service.
   * @module api/AlertsApi
   * @version 2.1
   */

  /**
   * Constructs a new AlertsApi. 
   * @alias module:api/AlertsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiCloudDetectionAlertsAnalystVerdictPost operation.
     * @callback module:api/AlertsApi~webApiCloudDetectionAlertsAnalystVerdictPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Alert Analyst Verdict
     * Change the verdict of an alert
     * @param {Object} opts Optional parameters
     * @param {module:model/V21AlertsSchemasAlertsAnalystVerdictSchema} opts.body 
     * @param {module:api/AlertsApi~webApiCloudDetectionAlertsAnalystVerdictPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiCloudDetectionAlertsAnalystVerdictPost = function(opts, callback) {
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
        '/web/api/v2.1/cloud-detection/alerts/analyst-verdict', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionAlertsGet operation.
     * @callback module:api/AlertsApi~webApiCloudDetectionAlertsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V21AlertsSchemasAlertInformationSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alerts
     * Get a list of alerts for a given scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Array.<String>} opts.containerImageNameContains Free-text filter by the endpoint container image name (supports multiple values)
     * @param {Date} opts.reportedAtGte Reported at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {Date} opts.reportedAtLte Reported at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.sourceProcessNameContains Free-text filter by source process name. Example: \"proc1.exe\".
     * @param {Array.<module:model/String>} opts.incidentStatus Filter threats by a incident status. Example: \"IN_PROGRESS\".
     * @param {Array.<String>} opts.sourceProcessCommandlineContains Free-text filter by source commandline. Example: \"rule1\".
     * @param {Date} opts.createdAtLte Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.k8sNamespaceLabelsContains Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values)
     * @param {Array.<String>} opts.k8sPodContains Free-text filter by the endpoint Kubernetes pod name (supports multiple values)
     * @param {Date} opts.reportedAtGt Reported at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.sourceProcessFileHashSha1Contains Free-text filter by source sha1. Example: \"rule1\".
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {Array.<String>} opts.k8sNodeContains Free-text filter by the endpoint Kubernetes node name (supports multiple values)
     * @param {Date} opts.createdAtGt Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Array.<String>} opts.origAgentUuidContains Free-text filter by agent UUID. Example: \"win7\".
     * @param {Array.<String>} opts.sourceProcessFileHashMd5Contains Free-text filter by source md5. Example: \"rule1\".
     * @param {String} opts.query Full text search for all fields
     * @param {Array.<module:model/String>} opts.osType Included OS types
     * @param {Array.<String>} opts.containerNameContains Free-text filter by the endpoint container name (supports multiple values)
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {Array.<module:model/String>} opts.analystVerdict Filter threats by a analyst verdict. Example: \"TRUE_POSITIVE\".
     * @param {Date} opts.createdAtLt Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.origAgentNameContains Free-text filter by agent name. Example: \"ilia\".
     * @param {Array.<String>} opts.ruleNameContains Free-text filter by rule name. Example: \"rule1\".
     * @param {Array.<String>} opts.origAgentOsRevisionContains Free-text filter by agent OS revision. Example: \"win7\".
     * @param {Array.<String>} opts.sourceProcessFilePathContains Free-text filter by source file path. Example: \"rule1\".
     * @param {Array.<String>} opts.k8sControllerLabelsContains Free-text filter by the endpoint Kubernetes controller labels (supports multiple values)
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.containerLabelsContains Free-text filter by the endpoint container labels (supports multiple values)
     * @param {Array.<String>} opts.k8sNamespaceNameContains Free-text filter by the endpoint Kubernetes namespace name (supports multiple values)
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.machineType agent machine type
     * @param {Array.<String>} opts.k8sControllerNameContains Free-text filter by the endpoint Kubernetes controller name (supports multiple values)
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {Boolean} opts.disablePagination If true, all rules for requested scope will be returned
     * @param {Array.<module:model/String>} opts.severity Severity. Example: \"Low\".
     * @param {Array.<String>} opts.k8sClusterContains Free-text filter by the endpoint Kubernetes cluster name (supports multiple values)
     * @param {Array.<String>} opts.ids A list of Alert IDs. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<module:model/String>} opts.scopes Filter results by scope. Example: \"account\".
     * @param {Date} opts.createdAtGte Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.sourceProcessStorylineContains Free-text filter by source storyline. Example: \"rule1\".
     * @param {Array.<String>} opts.origAgentVersionContains Free-text filter by agent OS version. Example: \"7.11\".
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {Date} opts.reportedAtLt Reported at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.k8sPodLabelsContains Free-text filter by the endpoint Kubernetes pod labels (supports multiple values)
     * @param {Array.<String>} opts.sourceProcessFileHashSha256Contains Free-text filter by source sha255. Example: \"rule1\".
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {module:api/AlertsApi~webApiCloudDetectionAlertsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V21AlertsSchemasAlertInformationSchemaMany200}
     */
    this.webApiCloudDetectionAlertsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'reportedAt__gte': opts['reportedAtGte'],
        'tenant': opts['tenant'],
        'reportedAt__lte': opts['reportedAtLte'],
        'createdAt__lte': opts['createdAtLte'],
        'reportedAt__gt': opts['reportedAtGt'],
        'cursor': opts['cursor'],
        'createdAt__gt': opts['createdAtGt'],
        'sortOrder': opts['sortOrder'],
        'query': opts['query'],
        'sortBy': opts['sortBy'],
        'createdAt__lt': opts['createdAtLt'],
        'skipCount': opts['skipCount'],
        'disablePagination': opts['disablePagination'],
        'createdAt__gte': opts['createdAtGte'],
        'skip': opts['skip'],
        'reportedAt__lt': opts['reportedAtLt'],
        'countOnly': opts['countOnly'],
      };
      var collectionQueryParams = {
        'containerImageName__contains': {
          value: opts['containerImageNameContains'],
          collectionFormat: 'csv'
        },
        'sourceProcessName__contains': {
          value: opts['sourceProcessNameContains'],
          collectionFormat: 'csv'
        },
        'incidentStatus': {
          value: opts['incidentStatus'],
          collectionFormat: 'csv'
        },
        'sourceProcessCommandline__contains': {
          value: opts['sourceProcessCommandlineContains'],
          collectionFormat: 'csv'
        },
        'k8sNamespaceLabels__contains': {
          value: opts['k8sNamespaceLabelsContains'],
          collectionFormat: 'csv'
        },
        'k8sPod__contains': {
          value: opts['k8sPodContains'],
          collectionFormat: 'csv'
        },
        'sourceProcessFileHashSha1__contains': {
          value: opts['sourceProcessFileHashSha1Contains'],
          collectionFormat: 'csv'
        },
        'k8sNode__contains': {
          value: opts['k8sNodeContains'],
          collectionFormat: 'csv'
        },
        'origAgentUuid__contains': {
          value: opts['origAgentUuidContains'],
          collectionFormat: 'csv'
        },
        'sourceProcessFileHashMd5__contains': {
          value: opts['sourceProcessFileHashMd5Contains'],
          collectionFormat: 'csv'
        },
        'osType': {
          value: opts['osType'],
          collectionFormat: 'csv'
        },
        'containerName__contains': {
          value: opts['containerNameContains'],
          collectionFormat: 'csv'
        },
        'analystVerdict': {
          value: opts['analystVerdict'],
          collectionFormat: 'csv'
        },
        'origAgentName__contains': {
          value: opts['origAgentNameContains'],
          collectionFormat: 'csv'
        },
        'ruleName__contains': {
          value: opts['ruleNameContains'],
          collectionFormat: 'csv'
        },
        'origAgentOsRevision__contains': {
          value: opts['origAgentOsRevisionContains'],
          collectionFormat: 'csv'
        },
        'sourceProcessFilePath__contains': {
          value: opts['sourceProcessFilePathContains'],
          collectionFormat: 'csv'
        },
        'k8sControllerLabels__contains': {
          value: opts['k8sControllerLabelsContains'],
          collectionFormat: 'csv'
        },
        'siteIds': {
          value: opts['siteIds'],
          collectionFormat: 'csv'
        },
        'containerLabels__contains': {
          value: opts['containerLabelsContains'],
          collectionFormat: 'csv'
        },
        'k8sNamespaceName__contains': {
          value: opts['k8sNamespaceNameContains'],
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
        'machineType': {
          value: opts['machineType'],
          collectionFormat: 'csv'
        },
        'k8sControllerName__contains': {
          value: opts['k8sControllerNameContains'],
          collectionFormat: 'csv'
        },
        'severity': {
          value: opts['severity'],
          collectionFormat: 'csv'
        },
        'k8sCluster__contains': {
          value: opts['k8sClusterContains'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'scopes': {
          value: opts['scopes'],
          collectionFormat: 'csv'
        },
        'sourceProcessStoryline__contains': {
          value: opts['sourceProcessStorylineContains'],
          collectionFormat: 'csv'
        },
        'origAgentVersion__contains': {
          value: opts['origAgentVersionContains'],
          collectionFormat: 'csv'
        },
        'k8sPodLabels__contains': {
          value: opts['k8sPodLabelsContains'],
          collectionFormat: 'csv'
        },
        'sourceProcessFileHashSha256__contains': {
          value: opts['sourceProcessFileHashSha256Contains'],
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
      var returnType = V21AlertsSchemasAlertInformationSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/cloud-detection/alerts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiCloudDetectionAlertsIncidentPost operation.
     * @callback module:api/AlertsApi~webApiCloudDetectionAlertsIncidentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AffectedResultsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Threat Incident
     * Update the incident details of an alert.
     * @param {Object} opts Optional parameters
     * @param {module:model/V21AlertsSchemasAlertsIncidentSchema} opts.body 
     * @param {module:api/AlertsApi~webApiCloudDetectionAlertsIncidentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AffectedResultsSchema200}
     */
    this.webApiCloudDetectionAlertsIncidentPost = function(opts, callback) {
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
        '/web/api/v2.1/cloud-detection/alerts/incident', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
