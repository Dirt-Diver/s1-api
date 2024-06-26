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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SchemasDeviceReviewSchemaFilter = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SchemasDeviceReviewSchemaFilter model module.
   * @module model/SchemasDeviceReviewSchemaFilter
   * @version 2.1
   */

  /**
   * Constructs a new <code>SchemasDeviceReviewSchemaFilter</code>.
   * Filter
   * @alias module:model/SchemasDeviceReviewSchemaFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SchemasDeviceReviewSchemaFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchemasDeviceReviewSchemaFilter} obj Optional instance to populate.
   * @return {module:model/SchemasDeviceReviewSchemaFilter} The populated <code>SchemasDeviceReviewSchemaFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hasUserLabel'))
        obj.hasUserLabel = ApiClient.convertToType(data['hasUserLabel'], 'Boolean');
      if (data.hasOwnProperty('agentIds'))
        obj.agentIds = ApiClient.convertToType(data['agentIds'], ['String']);
      if (data.hasOwnProperty('externalIp'))
        obj.externalIp = ApiClient.convertToType(data['externalIp'], 'String');
      if (data.hasOwnProperty('managedState'))
        obj.managedState = ApiClient.convertToType(data['managedState'], 'String');
      if (data.hasOwnProperty('discoveryMethods'))
        obj.discoveryMethods = ApiClient.convertToType(data['discoveryMethods'], ['String']);
      if (data.hasOwnProperty('udpPorts__contains'))
        obj.udpPortsContains = ApiClient.convertToType(data['udpPorts__contains'], ['Number']);
      if (data.hasOwnProperty('hostnames__contains'))
        obj.hostnamesContains = ApiClient.convertToType(data['hostnames__contains'], ['String']);
      if (data.hasOwnProperty('osVersion'))
        obj.osVersion = ApiClient.convertToType(data['osVersion'], 'String');
      if (data.hasOwnProperty('deviceTypes'))
        obj.deviceTypes = ApiClient.convertToType(data['deviceTypes'], ['String']);
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (data.hasOwnProperty('networkName__contains'))
        obj.networkNameContains = ApiClient.convertToType(data['networkName__contains'], ['String']);
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('networkName'))
        obj.networkName = ApiClient.convertToType(data['networkName'], 'String');
      if (data.hasOwnProperty('osVersion__contains'))
        obj.osVersionContains = ApiClient.convertToType(data['osVersion__contains'], ['String']);
      if (data.hasOwnProperty('externalIp__contains'))
        obj.externalIpContains = ApiClient.convertToType(data['externalIp__contains'], ['String']);
      if (data.hasOwnProperty('firstSeen__lte'))
        obj.firstSeenLte = ApiClient.convertToType(data['firstSeen__lte'], 'Date');
      if (data.hasOwnProperty('osTypes'))
        obj.osTypes = ApiClient.convertToType(data['osTypes'], ['String']);
      if (data.hasOwnProperty('deviceReviews'))
        obj.deviceReviews = ApiClient.convertToType(data['deviceReviews'], ['String']);
      if (data.hasOwnProperty('gatewayMacAddress'))
        obj.gatewayMacAddress = ApiClient.convertToType(data['gatewayMacAddress'], 'String');
      if (data.hasOwnProperty('osName'))
        obj.osName = ApiClient.convertToType(data['osName'], 'String');
      if (data.hasOwnProperty('lastSeen__gt'))
        obj.lastSeenGt = ApiClient.convertToType(data['lastSeen__gt'], 'Date');
      if (data.hasOwnProperty('manufacturer__contains'))
        obj.manufacturerContains = ApiClient.convertToType(data['manufacturer__contains'], ['String']);
      if (data.hasOwnProperty('period'))
        obj.period = ApiClient.convertToType(data['period'], 'String');
      if (data.hasOwnProperty('firstSeen__between'))
        obj.firstSeenBetween = ApiClient.convertToType(data['firstSeen__between'], 'String');
      if (data.hasOwnProperty('hostnames'))
        obj.hostnames = ApiClient.convertToType(data['hostnames'], ['String']);
      if (data.hasOwnProperty('localIp__contains'))
        obj.localIpContains = ApiClient.convertToType(data['localIp__contains'], ['String']);
      if (data.hasOwnProperty('deviceFunction__contains'))
        obj.deviceFunctionContains = ApiClient.convertToType(data['deviceFunction__contains'], ['String']);
      if (data.hasOwnProperty('tcpPorts__contains'))
        obj.tcpPortsContains = ApiClient.convertToType(data['tcpPorts__contains'], ['Number']);
      if (data.hasOwnProperty('lastSeen__lte'))
        obj.lastSeenLte = ApiClient.convertToType(data['lastSeen__lte'], 'Date');
      if (data.hasOwnProperty('knownFingerprintingData'))
        obj.knownFingerprintingData = ApiClient.convertToType(data['knownFingerprintingData'], ['String']);
      if (data.hasOwnProperty('firstSeen__gt'))
        obj.firstSeenGt = ApiClient.convertToType(data['firstSeen__gt'], 'Date');
      if (data.hasOwnProperty('macAddress'))
        obj.macAddress = ApiClient.convertToType(data['macAddress'], 'String');
      if (data.hasOwnProperty('firstSeen__lt'))
        obj.firstSeenLt = ApiClient.convertToType(data['firstSeen__lt'], 'Date');
      if (data.hasOwnProperty('localIp'))
        obj.localIp = ApiClient.convertToType(data['localIp'], 'String');
      if (data.hasOwnProperty('managedStates'))
        obj.managedStates = ApiClient.convertToType(data['managedStates'], ['String']);
      if (data.hasOwnProperty('lastSeen__gte'))
        obj.lastSeenGte = ApiClient.convertToType(data['lastSeen__gte'], 'Date');
      if (data.hasOwnProperty('manufacturer'))
        obj.manufacturer = ApiClient.convertToType(data['manufacturer'], 'String');
      if (data.hasOwnProperty('subnetAddress__contains'))
        obj.subnetAddressContains = ApiClient.convertToType(data['subnetAddress__contains'], ['String']);
      if (data.hasOwnProperty('siteIds'))
        obj.siteIds = ApiClient.convertToType(data['siteIds'], ['String']);
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['String']);
      if (data.hasOwnProperty('gatewayMacAddress__contains'))
        obj.gatewayMacAddressContains = ApiClient.convertToType(data['gatewayMacAddress__contains'], ['String']);
      if (data.hasOwnProperty('osType'))
        obj.osType = ApiClient.convertToType(data['osType'], 'String');
      if (data.hasOwnProperty('firstSeen__gte'))
        obj.firstSeenGte = ApiClient.convertToType(data['firstSeen__gte'], 'Date');
      if (data.hasOwnProperty('macAddress__contains'))
        obj.macAddressContains = ApiClient.convertToType(data['macAddress__contains'], ['String']);
      if (data.hasOwnProperty('lastSeen__between'))
        obj.lastSeenBetween = ApiClient.convertToType(data['lastSeen__between'], 'String');
      if (data.hasOwnProperty('deviceType'))
        obj.deviceType = ApiClient.convertToType(data['deviceType'], 'String');
      if (data.hasOwnProperty('lastSeen__lt'))
        obj.lastSeenLt = ApiClient.convertToType(data['lastSeen__lt'], 'Date');
      if (data.hasOwnProperty('tagName__contains'))
        obj.tagNameContains = ApiClient.convertToType(data['tagName__contains'], ['String']);
      if (data.hasOwnProperty('domains'))
        obj.domains = ApiClient.convertToType(data['domains'], ['String']);
      if (data.hasOwnProperty('siteNames'))
        obj.siteNames = ApiClient.convertToType(data['siteNames'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Boolean} hasUserLabel
   */
  exports.prototype.hasUserLabel = undefined;

  /**
   * List of agent ids
   * @member {Array.<String>} agentIds
   */
  exports.prototype.agentIds = undefined;

  /**
   * Search using external IP
   * @member {String} externalIp
   */
  exports.prototype.externalIp = undefined;

  /**
   * Is the device managed
   * @member {String} managedState
   */
  exports.prototype.managedState = undefined;

  /**
   * Discovery methods
   * @member {Array.<String>} discoveryMethods
   */
  exports.prototype.discoveryMethods = undefined;

  /**
   * Free-text filter by udp port (supports multiple values)
   * @member {Array.<Number>} udpPortsContains
   */
  exports.prototype.udpPortsContains = undefined;

  /**
   * Free-text filter by hostname (supports multiple values)
   * @member {Array.<String>} hostnamesContains
   */
  exports.prototype.hostnamesContains = undefined;

  /**
   * Os version
   * @member {String} osVersion
   */
  exports.prototype.osVersion = undefined;

  /**
   * Device types
   * @member {Array.<String>} deviceTypes
   */
  exports.prototype.deviceTypes = undefined;

  /**
   * List of device ids
   * @member {Array.<String>} ids
   */
  exports.prototype.ids = undefined;

  /**
   * Free-text filter by network name (supports multiple values)
   * @member {Array.<String>} networkNameContains
   */
  exports.prototype.networkNameContains = undefined;

  /**
   * Query
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * Search using network name
   * @member {String} networkName
   */
  exports.prototype.networkName = undefined;

  /**
   * Free-text filter by OS full name and version (supports multiple values)
   * @member {Array.<String>} osVersionContains
   */
  exports.prototype.osVersionContains = undefined;

  /**
   * Free-text filter by visible IP (supports multiple values)
   * @member {Array.<String>} externalIpContains
   */
  exports.prototype.externalIpContains = undefined;

  /**
   * Devices first seen before or at this timestamp
   * @member {Date} firstSeenLte
   */
  exports.prototype.firstSeenLte = undefined;

  /**
   * Included OS types
   * @member {Array.<String>} osTypes
   */
  exports.prototype.osTypes = undefined;

  /**
   * The device review state
   * @member {Array.<String>} deviceReviews
   */
  exports.prototype.deviceReviews = undefined;

  /**
   * A gateway mac address to search for
   * @member {String} gatewayMacAddress
   */
  exports.prototype.gatewayMacAddress = undefined;

  /**
   * Os name
   * @member {String} osName
   */
  exports.prototype.osName = undefined;

  /**
   * Devices last seen after this timestamp
   * @member {Date} lastSeenGt
   */
  exports.prototype.lastSeenGt = undefined;

  /**
   * Free-text filter by manufacturer (supports multiple values)
   * @member {Array.<String>} manufacturerContains
   */
  exports.prototype.manufacturerContains = undefined;

  /**
   * Period
   * @member {module:model/SchemasDeviceReviewSchemaFilter.PeriodEnum} period
   * @default 'latest'
   */
  exports.prototype.period = 'latest';

  /**
   * Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive)
   * @member {String} firstSeenBetween
   */
  exports.prototype.firstSeenBetween = undefined;

  /**
   * Hostnames
   * @member {Array.<String>} hostnames
   */
  exports.prototype.hostnames = undefined;

  /**
   * Free-text filter by IP Address (supports multiple values)
   * @member {Array.<String>} localIpContains
   */
  exports.prototype.localIpContains = undefined;

  /**
   * Free-text filter by device function (supports multiple values)
   * @member {Array.<String>} deviceFunctionContains
   */
  exports.prototype.deviceFunctionContains = undefined;

  /**
   * Free-text filter by tcp port (supports multiple values)
   * @member {Array.<Number>} tcpPortsContains
   */
  exports.prototype.tcpPortsContains = undefined;

  /**
   * Devices last seen before or at this timestamp
   * @member {Date} lastSeenLte
   */
  exports.prototype.lastSeenLte = undefined;

  /**
   * Known fingerprinting data
   * @member {Array.<module:model/SchemasDeviceReviewSchemaFilter.KnownFingerprintingDataEnum>} knownFingerprintingData
   */
  exports.prototype.knownFingerprintingData = undefined;

  /**
   * Devices first seen after this timestamp
   * @member {Date} firstSeenGt
   */
  exports.prototype.firstSeenGt = undefined;

  /**
   * A mac address to search for
   * @member {String} macAddress
   */
  exports.prototype.macAddress = undefined;

  /**
   * Devices first seen before this timestamp
   * @member {Date} firstSeenLt
   */
  exports.prototype.firstSeenLt = undefined;

  /**
   * Search using local IP
   * @member {String} localIp
   */
  exports.prototype.localIp = undefined;

  /**
   * Is the device managed
   * @member {Array.<String>} managedStates
   */
  exports.prototype.managedStates = undefined;

  /**
   * Devices last seen after or at this timestamp
   * @member {Date} lastSeenGte
   */
  exports.prototype.lastSeenGte = undefined;

  /**
   * Manufacturer of the device or network interface
   * @member {String} manufacturer
   */
  exports.prototype.manufacturer = undefined;

  /**
   * Free-text filter by Subnet Address (supports multiple values)
   * @member {Array.<String>} subnetAddressContains
   */
  exports.prototype.subnetAddressContains = undefined;

  /**
   * Single Site ID to filter by
   * @member {Array.<String>} siteIds
   */
  exports.prototype.siteIds = undefined;

  /**
   * Single Account ID to filter by
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;

  /**
   * Free-text filter by gateway mac address (supports multiple values)
   * @member {Array.<String>} gatewayMacAddressContains
   */
  exports.prototype.gatewayMacAddressContains = undefined;

  /**
   * OS type
   * @member {String} osType
   */
  exports.prototype.osType = undefined;

  /**
   * Devices first seen after or at this timestamp
   * @member {Date} firstSeenGte
   */
  exports.prototype.firstSeenGte = undefined;

  /**
   * Free-text filter by mac address (supports multiple values)
   * @member {Array.<String>} macAddressContains
   */
  exports.prototype.macAddressContains = undefined;

  /**
   * Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive)
   * @member {String} lastSeenBetween
   */
  exports.prototype.lastSeenBetween = undefined;

  /**
   * Device type
   * @member {String} deviceType
   */
  exports.prototype.deviceType = undefined;

  /**
   * Devices last seen before this timestamp
   * @member {Date} lastSeenLt
   */
  exports.prototype.lastSeenLt = undefined;

  /**
   * Free-text filter by tag name (supports multiple values)
   * @member {Array.<String>} tagNameContains
   */
  exports.prototype.tagNameContains = undefined;

  /**
   * Included network domains
   * @member {Array.<String>} domains
   */
  exports.prototype.domains = undefined;

  /**
   * Included site names
   * @member {Array.<String>} siteNames
   */
  exports.prototype.siteNames = undefined;



  /**
   * Allowed values for the <code>period</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeriodEnum = {
    /**
     * value: "latest"
     * @const
     */
    latest: "latest",

    /**
     * value: "last12h"
     * @const
     */
    last12h: "last12h",

    /**
     * value: "last24h"
     * @const
     */
    last24h: "last24h",

    /**
     * value: "last3d"
     * @const
     */
    last3d: "last3d",

    /**
     * value: "last7d"
     * @const
     */
    last7d: "last7d"
  };


  /**
   * Allowed values for the <code>knownFingerprintingData</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KnownFingerprintingDataEnum = {
    /**
     * value: "Manufacturer"
     * @const
     */
    manufacturer: "Manufacturer",

    /**
     * value: "Hostname"
     * @const
     */
    hostname: "Hostname",

    /**
     * value: "OS version"
     * @const
     */
    oSVersion: "OS version",

    /**
     * value: "MAC Address"
     * @const
     */
    mACAddress: "MAC Address"
  };

  return exports;

}));
