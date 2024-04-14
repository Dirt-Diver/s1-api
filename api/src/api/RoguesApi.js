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
    define(['ApiClient', 'model/NoDataSchema400', 'model/NoDataSchema401', 'model/NoDataSchema403', 'model/RogueSchemasPutRoguesSchema', 'model/RogueSchemasRoguesSettingsSchema200', 'model/RogueSchemasRoguesTableViewSchemaMany200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NoDataSchema400'), require('../model/NoDataSchema401'), require('../model/NoDataSchema403'), require('../model/RogueSchemasPutRoguesSchema'), require('../model/RogueSchemasRoguesSettingsSchema200'), require('../model/RogueSchemasRoguesTableViewSchemaMany200'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RoguesApi = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.NoDataSchema400, root.S1MgmtApi.NoDataSchema401, root.S1MgmtApi.NoDataSchema403, root.S1MgmtApi.RogueSchemasPutRoguesSchema, root.S1MgmtApi.RogueSchemasRoguesSettingsSchema200, root.S1MgmtApi.RogueSchemasRoguesTableViewSchemaMany200);
  }
}(this, function(ApiClient, NoDataSchema400, NoDataSchema401, NoDataSchema403, RogueSchemasPutRoguesSchema, RogueSchemasRoguesSettingsSchema200, RogueSchemasRoguesTableViewSchemaMany200) {
  'use strict';

  /**
   * Rogues service.
   * @module api/RoguesApi
   * @version 2.1
   */

  /**
   * Constructs a new RoguesApi. 
   * @alias module:api/RoguesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webApiRoguesReportCsvGet operation.
     * @callback module:api/RoguesApi~webApiRoguesReportCsvGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export Rogues Data
     * Export Rogues data to CSV. You can set filters to get only relevant data. The response sends the CSV data as text.
     * @param {Object} opts Optional parameters
     * @param {String} opts.externalIp Search using external IP
     * @param {Array.<String>} opts.hostnamesContains Free-text filter by hostanem (supports multiple values). Example: \"s1_host,SomeHost\".
     * @param {String} opts.osVersion Os version
     * @param {Array.<String>} opts.deviceTypes Device types
     * @param {Array.<String>} opts.ids List of device ids. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.query Query
     * @param {Array.<String>} opts.osVersionContains Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
     * @param {Array.<String>} opts.externalIpContains Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
     * @param {Date} opts.firstSeenLte Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.osTypes Included OS types
     * @param {Date} opts.lastSeenGt Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.manufacturerContains Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
     * @param {String} opts.firstSeenBetween Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
     * @param {Array.<String>} opts.hostnames Hostnames
     * @param {Array.<String>} opts.localIpContains Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
     * @param {Date} opts.lastSeenLte Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.firstSeenGt Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.macAddress A mac address to search for
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Date} opts.firstSeenLt Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.localIp Search using local IP
     * @param {Date} opts.lastSeenGte Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.manufacturer Manufacturer of the device or network interface
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.osType OS type
     * @param {Date} opts.firstSeenGte Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.macAddressContains Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
     * @param {String} opts.lastSeenBetween Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
     * @param {String} opts.deviceType Device type. Example: \"Server/Workstation/...\".
     * @param {Date} opts.lastSeenLt Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.osName Os name
     * @param {module:api/RoguesApi~webApiRoguesReportCsvGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webApiRoguesReportCsvGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'externalIp': opts['externalIp'],
        'osVersion': opts['osVersion'],
        'query': opts['query'],
        'firstSeen__lte': opts['firstSeenLte'],
        'lastSeen__gt': opts['lastSeenGt'],
        'firstSeen__between': opts['firstSeenBetween'],
        'lastSeen__lte': opts['lastSeenLte'],
        'firstSeen__gt': opts['firstSeenGt'],
        'macAddress': opts['macAddress'],
        'tenant': opts['tenant'],
        'firstSeen__lt': opts['firstSeenLt'],
        'localIp': opts['localIp'],
        'lastSeen__gte': opts['lastSeenGte'],
        'manufacturer': opts['manufacturer'],
        'osType': opts['osType'],
        'firstSeen__gte': opts['firstSeenGte'],
        'lastSeen__between': opts['lastSeenBetween'],
        'deviceType': opts['deviceType'],
        'lastSeen__lt': opts['lastSeenLt'],
        'osName': opts['osName'],
      };
      var collectionQueryParams = {
        'hostnames__contains': {
          value: opts['hostnamesContains'],
          collectionFormat: 'csv'
        },
        'deviceTypes': {
          value: opts['deviceTypes'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'osVersion__contains': {
          value: opts['osVersionContains'],
          collectionFormat: 'csv'
        },
        'externalIp__contains': {
          value: opts['externalIpContains'],
          collectionFormat: 'csv'
        },
        'osTypes': {
          value: opts['osTypes'],
          collectionFormat: 'csv'
        },
        'manufacturer__contains': {
          value: opts['manufacturerContains'],
          collectionFormat: 'csv'
        },
        'hostnames': {
          value: opts['hostnames'],
          collectionFormat: 'csv'
        },
        'localIp__contains': {
          value: opts['localIpContains'],
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
        'macAddress__contains': {
          value: opts['macAddressContains'],
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
        '/web/api/v2.1/rogues/report/csv', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRoguesSettingsGet operation.
     * @callback module:api/RoguesApi~webApiRoguesSettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RogueSchemasRoguesSettingsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Rogues Settings
     * Rogues gives full visibility of all unsecured devices connected to your network. Rogues scans your corporate environment to identify and manage connected devices, even those not protected by or supported by SentinelOne. Rogues identifies devices as:<BR> * UnSecured - End-user computer or laptop, or server, without a SentinelOne Agent.<BR> When you install Windows Agents with Rogues, the Agents can become scanners. Selected scanners from networks that you enable for scanning find connected devices with passive and active scan techniques. The scanners send the collected data to Rogues on the Management. Rogues then runs fingerprinting to identify and classify unique devices and to update the Device Inventory Table in the Management Console. With port scanning, it is important that you understand the legal and ethical considerations and that you document a Rogues plan and implementation. See Legal Considerations and Proper Implementation in the Console Help.<BR> * minAgentsInNetworkToScan - To help you determine which networks are corporate, Rogues looks at the number of secured endpoints (Agents) in a network. If there are not enough Agents in a network - set by this parameter value - Rogues considers the network to be non-corporate and will not scan it.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {module:api/RoguesApi~webApiRoguesSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RogueSchemasRoguesSettingsSchema200}
     */
    this.webApiRoguesSettingsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiTokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RogueSchemasRoguesSettingsSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rogues/settings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRoguesSettingsPut operation.
     * @callback module:api/RoguesApi~webApiRoguesSettingsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RogueSchemasRoguesSettingsSchema200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Rogues Settings
     * Change the Rogues Settings. Best Practice: Get the current settings before you change them. See: Get Rogues Settings.
     * @param {Object} opts Optional parameters
     * @param {module:model/RogueSchemasPutRoguesSchema} opts.body 
     * @param {module:api/RoguesApi~webApiRoguesSettingsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RogueSchemasRoguesSettingsSchema200}
     */
    this.webApiRoguesSettingsPut = function(opts, callback) {
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
      var returnType = RogueSchemasRoguesSettingsSchema200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rogues/settings', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webApiRoguesTableViewGet operation.
     * @callback module:api/RoguesApi~webApiRoguesTableViewGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RogueSchemasRoguesTableViewSchemaMany200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Rogues Table
     * Get the data for each row in the Rogues Device Inventory Table. <BR>Best practice: Set filters. Each row is a set of parameters that quickly fills the pagination limits.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". (default to null)
     * @param {String} opts.externalIp Search using external IP
     * @param {Array.<String>} opts.hostnamesContains Free-text filter by hostanem (supports multiple values). Example: \"s1_host,SomeHost\".
     * @param {String} opts.osVersion Os version
     * @param {Array.<String>} opts.ids List of device ids. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.deviceTypes Device types
     * @param {String} opts.query Query
     * @param {Boolean} opts.countOnly If true, only total number of items will be returned, without any of the actual objects. (default to false)
     * @param {Number} opts.limit Limit number of returned items (1-1000). Example: \"10\". (default to 10)
     * @param {Array.<String>} opts.osVersionContains Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
     * @param {Array.<String>} opts.externalIpContains Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
     * @param {Date} opts.firstSeenLte Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.osTypes Included OS types
     * @param {Number} opts.skip Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
     * @param {Boolean} opts.skipCount If true, total number of items will not be calculated, which speeds up execution time. (default to null)
     * @param {Date} opts.lastSeenGt Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {module:model/String} opts.sortOrder Sort direction. Example: \"asc\". (default to null)
     * @param {Array.<String>} opts.manufacturerContains Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
     * @param {String} opts.firstSeenBetween Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
     * @param {Array.<String>} opts.hostnames Hostnames
     * @param {Array.<String>} opts.localIpContains Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
     * @param {Date} opts.lastSeenLte Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Date} opts.firstSeenGt Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {module:model/String} opts.sortBy The column to sort the results by. Example: \"id\". (default to null)
     * @param {String} opts.macAddress A mac address to search for
     * @param {Boolean} opts.tenant Indicates a tenant scope request
     * @param {Array.<String>} opts.groupIds List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Date} opts.firstSeenLt Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.localIp Search using local IP
     * @param {Date} opts.lastSeenGte Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.manufacturer Manufacturer of the device or network interface
     * @param {Array.<String>} opts.siteIds List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {Array.<String>} opts.accountIds List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
     * @param {String} opts.osType OS type
     * @param {Date} opts.firstSeenGte Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {Array.<String>} opts.macAddressContains Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
     * @param {String} opts.lastSeenBetween Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
     * @param {String} opts.deviceType Device type. Example: \"Server/Workstation/...\".
     * @param {Date} opts.lastSeenLt Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
     * @param {String} opts.osName Os name
     * @param {module:api/RoguesApi~webApiRoguesTableViewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RogueSchemasRoguesTableViewSchemaMany200}
     */
    this.webApiRoguesTableViewGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'cursor': opts['cursor'],
        'externalIp': opts['externalIp'],
        'osVersion': opts['osVersion'],
        'query': opts['query'],
        'countOnly': opts['countOnly'],
        'limit': opts['limit'],
        'firstSeen__lte': opts['firstSeenLte'],
        'skip': opts['skip'],
        'skipCount': opts['skipCount'],
        'lastSeen__gt': opts['lastSeenGt'],
        'sortOrder': opts['sortOrder'],
        'firstSeen__between': opts['firstSeenBetween'],
        'lastSeen__lte': opts['lastSeenLte'],
        'firstSeen__gt': opts['firstSeenGt'],
        'sortBy': opts['sortBy'],
        'macAddress': opts['macAddress'],
        'tenant': opts['tenant'],
        'firstSeen__lt': opts['firstSeenLt'],
        'localIp': opts['localIp'],
        'lastSeen__gte': opts['lastSeenGte'],
        'manufacturer': opts['manufacturer'],
        'osType': opts['osType'],
        'firstSeen__gte': opts['firstSeenGte'],
        'lastSeen__between': opts['lastSeenBetween'],
        'deviceType': opts['deviceType'],
        'lastSeen__lt': opts['lastSeenLt'],
        'osName': opts['osName'],
      };
      var collectionQueryParams = {
        'hostnames__contains': {
          value: opts['hostnamesContains'],
          collectionFormat: 'csv'
        },
        'ids': {
          value: opts['ids'],
          collectionFormat: 'csv'
        },
        'deviceTypes': {
          value: opts['deviceTypes'],
          collectionFormat: 'csv'
        },
        'osVersion__contains': {
          value: opts['osVersionContains'],
          collectionFormat: 'csv'
        },
        'externalIp__contains': {
          value: opts['externalIpContains'],
          collectionFormat: 'csv'
        },
        'osTypes': {
          value: opts['osTypes'],
          collectionFormat: 'csv'
        },
        'manufacturer__contains': {
          value: opts['manufacturerContains'],
          collectionFormat: 'csv'
        },
        'hostnames': {
          value: opts['hostnames'],
          collectionFormat: 'csv'
        },
        'localIp__contains': {
          value: opts['localIpContains'],
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
        'macAddress__contains': {
          value: opts['macAddressContains'],
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
      var returnType = RogueSchemasRoguesTableViewSchemaMany200;

      return this.apiClient.callApi(
        '/web/api/v2.1/rogues/table-view', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
