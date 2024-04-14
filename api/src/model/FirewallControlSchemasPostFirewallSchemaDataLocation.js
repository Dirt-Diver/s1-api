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
    define(['ApiClient', 'model/FirewallControlSchemasFirewallSchemaMany200LocationValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirewallControlSchemasFirewallSchemaMany200LocationValues'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.FirewallControlSchemasPostFirewallSchemaDataLocation = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200LocationValues);
  }
}(this, function(ApiClient, FirewallControlSchemasFirewallSchemaMany200LocationValues) {
  'use strict';

  /**
   * The FirewallControlSchemasPostFirewallSchemaDataLocation model module.
   * @module model/FirewallControlSchemasPostFirewallSchemaDataLocation
   * @version 2.1
   */

  /**
   * Constructs a new <code>FirewallControlSchemasPostFirewallSchemaDataLocation</code>.
   * Location structure with a type and a set of values
   * @alias module:model/FirewallControlSchemasPostFirewallSchemaDataLocation
   * @class
   * @param type {module:model/FirewallControlSchemasPostFirewallSchemaDataLocation.TypeEnum} Location type
   */
  var exports = function(type) {
    this.type = type;
  };

  /**
   * Constructs a <code>FirewallControlSchemasPostFirewallSchemaDataLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallControlSchemasPostFirewallSchemaDataLocation} obj Optional instance to populate.
   * @return {module:model/FirewallControlSchemasPostFirewallSchemaDataLocation} The populated <code>FirewallControlSchemasPostFirewallSchemaDataLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], [FirewallControlSchemasFirewallSchemaMany200LocationValues]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Location IDs (applicable for the \"specific\" location type only)
   * @member {Array.<module:model/FirewallControlSchemasFirewallSchemaMany200LocationValues>} values
   */
  exports.prototype.values = undefined;

  /**
   * Location type
   * @member {module:model/FirewallControlSchemasPostFirewallSchemaDataLocation.TypeEnum} type
   */
  exports.prototype.type = undefined;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "all"
     * @const
     */
    all: "all",

    /**
     * value: "specific"
     * @const
     */
    specific: "specific",

    /**
     * value: "fallback"
     * @const
     */
    fallback: "fallback"
  };

  return exports;

}));