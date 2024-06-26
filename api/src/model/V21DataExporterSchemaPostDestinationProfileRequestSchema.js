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
    root.S1MgmtApi.V21DataExporterSchemaPostDestinationProfileRequestSchema = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21DataExporterSchemaPostDestinationProfileRequestSchema model module.
   * @module model/V21DataExporterSchemaPostDestinationProfileRequestSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21DataExporterSchemaPostDestinationProfileRequestSchema</code>.
   * @alias module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema
   * @class
   * @param name {String} Destination profile name
   * @param scopeLevel {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema.ScopeLevelEnum} Scope level to store the Destination profile
   * @param scopeId {String} Scope ID to store the Destination profile
   * @param destination {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema.DestinationEnum} Destination profile type
   * @param apiUrl {String} URL of api instance to upload the events
   * @param apiKey {String} Write key of api account to upload data
   */
  var exports = function(name, scopeLevel, scopeId, destination, apiUrl, apiKey) {
    this.name = name;
    this.scopeLevel = scopeLevel;
    this.scopeId = scopeId;
    this.destination = destination;
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  };

  /**
   * Constructs a <code>V21DataExporterSchemaPostDestinationProfileRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema} obj Optional instance to populate.
   * @return {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema} The populated <code>V21DataExporterSchemaPostDestinationProfileRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('destination'))
        obj.destination = ApiClient.convertToType(data['destination'], 'String');
      if (data.hasOwnProperty('apiUrl'))
        obj.apiUrl = ApiClient.convertToType(data['apiUrl'], 'String');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
    }
    return obj;
  }

  /**
   * Destination profile name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Scope level to store the Destination profile
   * @member {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema.ScopeLevelEnum} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;

  /**
   * Scope ID to store the Destination profile
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * Destination profile type
   * @member {module:model/V21DataExporterSchemaPostDestinationProfileRequestSchema.DestinationEnum} destination
   */
  exports.prototype.destination = undefined;

  /**
   * URL of api instance to upload the events
   * @member {String} apiUrl
   */
  exports.prototype.apiUrl = undefined;

  /**
   * Flag if the profile should be marked as default in it's scope
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;

  /**
   * Write key of api account to upload data
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;



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


  /**
   * Allowed values for the <code>destination</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DestinationEnum = {
    /**
     * value: "skylight"
     * @const
     */
    skylight: "skylight"
  };

  return exports;

}));
