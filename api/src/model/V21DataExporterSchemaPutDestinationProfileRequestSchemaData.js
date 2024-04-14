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
    root.S1MgmtApi.V21DataExporterSchemaPutDestinationProfileRequestSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21DataExporterSchemaPutDestinationProfileRequestSchemaData model module.
   * @module model/V21DataExporterSchemaPutDestinationProfileRequestSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21DataExporterSchemaPutDestinationProfileRequestSchemaData</code>.
   * Data
   * @alias module:model/V21DataExporterSchemaPutDestinationProfileRequestSchemaData
   * @class
   * @param name {String} Destination profile name
   * @param apiUrl {String} URL of api instance to upload the events
   * @param apiKey {String} Write key of api account to upload data
   */
  var exports = function(name, apiUrl, apiKey) {
    this.name = name;
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  };

  /**
   * Constructs a <code>V21DataExporterSchemaPutDestinationProfileRequestSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21DataExporterSchemaPutDestinationProfileRequestSchemaData} obj Optional instance to populate.
   * @return {module:model/V21DataExporterSchemaPutDestinationProfileRequestSchemaData} The populated <code>V21DataExporterSchemaPutDestinationProfileRequestSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('apiUrl'))
        obj.apiUrl = ApiClient.convertToType(data['apiUrl'], 'String');
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
    }
    return obj;
  }

  /**
   * Destination profile name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * URL of api instance to upload the events
   * @member {String} apiUrl
   */
  exports.prototype.apiUrl = undefined;

  /**
   * Write key of api account to upload data
   * @member {String} apiKey
   */
  exports.prototype.apiKey = undefined;

  /**
   * Flag if the profile should be marked as default in it's scope
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;


  return exports;

}));
