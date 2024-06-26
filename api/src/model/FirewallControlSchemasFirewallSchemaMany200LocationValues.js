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
    root.S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200LocationValues = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FirewallControlSchemasFirewallSchemaMany200LocationValues model module.
   * @module model/FirewallControlSchemasFirewallSchemaMany200LocationValues
   * @version 2.1
   */

  /**
   * Constructs a new <code>FirewallControlSchemasFirewallSchemaMany200LocationValues</code>.
   * @alias module:model/FirewallControlSchemasFirewallSchemaMany200LocationValues
   * @class
   * @param id {String} Location ID
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>FirewallControlSchemasFirewallSchemaMany200LocationValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirewallControlSchemasFirewallSchemaMany200LocationValues} obj Optional instance to populate.
   * @return {module:model/FirewallControlSchemasFirewallSchemaMany200LocationValues} The populated <code>FirewallControlSchemasFirewallSchemaMany200LocationValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }

  /**
   * Location name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Location scope
   * @member {module:model/FirewallControlSchemasFirewallSchemaMany200LocationValues.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;

  /**
   * Location ID
   * @member {String} id
   */
  exports.prototype.id = undefined;



  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "site"
     * @const
     */
    site: "site",

    /**
     * value: "group"
     * @const
     */
    group: "group",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "global"
     * @const
     */
    global: "global"
  };

  return exports;

}));
