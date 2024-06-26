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
    define(['ApiClient', 'model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth);
  }
}(this, function(ApiClient, V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth) {
  'use strict';

  /**
   * The V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector model module.
   * @module model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector</code>.
   * Microsoftendpointmanagerconnector
   * @alias module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector
   * @class
   * @param auth {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth} 
   * @param baseUrl {String} Baseurl
   */
  var exports = function(auth, baseUrl) {
    this.auth = auth;
    this.baseUrl = baseUrl;
  };

  /**
   * Constructs a <code>V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector} obj Optional instance to populate.
   * @return {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector} The populated <code>V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('maskUserInformation'))
        obj.maskUserInformation = ApiClient.convertToType(data['maskUserInformation'], 'Boolean');
      if (data.hasOwnProperty('backgroundSync'))
        obj.backgroundSync = ApiClient.convertToType(data['backgroundSync'], 'Boolean');
      if (data.hasOwnProperty('auth'))
        obj.auth = V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth.constructFromObject(data['auth']);
      if (data.hasOwnProperty('baseUrl'))
        obj.baseUrl = ApiClient.convertToType(data['baseUrl'], 'String');
    }
    return obj;
  }

  /**
   * Supported mode
   * @member {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnector.ModeEnum} mode
   */
  exports.prototype.mode = undefined;

  /**
   * Enable masking user information
   * @member {Boolean} maskUserInformation
   */
  exports.prototype.maskUserInformation = undefined;

  /**
   * Enable background syncing
   * @member {Boolean} backgroundSync
   */
  exports.prototype.backgroundSync = undefined;

  /**
   * @member {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMicrosoftEndpointManagerConnectorAuth} auth
   */
  exports.prototype.auth = undefined;

  /**
   * Baseurl
   * @member {String} baseUrl
   */
  exports.prototype.baseUrl = undefined;



  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "mdm_mode"
     * @const
     */
    mdmMode: "mdm_mode",

    /**
     * value: "mam_mode"
     * @const
     */
    mamMode: "mam_mode",

    /**
     * value: "mdm_mam_mode"
     * @const
     */
    mdmMamMode: "mdm_mam_mode"
  };

  return exports;

}));
