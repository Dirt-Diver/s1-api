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
    define(['ApiClient', 'model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthBasic', 'model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthCertificate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthBasic'), require('./V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthCertificate'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthBasic, root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthCertificate);
  }
}(this, function(ApiClient, V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthBasic, V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthCertificate) {
  'use strict';

  /**
   * The V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth model module.
   * @module model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth</code>.
   * Auth
   * @alias module:model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth} obj Optional instance to populate.
   * @return {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth} The populated <code>V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('certificate'))
        obj.certificate = V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthCertificate.constructFromObject(data['certificate']);
      if (data.hasOwnProperty('basic'))
        obj.basic = V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthBasic.constructFromObject(data['basic']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthCertificate} certificate
   */
  exports.prototype.certificate = undefined;

  /**
   * @member {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataWorkspaceOneConnectorAuthBasic} basic
   */
  exports.prototype.basic = undefined;


  return exports;

}));
