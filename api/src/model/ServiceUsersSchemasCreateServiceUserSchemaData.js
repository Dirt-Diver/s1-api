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
    define(['ApiClient', 'model/UsersSchemasCreateUserSchemaDataScopeRoles'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersSchemasCreateUserSchemaDataScopeRoles'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ServiceUsersSchemasCreateServiceUserSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.UsersSchemasCreateUserSchemaDataScopeRoles);
  }
}(this, function(ApiClient, UsersSchemasCreateUserSchemaDataScopeRoles) {
  'use strict';

  /**
   * The ServiceUsersSchemasCreateServiceUserSchemaData model module.
   * @module model/ServiceUsersSchemasCreateServiceUserSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>ServiceUsersSchemasCreateServiceUserSchemaData</code>.
   * Data
   * @alias module:model/ServiceUsersSchemasCreateServiceUserSchemaData
   * @class
   * @param expirationDate {Date} Date when the generated token expires
   * @param name {String} Name of the service user
   * @param scope {module:model/ServiceUsersSchemasCreateServiceUserSchemaData.ScopeEnum} User scope
   */
  var exports = function(expirationDate, name, scope) {
    this.expirationDate = expirationDate;
    this.name = name;
    this.scope = scope;
  };

  /**
   * Constructs a <code>ServiceUsersSchemasCreateServiceUserSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceUsersSchemasCreateServiceUserSchemaData} obj Optional instance to populate.
   * @return {module:model/ServiceUsersSchemasCreateServiceUserSchemaData} The populated <code>ServiceUsersSchemasCreateServiceUserSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('scopeRoles'))
        obj.scopeRoles = ApiClient.convertToType(data['scopeRoles'], [UsersSchemasCreateUserSchemaDataScopeRoles]);
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('forceLegacy'))
        obj.forceLegacy = ApiClient.convertToType(data['forceLegacy'], 'Boolean');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
    }
    return obj;
  }

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * List of id and role id, id is mandatory for user in scope account/site. User in tenant (global) role does not need to provide an id.
   * @member {Array.<module:model/UsersSchemasCreateUserSchemaDataScopeRoles>} scopeRoles
   */
  exports.prototype.scopeRoles = undefined;

  /**
   * Date when the generated token expires
   * @member {Date} expirationDate
   */
  exports.prototype.expirationDate = undefined;

  /**
   * Name of the service user
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Temporary attribute for WA: If the flag is set to True the legacy token will be generated even if the auth_tokens global switch is turned on
   * @member {Boolean} forceLegacy
   */
  exports.prototype.forceLegacy = undefined;

  /**
   * User scope
   * @member {module:model/ServiceUsersSchemasCreateServiceUserSchemaData.ScopeEnum} scope
   */
  exports.prototype.scope = undefined;



  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "tenant"
     * @const
     */
    tenant: "tenant",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "site"
     * @const
     */
    site: "site"
  };

  return exports;

}));
