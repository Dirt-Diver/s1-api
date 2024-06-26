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
    root.S1MgmtApi.V21ForensicsSchemaCollectionProfileResultSchema200Data = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts);
  }
}(this, function(ApiClient, V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts) {
  'use strict';

  /**
   * The V21ForensicsSchemaCollectionProfileResultSchema200Data model module.
   * @module model/V21ForensicsSchemaCollectionProfileResultSchema200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ForensicsSchemaCollectionProfileResultSchema200Data</code>.
   * Response data
   * @alias module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data
   * @class
   * @param isBundled {Boolean} Flag indicating if the Collection profile is bundled (provided by S1)
   * @param scopeLevel {module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data.ScopeLevelEnum} Scope level where the Collection profile is stored
   * @param osTypes {Array.<module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data.OsTypesEnum>} Os types
   * @param scopePath {String} Full path of Scope where the Collection profile is stored
   * @param createdAt {Date} Timestamp when the profile was created
   * @param id {String} Collection profile ID
   * @param name {String} name of collection profile in db
   * @param scopeName {String} Scope name where the Collection profile is stored
   * @param description {String} Collection profile description
   * @param creator {String} Email of user who created the profile
   * @param version {String} Collection profile version
   * @param scopeId {String} Scope ID where the Collection profile is stored
   * @param type {module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data.TypeEnum} Type of RemoteOps Action (forensicsProfile)
   * @param updater {String} Email of user who update the profile
   */
  var exports = function(isBundled, scopeLevel, osTypes, scopePath, createdAt, id, name, scopeName, description, creator, version, scopeId, type, updater) {
    this.isBundled = isBundled;
    this.scopeLevel = scopeLevel;
    this.osTypes = osTypes;
    this.scopePath = scopePath;
    this.createdAt = createdAt;
    this.id = id;
    this.name = name;
    this.scopeName = scopeName;
    this.description = description;
    this.creator = creator;
    this.version = version;
    this.scopeId = scopeId;
    this.type = type;
    this.updater = updater;
  };

  /**
   * Constructs a <code>V21ForensicsSchemaCollectionProfileResultSchema200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data} obj Optional instance to populate.
   * @return {module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data} The populated <code>V21ForensicsSchemaCollectionProfileResultSchema200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isBundled'))
        obj.isBundled = ApiClient.convertToType(data['isBundled'], 'Boolean');
      if (data.hasOwnProperty('scopeLevel'))
        obj.scopeLevel = ApiClient.convertToType(data['scopeLevel'], 'String');
      if (data.hasOwnProperty('artifacts'))
        obj.artifacts = ApiClient.convertToType(data['artifacts'], [V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts]);
      if (data.hasOwnProperty('osTypes'))
        obj.osTypes = ApiClient.convertToType(data['osTypes'], ['String']);
      if (data.hasOwnProperty('scopePath'))
        obj.scopePath = ApiClient.convertToType(data['scopePath'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scopeName'))
        obj.scopeName = ApiClient.convertToType(data['scopeName'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('scopeId'))
        obj.scopeId = ApiClient.convertToType(data['scopeId'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('updater'))
        obj.updater = ApiClient.convertToType(data['updater'], 'String');
    }
    return obj;
  }

  /**
   * Flag indicating if the Collection profile is bundled (provided by S1)
   * @member {Boolean} isBundled
   */
  exports.prototype.isBundled = undefined;

  /**
   * Scope level where the Collection profile is stored
   * @member {module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data.ScopeLevelEnum} scopeLevel
   */
  exports.prototype.scopeLevel = undefined;

  /**
   * Artifacts
   * @member {Array.<module:model/V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts>} artifacts
   */
  exports.prototype.artifacts = undefined;

  /**
   * Os types
   * @member {Array.<module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data.OsTypesEnum>} osTypes
   */
  exports.prototype.osTypes = undefined;

  /**
   * Full path of Scope where the Collection profile is stored
   * @member {String} scopePath
   */
  exports.prototype.scopePath = undefined;

  /**
   * Timestamp when the profile was created
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Collection profile ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * name of collection profile in db
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Scope name where the Collection profile is stored
   * @member {String} scopeName
   */
  exports.prototype.scopeName = undefined;

  /**
   * Collection profile description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Email of user who created the profile
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * Collection profile version
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * Scope ID where the Collection profile is stored
   * @member {String} scopeId
   */
  exports.prototype.scopeId = undefined;

  /**
   * Timestamp when the profile was updated
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Type of RemoteOps Action (forensicsProfile)
   * @member {module:model/V21ForensicsSchemaCollectionProfileResultSchema200Data.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Email of user who update the profile
   * @member {String} updater
   */
  exports.prototype.updater = undefined;



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
    group: "group",

    /**
     * value: "sentinel"
     * @const
     */
    sentinel: "sentinel"
  };


  /**
   * Allowed values for the <code>osTypes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OsTypesEnum = {
    /**
     * value: "linux"
     * @const
     */
    linux: "linux",

    /**
     * value: "macos"
     * @const
     */
    macos: "macos",

    /**
     * value: "windows"
     * @const
     */
    windows: "windows"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "forensicsProfile"
     * @const
     */
    forensicsProfile: "forensicsProfile"
  };

  return exports;

}));
