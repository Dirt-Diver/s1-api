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
    root.S1MgmtApi.V21RoguesSchemasCloudResourcesSchema200DataResources = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21RoguesSchemasCloudResourcesSchema200DataResources model module.
   * @module model/V21RoguesSchemasCloudResourcesSchema200DataResources
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21RoguesSchemasCloudResourcesSchema200DataResources</code>.
   * @alias module:model/V21RoguesSchemasCloudResourcesSchema200DataResources
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21RoguesSchemasCloudResourcesSchema200DataResources</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21RoguesSchemasCloudResourcesSchema200DataResources} obj Optional instance to populate.
   * @return {module:model/V21RoguesSchemasCloudResourcesSchema200DataResources} The populated <code>V21RoguesSchemasCloudResourcesSchema200DataResources</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cloudProviderAccountName'))
        obj.cloudProviderAccountName = ApiClient.convertToType(data['cloudProviderAccountName'], 'String');
      if (data.hasOwnProperty('resourceType'))
        obj.resourceType = ApiClient.convertToType(data['resourceType'], 'String');
      if (data.hasOwnProperty('virtualNetworkId'))
        obj.virtualNetworkId = ApiClient.convertToType(data['virtualNetworkId'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], Object);
      if (data.hasOwnProperty('osTypeIcon'))
        obj.osTypeIcon = ApiClient.convertToType(data['osTypeIcon'], 'String');
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], 'String');
      if (data.hasOwnProperty('osType'))
        obj.osType = ApiClient.convertToType(data['osType'], 'String');
      if (data.hasOwnProperty('cloudProviderName'))
        obj.cloudProviderName = ApiClient.convertToType(data['cloudProviderName'], 'String');
      if (data.hasOwnProperty('cloudProviderOrganization'))
        obj.cloudProviderOrganization = ApiClient.convertToType(data['cloudProviderOrganization'], 'String');
      if (data.hasOwnProperty('createdTime'))
        obj.createdTime = ApiClient.convertToType(data['createdTime'], 'String');
      if (data.hasOwnProperty('cloudProviderAccountId'))
        obj.cloudProviderAccountId = ApiClient.convertToType(data['cloudProviderAccountId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} cloudProviderAccountName
   */
  exports.prototype.cloudProviderAccountName = undefined;

  /**
   * @member {String} resourceType
   */
  exports.prototype.resourceType = undefined;

  /**
   * @member {String} virtualNetworkId
   */
  exports.prototype.virtualNetworkId = undefined;

  /**
   * Cloud Resource ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Object} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {String} osTypeIcon
   */
  exports.prototype.osTypeIcon = undefined;

  /**
   * @member {String} region
   */
  exports.prototype.region = undefined;

  /**
   * @member {String} osType
   */
  exports.prototype.osType = undefined;

  /**
   * @member {String} cloudProviderName
   */
  exports.prototype.cloudProviderName = undefined;

  /**
   * @member {String} cloudProviderOrganization
   */
  exports.prototype.cloudProviderOrganization = undefined;

  /**
   * @member {String} createdTime
   */
  exports.prototype.createdTime = undefined;

  /**
   * @member {String} cloudProviderAccountId
   */
  exports.prototype.cloudProviderAccountId = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;


  return exports;

}));
