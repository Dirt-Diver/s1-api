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
    root.S1MgmtApi.TasksSchemasPutTaskSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TasksSchemasPutTaskSchemaData model module.
   * @module model/TasksSchemasPutTaskSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>TasksSchemasPutTaskSchemaData</code>.
   * Data
   * @alias module:model/TasksSchemasPutTaskSchemaData
   * @class
   * @param maintenanceWindowsByDay {Object.<String, Object>} Stores the maintenance time for each day
   * @param maxConcurrent {Number} Max concurrent
   * @param inheritParentMaintenanceConfig {Boolean} Inherit parent's scope Maintenance windows configuration
   * @param timezoneGmt {String} Timezone gmt
   * @param inheritParentConcurrencyConfig {Boolean} Inherit parent's scope Max Concurrent configuration
   */
  var exports = function(maintenanceWindowsByDay, maxConcurrent, inheritParentMaintenanceConfig, timezoneGmt, inheritParentConcurrencyConfig) {
    this.maintenanceWindowsByDay = maintenanceWindowsByDay;
    this.maxConcurrent = maxConcurrent;
    this.inheritParentMaintenanceConfig = inheritParentMaintenanceConfig;
    this.timezoneGmt = timezoneGmt;
    this.inheritParentConcurrencyConfig = inheritParentConcurrencyConfig;
  };

  /**
   * Constructs a <code>TasksSchemasPutTaskSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksSchemasPutTaskSchemaData} obj Optional instance to populate.
   * @return {module:model/TasksSchemasPutTaskSchemaData} The populated <code>TasksSchemasPutTaskSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('maintenanceWindowsByDay'))
        obj.maintenanceWindowsByDay = ApiClient.convertToType(data['maintenanceWindowsByDay'], {'String': Object});
      if (data.hasOwnProperty('maxConcurrent'))
        obj.maxConcurrent = ApiClient.convertToType(data['maxConcurrent'], 'Number');
      if (data.hasOwnProperty('inheritParentMaintenanceConfig'))
        obj.inheritParentMaintenanceConfig = ApiClient.convertToType(data['inheritParentMaintenanceConfig'], 'Boolean');
      if (data.hasOwnProperty('timezoneGmt'))
        obj.timezoneGmt = ApiClient.convertToType(data['timezoneGmt'], 'String');
      if (data.hasOwnProperty('inheritParentConcurrencyConfig'))
        obj.inheritParentConcurrencyConfig = ApiClient.convertToType(data['inheritParentConcurrencyConfig'], 'Boolean');
    }
    return obj;
  }

  /**
   * Stores the maintenance time for each day
   * @member {Object.<String, Object>} maintenanceWindowsByDay
   */
  exports.prototype.maintenanceWindowsByDay = undefined;

  /**
   * Max concurrent
   * @member {Number} maxConcurrent
   */
  exports.prototype.maxConcurrent = undefined;

  /**
   * Inherit parent's scope Maintenance windows configuration
   * @member {Boolean} inheritParentMaintenanceConfig
   */
  exports.prototype.inheritParentMaintenanceConfig = undefined;

  /**
   * Timezone gmt
   * @member {String} timezoneGmt
   */
  exports.prototype.timezoneGmt = undefined;

  /**
   * Inherit parent's scope Max Concurrent configuration
   * @member {Boolean} inheritParentConcurrencyConfig
   */
  exports.prototype.inheritParentConcurrencyConfig = undefined;


  return exports;

}));