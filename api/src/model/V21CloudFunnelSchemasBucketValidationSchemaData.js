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
    root.S1MgmtApi.V21CloudFunnelSchemasBucketValidationSchemaData = factory(root.S1MgmtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V21CloudFunnelSchemasBucketValidationSchemaData model module.
   * @module model/V21CloudFunnelSchemasBucketValidationSchemaData
   * @version 2.1
   */

  /**
   * Constructs a new <code>V21CloudFunnelSchemasBucketValidationSchemaData</code>.
   * Data
   * @alias module:model/V21CloudFunnelSchemasBucketValidationSchemaData
   * @class
   * @param bucketUrl {String} Validate bucket permissions
   */
  var exports = function(bucketUrl) {
    this.bucketUrl = bucketUrl;
  };

  /**
   * Constructs a <code>V21CloudFunnelSchemasBucketValidationSchemaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V21CloudFunnelSchemasBucketValidationSchemaData} obj Optional instance to populate.
   * @return {module:model/V21CloudFunnelSchemasBucketValidationSchemaData} The populated <code>V21CloudFunnelSchemasBucketValidationSchemaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('useAssumeRole'))
        obj.useAssumeRole = ApiClient.convertToType(data['useAssumeRole'], 'Boolean');
      if (data.hasOwnProperty('accountId'))
        obj.accountId = ApiClient.convertToType(data['accountId'], 'String');
      if (data.hasOwnProperty('cloudProvider'))
        obj.cloudProvider = ApiClient.convertToType(data['cloudProvider'], 'String');
      if (data.hasOwnProperty('siteId'))
        obj.siteId = ApiClient.convertToType(data['siteId'], 'String');
      if (data.hasOwnProperty('roleToAssume'))
        obj.roleToAssume = ApiClient.convertToType(data['roleToAssume'], 'String');
      if (data.hasOwnProperty('bucketUrl'))
        obj.bucketUrl = ApiClient.convertToType(data['bucketUrl'], 'String');
    }
    return obj;
  }

  /**
   * If set to true, activates the AWS AssumeRole functionality for accessing S3 buckets or other associated resources. Only applicable if cloud_provider is s3.
   * @member {Boolean} useAssumeRole
   */
  exports.prototype.useAssumeRole = undefined;

  /**
   * Account id
   * @member {String} accountId
   */
  exports.prototype.accountId = undefined;

  /**
   * Cloud provider, default is aws
   * @member {String} cloudProvider
   */
  exports.prototype.cloudProvider = undefined;

  /**
   * Site id
   * @member {String} siteId
   */
  exports.prototype.siteId = undefined;

  /**
   * The aws role to assume when using assume role functionality.Only applicable if cloud_provider is s3.
   * @member {String} roleToAssume
   */
  exports.prototype.roleToAssume = undefined;

  /**
   * Validate bucket permissions
   * @member {String} bucketUrl
   */
  exports.prototype.bucketUrl = undefined;


  return exports;

}));
