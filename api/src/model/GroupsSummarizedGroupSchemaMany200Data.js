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
    root.S1MgmtApi.GroupsSummarizedGroupSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GroupsSummarizedGroupSchemaMany200Data model module.
   * @module model/GroupsSummarizedGroupSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>GroupsSummarizedGroupSchemaMany200Data</code>.
   * @alias module:model/GroupsSummarizedGroupSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GroupsSummarizedGroupSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupsSummarizedGroupSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/GroupsSummarizedGroupSchemaMany200Data} The populated <code>GroupsSummarizedGroupSchemaMany200Data</code> instance.
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
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('creatorId'))
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'String');
      if (data.hasOwnProperty('totalAgents'))
        obj.totalAgents = ApiClient.convertToType(data['totalAgents'], 'Number');
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('registrationToken'))
        obj.registrationToken = ApiClient.convertToType(data['registrationToken'], Object);
      if (data.hasOwnProperty('filterName'))
        obj.filterName = ApiClient.convertToType(data['filterName'], 'String');
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
   * If the group is dynamic id of the filter which is used to associate agents
   * @member {String} filterId
   */
  exports.prototype.filterId = undefined;

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Timestamp of group creation
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The user that created the group
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * The ID of the user that created the group
   * @member {String} creatorId
   */
  exports.prototype.creatorId = undefined;

  /**
   * Count of agents in the group
   * @member {Number} totalAgents
   */
  exports.prototype.totalAgents = undefined;

  /**
   * The rank sets the priority of a dynamic group over others
   * @member {Number} rank
   */
  exports.prototype.rank = undefined;

  /**
   * Timestamp of last update
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * The id of the site this group is part of
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Group type
   * @member {module:model/GroupsSummarizedGroupSchemaMany200Data.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * [DEPRECATED] token generation in dedicated endpoint - /groups/<group_id>/token
   * @member {Object} registrationToken
   */
  exports.prototype.registrationToken = undefined;

  /**
   * If the group is dynamic the name of the filter which is used to associate agents
   * @member {String} filterName
   */
  exports.prototype.filterName = undefined;

  /**
   * True if the policy is inherited from Site, False if the group has its own edited policy
   * @member {Boolean} inherits
   */
  exports.prototype.inherits = undefined;

  /**
   * True only for the default group of the Site
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;



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