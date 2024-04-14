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
    define(['ApiClient', 'model/RangerGatewaySchemaPostUpdateGatewayDataData', 'model/RangerGatewaySchemaPostUpdateGatewayDataFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RangerGatewaySchemaPostUpdateGatewayDataData'), require('./RangerGatewaySchemaPostUpdateGatewayDataFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataData, root.S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataFilter);
  }
}(this, function(ApiClient, RangerGatewaySchemaPostUpdateGatewayDataData, RangerGatewaySchemaPostUpdateGatewayDataFilter) {
  'use strict';

  /**
   * The RangerGatewaySchemaPostUpdateGatewayData model module.
   * @module model/RangerGatewaySchemaPostUpdateGatewayData
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerGatewaySchemaPostUpdateGatewayData</code>.
   * @alias module:model/RangerGatewaySchemaPostUpdateGatewayData
   * @class
   * @param filter {module:model/RangerGatewaySchemaPostUpdateGatewayDataFilter} 
   * @param data {module:model/RangerGatewaySchemaPostUpdateGatewayDataData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>RangerGatewaySchemaPostUpdateGatewayData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerGatewaySchemaPostUpdateGatewayData} obj Optional instance to populate.
   * @return {module:model/RangerGatewaySchemaPostUpdateGatewayData} The populated <code>RangerGatewaySchemaPostUpdateGatewayData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = RangerGatewaySchemaPostUpdateGatewayDataFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = RangerGatewaySchemaPostUpdateGatewayDataData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/RangerGatewaySchemaPostUpdateGatewayDataFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/RangerGatewaySchemaPostUpdateGatewayDataData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));