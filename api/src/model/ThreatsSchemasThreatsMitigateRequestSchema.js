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
    define(['ApiClient', 'model/ThreatsSchemasThreatsMitigateRequestSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ThreatsSchemasThreatsMitigateRequestSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ThreatsSchemasThreatsMitigateRequestSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ThreatsSchemasThreatsMitigateRequestSchemaFilter);
  }
}(this, function(ApiClient, ThreatsSchemasThreatsMitigateRequestSchemaFilter) {
  'use strict';

  /**
   * The ThreatsSchemasThreatsMitigateRequestSchema model module.
   * @module model/ThreatsSchemasThreatsMitigateRequestSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatsMitigateRequestSchema</code>.
   * @alias module:model/ThreatsSchemasThreatsMitigateRequestSchema
   * @class
   * @param filter {module:model/ThreatsSchemasThreatsMitigateRequestSchemaFilter} 
   */
  var exports = function(filter) {
    this.filter = filter;
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatsMitigateRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatsMitigateRequestSchema} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatsMitigateRequestSchema} The populated <code>ThreatsSchemasThreatsMitigateRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = ThreatsSchemasThreatsMitigateRequestSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
    }
    return obj;
  }

  /**
   * @member {module:model/ThreatsSchemasThreatsMitigateRequestSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * Data
   * @member {Object} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
