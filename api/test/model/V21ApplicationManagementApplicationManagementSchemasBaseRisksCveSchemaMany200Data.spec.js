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
    describe('V21ApplicationManagementApplicationManagementSchemasBaseRisksCveSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasBaseRisksCveSchemaMany200Data();
      });

      it('should create an instance of V21ApplicationManagementApplicationManagementSchemasBaseRisksCveSchemaMany200Data', function() {
        // TODO: update the code to test V21ApplicationManagementApplicationManagementSchemasBaseRisksCveSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasBaseRisksCveSchemaMany200Data);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property mitigationStatusChangedBy (base name: "mitigationStatusChangedBy")', function() {
        // TODO: update the code to test the property mitigationStatusChangedBy
        expect(instance).to.have.property('mitigationStatusChangedBy');
        // expect(instance.mitigationStatusChangedBy).to.be(expectedValueLiteral);
      });

      it('should have the property mitigationStatusChangeTime (base name: "mitigationStatusChangeTime")', function() {
        // TODO: update the code to test the property mitigationStatusChangeTime
        expect(instance).to.have.property('mitigationStatusChangeTime');
        // expect(instance.mitigationStatusChangeTime).to.be(expectedValueLiteral);
      });

      it('should have the property nvdCvssVersion (base name: "nvdCvssVersion")', function() {
        // TODO: update the code to test the property nvdCvssVersion
        expect(instance).to.have.property('nvdCvssVersion');
        // expect(instance.nvdCvssVersion).to.be(expectedValueLiteral);
      });

      it('should have the property lastScanResult (base name: "lastScanResult")', function() {
        // TODO: update the code to test the property lastScanResult
        expect(instance).to.have.property('lastScanResult');
        // expect(instance.lastScanResult).to.be(expectedValueLiteral);
      });

      it('should have the property endpointName (base name: "endpointName")', function() {
        // TODO: update the code to test the property endpointName
        expect(instance).to.have.property('endpointName');
        // expect(instance.endpointName).to.be(expectedValueLiteral);
      });

      it('should have the property applicationVersion (base name: "applicationVersion")', function() {
        // TODO: update the code to test the property applicationVersion
        expect(instance).to.have.property('applicationVersion');
        // expect(instance.applicationVersion).to.be(expectedValueLiteral);
      });

      it('should have the property severity (base name: "severity")', function() {
        // TODO: update the code to test the property severity
        expect(instance).to.have.property('severity');
        // expect(instance.severity).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property mitigationStatusReason (base name: "mitigationStatusReason")', function() {
        // TODO: update the code to test the property mitigationStatusReason
        expect(instance).to.have.property('mitigationStatusReason');
        // expect(instance.mitigationStatusReason).to.be(expectedValueLiteral);
      });

      it('should have the property endpointId (base name: "endpointId")', function() {
        // TODO: update the code to test the property endpointId
        expect(instance).to.have.property('endpointId');
        // expect(instance.endpointId).to.be(expectedValueLiteral);
      });

      it('should have the property nvdBaseScore (base name: "nvdBaseScore")', function() {
        // TODO: update the code to test the property nvdBaseScore
        expect(instance).to.have.property('nvdBaseScore');
        // expect(instance.nvdBaseScore).to.be(expectedValueLiteral);
      });

      it('should have the property daysDetected (base name: "daysDetected")', function() {
        // TODO: update the code to test the property daysDetected
        expect(instance).to.have.property('daysDetected');
        // expect(instance.daysDetected).to.be(expectedValueLiteral);
      });

      it('should have the property publishedDate (base name: "publishedDate")', function() {
        // TODO: update the code to test the property publishedDate
        expect(instance).to.have.property('publishedDate');
        // expect(instance.publishedDate).to.be(expectedValueLiteral);
      });

      it('should have the property cvssVersion (base name: "cvssVersion")', function() {
        // TODO: update the code to test the property cvssVersion
        expect(instance).to.have.property('cvssVersion');
        // expect(instance.cvssVersion).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property markedBy (base name: "markedBy")', function() {
        // TODO: update the code to test the property markedBy
        expect(instance).to.have.property('markedBy');
        // expect(instance.markedBy).to.be(expectedValueLiteral);
      });

      it('should have the property riskScore (base name: "riskScore")', function() {
        // TODO: update the code to test the property riskScore
        expect(instance).to.have.property('riskScore');
        // expect(instance.riskScore).to.be(expectedValueLiteral);
      });

      it('should have the property markType (base name: "markType")', function() {
        // TODO: update the code to test the property markType
        expect(instance).to.have.property('markType');
        // expect(instance.markType).to.be(expectedValueLiteral);
      });

      it('should have the property exploitCodeMaturity (base name: "exploitCodeMaturity")', function() {
        // TODO: update the code to test the property exploitCodeMaturity
        expect(instance).to.have.property('exploitCodeMaturity');
        // expect(instance.exploitCodeMaturity).to.be(expectedValueLiteral);
      });

      it('should have the property applicationName (base name: "applicationName")', function() {
        // TODO: update the code to test the property applicationName
        expect(instance).to.have.property('applicationName');
        // expect(instance.applicationName).to.be(expectedValueLiteral);
      });

      it('should have the property lastScanDate (base name: "lastScanDate")', function() {
        // TODO: update the code to test the property lastScanDate
        expect(instance).to.have.property('lastScanDate');
        // expect(instance.lastScanDate).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property reportConfidence (base name: "reportConfidence")', function() {
        // TODO: update the code to test the property reportConfidence
        expect(instance).to.have.property('reportConfidence');
        // expect(instance.reportConfidence).to.be(expectedValueLiteral);
      });

      it('should have the property markedDate (base name: "markedDate")', function() {
        // TODO: update the code to test the property markedDate
        expect(instance).to.have.property('markedDate');
        // expect(instance.markedDate).to.be(expectedValueLiteral);
      });

      it('should have the property cveId (base name: "cveId")', function() {
        // TODO: update the code to test the property cveId
        expect(instance).to.have.property('cveId');
        // expect(instance.cveId).to.be(expectedValueLiteral);
      });

      it('should have the property application (base name: "application")', function() {
        // TODO: update the code to test the property application
        expect(instance).to.have.property('application');
        // expect(instance.application).to.be(expectedValueLiteral);
      });

      it('should have the property baseScore (base name: "baseScore")', function() {
        // TODO: update the code to test the property baseScore
        expect(instance).to.have.property('baseScore');
        // expect(instance.baseScore).to.be(expectedValueLiteral);
      });

      it('should have the property detectionDate (base name: "detectionDate")', function() {
        // TODO: update the code to test the property detectionDate
        expect(instance).to.have.property('detectionDate');
        // expect(instance.detectionDate).to.be(expectedValueLiteral);
      });

      it('should have the property mitigationStatus (base name: "mitigationStatus")', function() {
        // TODO: update the code to test the property mitigationStatus
        expect(instance).to.have.property('mitigationStatus');
        // expect(instance.mitigationStatus).to.be(expectedValueLiteral);
      });

      it('should have the property applicationVendor (base name: "applicationVendor")', function() {
        // TODO: update the code to test the property applicationVendor
        expect(instance).to.have.property('applicationVendor');
        // expect(instance.applicationVendor).to.be(expectedValueLiteral);
      });

      it('should have the property remediationLevel (base name: "remediationLevel")', function() {
        // TODO: update the code to test the property remediationLevel
        expect(instance).to.have.property('remediationLevel');
        // expect(instance.remediationLevel).to.be(expectedValueLiteral);
      });

      it('should have the property endpointType (base name: "endpointType")', function() {
        // TODO: update the code to test the property endpointType
        expect(instance).to.have.property('endpointType');
        // expect(instance.endpointType).to.be(expectedValueLiteral);
      });

    });
  });

}));
