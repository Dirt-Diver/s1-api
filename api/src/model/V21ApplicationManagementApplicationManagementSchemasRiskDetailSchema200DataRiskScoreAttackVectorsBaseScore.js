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
    root.S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore model module.
   * @module model/V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore</code>.
   * Base score
   * @alias module:model/V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore} obj Optional instance to populate.
   * @return {module:model/V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore} The populated <code>V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectorsBaseScore</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('confidentiality'))
        obj.confidentiality = ApiClient.convertToType(data['confidentiality'], 'String');
      if (data.hasOwnProperty('privilegesRequired'))
        obj.privilegesRequired = ApiClient.convertToType(data['privilegesRequired'], 'String');
      if (data.hasOwnProperty('integrity'))
        obj.integrity = ApiClient.convertToType(data['integrity'], 'String');
      if (data.hasOwnProperty('attackComplexity'))
        obj.attackComplexity = ApiClient.convertToType(data['attackComplexity'], 'String');
      if (data.hasOwnProperty('attackVector'))
        obj.attackVector = ApiClient.convertToType(data['attackVector'], 'String');
      if (data.hasOwnProperty('userInteraction'))
        obj.userInteraction = ApiClient.convertToType(data['userInteraction'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('availability'))
        obj.availability = ApiClient.convertToType(data['availability'], 'String');
    }
    return obj;
  }

  /**
   * Confidentiality
   * @member {String} confidentiality
   */
  exports.prototype.confidentiality = undefined;

  /**
   * Privileges required
   * @member {String} privilegesRequired
   */
  exports.prototype.privilegesRequired = undefined;

  /**
   * Integrity
   * @member {String} integrity
   */
  exports.prototype.integrity = undefined;

  /**
   * Attack complexity
   * @member {String} attackComplexity
   */
  exports.prototype.attackComplexity = undefined;

  /**
   * Attack vector
   * @member {String} attackVector
   */
  exports.prototype.attackVector = undefined;

  /**
   * User interaction
   * @member {String} userInteraction
   */
  exports.prototype.userInteraction = undefined;

  /**
   * Scope
   * @member {String} scope
   */
  exports.prototype.scope = undefined;

  /**
   * Availability
   * @member {String} availability
   */
  exports.prototype.availability = undefined;


  return exports;

}));
