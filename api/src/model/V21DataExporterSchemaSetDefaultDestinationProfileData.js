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
    root.S1MgmtApi.V21DataExporterSchemaSetDefaultDestinationProfileData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21DataExporterSchemaSetDefaultDestinationProfileData model module.
   * @module model/V21DataExporterSchemaSetDefaultDestinationProfileData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21DataExporterSchemaSetDefaultDestinationProfileData</code>.
   * Data
   * @alias module:model/V21DataExporterSchemaSetDefaultDestinationProfileData
   * @class
   * @param profileId {String} Profile Id to set as default profile
   * @param scopeLevel {module:model/V21DataExporterSchemaSetDefaultDestinationProfileData.ScopeLevelEnum} Scope level to get Destination profile configuration
   */
  var exports = function(profileId, scopeLevel) {
    this.profileId = profileId;
    this.scopeLevel = scopeLevel;
  };

  /**
   * Constructs a <code>V21DataExporterSchemaSetDefaultDestinationProfileData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21DataExporterSchemaSetDefaultDestinationProfileData} obj Optional instance to populate.
   * @return {module:model/V21DataExporterSchemaSetDefaultDestinationProfileData} The populated <code>V21DataExporterSchemaSetDefaultDestinationProfileData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('profileId'))
        obj.profileId = ApiClient.convertToType(data['profileId'], 'String');
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
    }
    return obj;
  }

  /**
   * Profile Id to set as default profile
   * @member {String} profileId
   */
  exports.prototype.profileId = undefined;

  /**
   * Scope level to get Destination profile configuration
   * @member {module:model/V21DataExporterSchemaSetDefaultDestinationProfileData.ScopeLevelEnum} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;

  /**
   * Scope ID to get Destination profiles configuration
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;



  /**
   * Allowed values for the <code>scopeLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeLevelEnum = {
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
    site: "site",

    /**
     * value: "group"
     * @const
     */
    group: "group"
  };

  return exports;

}));
