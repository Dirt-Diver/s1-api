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
    root.S1MgmtApi.ThreatsSchemasThreatSchemaMany200ContainerInfo = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ThreatsSchemasThreatSchemaMany200ContainerInfo model module.
   * @module model/ThreatsSchemasThreatSchemaMany200ContainerInfo
   * @version 2.1
   */

  /**
   * Constructs a new <code>ThreatsSchemasThreatSchemaMany200ContainerInfo</code>.
   * Threat container information
   * @alias module:model/ThreatsSchemasThreatSchemaMany200ContainerInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ThreatsSchemasThreatSchemaMany200ContainerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreatsSchemasThreatSchemaMany200ContainerInfo} obj Optional instance to populate.
   * @return {module:model/ThreatsSchemasThreatSchemaMany200ContainerInfo} The populated <code>ThreatsSchemasThreatSchemaMany200ContainerInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
      if (data.hasOwnProperty('isContainerQuarantine'))
        obj.isContainerQuarantine = ApiClient.convertToType(data['isContainerQuarantine'], 'Boolean');
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], ['String']);
    }
    return obj;
  }

  /**
   * Name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Image
   * @member {String} image
   */
  exports.prototype.image = undefined;

  /**
   * True if the container is quarantined
   * @member {Boolean} isContainerQuarantine
   */
  exports.prototype.isContainerQuarantine = undefined;

  /**
   * Labels
   * @member {Array.<String>} labels
   */
  exports.prototype.labels = undefined;


  return exports;

}));