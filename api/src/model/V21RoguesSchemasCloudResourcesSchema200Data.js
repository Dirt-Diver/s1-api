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
    define(['ApiClient', 'model/V21RoguesSchemasCloudResourcesSchema200DataResources'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21RoguesSchemasCloudResourcesSchema200DataResources'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21RoguesSchemasCloudResourcesSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21RoguesSchemasCloudResourcesSchema200DataResources);
  }
}(this, function(ApiClient, V21RoguesSchemasCloudResourcesSchema200DataResources) {
  'use strict';

  /**
   * The V21RoguesSchemasCloudResourcesSchema200Data model module.
   * @module model/V21RoguesSchemasCloudResourcesSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21RoguesSchemasCloudResourcesSchema200Data</code>.
   * Response data
   * @alias module:model/V21RoguesSchemasCloudResourcesSchema200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21RoguesSchemasCloudResourcesSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21RoguesSchemasCloudResourcesSchema200Data} obj Optional instance to populate.
   * @return {module:model/V21RoguesSchemasCloudResourcesSchema200Data} The populated <code>V21RoguesSchemasCloudResourcesSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], [V21RoguesSchemasCloudResourcesSchema200DataResources]);
    }
    return obj;
  }

  /**
   * Resources
   * @member {Array.<module:model/V21RoguesSchemasCloudResourcesSchema200DataResources>} resources
   */
  exports.prototype.resources = undefined;


  return exports;

}));