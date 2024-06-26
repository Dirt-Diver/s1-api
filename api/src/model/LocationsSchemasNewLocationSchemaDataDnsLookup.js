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
    define(['ApiClient', 'model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.LocationsSchemasNewLocationSchemaDataDnsLookup = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers);
  }
}(this, function(ApiClient, LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers) {
  'use strict';

  /**
   * The LocationsSchemasNewLocationSchemaDataDnsLookup model module.
   * @module model/LocationsSchemasNewLocationSchemaDataDnsLookup
   * @version 2.1
   */

  /**
   * Constructs a new <code>LocationsSchemasNewLocationSchemaDataDnsLookup</code>.
   * Identify a location by DNS lookup results
   * @alias module:model/LocationsSchemasNewLocationSchemaDataDnsLookup
   * @class
   * @param operator {module:model/LocationsSchemasNewLocationSchemaDataDnsLookup.OperatorEnum} Logical operator to apply between the set of identifiers
   * @param identifiers {Array.<module:model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers>} A list of DNS lookup identifiers
   */
  var exports = function(operator, identifiers) {
    this.operator = operator;
    this.identifiers = identifiers;
  };

  /**
   * Constructs a <code>LocationsSchemasNewLocationSchemaDataDnsLookup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationsSchemasNewLocationSchemaDataDnsLookup} obj Optional instance to populate.
   * @return {module:model/LocationsSchemasNewLocationSchemaDataDnsLookup} The populated <code>LocationsSchemasNewLocationSchemaDataDnsLookup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('identifiers'))
        obj.identifiers = ApiClient.convertToType(data['identifiers'], [LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers]);
    }
    return obj;
  }

  /**
   * Logical operator to apply between the set of identifiers
   * @member {module:model/LocationsSchemasNewLocationSchemaDataDnsLookup.OperatorEnum} operator
   */
  exports.prototype.operator = undefined;

  /**
   * A list of DNS lookup identifiers
   * @member {Array.<module:model/LocationsSchemasNewLocationSchemaDataDnsLookupIdentifiers>} identifiers
   */
  exports.prototype.identifiers = undefined;



  /**
   * Allowed values for the <code>operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = {
    /**
     * value: "all"
     * @const
     */
    all: "all",

    /**
     * value: "any"
     * @const
     */
    any: "any",

    /**
     * value: "none"
     * @const
     */
    none: "none"
  };

  return exports;

}));
