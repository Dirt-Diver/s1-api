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
    define(['ApiClient', 'model/V21ActivationSchemasUserActivationItemMany200Scope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ActivationSchemasUserActivationItemMany200Scope'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ActivationSchemasUserActivationItemMany200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ActivationSchemasUserActivationItemMany200Scope);
  }
}(this, function(ApiClient, V21ActivationSchemasUserActivationItemMany200Scope) {
  'use strict';

  /**
   * The V21ActivationSchemasUserActivationItemMany200Data model module.
   * @module model/V21ActivationSchemasUserActivationItemMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ActivationSchemasUserActivationItemMany200Data</code>.
   * @alias module:model/V21ActivationSchemasUserActivationItemMany200Data
   * @class
   * @param activationLimit {Number} This is the number of activations available with this group activation link.
   * @param createdAt {String} User invite creation date
   * @param name {String} User name
   * @param email {String} User email
   * @param createdBy {String} Username, who sent the invitation
   * @param id {String} User activation identifier
   * @param activationCount {Number} Counter of devices registered through the group activation link
   */
  var exports = function(activationLimit, createdAt, name, email, createdBy, id, activationCount) {
    this.activationLimit = activationLimit;
    this.createdAt = createdAt;
    this.name = name;
    this.email = email;
    this.createdBy = createdBy;
    this.id = id;
    this.activationCount = activationCount;
  };

  /**
   * Constructs a <code>V21ActivationSchemasUserActivationItemMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ActivationSchemasUserActivationItemMany200Data} obj Optional instance to populate.
   * @return {module:model/V21ActivationSchemasUserActivationItemMany200Data} The populated <code>V21ActivationSchemasUserActivationItemMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activationLimit'))
        obj.activationLimit = ApiClient.convertToType(data['activationLimit'], 'Number');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = V21ActivationSchemasUserActivationItemMany200Scope.constructFromObject(data['scope']);
      if (data.hasOwnProperty('mgmtGroupName'))
        obj.mgmtGroupName = ApiClient.convertToType(data['mgmtGroupName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('activationCount'))
        obj.activationCount = ApiClient.convertToType(data['activationCount'], 'Number');
    }
    return obj;
  }

  /**
   * This is the number of activations available with this group activation link.
   * @member {Number} activationLimit
   */
  exports.prototype.activationLimit = undefined;

  /**
   * User invite creation date
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * User name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * User email
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Username, who sent the invitation
   * @member {String} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * @member {module:model/V21ActivationSchemasUserActivationItemMany200Scope} scope
   */
  exports.prototype.scope = undefined;

  /**
   * Name of the group, where a new device is registered
   * @member {String} mgmtGroupName
   */
  exports.prototype.mgmtGroupName = undefined;

  /**
   * User activation identifier
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Counter of devices registered through the group activation link
   * @member {Number} activationCount
   */
  exports.prototype.activationCount = undefined;


  return exports;

}));
