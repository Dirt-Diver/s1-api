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
    root.S1MgmtApi.ActivitiesActivityTypesSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ActivitiesActivityTypesSchemaMany200Data model module.
   * @module model/ActivitiesActivityTypesSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>ActivitiesActivityTypesSchemaMany200Data</code>.
   * @alias module:model/ActivitiesActivityTypesSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ActivitiesActivityTypesSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivitiesActivityTypesSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/ActivitiesActivityTypesSchemaMany200Data} The populated <code>ActivitiesActivityTypesSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('descriptionTemplate'))
        obj.descriptionTemplate = ApiClient.convertToType(data['descriptionTemplate'], 'String');
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }

  /**
   * Activity description template as seen in activity page
   * @member {String} descriptionTemplate
   */
  exports.prototype.descriptionTemplate = undefined;

  /**
   * Action described in the activity
   * @member {String} action
   */
  exports.prototype.action = undefined;

  /**
   * Activity type ID
   * @member {Number} id
   */
  exports.prototype.id = undefined;


  return exports;

}));
