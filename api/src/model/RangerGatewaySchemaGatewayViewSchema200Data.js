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
    define(['ApiClient', 'model/SchemasRangerSettingsSchema200DataRestrictions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SchemasRangerSettingsSchema200DataRestrictions'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RangerGatewaySchemaGatewayViewSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SchemasRangerSettingsSchema200DataRestrictions);
  }
}(this, function(ApiClient, SchemasRangerSettingsSchema200DataRestrictions) {
  'use strict';

  /**
   * The RangerGatewaySchemaGatewayViewSchema200Data model module.
   * @module model/RangerGatewaySchemaGatewayViewSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerGatewaySchemaGatewayViewSchema200Data</code>.
   * Response data
   * @alias module:model/RangerGatewaySchemaGatewayViewSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RangerGatewaySchemaGatewayViewSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerGatewaySchemaGatewayViewSchema200Data} obj Optional instance to populate.
   * @return {module:model/RangerGatewaySchemaGatewayViewSchema200Data} The populated <code>RangerGatewaySchemaGatewayViewSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('snmpScan'))
        obj.snmpScan = ApiClient.convertToType(data['snmpScan'], 'Boolean');
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'Number');
      if (data.hasOwnProperty('icmpScan'))
        obj.icmpScan = ApiClient.convertToType(data['icmpScan'], 'Boolean');
      if (data.hasOwnProperty('tcpPorts'))
        obj.tcpPorts = ApiClient.convertToType(data['tcpPorts'], ['Number']);
      if (data.hasOwnProperty('scanOnlyLocalSubnets'))
        obj.scanOnlyLocalSubnets = ApiClient.convertToType(data['scanOnlyLocalSubnets'], 'Boolean');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'Number');
      if (data.hasOwnProperty('archived'))
        obj.archived = ApiClient.convertToType(data['archived'], 'Boolean');
      if (data.hasOwnProperty('smbScan'))
        obj.smbScan = ApiClient.convertToType(data['smbScan'], 'Boolean');
      if (data.hasOwnProperty('accountName'))
        obj.accountName = ApiClient.convertToType(data['accountName'], 'String');
      if (data.hasOwnProperty('agentPercentage'))
        obj.agentPercentage = ApiClient.convertToType(data['agentPercentage'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('udpPortScan'))
        obj.udpPortScan = ApiClient.convertToType(data['udpPortScan'], 'Boolean');
      if (data.hasOwnProperty('udpPorts'))
        obj.udpPorts = ApiClient.convertToType(data['udpPorts'], ['Number']);
      if (data.hasOwnProperty('externalIp'))
        obj.externalIp = ApiClient.convertToType(data['externalIp'], 'String');
      if (data.hasOwnProperty('rdnsScan'))
        obj.rdnsScan = ApiClient.convertToType(data['rdnsScan'], 'Boolean');
      if (data.hasOwnProperty('totalAgents'))
        obj.totalAgents = ApiClient.convertToType(data['totalAgents'], 'Number');
      if (data.hasOwnProperty('allowScan'))
        obj.allowScan = ApiClient.convertToType(data['allowScan'], 'Boolean');
      if (data.hasOwnProperty('multiScanSsdp'))
        obj.multiScanSsdp = ApiClient.convertToType(data['multiScanSsdp'], 'Boolean');
      if (data.hasOwnProperty('new'))
        obj._new = ApiClient.convertToType(data['new'], 'Boolean');
      if (data.hasOwnProperty('macAddress'))
        obj.macAddress = ApiClient.convertToType(data['macAddress'], 'String');
      if (data.hasOwnProperty('discoveryMethod'))
        obj.discoveryMethod = ApiClient.convertToType(data['discoveryMethod'], 'String');
      if (data.hasOwnProperty('manufacturer'))
        obj.manufacturer = ApiClient.convertToType(data['manufacturer'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
      if (data.hasOwnProperty('tcpPortScan'))
        obj.tcpPortScan = ApiClient.convertToType(data['tcpPortScan'], 'Boolean');
      if (data.hasOwnProperty('connectedRangers'))
        obj.connectedRangers = ApiClient.convertToType(data['connectedRangers'], 'Number');
      if (data.hasOwnProperty('numberOfRangers'))
        obj.numberOfRangers = ApiClient.convertToType(data['numberOfRangers'], 'Number');
      if (data.hasOwnProperty('networkName'))
        obj.networkName = ApiClient.convertToType(data['networkName'], 'String');
      if (data.hasOwnProperty('numberOfAgents'))
        obj.numberOfAgents = ApiClient.convertToType(data['numberOfAgents'], 'Number');
      if (data.hasOwnProperty('restrictions'))
        obj.restrictions = ApiClient.convertToType(data['restrictions'], [SchemasRangerSettingsSchema200DataRestrictions]);
      if (data.hasOwnProperty('inheritSettings'))
        obj.inheritSettings = ApiClient.convertToType(data['inheritSettings'], 'Boolean');
      if (data.hasOwnProperty('mdnsScan'))
        obj.mdnsScan = ApiClient.convertToType(data['mdnsScan'], 'Boolean');
      if (data.hasOwnProperty('expiryDate'))
        obj.expiryDate = ApiClient.convertToType(data['expiryDate'], 'Date');
    }
    return obj;
  }

  /**
   * SNMP scan enabled
   * @member {Boolean} snmpScan
   */
  exports.prototype.snmpScan = undefined;

  /**
   * The Account Id
   * @member {Number} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * ICMP scan enabled
   * @member {Boolean} icmpScan
   */
  exports.prototype.icmpScan = undefined;

  /**
   * Allowed TCP ports
   * @member {Array.<Number>} tcpPorts
   */
  exports.prototype.tcpPorts = undefined;

  /**
   * Allow remote tasks form this network
   * @member {Boolean} scanOnlyLocalSubnets
   */
  exports.prototype.scanOnlyLocalSubnets = undefined;

  /**
   * The Site Id
   * @member {Number} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Archived network
   * @member {Boolean} archived
   */
  exports.prototype.archived = undefined;

  /**
   * SMB scan enabled
   * @member {Boolean} smbScan
   */
  exports.prototype.smbScan = undefined;

  /**
   * Account name
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * Percentage of agents of the account in this network calculated as numberOfAgents/totalAgents * 100
   * @member {Number} agentPercentage
   */
  exports.prototype.agentPercentage = undefined;

  /**
   * The gateway id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * UDP Port scan enabled
   * @member {Boolean} udpPortScan
   */
  exports.prototype.udpPortScan = undefined;

  /**
   * Allowed UDP ports
   * @member {Array.<Number>} udpPorts
   */
  exports.prototype.udpPorts = undefined;

  /**
   * The gateway external Ip
   * @member {String} externalIp
   */
  exports.prototype.externalIp = undefined;

  /**
   * RDNS scan enabled
   * @member {Boolean} rdnsScan
   */
  exports.prototype.rdnsScan = undefined;

  /**
   * The total of non decommissioned agents in the account
   * @member {Number} totalAgents
   */
  exports.prototype.totalAgents = undefined;

  /**
   * Do we allow scanning in this network
   * @member {Boolean} allowScan
   */
  exports.prototype.allowScan = undefined;

  /**
   * Multicast SSDP scan enabled
   * @member {Boolean} multiScanSsdp
   */
  exports.prototype.multiScanSsdp = undefined;

  /**
   * True if this is network was first seen some days ago, 3 by default
   * @member {Boolean} _new
   */
  exports.prototype._new = undefined;

  /**
   * The gateway mac address
   * @member {String} macAddress
   */
  exports.prototype.macAddress = undefined;

  /**
   * Discovery method
   * @member {module:model/RangerGatewaySchemaGatewayViewSchema200Data.DiscoveryMethodEnum} discoveryMethod
   */
  exports.prototype.discoveryMethod = undefined;

  /**
   * The gateway manufacturer obtained from the mac address
   * @member {String} manufacturer
   */
  exports.prototype.manufacturer = undefined;

  /**
   * Created at
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * The gateway local ip
   * @member {String} ip
   */
  exports.prototype.ip = undefined;

  /**
   * TCP Port scan enabled
   * @member {Boolean} tcpPortScan
   */
  exports.prototype.tcpPortScan = undefined;

  /**
   * The number of active rangers
   * @member {Number} connectedRangers
   */
  exports.prototype.connectedRangers = undefined;

  /**
   * The number of rangers in this network
   * @member {Number} numberOfRangers
   */
  exports.prototype.numberOfRangers = undefined;

  /**
   * The network name
   * @member {String} networkName
   */
  exports.prototype.networkName = undefined;

  /**
   * The number of non decommissioned agents in this network
   * @member {Number} numberOfAgents
   */
  exports.prototype.numberOfAgents = undefined;

  /**
   * A set of IP addresses that should not be scanned in the specific network
   * @member {Array.<module:model/SchemasRangerSettingsSchema200DataRestrictions>} restrictions
   */
  exports.prototype.restrictions = undefined;

  /**
   * True if inherited values are taken from account settings
   * @member {Boolean} inheritSettings
   */
  exports.prototype.inheritSettings = undefined;

  /**
   * MDNS scan enabled
   * @member {Boolean} mdnsScan
   */
  exports.prototype.mdnsScan = undefined;

  /**
   * Date when this network will expire, null if it won't expire
   * @member {Date} expiryDate
   */
  exports.prototype.expiryDate = undefined;



  /**
   * Allowed values for the <code>discoveryMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscoveryMethodEnum = {
    /**
     * value: "Automatic"
     * @const
     */
    automatic: "Automatic",

    /**
     * value: "User"
     * @const
     */
    user: "User"
  };

  return exports;

}));