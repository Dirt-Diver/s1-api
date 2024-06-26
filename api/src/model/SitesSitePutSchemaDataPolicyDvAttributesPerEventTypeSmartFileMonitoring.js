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
    root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring model module.
   * @module model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring</code>.
   * Smart file monitoring
   * @alias module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring} The populated <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('smartFileMonitoring'))
        obj.smartFileMonitoring = ApiClient.convertToType(data['smartFileMonitoring'], 'Boolean');
    }
    return obj;
  }

  /**
   * Smart file monitoring
   * @member {Boolean} smartFileMonitoring
   */
  exports.prototype.smartFileMonitoring = undefined;


  return exports;

}));
