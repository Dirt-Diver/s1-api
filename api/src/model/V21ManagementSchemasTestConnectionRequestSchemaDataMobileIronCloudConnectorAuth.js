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
    define(['ApiClient', 'model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic);
  }
}(this, function(ApiClient, V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic) {
  'use strict';

  /**
   * The V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth model module.
   * @module model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth</code>.
   * Auth
   * @alias module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth
   * @class
   * @param basic {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic} 
   */
  var exports = function(basic) {
    this.basic = basic;
  };

  /**
   * Constructs a <code>V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth} obj Optional instance to populate.
   * @return {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth} The populated <code>V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('basic'))
        obj.basic = V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic.constructFromObject(data['basic']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21ManagementSchemasTestConnectionRequestSchemaDataMobileIronCloudConnectorAuthBasic} basic
   */
  exports.prototype.basic = undefined;


  return exports;

}));
