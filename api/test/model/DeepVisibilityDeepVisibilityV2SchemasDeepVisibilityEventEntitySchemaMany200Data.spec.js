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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.S1MgmtApi);
  }
}(this, function(expect, S1MgmtApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200Data();
      });

      it('should create an instance of DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200Data', function() {
        // TODO: update the code to test DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200Data);
      });

      it('should have the property indicatorCategory (base name: "indicatorCategory")', function() {
        // TODO: update the code to test the property indicatorCategory
        expect(instance).to.have.property('indicatorCategory');
        // expect(instance.indicatorCategory).to.be(expectedValueLiteral);
      });

      it('should have the property srcProcDownloadToken (base name: "srcProcDownloadToken")', function() {
        // TODO: update the code to test the property srcProcDownloadToken
        expect(instance).to.have.property('srcProcDownloadToken');
        // expect(instance.srcProcDownloadToken).to.be(expectedValueLiteral);
      });

      it('should have the property parentProcessStartTime (base name: "parentProcessStartTime")', function() {
        // TODO: update the code to test the property parentProcessStartTime
        expect(instance).to.have.property('parentProcessStartTime');
        // expect(instance.parentProcessStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property objectType (base name: "objectType")', function() {
        // TODO: update the code to test the property objectType
        expect(instance).to.have.property('objectType');
        // expect(instance.objectType).to.be(expectedValueLiteral);
      });

      it('should have the property parentProcessName (base name: "parentProcessName")', function() {
        // TODO: update the code to test the property parentProcessName
        expect(instance).to.have.property('parentProcessName');
        // expect(instance.parentProcessName).to.be(expectedValueLiteral);
      });

      it('should have the property dnsResponse (base name: "dnsResponse")', function() {
        // TODO: update the code to test the property dnsResponse
        expect(instance).to.have.property('dnsResponse');
        // expect(instance.dnsResponse).to.be(expectedValueLiteral);
      });

      it('should have the property signedStatus (base name: "signedStatus")', function() {
        // TODO: update the code to test the property signedStatus
        expect(instance).to.have.property('signedStatus');
        // expect(instance.signedStatus).to.be(expectedValueLiteral);
      });

      it('should have the property tid (base name: "tid")', function() {
        // TODO: update the code to test the property tid
        expect(instance).to.have.property('tid');
        // expect(instance.tid).to.be(expectedValueLiteral);
      });

      it('should have the property processSubSystem (base name: "processSubSystem")', function() {
        // TODO: update the code to test the property processSubSystem
        expect(instance).to.have.property('processSubSystem');
        // expect(instance.processSubSystem).to.be(expectedValueLiteral);
      });

      it('should have the property processGroupId (base name: "processGroupId")', function() {
        // TODO: update the code to test the property processGroupId
        expect(instance).to.have.property('processGroupId');
        // expect(instance.processGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property agentIsActive (base name: "agentIsActive")', function() {
        // TODO: update the code to test the property agentIsActive
        expect(instance).to.have.property('agentIsActive');
        // expect(instance.agentIsActive).to.be(expectedValueLiteral);
      });

      it('should have the property registryPath (base name: "registryPath")', function() {
        // TODO: update the code to test the property registryPath
        expect(instance).to.have.property('registryPath');
        // expect(instance.registryPath).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorMetadata (base name: "indicatorMetadata")', function() {
        // TODO: update the code to test the property indicatorMetadata
        expect(instance).to.have.property('indicatorMetadata');
        // expect(instance.indicatorMetadata).to.be(expectedValueLiteral);
      });

      it('should have the property processImagePath (base name: "processImagePath")', function() {
        // TODO: update the code to test the property processImagePath
        expect(instance).to.have.property('processImagePath');
        // expect(instance.processImagePath).to.be(expectedValueLiteral);
      });

      it('should have the property dnsRequest (base name: "dnsRequest")', function() {
        // TODO: update the code to test the property dnsRequest
        expect(instance).to.have.property('dnsRequest');
        // expect(instance.dnsRequest).to.be(expectedValueLiteral);
      });

      it('should have the property networkSource (base name: "networkSource")', function() {
        // TODO: update the code to test the property networkSource
        expect(instance).to.have.property('networkSource');
        // expect(instance.networkSource).to.be(expectedValueLiteral);
      });

      it('should have the property taskName (base name: "taskName")', function() {
        // TODO: update the code to test the property taskName
        expect(instance).to.have.property('taskName');
        // expect(instance.taskName).to.be(expectedValueLiteral);
      });

      it('should have the property fileSha1 (base name: "fileSha1")', function() {
        // TODO: update the code to test the property fileSha1
        expect(instance).to.have.property('fileSha1');
        // expect(instance.fileSha1).to.be(expectedValueLiteral);
      });

      it('should have the property oldFileName (base name: "oldFileName")', function() {
        // TODO: update the code to test the property oldFileName
        expect(instance).to.have.property('oldFileName');
        // expect(instance.oldFileName).to.be(expectedValueLiteral);
      });

      it('should have the property agentVersion (base name: "agentVersion")', function() {
        // TODO: update the code to test the property agentVersion
        expect(instance).to.have.property('agentVersion');
        // expect(instance.agentVersion).to.be(expectedValueLiteral);
      });

      it('should have the property processIsRedirectedCommandProcessor (base name: "processIsRedirectedCommandProcessor")', function() {
        // TODO: update the code to test the property processIsRedirectedCommandProcessor
        expect(instance).to.have.property('processIsRedirectedCommandProcessor');
        // expect(instance.processIsRedirectedCommandProcessor).to.be(expectedValueLiteral);
      });

      it('should have the property oldFileSha1 (base name: "oldFileSha1")', function() {
        // TODO: update the code to test the property oldFileSha1
        expect(instance).to.have.property('oldFileSha1');
        // expect(instance.oldFileSha1).to.be(expectedValueLiteral);
      });

      it('should have the property verifiedStatus (base name: "verifiedStatus")', function() {
        // TODO: update the code to test the property verifiedStatus
        expect(instance).to.have.property('verifiedStatus');
        // expect(instance.verifiedStatus).to.be(expectedValueLiteral);
      });

      it('should have the property agentInfected (base name: "agentInfected")', function() {
        // TODO: update the code to test the property agentInfected
        expect(instance).to.have.property('agentInfected');
        // expect(instance.agentInfected).to.be(expectedValueLiteral);
      });

      it('should have the property loginsUserName (base name: "loginsUserName")', function() {
        // TODO: update the code to test the property loginsUserName
        expect(instance).to.have.property('loginsUserName');
        // expect(instance.loginsUserName).to.be(expectedValueLiteral);
      });

      it('should have the property fileSha256 (base name: "fileSha256")', function() {
        // TODO: update the code to test the property fileSha256
        expect(instance).to.have.property('fileSha256');
        // expect(instance.fileSha256).to.be(expectedValueLiteral);
      });

      it('should have the property processUserName (base name: "processUserName")', function() {
        // TODO: update the code to test the property processUserName
        expect(instance).to.have.property('processUserName');
        // expect(instance.processUserName).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property processRoot (base name: "processRoot")', function() {
        // TODO: update the code to test the property processRoot
        expect(instance).to.have.property('processRoot');
        // expect(instance.processRoot).to.be(expectedValueLiteral);
      });

      it('should have the property isAgentVersionFullySupportedForPgMessage (base name: "isAgentVersionFullySupportedForPgMessage")', function() {
        // TODO: update the code to test the property isAgentVersionFullySupportedForPgMessage
        expect(instance).to.have.property('isAgentVersionFullySupportedForPgMessage');
        // expect(instance.isAgentVersionFullySupportedForPgMessage).to.be(expectedValueLiteral);
      });

      it('should have the property md5 (base name: "md5")', function() {
        // TODO: update the code to test the property md5
        expect(instance).to.have.property('md5');
        // expect(instance.md5).to.be(expectedValueLiteral);
      });

      it('should have the property registryId (base name: "registryId")', function() {
        // TODO: update the code to test the property registryId
        expect(instance).to.have.property('registryId');
        // expect(instance.registryId).to.be(expectedValueLiteral);
      });

      it('should have the property fileSize (base name: "fileSize")', function() {
        // TODO: update the code to test the property fileSize
        expect(instance).to.have.property('fileSize');
        // expect(instance.fileSize).to.be(expectedValueLiteral);
      });

      it('should have the property agentOs (base name: "agentOs")', function() {
        // TODO: update the code to test the property agentOs
        expect(instance).to.have.property('agentOs');
        // expect(instance.agentOs).to.be(expectedValueLiteral);
      });

      it('should have the property dstIp (base name: "dstIp")', function() {
        // TODO: update the code to test the property dstIp
        expect(instance).to.have.property('dstIp');
        // expect(instance.dstIp).to.be(expectedValueLiteral);
      });

      it('should have the property agentIsDecommissioned (base name: "agentIsDecommissioned")', function() {
        // TODO: update the code to test the property agentIsDecommissioned
        expect(instance).to.have.property('agentIsDecommissioned');
        // expect(instance.agentIsDecommissioned).to.be(expectedValueLiteral);
      });

      it('should have the property sha256 (base name: "sha256")', function() {
        // TODO: update the code to test the property sha256
        expect(instance).to.have.property('sha256');
        // expect(instance.sha256).to.be(expectedValueLiteral);
      });

      it('should have the property processIsWow64 (base name: "processIsWow64")', function() {
        // TODO: update the code to test the property processIsWow64
        expect(instance).to.have.property('processIsWow64');
        // expect(instance.processIsWow64).to.be(expectedValueLiteral);
      });

      it('should have the property processDisplayName (base name: "processDisplayName")', function() {
        // TODO: update the code to test the property processDisplayName
        expect(instance).to.have.property('processDisplayName');
        // expect(instance.processDisplayName).to.be(expectedValueLiteral);
      });

      it('should have the property networkUrl (base name: "networkUrl")', function() {
        // TODO: update the code to test the property networkUrl
        expect(instance).to.have.property('networkUrl');
        // expect(instance.networkUrl).to.be(expectedValueLiteral);
      });

      it('should have the property processCmd (base name: "processCmd")', function() {
        // TODO: update the code to test the property processCmd
        expect(instance).to.have.property('processCmd');
        // expect(instance.processCmd).to.be(expectedValueLiteral);
      });

      it('should have the property siteName (base name: "siteName")', function() {
        // TODO: update the code to test the property siteName
        expect(instance).to.have.property('siteName');
        // expect(instance.siteName).to.be(expectedValueLiteral);
      });

      it('should have the property forensicUrl (base name: "forensicUrl")', function() {
        // TODO: update the code to test the property forensicUrl
        expect(instance).to.have.property('forensicUrl');
        // expect(instance.forensicUrl).to.be(expectedValueLiteral);
      });

      it('should have the property loginsBaseType (base name: "loginsBaseType")', function() {
        // TODO: update the code to test the property loginsBaseType
        expect(instance).to.have.property('loginsBaseType');
        // expect(instance.loginsBaseType).to.be(expectedValueLiteral);
      });

      it('should have the property processIntegrityLevel (base name: "processIntegrityLevel")', function() {
        // TODO: update the code to test the property processIntegrityLevel
        expect(instance).to.have.property('processIntegrityLevel');
        // expect(instance.processIntegrityLevel).to.be(expectedValueLiteral);
      });

      it('should have the property direction (base name: "direction")', function() {
        // TODO: update the code to test the property direction
        expect(instance).to.have.property('direction');
        // expect(instance.direction).to.be(expectedValueLiteral);
      });

      it('should have the property processName (base name: "processName")', function() {
        // TODO: update the code to test the property processName
        expect(instance).to.have.property('processName');
        // expect(instance.processName).to.be(expectedValueLiteral);
      });

      it('should have the property processSessionId (base name: "processSessionId")', function() {
        // TODO: update the code to test the property processSessionId
        expect(instance).to.have.property('processSessionId');
        // expect(instance.processSessionId).to.be(expectedValueLiteral);
      });

      it('should have the property agentUuid (base name: "agentUuid")', function() {
        // TODO: update the code to test the property agentUuid
        expect(instance).to.have.property('agentUuid');
        // expect(instance.agentUuid).to.be(expectedValueLiteral);
      });

      it('should have the property srcPort (base name: "srcPort")', function() {
        // TODO: update the code to test the property srcPort
        expect(instance).to.have.property('srcPort');
        // expect(instance.srcPort).to.be(expectedValueLiteral);
      });

      it('should have the property signatureSignedInvalidReason (base name: "signatureSignedInvalidReason")', function() {
        // TODO: update the code to test the property signatureSignedInvalidReason
        expect(instance).to.have.property('signatureSignedInvalidReason');
        // expect(instance.signatureSignedInvalidReason).to.be(expectedValueLiteral);
      });

      it('should have the property taskPath (base name: "taskPath")', function() {
        // TODO: update the code to test the property taskPath
        expect(instance).to.have.property('taskPath');
        // expect(instance.taskPath).to.be(expectedValueLiteral);
      });

      it('should have the property oldFileMd5 (base name: "oldFileMd5")', function() {
        // TODO: update the code to test the property oldFileMd5
        expect(instance).to.have.property('oldFileMd5');
        // expect(instance.oldFileMd5).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorName (base name: "indicatorName")', function() {
        // TODO: update the code to test the property indicatorName
        expect(instance).to.have.property('indicatorName');
        // expect(instance.indicatorName).to.be(expectedValueLiteral);
      });

      it('should have the property dstPort (base name: "dstPort")', function() {
        // TODO: update the code to test the property dstPort
        expect(instance).to.have.property('dstPort');
        // expect(instance.dstPort).to.be(expectedValueLiteral);
      });

      it('should have the property eventType (base name: "eventType")', function() {
        // TODO: update the code to test the property eventType
        expect(instance).to.have.property('eventType');
        // expect(instance.eventType).to.be(expectedValueLiteral);
      });

      it('should have the property rpid (base name: "rpid")', function() {
        // TODO: update the code to test the property rpid
        expect(instance).to.have.property('rpid');
        // expect(instance.rpid).to.be(expectedValueLiteral);
      });

      it('should have the property threatStatus (base name: "threatStatus")', function() {
        // TODO: update the code to test the property threatStatus
        expect(instance).to.have.property('threatStatus');
        // expect(instance.threatStatus).to.be(expectedValueLiteral);
      });

      it('should have the property isAgentVersionFullySupportedForPg (base name: "isAgentVersionFullySupportedForPg")', function() {
        // TODO: update the code to test the property isAgentVersionFullySupportedForPg
        expect(instance).to.have.property('isAgentVersionFullySupportedForPg');
        // expect(instance.isAgentVersionFullySupportedForPg).to.be(expectedValueLiteral);
      });

      it('should have the property agentId (base name: "agentId")', function() {
        // TODO: update the code to test the property agentId
        expect(instance).to.have.property('agentId');
        // expect(instance.agentId).to.be(expectedValueLiteral);
      });

      it('should have the property processUniqueKey (base name: "processUniqueKey")', function() {
        // TODO: update the code to test the property processUniqueKey
        expect(instance).to.have.property('processUniqueKey');
        // expect(instance.processUniqueKey).to.be(expectedValueLiteral);
      });

      it('should have the property processStartTime (base name: "processStartTime")', function() {
        // TODO: update the code to test the property processStartTime
        expect(instance).to.have.property('processStartTime');
        // expect(instance.processStartTime).to.be(expectedValueLiteral);
      });

      it('should have the property parentProcessGroupId (base name: "parentProcessGroupId")', function() {
        // TODO: update the code to test the property parentProcessGroupId
        expect(instance).to.have.property('parentProcessGroupId');
        // expect(instance.parentProcessGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property srcIp (base name: "srcIp")', function() {
        // TODO: update the code to test the property srcIp
        expect(instance).to.have.property('srcIp');
        // expect(instance.srcIp).to.be(expectedValueLiteral);
      });

      it('should have the property relatedToThreat (base name: "relatedToThreat")', function() {
        // TODO: update the code to test the property relatedToThreat
        expect(instance).to.have.property('relatedToThreat');
        // expect(instance.relatedToThreat).to.be(expectedValueLiteral);
      });

      it('should have the property networkMethod (base name: "networkMethod")', function() {
        // TODO: update the code to test the property networkMethod
        expect(instance).to.have.property('networkMethod');
        // expect(instance.networkMethod).to.be(expectedValueLiteral);
      });

      it('should have the property fileMd5 (base name: "fileMd5")', function() {
        // TODO: update the code to test the property fileMd5
        expect(instance).to.have.property('fileMd5');
        // expect(instance.fileMd5).to.be(expectedValueLiteral);
      });

      it('should have the property connectionStatus (base name: "connectionStatus")', function() {
        // TODO: update the code to test the property connectionStatus
        expect(instance).to.have.property('connectionStatus');
        // expect(instance.connectionStatus).to.be(expectedValueLiteral);
      });

      it('should have the property agentName (base name: "agentName")', function() {
        // TODO: update the code to test the property agentName
        expect(instance).to.have.property('agentName');
        // expect(instance.agentName).to.be(expectedValueLiteral);
      });

      it('should have the property fileType (base name: "fileType")', function() {
        // TODO: update the code to test the property fileType
        expect(instance).to.have.property('fileType');
        // expect(instance.fileType).to.be(expectedValueLiteral);
      });

      it('should have the property agentDomain (base name: "agentDomain")', function() {
        // TODO: update the code to test the property agentDomain
        expect(instance).to.have.property('agentDomain');
        // expect(instance.agentDomain).to.be(expectedValueLiteral);
      });

      it('should have the property parentProcessIsMalicious (base name: "parentProcessIsMalicious")', function() {
        // TODO: update the code to test the property parentProcessIsMalicious
        expect(instance).to.have.property('parentProcessIsMalicious');
        // expect(instance.parentProcessIsMalicious).to.be(expectedValueLiteral);
      });

      it('should have the property agentMachineType (base name: "agentMachineType")', function() {
        // TODO: update the code to test the property agentMachineType
        expect(instance).to.have.property('agentMachineType');
        // expect(instance.agentMachineType).to.be(expectedValueLiteral);
      });

      it('should have the property agentNetworkStatus (base name: "agentNetworkStatus")', function() {
        // TODO: update the code to test the property agentNetworkStatus
        expect(instance).to.have.property('agentNetworkStatus');
        // expect(instance.agentNetworkStatus).to.be(expectedValueLiteral);
      });

      it('should have the property fileFullName (base name: "fileFullName")', function() {
        // TODO: update the code to test the property fileFullName
        expect(instance).to.have.property('fileFullName');
        // expect(instance.fileFullName).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property agentGroupId (base name: "agentGroupId")', function() {
        // TODO: update the code to test the property agentGroupId
        expect(instance).to.have.property('agentGroupId');
        // expect(instance.agentGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property oldFileSha256 (base name: "oldFileSha256")', function() {
        // TODO: update the code to test the property oldFileSha256
        expect(instance).to.have.property('oldFileSha256');
        // expect(instance.oldFileSha256).to.be(expectedValueLiteral);
      });

      it('should have the property sha1 (base name: "sha1")', function() {
        // TODO: update the code to test the property sha1
        expect(instance).to.have.property('sha1');
        // expect(instance.sha1).to.be(expectedValueLiteral);
      });

      it('should have the property agentIp (base name: "agentIp")', function() {
        // TODO: update the code to test the property agentIp
        expect(instance).to.have.property('agentIp');
        // expect(instance.agentIp).to.be(expectedValueLiteral);
      });

      it('should have the property publisher (base name: "publisher")', function() {
        // TODO: update the code to test the property publisher
        expect(instance).to.have.property('publisher');
        // expect(instance.publisher).to.be(expectedValueLiteral);
      });

      it('should have the property parentProcessUniqueKey (base name: "parentProcessUniqueKey")', function() {
        // TODO: update the code to test the property parentProcessUniqueKey
        expect(instance).to.have.property('parentProcessUniqueKey');
        // expect(instance.parentProcessUniqueKey).to.be(expectedValueLiteral);
      });

      it('should have the property processImageSha1Hash (base name: "processImageSha1Hash")', function() {
        // TODO: update the code to test the property processImageSha1Hash
        expect(instance).to.have.property('processImageSha1Hash');
        // expect(instance.processImageSha1Hash).to.be(expectedValueLiteral);
      });

      it('should have the property parentPid (base name: "parentPid")', function() {
        // TODO: update the code to test the property parentPid
        expect(instance).to.have.property('parentPid');
        // expect(instance.parentPid).to.be(expectedValueLiteral);
      });

      it('should have the property pid (base name: "pid")', function() {
        // TODO: update the code to test the property pid
        expect(instance).to.have.property('pid');
        // expect(instance.pid).to.be(expectedValueLiteral);
      });

      it('should have the property trueContext (base name: "trueContext")', function() {
        // TODO: update the code to test the property trueContext
        expect(instance).to.have.property('trueContext');
        // expect(instance.trueContext).to.be(expectedValueLiteral);
      });

      it('should have the property fileId (base name: "fileId")', function() {
        // TODO: update the code to test the property fileId
        expect(instance).to.have.property('fileId');
        // expect(instance.fileId).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property processIsMalicious (base name: "processIsMalicious")', function() {
        // TODO: update the code to test the property processIsMalicious
        expect(instance).to.have.property('processIsMalicious');
        // expect(instance.processIsMalicious).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorDescription (base name: "indicatorDescription")', function() {
        // TODO: update the code to test the property indicatorDescription
        expect(instance).to.have.property('indicatorDescription');
        // expect(instance.indicatorDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
