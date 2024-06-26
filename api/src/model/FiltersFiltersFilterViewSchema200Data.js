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
    define(['ApiClient', 'model/FiltersFiltersFilterViewSchemaMany200FilterFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FiltersFiltersFilterViewSchemaMany200FilterFields'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.FiltersFiltersFilterViewSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.FiltersFiltersFilterViewSchemaMany200FilterFields);
  }
}(this, function(ApiClient, FiltersFiltersFilterViewSchemaMany200FilterFields) {
  'use strict';

  /**
   * The FiltersFiltersFilterViewSchema200Data model module.
   * @module model/FiltersFiltersFilterViewSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>FiltersFiltersFilterViewSchema200Data</code>.
   * Response data
   * @alias module:model/FiltersFiltersFilterViewSchema200Data
   * @class
   * @param id {String} Id
   * @param createdAt {Date} Created at
   * @param name {String} Name
   * @param updatedAt {Date} Updated at
   * @param scopeLevel {module:model/FiltersFiltersFilterViewSchema200Data.ScopeLevelEnum} Filter scope
   */
  var exports = function(id, createdAt, name, updatedAt, scopeLevel) {
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
    this.updatedAt = updatedAt;
    this.scopeLevel = scopeLevel;
  };

  /**
   * Constructs a <code>FiltersFiltersFilterViewSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FiltersFiltersFilterViewSchema200Data} obj Optional instance to populate.
   * @return {module:model/FiltersFiltersFilterViewSchema200Data} The populated <code>FiltersFiltersFilterViewSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('filterFields'))
        obj.filterFields = FiltersFiltersFilterViewSchemaMany200FilterFields.constructFromObject(data['filterFields']);
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
    }
    return obj;
  }

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Created at
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Associated site/account
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * [DEPRECATED] Use scopeId instead
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Updated at
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * @member {module:model/FiltersFiltersFilterViewSchemaMany200FilterFields} filterFields
   */
  exports.prototype.filterFields = undefined;

  /**
   * Filter scope
   * @member {module:model/FiltersFiltersFilterViewSchema200Data.ScopeLevelEnum} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;



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
