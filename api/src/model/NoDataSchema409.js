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
    define(['ApiClient', 'model/NoDataSchema400Errors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NoDataSchema400Errors'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.NoDataSchema409 = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.NoDataSchema400Errors);
  }
}(this, function(ApiClient, NoDataSchema400Errors) {
  'use strict';

  /**
   * The NoDataSchema409 model module.
   * @module model/NoDataSchema409
   * @version 2.1
   */

  /**
   * Constructs a new <code>NoDataSchema409</code>.
   * @alias module:model/NoDataSchema409
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NoDataSchema409</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoDataSchema409} obj Optional instance to populate.
   * @return {module:model/NoDataSchema409} The populated <code>NoDataSchema409</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [NoDataSchema400Errors]);
    }
    return obj;
  }

  /**
   * A list of encountered errors
   * @member {Array.<module:model/NoDataSchema400Errors>} errors
   */
  exports.prototype.errors = undefined;


  return exports;

}));
