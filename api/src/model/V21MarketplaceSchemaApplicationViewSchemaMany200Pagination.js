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
    root.S1MgmtApi.V21MarketplaceSchemaApplicationViewSchemaMany200Pagination = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21MarketplaceSchemaApplicationViewSchemaMany200Pagination model module.
   * @module model/V21MarketplaceSchemaApplicationViewSchemaMany200Pagination
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21MarketplaceSchemaApplicationViewSchemaMany200Pagination</code>.
   * Pagination information
   * @alias module:model/V21MarketplaceSchemaApplicationViewSchemaMany200Pagination
   * @class
   * @param totalItems {Number} Total number of items found matching your query
   */
  var exports = function(totalItems) {
    this.totalItems = totalItems;
  };

  /**
   * Constructs a <code>V21MarketplaceSchemaApplicationViewSchemaMany200Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21MarketplaceSchemaApplicationViewSchemaMany200Pagination} obj Optional instance to populate.
   * @return {module:model/V21MarketplaceSchemaApplicationViewSchemaMany200Pagination} The populated <code>V21MarketplaceSchemaApplicationViewSchemaMany200Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('nextCursor'))
        obj.nextCursor = ApiClient.convertToType(data['nextCursor'], 'String');
      if (data.hasOwnProperty('totalItems'))
        obj.totalItems = ApiClient.convertToType(data['totalItems'], 'Number');
    }
    return obj;
  }

  /**
   * Pass this value as \"cursor\" on your next request, to get the next page of results (Will be \"null\" when last page has been reached)
   * @member {String} nextCursor
   * @default 'null'
   */
  exports.prototype.nextCursor = 'null';

  /**
   * Total number of items found matching your query
   * @member {Number} totalItems
   */
  exports.prototype.totalItems = undefined;


  return exports;

}));
