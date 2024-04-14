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
    root.S1MgmtApi.DeviceControlSchemasEnableRuleSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceControlSchemasEnableRuleSchemaData model module.
   * @module model/DeviceControlSchemasEnableRuleSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>DeviceControlSchemasEnableRuleSchemaData</code>.
   * Data
   * @alias module:model/DeviceControlSchemasEnableRuleSchemaData
   * @class
   * @param status {module:model/DeviceControlSchemasEnableRuleSchemaData.StatusEnum} should the rules be enabled/disabled
   */
  var exports = function(status) {
    this.status = status;
  };

  /**
   * Constructs a <code>DeviceControlSchemasEnableRuleSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceControlSchemasEnableRuleSchemaData} obj Optional instance to populate.
   * @return {module:model/DeviceControlSchemasEnableRuleSchemaData} The populated <code>DeviceControlSchemasEnableRuleSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * should the rules be enabled/disabled
   * @member {module:model/DeviceControlSchemasEnableRuleSchemaData.StatusEnum} status
   */
  exports.prototype.status = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Enabled"
     * @const
     */
    enabled: "Enabled",

    /**
     * value: "Disabled"
     * @const
     */
    disabled: "Disabled"
  };

  return exports;

}));
