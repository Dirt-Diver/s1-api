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
    define(['ApiClient', 'model/V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ManagementSchemasCanCreateConnectionResponseSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes);
  }
}(this, function(ApiClient, V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes) {
  'use strict';

  /**
   * The V21ManagementSchemasCanCreateConnectionResponseSchema200Data model module.
   * @module model/V21ManagementSchemasCanCreateConnectionResponseSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ManagementSchemasCanCreateConnectionResponseSchema200Data</code>.
   * Response data
   * @alias module:model/V21ManagementSchemasCanCreateConnectionResponseSchema200Data
   * @class
   * @param canCreateConnection {Boolean} Cancreateconnection
   * @param reason {String} Reason
   * @param affectingScopes {Array.<module:model/V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes>} Affectingscopes
   */
  var exports = function(canCreateConnection, reason, affectingScopes) {
    this.canCreateConnection = canCreateConnection;
    this.reason = reason;
    this.affectingScopes = affectingScopes;
  };

  /**
   * Constructs a <code>V21ManagementSchemasCanCreateConnectionResponseSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ManagementSchemasCanCreateConnectionResponseSchema200Data} obj Optional instance to populate.
   * @return {module:model/V21ManagementSchemasCanCreateConnectionResponseSchema200Data} The populated <code>V21ManagementSchemasCanCreateConnectionResponseSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('canCreateConnection'))
        obj.canCreateConnection = ApiClient.convertToType(data['canCreateConnection'], 'Boolean');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('affectingScopes'))
        obj.affectingScopes = ApiClient.convertToType(data['affectingScopes'], [V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes]);
    }
    return obj;
  }

  /**
   * Cancreateconnection
   * @member {Boolean} canCreateConnection
   */
  exports.prototype.canCreateConnection = undefined;

  /**
   * Reason
   * @member {String} reason
   */
  exports.prototype.reason = undefined;

  /**
   * Affectingscopes
   * @member {Array.<module:model/V21ManagementSchemasCanCreateConnectionResponseSchema200DataAffectingScopes>} affectingScopes
   */
  exports.prototype.affectingScopes = undefined;


  return exports;

}));
