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
    root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended model module.
   * @module model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended</code>.
   * Named Pipe Extended
   * @alias module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended} The populated <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('namedPipeExtended'))
        obj.namedPipeExtended = ApiClient.convertToType(data['namedPipeExtended'], 'Boolean');
    }
    return obj;
  }

  /**
   * Named Pipe Connection Extended Event Type
   * @member {Boolean} namedPipeExtended
   */
  exports.prototype.namedPipeExtended = undefined;


  return exports;

}));
