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
    root.S1MgmtApi.ReportsReportTasksPutSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportsReportTasksPutSchemaData model module.
   * @module model/ReportsReportTasksPutSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>ReportsReportTasksPutSchemaData</code>.
   * Data
   * @alias module:model/ReportsReportTasksPutSchemaData
   * @class
   * @param name {String} Name of the report
   */
  var exports = function(name) {
    this.name = name;
  };

  /**
   * Constructs a <code>ReportsReportTasksPutSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportsReportTasksPutSchemaData} obj Optional instance to populate.
   * @return {module:model/ReportsReportTasksPutSchemaData} The populated <code>ReportsReportTasksPutSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('recipients'))
        obj.recipients = ApiClient.convertToType(data['recipients'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('attachmentTypes'))
        obj.attachmentTypes = ApiClient.convertToType(data['attachmentTypes'], ['String']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }

  /**
   * List of recipients for the report
   * @member {Array.<String>} recipients
   */
  exports.prototype.recipients = undefined;

  /**
   * Name of the report
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Type of documents for the report
   * @member {Array.<String>} attachmentTypes
   */
  exports.prototype.attachmentTypes = undefined;

  /**
   * Database id of the task
   * @member {String} id
   */
  exports.prototype.id = undefined;


  return exports;

}));
