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
    define(['ApiClient', 'model/V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter', 'model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter'), require('./V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21IncidentsSchemasUpdateIncidentStatusRequestSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter, root.S1MgmtApi.V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData);
  }
}(this, function(ApiClient, V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter, V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData) {
  'use strict';

  /**
   * The V21IncidentsSchemasUpdateIncidentStatusRequestSchema model module.
   * @module model/V21IncidentsSchemasUpdateIncidentStatusRequestSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21IncidentsSchemasUpdateIncidentStatusRequestSchema</code>.
   * @alias module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchema
   * @class
   * @param data {module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData} 
   * @param filter {module:model/V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter} 
   */
  var exports = function(data, filter) {
    this.data = data;
    this.filter = filter;
  };

  /**
   * Constructs a <code>V21IncidentsSchemasUpdateIncidentStatusRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchema} obj Optional instance to populate.
   * @return {module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchema} The populated <code>V21IncidentsSchemasUpdateIncidentStatusRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data'))
        obj.data = V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData.constructFromObject(data['data']);
      if (data.hasOwnProperty('filter'))
        obj.filter = V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter.constructFromObject(data['filter']);
    }
    return obj;
  }

  /**
   * @member {module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {module:model/V21IncidentsSchemasUpdateAnalystVerdictRequestSchemaFilter} filter
   */
  exports.prototype.filter = undefined;


  return exports;

}));
