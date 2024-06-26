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
    root.S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions model module.
   * @module model/V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions</code>.
   * @alias module:model/V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions} obj Optional instance to populate.
   * @return {module:model/V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions} The populated <code>V21ApplicationManagementApplicationManagementSchemasVersionsCountSchema200DataVersions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('applicationName'))
        obj.applicationName = ApiClient.convertToType(data['applicationName'], 'String');
      if (data.hasOwnProperty('endpointsCount'))
        obj.endpointsCount = ApiClient.convertToType(data['endpointsCount'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {String} applicationName
   */
  exports.prototype.applicationName = undefined;

  /**
   * @member {Number} endpointsCount
   */
  exports.prototype.endpointsCount = undefined;


  return exports;

}));
