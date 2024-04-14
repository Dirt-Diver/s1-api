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
    root.S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo model module.
   * @module model/V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo</code>.
   * Agent detection time information
   * @alias module:model/V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo} obj Optional instance to populate.
   * @return {module:model/V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo} The populated <code>V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('osName'))
        obj.osName = ApiClient.convertToType(data['osName'], 'String');
      if (data.hasOwnProperty('osRevision'))
        obj.osRevision = ApiClient.convertToType(data['osRevision'], 'String');
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('machineType'))
        obj.machineType = ApiClient.convertToType(data['machineType'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('osFamily'))
        obj.osFamily = ApiClient.convertToType(data['osFamily'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * Os name
   * @member {String} osName
   */
  exports.prototype.osName = undefined;

  /**
   * Os revision
   * @member {String} osRevision
   */
  exports.prototype.osRevision = undefined;

  /**
   * Account id
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * Version
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * Machine type
   * @member {String} machineType
   */
  exports.prototype.machineType = undefined;

  /**
   * Site id
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Os family
   * @member {String} osFamily
   */
  exports.prototype.osFamily = undefined;

  /**
   * UUID of the agent
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));