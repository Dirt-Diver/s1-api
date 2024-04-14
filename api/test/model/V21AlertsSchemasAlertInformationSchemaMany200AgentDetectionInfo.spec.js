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
    describe('V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo();
      });

      it('should create an instance of V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo', function() {
        // TODO: update the code to test V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo
        expect(instance).to.be.a(S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200AgentDetectionInfo);
      });

      it('should have the property osName (base name: "osName")', function() {
        // TODO: update the code to test the property osName
        expect(instance).to.have.property('osName');
        // expect(instance.osName).to.be(expectedValueLiteral);
      });

      it('should have the property osRevision (base name: "osRevision")', function() {
        // TODO: update the code to test the property osRevision
        expect(instance).to.have.property('osRevision');
        // expect(instance.osRevision).to.be(expectedValueLiteral);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property machineType (base name: "machineType")', function() {
        // TODO: update the code to test the property machineType
        expect(instance).to.have.property('machineType');
        // expect(instance.machineType).to.be(expectedValueLiteral);
      });

      it('should have the property siteId (base name: "siteId")', function() {
        // TODO: update the code to test the property siteId
        expect(instance).to.have.property('siteId');
        // expect(instance.siteId).to.be(expectedValueLiteral);
      });

      it('should have the property osFamily (base name: "osFamily")', function() {
        // TODO: update the code to test the property osFamily
        expect(instance).to.have.property('osFamily');
        // expect(instance.osFamily).to.be(expectedValueLiteral);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));