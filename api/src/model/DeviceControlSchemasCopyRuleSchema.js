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
    define(['ApiClient', 'model/DeviceControlSchemasCopyRuleSchemaData', 'model/DeviceControlSchemasRuleDeleteSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceControlSchemasCopyRuleSchemaData'), require('./DeviceControlSchemasRuleDeleteSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.DeviceControlSchemasCopyRuleSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.DeviceControlSchemasCopyRuleSchemaData, root.S1MgmtApi.DeviceControlSchemasRuleDeleteSchemaFilter);
  }
}(this, function(ApiClient, DeviceControlSchemasCopyRuleSchemaData, DeviceControlSchemasRuleDeleteSchemaFilter) {
  'use strict';

  /**
   * The DeviceControlSchemasCopyRuleSchema model module.
   * @module model/DeviceControlSchemasCopyRuleSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>DeviceControlSchemasCopyRuleSchema</code>.
   * @alias module:model/DeviceControlSchemasCopyRuleSchema
   * @class
   * @param filter {module:model/DeviceControlSchemasRuleDeleteSchemaFilter} 
   * @param data {Array.<module:model/DeviceControlSchemasCopyRuleSchemaData>} Data
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>DeviceControlSchemasCopyRuleSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceControlSchemasCopyRuleSchema} obj Optional instance to populate.
   * @return {module:model/DeviceControlSchemasCopyRuleSchema} The populated <code>DeviceControlSchemasCopyRuleSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = DeviceControlSchemasRuleDeleteSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DeviceControlSchemasCopyRuleSchemaData]);
    }
    return obj;
  }

  /**
   * @member {module:model/DeviceControlSchemasRuleDeleteSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * Data
   * @member {Array.<module:model/DeviceControlSchemasCopyRuleSchemaData>} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
