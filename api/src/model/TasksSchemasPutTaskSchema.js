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
    define(['ApiClient', 'model/TasksSchemasPutTaskSchemaData', 'model/TasksSchemasPutTaskSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TasksSchemasPutTaskSchemaData'), require('./TasksSchemasPutTaskSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.TasksSchemasPutTaskSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.TasksSchemasPutTaskSchemaData, root.S1MgmtApi.TasksSchemasPutTaskSchemaFilter);
  }
}(this, function(ApiClient, TasksSchemasPutTaskSchemaData, TasksSchemasPutTaskSchemaFilter) {
  'use strict';

  /**
   * The TasksSchemasPutTaskSchema model module.
   * @module model/TasksSchemasPutTaskSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>TasksSchemasPutTaskSchema</code>.
   * @alias module:model/TasksSchemasPutTaskSchema
   * @class
   * @param filter {module:model/TasksSchemasPutTaskSchemaFilter} 
   * @param data {module:model/TasksSchemasPutTaskSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>TasksSchemasPutTaskSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksSchemasPutTaskSchema} obj Optional instance to populate.
   * @return {module:model/TasksSchemasPutTaskSchema} The populated <code>TasksSchemasPutTaskSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = TasksSchemasPutTaskSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = TasksSchemasPutTaskSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/TasksSchemasPutTaskSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/TasksSchemasPutTaskSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
