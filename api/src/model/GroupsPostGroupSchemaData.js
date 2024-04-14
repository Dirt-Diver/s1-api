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
    define(['ApiClient', 'model/GroupsPostGroupSchemaDataPolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupsPostGroupSchemaDataPolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.GroupsPostGroupSchemaData = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.GroupsPostGroupSchemaDataPolicy);
  }
}(this, function(ApiClient, GroupsPostGroupSchemaDataPolicy) {
  'use strict';

  /**
   * The GroupsPostGroupSchemaData model module.
   * @module model/GroupsPostGroupSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>GroupsPostGroupSchemaData</code>.
   * Data
   * @alias module:model/GroupsPostGroupSchemaData
   * @class
   * @param name {String} Name
   * @param siteId {String} The site this group should be part of
   * @param inherits {Boolean} True to inherit from site policy. 
   */
  var exports = function(name, siteId, inherits) {
    this.name = name;
    this.siteId = siteId;
    this.inherits = inherits;
  };

  /**
   * Constructs a <code>GroupsPostGroupSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupsPostGroupSchemaData} obj Optional instance to populate.
   * @return {module:model/GroupsPostGroupSchemaData} The populated <code>GroupsPostGroupSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('filterId'))
        obj.filterId = ApiClient.convertToType(data['filterId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('policy'))
        obj.policy = GroupsPostGroupSchemaDataPolicy.constructFromObject(data['policy']);
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('inherits'))
        obj.inherits = ApiClient.convertToType(data['inherits'], 'Boolean');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
    }
    return obj;
  }

  /**
   * The user-defined description for the Group
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * If supplied this group will be dynamic using the filter to associate agents.
   * @member {String} filterId
   */
  exports.prototype.filterId = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Obsolete for post - The rank of the group
   * @member {Number} rank
   */
  exports.prototype.rank = undefined;

  /**
   * @member {module:model/GroupsPostGroupSchemaDataPolicy} policy
   */
  exports.prototype.policy = undefined;

  /**
   * Obsolete - Always MGMT
   * @member {String} source
   */
  exports.prototype.source = undefined;

  /**
   * The site this group should be part of
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Type of Group: Static, Dynamic, or Pinned
   * @member {module:model/GroupsPostGroupSchemaData.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * True to inherit from site policy. 
   * @member {Boolean} inherits
   */
  exports.prototype.inherits = undefined;

  /**
   * Obsolete for POST, always false
   * @member {Boolean} isDefault
   * @default false
   */
  exports.prototype.isDefault = false;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "static"
     * @const
     */
    _static: "static",

    /**
     * value: "dynamic"
     * @const
     */
    dynamic: "dynamic",

    /**
     * value: "pinned"
     * @const
     */
    pinned: "pinned"
  };

  return exports;

}));