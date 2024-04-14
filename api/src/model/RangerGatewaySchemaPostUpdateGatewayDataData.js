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
    root.S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RangerGatewaySchemaPostUpdateGatewayDataData model module.
   * @module model/RangerGatewaySchemaPostUpdateGatewayDataData
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerGatewaySchemaPostUpdateGatewayDataData</code>.
   * Data
   * @alias module:model/RangerGatewaySchemaPostUpdateGatewayDataData
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RangerGatewaySchemaPostUpdateGatewayDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerGatewaySchemaPostUpdateGatewayDataData} obj Optional instance to populate.
   * @return {module:model/RangerGatewaySchemaPostUpdateGatewayDataData} The populated <code>RangerGatewaySchemaPostUpdateGatewayDataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allowScan'))
        obj.allowScan = ApiClient.convertToType(data['allowScan'], 'Boolean');
      if (data.hasOwnProperty('inheritSettings'))
        obj.inheritSettings = ApiClient.convertToType(data['inheritSettings'], 'Boolean');
      if (data.hasOwnProperty('scanOnlyLocalSubnets'))
        obj.scanOnlyLocalSubnets = ApiClient.convertToType(data['scanOnlyLocalSubnets'], 'Boolean');
      if (data.hasOwnProperty('archived'))
        obj.archived = ApiClient.convertToType(data['archived'], 'Boolean');
    }
    return obj;
  }

  /**
   * Do we allow scanning in this network
   * @member {Boolean} allowScan
   */
  exports.prototype.allowScan = undefined;

  /**
   * True if inherited values are taken from account settings
   * @member {Boolean} inheritSettings
   */
  exports.prototype.inheritSettings = undefined;

  /**
   * Allow remote tasks form this network
   * @member {Boolean} scanOnlyLocalSubnets
   */
  exports.prototype.scanOnlyLocalSubnets = undefined;

  /**
   * True if we should archive the network, valid for networks that are not allowed to scan only
   * @member {Boolean} archived
   */
  exports.prototype.archived = undefined;


  return exports;

}));