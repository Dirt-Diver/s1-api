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
    root.S1MgmtApi.V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData model module.
   * @module model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData</code>.
   * Data
   * @alias module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData
   * @class
   * @param incidentStatus {String} Incidentstatus
   */
  var exports = function(incidentStatus) {
    this.incidentStatus = incidentStatus;
  };

  /**
   * Constructs a <code>V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData} obj Optional instance to populate.
   * @return {module:model/V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData} The populated <code>V21IncidentsSchemasUpdateIncidentStatusRequestSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('incidentStatus'))
        obj.incidentStatus = ApiClient.convertToType(data['incidentStatus'], 'String');
    }
    return obj;
  }

  /**
   * Incidentstatus
   * @member {String} incidentStatus
   */
  exports.prototype.incidentStatus = undefined;


  return exports;

}));
