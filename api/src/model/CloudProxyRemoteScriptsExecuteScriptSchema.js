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
    define(['ApiClient', 'model/CloudProxyRemoteScriptsExecuteScriptSchemaData', 'model/CloudProxyRemoteScriptsExecuteScriptSchemaFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudProxyRemoteScriptsExecuteScriptSchemaData'), require('./CloudProxyRemoteScriptsExecuteScriptSchemaFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.CloudProxyRemoteScriptsExecuteScriptSchema = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.CloudProxyRemoteScriptsExecuteScriptSchemaData, root.S1MgmtApi.CloudProxyRemoteScriptsExecuteScriptSchemaFilter);
  }
}(this, function(ApiClient, CloudProxyRemoteScriptsExecuteScriptSchemaData, CloudProxyRemoteScriptsExecuteScriptSchemaFilter) {
  'use strict';

  /**
   * The CloudProxyRemoteScriptsExecuteScriptSchema model module.
   * @module model/CloudProxyRemoteScriptsExecuteScriptSchema
   * @version 2.1
   */

  /**
   * Constructs a new <code>CloudProxyRemoteScriptsExecuteScriptSchema</code>.
   * @alias module:model/CloudProxyRemoteScriptsExecuteScriptSchema
   * @class
   * @param filter {module:model/CloudProxyRemoteScriptsExecuteScriptSchemaFilter} 
   */
  var exports = function(filter) {
    this.filter = filter;
  };

  /**
   * Constructs a <code>CloudProxyRemoteScriptsExecuteScriptSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudProxyRemoteScriptsExecuteScriptSchema} obj Optional instance to populate.
   * @return {module:model/CloudProxyRemoteScriptsExecuteScriptSchema} The populated <code>CloudProxyRemoteScriptsExecuteScriptSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter'))
        obj.filter = CloudProxyRemoteScriptsExecuteScriptSchemaFilter.constructFromObject(data['filter']);
      if (data.hasOwnProperty('data'))
        obj.data = CloudProxyRemoteScriptsExecuteScriptSchemaData.constructFromObject(data['data']);
    }
    return obj;
  }

  /**
   * @member {module:model/CloudProxyRemoteScriptsExecuteScriptSchemaFilter} filter
   */
  exports.prototype.filter = undefined;

  /**
   * @member {module:model/CloudProxyRemoteScriptsExecuteScriptSchemaData} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
