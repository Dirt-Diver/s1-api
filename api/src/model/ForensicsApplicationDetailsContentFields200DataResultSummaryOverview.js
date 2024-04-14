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
    define(['ApiClient', 'model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewFile', 'model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewNetwork', 'model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewRegistry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewFile'), require('./ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewNetwork'), require('./ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewRegistry'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.ForensicsApplicationDetailsContentFields200DataResultSummaryOverview = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewFile, root.S1MgmtApi.ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewNetwork, root.S1MgmtApi.ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewRegistry);
  }
}(this, function(ApiClient, ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewFile, ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewNetwork, ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewRegistry) {
  'use strict';

  /**
   * The ForensicsApplicationDetailsContentFields200DataResultSummaryOverview model module.
   * @module model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverview
   * @version 2.1
   */

  /**
   * Constructs a new <code>ForensicsApplicationDetailsContentFields200DataResultSummaryOverview</code>.
   * Summary overview
   * @alias module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverview
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ForensicsApplicationDetailsContentFields200DataResultSummaryOverview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverview} obj Optional instance to populate.
   * @return {module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverview} The populated <code>ForensicsApplicationDetailsContentFields200DataResultSummaryOverview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('registry'))
        obj.registry = ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewRegistry.constructFromObject(data['registry']);
      if (data.hasOwnProperty('file'))
        obj.file = ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewFile.constructFromObject(data['file']);
      if (data.hasOwnProperty('network'))
        obj.network = ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewNetwork.constructFromObject(data['network']);
    }
    return obj;
  }

  /**
   * @member {module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewRegistry} registry
   */
  exports.prototype.registry = undefined;

  /**
   * @member {module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewFile} file
   */
  exports.prototype.file = undefined;

  /**
   * @member {module:model/ForensicsApplicationDetailsContentFields200DataResultSummaryOverviewNetwork} network
   */
  exports.prototype.network = undefined;


  return exports;

}));
