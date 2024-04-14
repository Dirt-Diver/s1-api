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
    root.S1MgmtApi.RangerEnablementSchemasUpdateEnablementPostSchemaFilter = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RangerEnablementSchemasUpdateEnablementPostSchemaFilter model module.
   * @module model/RangerEnablementSchemasUpdateEnablementPostSchemaFilter
   * @version 2.1
   */

  /**
   * Constructs a new <code>RangerEnablementSchemasUpdateEnablementPostSchemaFilter</code>.
   * Filter
   * @alias module:model/RangerEnablementSchemasUpdateEnablementPostSchemaFilter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RangerEnablementSchemasUpdateEnablementPostSchemaFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangerEnablementSchemasUpdateEnablementPostSchemaFilter} obj Optional instance to populate.
   * @return {module:model/RangerEnablementSchemasUpdateEnablementPostSchemaFilter} The populated <code>RangerEnablementSchemasUpdateEnablementPostSchemaFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountIds'))
        obj.accountIds = ApiClient.convertToType(data['accountIds'], ['String']);
    }
    return obj;
  }

  /**
   * List of Account IDs to filter by
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;


  return exports;

}));
