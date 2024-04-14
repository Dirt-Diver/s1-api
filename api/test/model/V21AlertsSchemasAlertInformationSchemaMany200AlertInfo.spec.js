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
    describe('V21AlertsSchemasAlertInformationSchemaMany200AlertInfo', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200AlertInfo();
      });

      it('should create an instance of V21AlertsSchemasAlertInformationSchemaMany200AlertInfo', function() {
        // TODO: update the code to test V21AlertsSchemasAlertInformationSchemaMany200AlertInfo
        expect(instance).to.be.a(S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200AlertInfo);
      });

      it('should have the property dnsResponse (base name: "dnsResponse")', function() {
        // TODO: update the code to test the property dnsResponse
        expect(instance).to.have.property('dnsResponse');
        // expect(instance.dnsResponse).to.be(expectedValueLiteral);
      });

      it('should have the property moduleSha1 (base name: "moduleSha1")', function() {
        // TODO: update the code to test the property moduleSha1
        expect(instance).to.have.property('moduleSha1');
        // expect(instance.moduleSha1).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorCategory (base name: "indicatorCategory")', function() {
        // TODO: update the code to test the property indicatorCategory
        expect(instance).to.have.property('indicatorCategory');
        // expect(instance.indicatorCategory).to.be(expectedValueLiteral);
      });

      it('should have the property incidentStatus (base name: "incidentStatus")', function() {
        // TODO: update the code to test the property incidentStatus
        expect(instance).to.have.property('incidentStatus');
        // expect(instance.incidentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property tiIndicatorValue (base name: "tiIndicatorValue")', function() {
        // TODO: update the code to test the property tiIndicatorValue
        expect(instance).to.have.property('tiIndicatorValue');
        // expect(instance.tiIndicatorValue).to.be(expectedValueLiteral);
      });

      it('should have the property netEventDirection (base name: "netEventDirection")', function() {
        // TODO: update the code to test the property netEventDirection
        expect(instance).to.have.property('netEventDirection');
        // expect(instance.netEventDirection).to.be(expectedValueLiteral);
      });

      it('should have the property loginAccountSid (base name: "loginAccountSid")', function() {
        // TODO: update the code to test the property loginAccountSid
        expect(instance).to.have.property('loginAccountSid');
        // expect(instance.loginAccountSid).to.be(expectedValueLiteral);
      });

      it('should have the property hitType (base name: "hitType")', function() {
        // TODO: update the code to test the property hitType
        expect(instance).to.have.property('hitType');
        // expect(instance.hitType).to.be(expectedValueLiteral);
      });

      it('should have the property modulePath (base name: "modulePath")', function() {
        // TODO: update the code to test the property modulePath
        expect(instance).to.have.property('modulePath');
        // expect(instance.modulePath).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorDescription (base name: "indicatorDescription")', function() {
        // TODO: update the code to test the property indicatorDescription
        expect(instance).to.have.property('indicatorDescription');
        // expect(instance.indicatorDescription).to.be(expectedValueLiteral);
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

      it('should have the property isEdr (base name: "isEdr")', function() {
        // TODO: update the code to test the property isEdr
        expect(instance).to.have.property('isEdr');
        // expect(instance.isEdr).to.be(expectedValueLiteral);
      });

      it('should have the property analystVerdict (base name: "analystVerdict")', function() {
        // TODO: update the code to test the property analystVerdict
        expect(instance).to.have.property('analystVerdict');
        // expect(instance.analystVerdict).to.be(expectedValueLiteral);
      });

      it('should have the property srcMachineIp (base name: "srcMachineIp")', function() {
        // TODO: update the code to test the property srcMachineIp
        expect(instance).to.have.property('srcMachineIp');
        // expect(instance.srcMachineIp).to.be(expectedValueLiteral);
      });

      it('should have the property registryKeyPath (base name: "registryKeyPath")', function() {
        // TODO: update the code to test the property registryKeyPath
        expect(instance).to.have.property('registryKeyPath');
        // expect(instance.registryKeyPath).to.be(expectedValueLiteral);
      });

      it('should have the property registryOldValueType (base name: "registryOldValueType")', function() {
        // TODO: update the code to test the property registryOldValueType
        expect(instance).to.have.property('registryOldValueType');
        // expect(instance.registryOldValueType).to.be(expectedValueLiteral);
      });

      it('should have the property tiIndicatorComparisonMethod (base name: "tiIndicatorComparisonMethod")', function() {
        // TODO: update the code to test the property tiIndicatorComparisonMethod
        expect(instance).to.have.property('tiIndicatorComparisonMethod');
        // expect(instance.tiIndicatorComparisonMethod).to.be(expectedValueLiteral);
      });

      it('should have the property registryPath (base name: "registryPath")', function() {
        // TODO: update the code to test the property registryPath
        expect(instance).to.have.property('registryPath');
        // expect(instance.registryPath).to.be(expectedValueLiteral);
      });

      it('should have the property registryValue (base name: "registryValue")', function() {
        // TODO: update the code to test the property registryValue
        expect(instance).to.have.property('registryValue');
        // expect(instance.registryValue).to.be(expectedValueLiteral);
      });

      it('should have the property loginIsAdministratorEquivalent (base name: "loginIsAdministratorEquivalent")', function() {
        // TODO: update the code to test the property loginIsAdministratorEquivalent
        expect(instance).to.have.property('loginIsAdministratorEquivalent');
        // expect(instance.loginIsAdministratorEquivalent).to.be(expectedValueLiteral);
      });

      it('should have the property loginAccountDomain (base name: "loginAccountDomain")', function() {
        // TODO: update the code to test the property loginAccountDomain
        expect(instance).to.have.property('loginAccountDomain');
        // expect(instance.loginAccountDomain).to.be(expectedValueLiteral);
      });

      it('should have the property reportedAt (base name: "reportedAt")', function() {
        // TODO: update the code to test the property reportedAt
        expect(instance).to.have.property('reportedAt');
        // expect(instance.reportedAt).to.be(expectedValueLiteral);
      });

      it('should have the property dnsRequest (base name: "dnsRequest")', function() {
        // TODO: update the code to test the property dnsRequest
        expect(instance).to.have.property('dnsRequest');
        // expect(instance.dnsRequest).to.be(expectedValueLiteral);
      });

      it('should have the property loginType (base name: "loginType")', function() {
        // TODO: update the code to test the property loginType
        expect(instance).to.have.property('loginType');
        // expect(instance.loginType).to.be(expectedValueLiteral);
      });

      it('should have the property registryOldValue (base name: "registryOldValue")', function() {
        // TODO: update the code to test the property registryOldValue
        expect(instance).to.have.property('registryOldValue');
        // expect(instance.registryOldValue).to.be(expectedValueLiteral);
      });

      it('should have the property srcIp (base name: "srcIp")', function() {
        // TODO: update the code to test the property srcIp
        expect(instance).to.have.property('srcIp');
        // expect(instance.srcIp).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property tiIndicatorSource (base name: "tiIndicatorSource")', function() {
        // TODO: update the code to test the property tiIndicatorSource
        expect(instance).to.have.property('tiIndicatorSource');
        // expect(instance.tiIndicatorSource).to.be(expectedValueLiteral);
      });

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property eventType (base name: "eventType")', function() {
        // TODO: update the code to test the property eventType
        expect(instance).to.have.property('eventType');
        // expect(instance.eventType).to.be(expectedValueLiteral);
      });

      it('should have the property tiIndicatorType (base name: "tiIndicatorType")', function() {
        // TODO: update the code to test the property tiIndicatorType
        expect(instance).to.have.property('tiIndicatorType');
        // expect(instance.tiIndicatorType).to.be(expectedValueLiteral);
      });

      it('should have the property dstIp (base name: "dstIp")', function() {
        // TODO: update the code to test the property dstIp
        expect(instance).to.have.property('dstIp');
        // expect(instance.dstIp).to.be(expectedValueLiteral);
      });

      it('should have the property loginsUserName (base name: "loginsUserName")', function() {
        // TODO: update the code to test the property loginsUserName
        expect(instance).to.have.property('loginsUserName');
        // expect(instance.loginsUserName).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property loginIsSuccessful (base name: "loginIsSuccessful")', function() {
        // TODO: update the code to test the property loginIsSuccessful
        expect(instance).to.have.property('loginIsSuccessful');
        // expect(instance.loginIsSuccessful).to.be(expectedValueLiteral);
      });

      it('should have the property dvEventId (base name: "dvEventId")', function() {
        // TODO: update the code to test the property dvEventId
        expect(instance).to.have.property('dvEventId');
        // expect(instance.dvEventId).to.be(expectedValueLiteral);
      });

      it('should have the property srcPort (base name: "srcPort")', function() {
        // TODO: update the code to test the property srcPort
        expect(instance).to.have.property('srcPort');
        // expect(instance.srcPort).to.be(expectedValueLiteral);
      });

      it('should have the property alertId (base name: "alertId")', function() {
        // TODO: update the code to test the property alertId
        expect(instance).to.have.property('alertId');
        // expect(instance.alertId).to.be(expectedValueLiteral);
      });

    });
  });

}));