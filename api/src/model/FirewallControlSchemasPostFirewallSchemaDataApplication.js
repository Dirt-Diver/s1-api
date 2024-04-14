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
    root.S1MgmtApi.FirewallControlSchemasPostFirewallSchemaDataApplication = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FirewallControlSchemasPostFirewallSchemaDataApplication model module.
   * @module model/FirewallControlSchemasPostFirewallSchemaDataApplication
   * @version 2.1
   */

  /**
   * Constructs a new <code>FirewallControlSchemasPostFirewallSchemaDataApplication</code>.
   * Application for the rule
   * @alias module:model/FirewallControlSchemasPostFirewallSchemaDataApplication
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FirewallControlSchemasPostFirewallSchemaDataApplication</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallControlSchemasPostFirewallSchemaDataApplication} obj Optional instance to populate.
   * @return {module:model/FirewallControlSchemasPostFirewallSchemaDataApplication} The populated <code>FirewallControlSchemasPostFirewallSchemaDataApplication</code> instance.
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
   * Value of the application
   * @member {Array.<String>} values
   */
  exports.prototype.values = undefined;

  /**
   * Type of the application
   * @member {module:model/FirewallControlSchemasPostFirewallSchemaDataApplication.TypeEnum} type
   */
  exports.prototype.type = undefined;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "any"
     * @const
     */
    any: "any",

    /**
     * value: "path"
     * @const
     */
    path: "path",

    /**
     * value: "sha1"
     * @const
     */
    sha1: "sha1",

    /**
     * value: "system"
     * @const
     */
    system: "system"
  };

  return exports;

}));
