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
    describe('V21IncidentsSchemasListIncidentsSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21IncidentsSchemasListIncidentsSchema200Data();
      });

      it('should create an instance of V21IncidentsSchemasListIncidentsSchema200Data', function() {
        // TODO: update the code to test V21IncidentsSchemasListIncidentsSchema200Data
        expect(instance).to.be.a(S1MgmtApi.V21IncidentsSchemasListIncidentsSchema200Data);
      });

      it('should have the property userEmail (base name: "userEmail")', function() {
        // TODO: update the code to test the property userEmail
        expect(instance).to.have.property('userEmail');
        // expect(instance.userEmail).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property reportedTime (base name: "reportedTime")', function() {
        // TODO: update the code to test the property reportedTime
        expect(instance).to.have.property('reportedTime');
        // expect(instance.reportedTime).to.be(expectedValueLiteral);
      });

      it('should have the property siteId (base name: "siteId")', function() {
        // TODO: update the code to test the property siteId
        expect(instance).to.have.property('siteId');
        // expect(instance.siteId).to.be(expectedValueLiteral);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property detail (base name: "detail")', function() {
        // TODO: update the code to test the property detail
        expect(instance).to.have.property('detail');
        // expect(instance.detail).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property incidentStatus (base name: "incidentStatus")', function() {
        // TODO: update the code to test the property incidentStatus
        expect(instance).to.have.property('incidentStatus');
        // expect(instance.incidentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property groupId (base name: "groupId")', function() {
        // TODO: update the code to test the property groupId
        expect(instance).to.have.property('groupId');
        // expect(instance.groupId).to.be(expectedValueLiteral);
      });

      it('should have the property remediationStep (base name: "remediationStep")', function() {
        // TODO: update the code to test the property remediationStep
        expect(instance).to.have.property('remediationStep');
        // expect(instance.remediationStep).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property accountName (base name: "accountName")', function() {
        // TODO: update the code to test the property accountName
        expect(instance).to.have.property('accountName');
        // expect(instance.accountName).to.be(expectedValueLiteral);
      });

      it('should have the property siteName (base name: "siteName")', function() {
        // TODO: update the code to test the property siteName
        expect(instance).to.have.property('siteName');
        // expect(instance.siteName).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property network (base name: "network")', function() {
        // TODO: update the code to test the property network
        expect(instance).to.have.property('network');
        // expect(instance.network).to.be(expectedValueLiteral);
      });

      it('should have the property severity (base name: "severity")', function() {
        // TODO: update the code to test the property severity
        expect(instance).to.have.property('severity');
        // expect(instance.severity).to.be(expectedValueLiteral);
      });

      it('should have the property detectionType (base name: "detectionType")', function() {
        // TODO: update the code to test the property detectionType
        expect(instance).to.have.property('detectionType');
        // expect(instance.detectionType).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property deviceId (base name: "deviceId")', function() {
        // TODO: update the code to test the property deviceId
        expect(instance).to.have.property('deviceId');
        // expect(instance.deviceId).to.be(expectedValueLiteral);
      });

      it('should have the property statusAction (base name: "statusAction")', function() {
        // TODO: update the code to test the property statusAction
        expect(instance).to.have.property('statusAction');
        // expect(instance.statusAction).to.be(expectedValueLiteral);
      });

      it('should have the property detectionEngine (base name: "detectionEngine")', function() {
        // TODO: update the code to test the property detectionEngine
        expect(instance).to.have.property('detectionEngine');
        // expect(instance.detectionEngine).to.be(expectedValueLiteral);
      });

      it('should have the property trackingId1 (base name: "trackingId1")', function() {
        // TODO: update the code to test the property trackingId1
        expect(instance).to.have.property('trackingId1');
        // expect(instance.trackingId1).to.be(expectedValueLiteral);
      });

      it('should have the property trackingId2 (base name: "trackingId2")', function() {
        // TODO: update the code to test the property trackingId2
        expect(instance).to.have.property('trackingId2');
        // expect(instance.trackingId2).to.be(expectedValueLiteral);
      });

      it('should have the property groupName (base name: "groupName")', function() {
        // TODO: update the code to test the property groupName
        expect(instance).to.have.property('groupName');
        // expect(instance.groupName).to.be(expectedValueLiteral);
      });

      it('should have the property investigation (base name: "investigation")', function() {
        // TODO: update the code to test the property investigation
        expect(instance).to.have.property('investigation');
        // expect(instance.investigation).to.be(expectedValueLiteral);
      });

      it('should have the property analystVerdict (base name: "analystVerdict")', function() {
        // TODO: update the code to test the property analystVerdict
        expect(instance).to.have.property('analystVerdict');
        // expect(instance.analystVerdict).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

      it('should have the property userNotified (base name: "userNotified")', function() {
        // TODO: update the code to test the property userNotified
        expect(instance).to.have.property('userNotified');
        // expect(instance.userNotified).to.be(expectedValueLiteral);
      });

      it('should have the property osVersion (base name: "osVersion")', function() {
        // TODO: update the code to test the property osVersion
        expect(instance).to.have.property('osVersion');
        // expect(instance.osVersion).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

    });
  });

}));
