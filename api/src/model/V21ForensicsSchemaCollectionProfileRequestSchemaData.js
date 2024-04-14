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
    define(['ApiClient', 'model/V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.V21ForensicsSchemaCollectionProfileRequestSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts);
  }
}(this, function(ApiClient, V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts) {
  'use strict';

  /**
   * The V21ForensicsSchemaCollectionProfileRequestSchemaData model module.
   * @module model/V21ForensicsSchemaCollectionProfileRequestSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ForensicsSchemaCollectionProfileRequestSchemaData</code>.
   * Data
   * @alias module:model/V21ForensicsSchemaCollectionProfileRequestSchemaData
   * @class
   * @param scopeLevel {module:model/V21ForensicsSchemaCollectionProfileRequestSchemaData.ScopeLevelEnum} Scope level of the collection profile
   * @param artifacts {Array.<module:model/V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts>} Artifacts
   * @param name {String} Collection profile name
   */
  var exports = function(scopeLevel, artifacts, name) {
    this.scopeLevel = scopeLevel;
    this.artifacts = artifacts;
    this.name = name;
  };

  /**
   * Constructs a <code>V21ForensicsSchemaCollectionProfileRequestSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ForensicsSchemaCollectionProfileRequestSchemaData} obj Optional instance to populate.
   * @return {module:model/V21ForensicsSchemaCollectionProfileRequestSchemaData} The populated <code>V21ForensicsSchemaCollectionProfileRequestSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
      if (data.hasOwnProperty('artifacts'))
        obj.artifacts = ApiClient.convertToType(data['artifacts'], [V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
    }
    return obj;
  }

  /**
   * Scope level of the collection profile
   * @member {module:model/V21ForensicsSchemaCollectionProfileRequestSchemaData.ScopeLevelEnum} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;

  /**
   * Artifacts
   * @member {Array.<module:model/V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts>} artifacts
   */
  exports.prototype.artifacts = undefined;

  /**
   * Collection profile name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Collection profile description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Scope ID of the collection profile
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;



  /**
   * Allowed values for the <code>scopeLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeLevelEnum = {
    /**
     * value: "tenant"
     * @const
     */
    tenant: "tenant",

    /**
     * value: "account"
     * @const
     */
    account: "account",

    /**
     * value: "site"
     * @const
     */
    site: "site",

    /**
     * value: "group"
     * @const
     */
    group: "group"
  };

  return exports;

}));