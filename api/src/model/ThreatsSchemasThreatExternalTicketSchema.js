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
    define(['ApiClient', 'model/ThreatsSchemasThreatExternalTicketSchemaData', 'model/ThreatsSchemasThreatsIncidentSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ThreatsSchemasThreatExternalTicketSchemaData'), require('./ThreatsSchemasThreatsIncidentSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ThreatsSchemasThreatExternalTicketSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ThreatsSchemasThreatExternalTicketSchemaData, root.S1MgmtApi.ThreatsSchemasThreatsIncidentSchemaFilter);
  }
}(this, function(ApiClient, ThreatsSchemasThreatExternalTicketSchemaData, ThreatsSchemasThreatsIncidentSchemaFilter) {
  'use strict';

  /**
   * The ThreatsSchemasThreatExternalTicketSchema model module.
   * @module model/ThreatsSchemasThreatExternalTicketSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatExternalTicketSchema</code>.
   * @alias module:model/ThreatsSchemasThreatExternalTicketSchema
   * @class
   * @param filter {module:model/ThreatsSchemasThreatsIncidentSchemaFilter} 
   * @param data {module:model/ThreatsSchemasThreatExternalTicketSchemaData} 
   */
  var exports = function(filter, data) {
    this.filter = filter;
    this.data = data;
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatExternalTicketSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatExternalTicketSchema} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatExternalTicketSchema} The populated <code>ThreatsSchemasThreatExternalTicketSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = ThreatsSchemasThreatsIncidentSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = ThreatsSchemasThreatExternalTicketSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/ThreatsSchemasThreatsIncidentSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/ThreatsSchemasThreatExternalTicketSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));