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
    root.S1MgmtApi.RangerAutoDeploySchemasCredGroupsPostSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RangerAutoDeploySchemasCredGroupsPostSchemaData model module.
   * @module model/RangerAutoDeploySchemasCredGroupsPostSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerAutoDeploySchemasCredGroupsPostSchemaData</code>.
   * Data
   * @alias module:model/RangerAutoDeploySchemasCredGroupsPostSchemaData
   * @class
   * @param groupName {String} The cred group name
   * @param scopeId {String} Scope id
   * @param groupPassphrase {String} Encrypted passphrase with key unknown by the management
   */
  var exports = function(groupName, scopeId, groupPassphrase) {
    this.groupName = groupName;
    this.scopeId = scopeId;
    this.groupPassphrase = groupPassphrase;
  };

  /**
   * Constructs a <code>RangerAutoDeploySchemasCredGroupsPostSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerAutoDeploySchemasCredGroupsPostSchemaData} obj Optional instance to populate.
   * @return {module:model/RangerAutoDeploySchemasCredGroupsPostSchemaData} The populated <code>RangerAutoDeploySchemasCredGroupsPostSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('targetOs'))
        obj.targetOs = ApiClient.convertToType(data['targetOs'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('groupPassphrase'))
        obj.groupPassphrase = ApiClient.convertToType(data['groupPassphrase'], 'String');
    }
    return obj;
  }

  /**
   * The os type for this cred group
   * @member {module:model/RangerAutoDeploySchemasCredGroupsPostSchemaData.TargetOsEnum} targetOs
   * @default 'windows'
   */
  exports.prototype.targetOs = 'windows';

  /**
   * The cred group name
   * @member {String} groupName
   */
  exports.prototype.groupName = undefined;

  /**
   * Scope id
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * The domain associated to this cred group
   * @member {String} domain
   */
  exports.prototype.domain = undefined;

  /**
   * Encrypted passphrase with key unknown by the management
   * @member {String} groupPassphrase
   */
  exports.prototype.groupPassphrase = undefined;



  /**
   * Allowed values for the <code>targetOs</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TargetOsEnum = {
    /**
     * value: "windows"
     * @const
     */
    windows: "windows",

    /**
     * value: "osx_linux"
     * @const
     */
    osxLinux: "osx_linux"
  };

  return exports;

}));
