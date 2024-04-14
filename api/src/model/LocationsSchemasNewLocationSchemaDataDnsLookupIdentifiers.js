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
    root.S1MgmtApi.LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers model module.
   * @module model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers
   * @version 2.1
   */

  /**
   * Constructs a new <code>LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers</code>.
   * @alias module:model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers
   * @class
   * @param host {String} Hostname to resolve
   * @param ip {String} Resolved IP address
   */
  var exports = function(host, ip) {
    this.host = host;
    this.ip = ip;
  };

  /**
   * Constructs a <code>LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers} obj Optional instance to populate.
   * @return {module:model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers} The populated <code>LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('ip'))
        obj.ip = ApiClient.convertToType(data['ip'], 'String');
    }
    return obj;
  }

  /**
   * Hostname to resolve
   * @member {String} host
   */
  exports.prototype.host = undefined;

  /**
   * Resolved IP address
   * @member {String} ip
   */
  exports.prototype.ip = undefined;


  return exports;

}));
