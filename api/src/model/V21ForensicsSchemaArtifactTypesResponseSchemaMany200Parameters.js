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
    root.S1MgmtApi.V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters model module.
   * @module model/V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters</code>.
   * @alias module:model/V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters
   * @class
   * @param key {String} Unique key of artifact parameter
   * @param _default {String} Default value of artifact parameter, null if the parameter does not allow default
   * @param type {module:model/V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters.TypeEnum} Type of artifact parameter
   */
  var exports = function(key, _default, type) {
    this.key = key;
    this._default = _default;
    this.type = type;
  };

  /**
   * Constructs a <code>V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters} obj Optional instance to populate.
   * @return {module:model/V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters} The populated <code>V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('default'))
        obj._default = ApiClient.convertToType(data['default'], 'String');
      if (data.hasOwnProperty('example'))
        obj.example = ApiClient.convertToType(data['example'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * Unique key of artifact parameter
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * Default value of artifact parameter, null if the parameter does not allow default
   * @member {String} _default
   */
  exports.prototype._default = undefined;

  /**
   * Example of the parameter value
   * @member {String} example
   */
  exports.prototype.example = undefined;

  /**
   * Artifact parameter description
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Type of artifact parameter
   * @member {module:model/V21ForensicsSchemaArtifactTypesResponseSchemaMany200Parameters.TypeEnum} type
   */
  exports.prototype.type = undefined;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "str"
     * @const
     */
    str: "str",

    /**
     * value: "pathlist"
     * @const
     */
    pathlist: "pathlist",

    /**
     * value: "int"
     * @const
     */
    _int: "int",

    /**
     * value: "dict"
     * @const
     */
    dict: "dict"
  };

  return exports;

}));
