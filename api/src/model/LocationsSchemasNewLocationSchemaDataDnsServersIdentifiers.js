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
    root.S1MgmtApi.LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers model module.
   * @module model/LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers
   * @version 2.1
   */

  /**
   * Constructs a new <code>LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers</code>.
   * @alias module:model/LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers
   * @class
   * @param values {Array.<String>} IP address, CIDR or range of two addresses. May be either IPv4 or IPv6
   * @param type {module:model/LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers.TypeEnum} Address type
   */
  var exports = function(values, type) {
    this.values = values;
    this.type = type;
  };

  /**
   * Constructs a <code>LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers} obj Optional instance to populate.
   * @return {module:model/LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers} The populated <code>LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], ['String']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * IP address, CIDR or range of two addresses. May be either IPv4 or IPv6
   * @member {Array.<String>} values
   */
  exports.prototype.values = undefined;

  /**
   * Address type
   * @member {module:model/LocationsSchemasNewLocationSchemaDataDnsServersIdentifiers.TypeEnum} type
   */
  exports.prototype.type = undefined;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "address"
     * @const
     */
    address: "address",

    /**
     * value: "cidr"
     * @const
     */
    cidr: "cidr",

    /**
     * value: "range"
     * @const
     */
    range: "range"
  };

  return exports;

}));
