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
    define(['ApiClient', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeAutoInstallBrowserExtensions', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeBehavioralIndicators', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCommandScripts', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDataMasking', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDllModuleLoad', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDns', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDriver', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeIp', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeLogin', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipe', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeProcess', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeRegistry', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeScheduledTask', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeUrl', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogs', 'model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogsExtended'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeAutoInstallBrowserExtensions'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeBehavioralIndicators'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCommandScripts'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDataMasking'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDllModuleLoad'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDns'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDriver'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeIp'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeLogin'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipe'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeProcess'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeRegistry'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeScheduledTask'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeUrl'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogs'), require('./SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogsExtended'));
  } else {
    // Browser globals (root is window)
    if (!root.S1MgmtApi) {
      root.S1MgmtApi = {};
    }
    root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventType = factory(root.S1MgmtApi.ApiClient, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeAutoInstallBrowserExtensions, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeBehavioralIndicators, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCommandScripts, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDataMasking, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDllModuleLoad, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDns, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDriver, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeIp, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeLogin, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipe, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeProcess, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeRegistry, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeScheduledTask, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeUrl, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogs, root.S1MgmtApi.SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogsExtended);
  }
}(this, function(ApiClient, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeAutoInstallBrowserExtensions, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeBehavioralIndicators, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCommandScripts, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDataMasking, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDllModuleLoad, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDns, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDriver, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeIp, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeLogin, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipe, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeProcess, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeRegistry, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeScheduledTask, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeUrl, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogs, SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogsExtended) {
  'use strict';

  /**
   * The SitesSitePutSchemaDataPolicyDvAttributesPerEventType model module.
   * @module model/SitesSitePutSchemaDataPolicyDvAttributesPerEventType
   * @version 2.1
   */

  /**
   * Constructs a new <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventType</code>.
   * The DV attributes
   * @alias module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventType} obj Optional instance to populate.
   * @return {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventType} The populated <code>SitesSitePutSchemaDataPolicyDvAttributesPerEventType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('smartFileMonitoring'))
        obj.smartFileMonitoring = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring.constructFromObject(data['smartFileMonitoring']);
      if (data.hasOwnProperty('windowsEventLogs'))
        obj.windowsEventLogs = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogs.constructFromObject(data['windowsEventLogs']);
      if (data.hasOwnProperty('autoInstallBrowserExtensions'))
        obj.autoInstallBrowserExtensions = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeAutoInstallBrowserExtensions.constructFromObject(data['autoInstallBrowserExtensions']);
      if (data.hasOwnProperty('dataMasking'))
        obj.dataMasking = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDataMasking.constructFromObject(data['dataMasking']);
      if (data.hasOwnProperty('dllModuleLoad'))
        obj.dllModuleLoad = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDllModuleLoad.constructFromObject(data['dllModuleLoad']);
      if (data.hasOwnProperty('dns'))
        obj.dns = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDns.constructFromObject(data['dns']);
      if (data.hasOwnProperty('crossProcess'))
        obj.crossProcess = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess.constructFromObject(data['crossProcess']);
      if (data.hasOwnProperty('registry'))
        obj.registry = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeRegistry.constructFromObject(data['registry']);
      if (data.hasOwnProperty('driver'))
        obj.driver = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDriver.constructFromObject(data['driver']);
      if (data.hasOwnProperty('windowsEventLogsExtended'))
        obj.windowsEventLogsExtended = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogsExtended.constructFromObject(data['windowsEventLogsExtended']);
      if (data.hasOwnProperty('file'))
        obj.file = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile.constructFromObject(data['file']);
      if (data.hasOwnProperty('namedPipeExtended'))
        obj.namedPipeExtended = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended.constructFromObject(data['namedPipeExtended']);
      if (data.hasOwnProperty('url'))
        obj.url = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeUrl.constructFromObject(data['url']);
      if (data.hasOwnProperty('behavioralIndicators'))
        obj.behavioralIndicators = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeBehavioralIndicators.constructFromObject(data['behavioralIndicators']);
      if (data.hasOwnProperty('process'))
        obj.process = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeProcess.constructFromObject(data['process']);
      if (data.hasOwnProperty('commandScripts'))
        obj.commandScripts = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCommandScripts.constructFromObject(data['commandScripts']);
      if (data.hasOwnProperty('namedPipe'))
        obj.namedPipe = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipe.constructFromObject(data['namedPipe']);
      if (data.hasOwnProperty('ip'))
        obj.ip = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeIp.constructFromObject(data['ip']);
      if (data.hasOwnProperty('login'))
        obj.login = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeLogin.constructFromObject(data['login']);
      if (data.hasOwnProperty('scheduledTask'))
        obj.scheduledTask = SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeScheduledTask.constructFromObject(data['scheduledTask']);
    }
    return obj;
  }

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeSmartFileMonitoring} smartFileMonitoring
   */
  exports.prototype.smartFileMonitoring = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogs} windowsEventLogs
   */
  exports.prototype.windowsEventLogs = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeAutoInstallBrowserExtensions} autoInstallBrowserExtensions
   */
  exports.prototype.autoInstallBrowserExtensions = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDataMasking} dataMasking
   */
  exports.prototype.dataMasking = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDllModuleLoad} dllModuleLoad
   */
  exports.prototype.dllModuleLoad = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDns} dns
   */
  exports.prototype.dns = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCrossProcess} crossProcess
   */
  exports.prototype.crossProcess = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeRegistry} registry
   */
  exports.prototype.registry = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeDriver} driver
   */
  exports.prototype.driver = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeWindowsEventLogsExtended} windowsEventLogsExtended
   */
  exports.prototype.windowsEventLogsExtended = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeFile} file
   */
  exports.prototype.file = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipeExtended} namedPipeExtended
   */
  exports.prototype.namedPipeExtended = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeUrl} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeBehavioralIndicators} behavioralIndicators
   */
  exports.prototype.behavioralIndicators = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeProcess} process
   */
  exports.prototype.process = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeCommandScripts} commandScripts
   */
  exports.prototype.commandScripts = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeNamedPipe} namedPipe
   */
  exports.prototype.namedPipe = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeIp} ip
   */
  exports.prototype.ip = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeLogin} login
   */
  exports.prototype.login = undefined;

  /**
   * @member {module:model/SitesSitePutSchemaDataPolicyDvAttributesPerEventTypeScheduledTask} scheduledTask
   */
  exports.prototype.scheduledTask = undefined;


  return exports;

}));
