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
    define(['ApiClient', 'model/V21ProvisioningSchemasCanProvisionTenant200DataAffectingScopes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ProvisioningSchemasCanProvisionTenant200DataAffectingScopes'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ProvisioningSchemasCanProvisionTenant200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ProvisioningSchemasCanProvisionTenant200DataAffectingScopes);
  }
}(this, function(ApiClient, V21ProvisioningSchemasCanProvisionTenant200DataAffectingScopes) {
  'use strict';

  /**
   * The V21ProvisioningSchemasCanProvisionTenant200Data model module.
   * @module model/V21ProvisioningSchemasCanProvisionTenant200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ProvisioningSchemasCanProvisionTenant200Data</code>.
   * Response data
   * @alias module:model/V21ProvisioningSchemasCanProvisionTenant200Data
   * @class
   * @param canProvision {Boolean} Can provision tenant
   */
  var exports = function(canProvision) {
    this.canProvision = canProvision;
  };

  /**
   * Constructs a <code>V21ProvisioningSchemasCanProvisionTenant200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ProvisioningSchemasCanProvisionTenant200Data} obj Optional instance to populate.
   * @return {module:model/V21ProvisioningSchemasCanProvisionTenant200Data} The populated <code>V21ProvisioningSchemasCanProvisionTenant200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('reasonCode'))
        obj.reasonCode = ApiClient.convertToType(data['reasonCode'], 'String');
      if (data.hasOwnProperty('canProvision'))
        obj.canProvision = ApiClient.convertToType(data['canProvision'], 'Boolean');
      if (data.hasOwnProperty('underMSSPScope'))
        obj.underMSSPScope = ApiClient.convertToType(data['underMSSPScope'], 'Boolean');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('affectingScopes'))
        obj.affectingScopes = ApiClient.convertToType(data['affectingScopes'], [V21ProvisioningSchemasCanProvisionTenant200DataAffectingScopes]);
      if (data.hasOwnProperty('msspScope'))
        obj.msspScope = ApiClient.convertToType(data['msspScope'], 'Boolean');
    }
    return obj;
  }

  /**
   * Reason code for not being able to provision tenant
   * @member {String} reasonCode
   */
  exports.prototype.reasonCode = undefined;

  /**
   * Can provision tenant
   * @member {Boolean} canProvision
   */
  exports.prototype.canProvision = undefined;

  /**
   * Is under MSSP scope
   * @member {Boolean} underMSSPScope
   */
  exports.prototype.underMSSPScope = undefined;

  /**
   * Reason for not being able to provision tenant
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * Affectingscopes
   * @member {Array.<module:model/V21ProvisioningSchemasCanProvisionTenant200DataAffectingScopes>} affectingScopes
   */
  exports.prototype.affectingScopes = undefined;

  /**
   * Is MSSP scope
   * @member {Boolean} msspScope
   */
  exports.prototype.msspScope = undefined;


  return exports;

}));
