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
    root.S1MgmtApi.V21SchemasPostThreatIntelligenceSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21SchemasPostThreatIntelligenceSchemaData model module.
   * @module model/V21SchemasPostThreatIntelligenceSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21SchemasPostThreatIntelligenceSchemaData</code>.
   * @alias module:model/V21SchemasPostThreatIntelligenceSchemaData
   * @class
   * @param source {String} The source of the identified Threat Intelligence indicator
   * @param type {module:model/V21SchemasPostThreatIntelligenceSchemaData.TypeEnum} The type of the Threat Intelligence indicator
   * @param value {String} The value of the Threat Intelligence indicator
   */
  var exports = function(source, type, value) {
    this.source = source;
    this.type = type;
    this.value = value;
  };

  /**
   * Constructs a <code>V21SchemasPostThreatIntelligenceSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21SchemasPostThreatIntelligenceSchemaData} obj Optional instance to populate.
   * @return {module:model/V21SchemasPostThreatIntelligenceSchemaData} The populated <code>V21SchemasPostThreatIntelligenceSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mitreTactic'))
        obj.mitreTactic = ApiClient.convertToType(data['mitreTactic'], ['String']);
      if (data.hasOwnProperty('originalRiskScore'))
        obj.originalRiskScore = ApiClient.convertToType(data['originalRiskScore'], 'Number');
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], ['String']);
      if (data.hasOwnProperty('intrusionSets'))
        obj.intrusionSets = ApiClient.convertToType(data['intrusionSets'], ['String']);
      if (data.hasOwnProperty('validUntil'))
        obj.validUntil = ApiClient.convertToType(data['validUntil'], 'Date');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('campaignNames'))
        obj.campaignNames = ApiClient.convertToType(data['campaignNames'], ['String']);
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], ['String']);
      if (data.hasOwnProperty('creationTime'))
        obj.creationTime = ApiClient.convertToType(data['creationTime'], 'Date');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], ['String']);
      if (data.hasOwnProperty('threatActors'))
        obj.threatActors = ApiClient.convertToType(data['threatActors'], ['String']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('patternType'))
        obj.patternType = ApiClient.convertToType(data['patternType'], Object);
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('threatActorTypes'))
        obj.threatActorTypes = ApiClient.convertToType(data['threatActorTypes'], ['String']);
      if (data.hasOwnProperty('pattern'))
        obj.pattern = ApiClient.convertToType(data['pattern'], 'String');
      if (data.hasOwnProperty('creator'))
        obj.creator = ApiClient.convertToType(data['creator'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('malwareNames'))
        obj.malwareNames = ApiClient.convertToType(data['malwareNames'], ['String']);
      if (data.hasOwnProperty('severity'))
        obj.severity = ApiClient.convertToType(data['severity'], 'Number');
    }
    return obj;
  }

  /**
   * Mitre tactic
   * @member {Array.<String>} mitreTactic
   */
  exports.prototype.mitreTactic = undefined;

  /**
   * The relative level of risk associated with the Threat Intelligence indicator. An integer between 0 and 100, inclusive.
   * @member {Number} originalRiskScore
   */
  exports.prototype.originalRiskScore = undefined;

  /**
   * Labels
   * @member {Array.<String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * Intrusion sets
   * @member {Array.<String>} intrusionSets
   */
  exports.prototype.intrusionSets = undefined;

  /**
   * Expiration date for the Threat Intelligence indicator
   * @member {Date} validUntil
   */
  exports.prototype.validUntil = undefined;

  /**
   * Description of the Threat Intelligence indicator
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Campaign names
   * @member {Array.<String>} campaignNames
   */
  exports.prototype.campaignNames = undefined;

  /**
   * The source of the identified Threat Intelligence indicator
   * @member {String} source
   */
  exports.prototype.source = undefined;

  /**
   * Reference
   * @member {Array.<String>} reference
   */
  exports.prototype.reference = undefined;

  /**
   * The time at which the Threat Intelligence indicator was originally created (as indicated by the TI source)
   * @member {Date} creationTime
   */
  exports.prototype.creationTime = undefined;

  /**
   * Category
   * @member {Array.<String>} category
   */
  exports.prototype.category = undefined;

  /**
   * Threat actors
   * @member {Array.<String>} threatActors
   */
  exports.prototype.threatActors = undefined;

  /**
   * The metadata of the Threat Intelligence indicator
   * @member {String} metadata
   * @default ''
   */
  exports.prototype.metadata = '';

  /**
   * The type of the Threat Intelligence indicator
   * @member {module:model/V21SchemasPostThreatIntelligenceSchemaData.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * The comparison method used by SentinelOne to trigger the event
   * @member {module:model/V21SchemasPostThreatIntelligenceSchemaData.MethodEnum} method
   * @default 'EQUALS'
   */
  exports.prototype.method = 'EQUALS';

  /**
   * Threat Intelligence indicator name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Characterize the pattern language that the Threat Intelligence indicator pattern is expressed in
   * @member {Object} patternType
   */
  exports.prototype.patternType = undefined;

  /**
   * The unique identifier of the indicator as provided by the Threat Intelligence source
   * @member {String} externalId
   */
  exports.prototype.externalId = undefined;

  /**
   * Threat actor types
   * @member {Array.<module:model/V21SchemasPostThreatIntelligenceSchemaData.ThreatActorTypesEnum>} threatActorTypes
   */
  exports.prototype.threatActorTypes = undefined;

  /**
   * The detection pattern for this Threat Intelligence indicator (expressed as a STIX Pattern, e.g. Comparison expression/Boolean Operators etc.)
   * @member {String} pattern
   */
  exports.prototype.pattern = undefined;

  /**
   * The user that uploaded the Threat Intelligence indicator
   * @member {String} creator
   */
  exports.prototype.creator = undefined;

  /**
   * The value of the Threat Intelligence indicator
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * Malware names
   * @member {Array.<String>} malwareNames
   */
  exports.prototype.malwareNames = undefined;

  /**
   * The potential impact of the Threat Intelligence indicator. Designed to work based on OCSF format for scores 0-7.
   * @member {Number} severity
   */
  exports.prototype.severity = undefined;



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "DNS"
     * @const
     */
    DNS: "DNS",

    /**
     * value: "IPV4"
     * @const
     */
    iPV4: "IPV4",

    /**
     * value: "IPV6"
     * @const
     */
    iPV6: "IPV6",

    /**
     * value: "MD5"
     * @const
     */
    mD5: "MD5",

    /**
     * value: "SHA1"
     * @const
     */
    sHA1: "SHA1",

    /**
     * value: "SHA256"
     * @const
     */
    sHA256: "SHA256",

    /**
     * value: "URL"
     * @const
     */
    URL: "URL"
  };


  /**
   * Allowed values for the <code>method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MethodEnum = {
    /**
     * value: "EQUALS"
     * @const
     */
    EQUALS: "EQUALS"
  };


  /**
   * Allowed values for the <code>threatActorTypes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ThreatActorTypesEnum = {
    /**
     * value: "Nation-state"
     * @const
     */
    nationState: "Nation-state",

    /**
     * value: "Criminal"
     * @const
     */
    criminal: "Criminal",

    /**
     * value: "Hacktivist"
     * @const
     */
    hacktivist: "Hacktivist",

    /**
     * value: "Insider"
     * @const
     */
    insider: "Insider",

    /**
     * value: "APT"
     * @const
     */
    APT: "APT",

    /**
     * value: "Script kiddies"
     * @const
     */
    scriptKiddies: "Script kiddies"
  };

  return exports;

}));