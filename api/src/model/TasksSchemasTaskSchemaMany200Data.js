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
    root.S1MgmtApi.TasksSchemasTaskSchemaMany200Data = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TasksSchemasTaskSchemaMany200Data model module.
   * @module model/TasksSchemasTaskSchemaMany200Data
   * @version 2.1
   */

  /**
   * Constructs a new <code>TasksSchemasTaskSchemaMany200Data</code>.
   * @alias module:model/TasksSchemasTaskSchemaMany200Data
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TasksSchemasTaskSchemaMany200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksSchemasTaskSchemaMany200Data} obj Optional instance to populate.
   * @return {module:model/TasksSchemasTaskSchemaMany200Data} The populated <code>TasksSchemasTaskSchemaMany200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('detailedStatus'))
        obj.detailedStatus = ApiClient.convertToType(data['detailedStatus'], 'String');
      if (data.hasOwnProperty('agentUuid'))
        obj.agentUuid = ApiClient.convertToType(data['agentUuid'], 'String');
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('agentMachineType'))
        obj.agentMachineType = ApiClient.convertToType(data['agentMachineType'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('scriptResultsPath'))
        obj.scriptResultsPath = ApiClient.convertToType(data['scriptResultsPath'], 'String');
      if (data.hasOwnProperty('accountName'))
        obj.accountName = ApiClient.convertToType(data['accountName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('agentIsActive'))
        obj.agentIsActive = ApiClient.convertToType(data['agentIsActive'], 'Boolean');
      if (data.hasOwnProperty('scriptResultsSignature'))
        obj.scriptResultsSignature = ApiClient.convertToType(data['scriptResultsSignature'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (data.hasOwnProperty('initiatedById'))
        obj.initiatedById = ApiClient.convertToType(data['initiatedById'], 'String');
      if (data.hasOwnProperty('statusCode'))
        obj.statusCode = ApiClient.convertToType(data['statusCode'], 'Number');
      if (data.hasOwnProperty('agentId'))
        obj.agentId = ApiClient.convertToType(data['agentId'], 'String');
      if (data.hasOwnProperty('agentIsDecommissioned'))
        obj.agentIsDecommissioned = ApiClient.convertToType(data['agentIsDecommissioned'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('agentOsType'))
        obj.agentOsType = ApiClient.convertToType(data['agentOsType'], 'String');
      if (data.hasOwnProperty('parentTaskId'))
        obj.parentTaskId = ApiClient.convertToType(data['parentTaskId'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (data.hasOwnProperty('siteName'))
        obj.siteName = ApiClient.convertToType(data['siteName'], 'String');
      if (data.hasOwnProperty('statusDescription'))
        obj.statusDescription = ApiClient.convertToType(data['statusDescription'], Object);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('initiatedBy'))
        obj.initiatedBy = ApiClient.convertToType(data['initiatedBy'], 'String');
      if (data.hasOwnProperty('scriptResultsBucket'))
        obj.scriptResultsBucket = ApiClient.convertToType(data['scriptResultsBucket'], 'String');
      if (data.hasOwnProperty('agentComputerName'))
        obj.agentComputerName = ApiClient.convertToType(data['agentComputerName'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * Detailed status
   * @member {String} detailedStatus
   */
  exports.prototype.detailedStatus = undefined;

  /**
   * Agent uuid
   * @member {String} agentUuid
   */
  exports.prototype.agentUuid = undefined;

  /**
   * Account id
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * Agent machine type
   * @member {String} agentMachineType
   */
  exports.prototype.agentMachineType = undefined;

  /**
   * Timestamp of last update
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Site id
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * Script results path
   * @member {String} scriptResultsPath
   */
  exports.prototype.scriptResultsPath = undefined;

  /**
   * Account name
   * @member {String} accountName
   */
  exports.prototype.accountName = undefined;

  /**
   * Task id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Agent is active
   * @member {Boolean} agentIsActive
   */
  exports.prototype.agentIsActive = undefined;

  /**
   * Script results signature
   * @member {String} scriptResultsSignature
   */
  exports.prototype.scriptResultsSignature = undefined;

  /**
   * Group name
   * @member {String} groupName
   */
  exports.prototype.groupName = undefined;

  /**
   * Initiated by id
   * @member {String} initiatedById
   */
  exports.prototype.initiatedById = undefined;

  /**
   * Status code
   * @member {Number} statusCode
   */
  exports.prototype.statusCode = undefined;

  /**
   * Agent id
   * @member {String} agentId
   */
  exports.prototype.agentId = undefined;

  /**
   * Agent is decommissioned
   * @member {Boolean} agentIsDecommissioned
   */
  exports.prototype.agentIsDecommissioned = undefined;

  /**
   * Type
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * OS type
   * @member {module:model/TasksSchemasTaskSchemaMany200Data.AgentOsTypeEnum} agentOsType
   */
  exports.prototype.agentOsType = undefined;

  /**
   * Parent task id
   * @member {String} parentTaskId
   */
  exports.prototype.parentTaskId = undefined;

  /**
   * Description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Group id
   * @member {String} groupId
   */
  exports.prototype.groupId = undefined;

  /**
   * Site name
   * @member {String} siteName
   */
  exports.prototype.siteName = undefined;

  /**
   * Status description
   * @member {Object} statusDescription
   */
  exports.prototype.statusDescription = undefined;

  /**
   * Timestamp of date creation
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Initiated by
   * @member {String} initiatedBy
   */
  exports.prototype.initiatedBy = undefined;

  /**
   * Script results bucket
   * @member {String} scriptResultsBucket
   */
  exports.prototype.scriptResultsBucket = undefined;

  /**
   * Agent computer name
   * @member {String} agentComputerName
   */
  exports.prototype.agentComputerName = undefined;

  /**
   * Status
   * @member {module:model/TasksSchemasTaskSchemaMany200Data.StatusEnum} status
   */
  exports.prototype.status = undefined;



  /**
   * Allowed values for the <code>agentOsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AgentOsTypeEnum = {
    /**
     * value: "windows"
     * @const
     */
    windows: "windows",

    /**
     * value: "macos"
     * @const
     */
    macos: "macos",

    /**
     * value: "linux"
     * @const
     */
    linux: "linux",

    /**
     * value: "windows_legacy"
     * @const
     */
    windowsLegacy: "windows_legacy"
  };


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "created"
     * @const
     */
    created: "created",

    /**
     * value: "scheduled"
     * @const
     */
    scheduled: "scheduled",

    /**
     * value: "pending"
     * @const
     */
    pending: "pending",

    /**
     * value: "pending_user_action"
     * @const
     */
    pendingUserAction: "pending_user_action",

    /**
     * value: "in_progress"
     * @const
     */
    inProgress: "in_progress",

    /**
     * value: "failed"
     * @const
     */
    failed: "failed",

    /**
     * value: "completed"
     * @const
     */
    completed: "completed",

    /**
     * value: "canceled"
     * @const
     */
    canceled: "canceled",

    /**
     * value: "expired"
     * @const
     */
    expired: "expired",

    /**
     * value: "partially_completed"
     * @const
     */
    partiallyCompleted: "partially_completed"
  };

  return exports;

}));
