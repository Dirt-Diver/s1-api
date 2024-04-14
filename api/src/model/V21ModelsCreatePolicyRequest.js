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
    define(['ApiClient', 'model/V21ModelsPackage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ModelsPackage'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ModelsCreatePolicyRequest = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ModelsPackage);
  }
}(this, function(ApiClient, V21ModelsPackage) {
  'use strict';

  /**
   * The V21ModelsCreatePolicyRequest model module.
   * @module model/V21ModelsCreatePolicyRequest
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ModelsCreatePolicyRequest</code>.
   * @alias module:model/V21ModelsCreatePolicyRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21ModelsCreatePolicyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ModelsCreatePolicyRequest} obj Optional instance to populate.
   * @return {module:model/V21ModelsCreatePolicyRequest} The populated <code>V21ModelsCreatePolicyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allEndpoints'))
        obj.allEndpoints = ApiClient.convertToType(data['allEndpoints'], 'Boolean');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('isActive'))
        obj.isActive = ApiClient.convertToType(data['isActive'], 'Boolean');
      if (data.hasOwnProperty('isScheduled'))
        obj.isScheduled = ApiClient.convertToType(data['isScheduled'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('osType'))
        obj.osType = ApiClient.convertToType(data['osType'], 'String');
      if (data.hasOwnProperty('package'))
        obj._package = V21ModelsPackage.constructFromObject(data['package']);
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
    }
    return obj;
  }

  /**
   * Affected endpoints. 'true' if the policy is applied to all endpoints. If 'false', tags must be provided.
   * @member {Boolean} allEndpoints
   */
  exports.prototype.allEndpoints = undefined;

  /**
   * Policy description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * 'true' if policy is active, 'false' if policy is disabled
   * @member {Boolean} isActive
   */
  exports.prototype.isActive = undefined;

  /**
   * In case of maintenance window selected, scheduling an upgrade for maintenance window
   * @member {Boolean} isScheduled
   */
  exports.prototype.isScheduled = undefined;

  /**
   * Policy name. This name will be used for creating tasks. Should be unique.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * OS type, one of 'linux', 'macos' or 'windows'
   * @member {String} osType
   */
  exports.prototype.osType = undefined;

  /**
   * The package to be sent to an Agent during the upgrade
   * @member {module:model/V21ModelsPackage} _package
   */
  exports.prototype._package = undefined;

  /**
   * Scope ID
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * Scope level, one of 'account', 'group', 'site' or 'tenant'
   * @member {String} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;

  /**
   * Tags for policy application. If provided, AllEndpoints should be false.
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;


  return exports;

}));
