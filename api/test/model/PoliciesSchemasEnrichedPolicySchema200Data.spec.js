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
    describe('PoliciesSchemasEnrichedPolicySchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.PoliciesSchemasEnrichedPolicySchema200Data();
      });

      it('should create an instance of PoliciesSchemasEnrichedPolicySchema200Data', function() {
        // TODO: update the code to test PoliciesSchemasEnrichedPolicySchema200Data
        expect(instance).to.be.a(S1MgmtApi.PoliciesSchemasEnrichedPolicySchema200Data);
      });

      it('should have the property autoMitigationAction (base name: "autoMitigationAction")', function() {
        // TODO: update the code to test the property autoMitigationAction
        expect(instance).to.have.property('autoMitigationAction');
        // expect(instance.autoMitigationAction).to.be(expectedValueLiteral);
      });

      it('should have the property mitigationMode (base name: "mitigationMode")', function() {
        // TODO: update the code to test the property mitigationMode
        expect(instance).to.have.property('mitigationMode');
        // expect(instance.mitigationMode).to.be(expectedValueLiteral);
      });

      it('should have the property iocAttributes (base name: "iocAttributes")', function() {
        // TODO: update the code to test the property iocAttributes
        expect(instance).to.have.property('iocAttributes');
        // expect(instance.iocAttributes).to.be(expectedValueLiteral);
      });

      it('should have the property fwForNetworkQuarantineEnabled (base name: "fwForNetworkQuarantineEnabled")', function() {
        // TODO: update the code to test the property fwForNetworkQuarantineEnabled
        expect(instance).to.have.property('fwForNetworkQuarantineEnabled');
        // expect(instance.fwForNetworkQuarantineEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property researchOn (base name: "researchOn")', function() {
        // TODO: update the code to test the property researchOn
        expect(instance).to.have.property('researchOn');
        // expect(instance.researchOn).to.be(expectedValueLiteral);
      });

      it('should have the property autoFileUpload (base name: "autoFileUpload")', function() {
        // TODO: update the code to test the property autoFileUpload
        expect(instance).to.have.property('autoFileUpload');
        // expect(instance.autoFileUpload).to.be(expectedValueLiteral);
      });

      it('should have the property mitigationModeSuspicious (base name: "mitigationModeSuspicious")', function() {
        // TODO: update the code to test the property mitigationModeSuspicious
        expect(instance).to.have.property('mitigationModeSuspicious');
        // expect(instance.mitigationModeSuspicious).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property antiTamperingOn (base name: "antiTamperingOn")', function() {
        // TODO: update the code to test the property antiTamperingOn
        expect(instance).to.have.property('antiTamperingOn');
        // expect(instance.antiTamperingOn).to.be(expectedValueLiteral);
      });

      it('should have the property identityReportInterval (base name: "identityReportInterval")', function() {
        // TODO: update the code to test the property identityReportInterval
        expect(instance).to.have.property('identityReportInterval');
        // expect(instance.identityReportInterval).to.be(expectedValueLiteral);
      });

      it('should have the property monitorOnExecute (base name: "monitorOnExecute")', function() {
        // TODO: update the code to test the property monitorOnExecute
        expect(instance).to.have.property('monitorOnExecute');
        // expect(instance.monitorOnExecute).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property driverBlocking (base name: "driverBlocking")', function() {
        // TODO: update the code to test the property driverBlocking
        expect(instance).to.have.property('driverBlocking');
        // expect(instance.driverBlocking).to.be(expectedValueLiteral);
      });

      it('should have the property identityEndpointReporting (base name: "identityEndpointReporting")', function() {
        // TODO: update the code to test the property identityEndpointReporting
        expect(instance).to.have.property('identityEndpointReporting');
        // expect(instance.identityEndpointReporting).to.be(expectedValueLiteral);
      });

      it('should have the property isDefault (base name: "isDefault")', function() {
        // TODO: update the code to test the property isDefault
        expect(instance).to.have.property('isDefault');
        // expect(instance.isDefault).to.be(expectedValueLiteral);
      });

      it('should have the property ioc (base name: "ioc")', function() {
        // TODO: update the code to test the property ioc
        expect(instance).to.have.property('ioc');
        // expect(instance.ioc).to.be(expectedValueLiteral);
      });

      it('should have the property agentUiOn (base name: "agentUiOn")', function() {
        // TODO: update the code to test the property agentUiOn
        expect(instance).to.have.property('agentUiOn');
        // expect(instance.agentUiOn).to.be(expectedValueLiteral);
      });

      it('should have the property inheritedFrom (base name: "inheritedFrom")', function() {
        // TODO: update the code to test the property inheritedFrom
        expect(instance).to.have.property('inheritedFrom');
        // expect(instance.inheritedFrom).to.be(expectedValueLiteral);
      });

      it('should have the property monitorOnWrite (base name: "monitorOnWrite")', function() {
        // TODO: update the code to test the property monitorOnWrite
        expect(instance).to.have.property('monitorOnWrite');
        // expect(instance.monitorOnWrite).to.be(expectedValueLiteral);
      });

      it('should have the property identityUpdateInterval (base name: "identityUpdateInterval")', function() {
        // TODO: update the code to test the property identityUpdateInterval
        expect(instance).to.have.property('identityUpdateInterval');
        // expect(instance.identityUpdateInterval).to.be(expectedValueLiteral);
      });

      it('should have the property iocSupported (base name: "iocSupported")', function() {
        // TODO: update the code to test the property iocSupported
        expect(instance).to.have.property('iocSupported');
        // expect(instance.iocSupported).to.be(expectedValueLiteral);
      });

      it('should have the property identityThrottlingInterval (base name: "identityThrottlingInterval")', function() {
        // TODO: update the code to test the property identityThrottlingInterval
        expect(instance).to.have.property('identityThrottlingInterval');
        // expect(instance.identityThrottlingInterval).to.be(expectedValueLiteral);
      });

      it('should have the property agentLoggingOn (base name: "agentLoggingOn")', function() {
        // TODO: update the code to test the property agentLoggingOn
        expect(instance).to.have.property('agentLoggingOn');
        // expect(instance.agentLoggingOn).to.be(expectedValueLiteral);
      });

      it('should have the property unsignedDriverBlockingOn (base name: "unsignedDriverBlockingOn")', function() {
        // TODO: update the code to test the property unsignedDriverBlockingOn
        expect(instance).to.have.property('unsignedDriverBlockingOn');
        // expect(instance.unsignedDriverBlockingOn).to.be(expectedValueLiteral);
      });

      it('should have the property agentUi (base name: "agentUi")', function() {
        // TODO: update the code to test the property agentUi
        expect(instance).to.have.property('agentUi');
        // expect(instance.agentUi).to.be(expectedValueLiteral);
      });

      it('should have the property userFullName (base name: "userFullName")', function() {
        // TODO: update the code to test the property userFullName
        expect(instance).to.have.property('userFullName');
        // expect(instance.userFullName).to.be(expectedValueLiteral);
      });

      it('should have the property signedDriverBlockingOn (base name: "signedDriverBlockingOn")', function() {
        // TODO: update the code to test the property signedDriverBlockingOn
        expect(instance).to.have.property('signedDriverBlockingOn');
        // expect(instance.signedDriverBlockingOn).to.be(expectedValueLiteral);
      });

      it('should have the property allowRemoteShell (base name: "allowRemoteShell")', function() {
        // TODO: update the code to test the property allowRemoteShell
        expect(instance).to.have.property('allowRemoteShell');
        // expect(instance.allowRemoteShell).to.be(expectedValueLiteral);
      });

      it('should have the property isDvPolicyPerEventType (base name: "isDvPolicyPerEventType")', function() {
        // TODO: update the code to test the property isDvPolicyPerEventType
        expect(instance).to.have.property('isDvPolicyPerEventType');
        // expect(instance.isDvPolicyPerEventType).to.be(expectedValueLiteral);
      });

      it('should have the property removeMacros (base name: "removeMacros")', function() {
        // TODO: update the code to test the property removeMacros
        expect(instance).to.have.property('removeMacros');
        // expect(instance.removeMacros).to.be(expectedValueLiteral);
      });

      it('should have the property scanNewAgents (base name: "scanNewAgents")', function() {
        // TODO: update the code to test the property scanNewAgents
        expect(instance).to.have.property('scanNewAgents');
        // expect(instance.scanNewAgents).to.be(expectedValueLiteral);
      });

      it('should have the property snapshotsOn (base name: "snapshotsOn")', function() {
        // TODO: update the code to test the property snapshotsOn
        expect(instance).to.have.property('snapshotsOn');
        // expect(instance.snapshotsOn).to.be(expectedValueLiteral);
      });

      it('should have the property engines (base name: "engines")', function() {
        // TODO: update the code to test the property engines
        expect(instance).to.have.property('engines');
        // expect(instance.engines).to.be(expectedValueLiteral);
      });

      it('should have the property remoteOpsForensics (base name: "remoteOpsForensics")', function() {
        // TODO: update the code to test the property remoteOpsForensics
        expect(instance).to.have.property('remoteOpsForensics');
        // expect(instance.remoteOpsForensics).to.be(expectedValueLiteral);
      });

      it('should have the property forensicsAutoTriggering (base name: "forensicsAutoTriggering")', function() {
        // TODO: update the code to test the property forensicsAutoTriggering
        expect(instance).to.have.property('forensicsAutoTriggering');
        // expect(instance.forensicsAutoTriggering).to.be(expectedValueLiteral);
      });

      it('should have the property identityOn (base name: "identityOn")', function() {
        // TODO: update the code to test the property identityOn
        expect(instance).to.have.property('identityOn');
        // expect(instance.identityOn).to.be(expectedValueLiteral);
      });

      it('should have the property cloudValidationOn (base name: "cloudValidationOn")', function() {
        // TODO: update the code to test the property cloudValidationOn
        expect(instance).to.have.property('cloudValidationOn');
        // expect(instance.cloudValidationOn).to.be(expectedValueLiteral);
      });

      it('should have the property autoImmuneOn (base name: "autoImmuneOn")', function() {
        // TODO: update the code to test the property autoImmuneOn
        expect(instance).to.have.property('autoImmuneOn');
        // expect(instance.autoImmuneOn).to.be(expectedValueLiteral);
      });

      it('should have the property agentNotification (base name: "agentNotification")', function() {
        // TODO: update the code to test the property agentNotification
        expect(instance).to.have.property('agentNotification');
        // expect(instance.agentNotification).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property networkQuarantineOn (base name: "networkQuarantineOn")', function() {
        // TODO: update the code to test the property networkQuarantineOn
        expect(instance).to.have.property('networkQuarantineOn');
        // expect(instance.networkQuarantineOn).to.be(expectedValueLiteral);
      });

      it('should have the property autoDecommissionDays (base name: "autoDecommissionDays")', function() {
        // TODO: update the code to test the property autoDecommissionDays
        expect(instance).to.have.property('autoDecommissionDays');
        // expect(instance.autoDecommissionDays).to.be(expectedValueLiteral);
      });

      it('should have the property remoteScriptOrchestration (base name: "remoteScriptOrchestration")', function() {
        // TODO: update the code to test the property remoteScriptOrchestration
        expect(instance).to.have.property('remoteScriptOrchestration');
        // expect(instance.remoteScriptOrchestration).to.be(expectedValueLiteral);
      });

      it('should have the property autoDecommissionOn (base name: "autoDecommissionOn")', function() {
        // TODO: update the code to test the property autoDecommissionOn
        expect(instance).to.have.property('autoDecommissionOn');
        // expect(instance.autoDecommissionOn).to.be(expectedValueLiteral);
      });

      it('should have the property dvAttributesPerEventType (base name: "dvAttributesPerEventType")', function() {
        // TODO: update the code to test the property dvAttributesPerEventType
        expect(instance).to.have.property('dvAttributesPerEventType');
        // expect(instance.dvAttributesPerEventType).to.be(expectedValueLiteral);
      });

    });
  });

}));
