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
    root.S1MgmtApi.TagManagerSchemasAgentTagSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagManagerSchemasAgentTagSchemaMany200Data model module.
   * @module model/TagManagerSchemasAgentTagSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>TagManagerSchemasAgentTagSchemaMany200Data</code>.
   * @alias module:model/TagManagerSchemasAgentTagSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TagManagerSchemasAgentTagSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagManagerSchemasAgentTagSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/TagManagerSchemasAgentTagSchemaMany200Data} The populated <code>TagManagerSchemasAgentTagSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('updatedBy'))
        obj.updatedBy = ApiClient.convertToType(data['updatedBy'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('scopePath'))
        obj.scopePath = ApiClient.convertToType(data['scopePath'], 'String');
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
      if (data.hasOwnProperty('allowEdit'))
        obj.allowEdit = ApiClient.convertToType(data['allowEdit'], 'Boolean');
      if (data.hasOwnProperty('totalEndpoints'))
        obj.totalEndpoints = ApiClient.convertToType(data['totalEndpoints'], 'Number');
      if (data.hasOwnProperty('endpointsInCurrentScope'))
        obj.endpointsInCurrentScope = ApiClient.convertToType(data['endpointsInCurrentScope'], 'Number');
    }
    return obj;
  }

  /**
   * Tag description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Tag updater name
   * @member {String} updatedBy
   */
  exports.prototype.updatedBy = undefined;

  /**
   * Tag ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Timestamp of creation
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Scope id
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * Tag type
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * Timestamp of last update
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Tag creator name
   * @member {String} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * Tag key
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * tag value
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * tag scope path
   * @member {String} scopePath
   */
  exports.prototype.scopePath = undefined;

  /**
   * Scope level
   * @member {module:model/TagManagerSchemasAgentTagSchemaMany200Data.ScopeLevelEnum} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;

  /**
   * indicate if user can/cant edit the tag
   * @member {Boolean} allowEdit
   */
  exports.prototype.allowEdit = undefined;

  /**
   * The total number of endpoints that have this tag
   * @member {Number} totalEndpoints
   */
  exports.prototype.totalEndpoints = undefined;

  /**
   * The number of endpoints in this scope that have this tag
   * @member {Number} endpointsInCurrentScope
   */
  exports.prototype.endpointsInCurrentScope = undefined;



  /**
   * Allowed values for the <code>scopeLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeLevelEnum = {
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
