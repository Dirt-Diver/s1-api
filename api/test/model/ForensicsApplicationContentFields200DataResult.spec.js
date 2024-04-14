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
    describe('ForensicsApplicationContentFields200DataResult', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ForensicsApplicationContentFields200DataResult();
      });

      it('should create an instance of ForensicsApplicationContentFields200DataResult', function() {
        // TODO: update the code to test ForensicsApplicationContentFields200DataResult
        expect(instance).to.be.a(S1MgmtApi.ForensicsApplicationContentFields200DataResult);
      });

      it('should have the property process (base name: "process")', function() {
        // TODO: update the code to test the property process
        expect(instance).to.have.property('process');
        // expect(instance.process).to.be(expectedValueLiteral);
      });

      it('should have the property applicationId (base name: "application_id")', function() {
        // TODO: update the code to test the property applicationId
        expect(instance).to.have.property('applicationId');
        // expect(instance.applicationId).to.be(expectedValueLiteral);
      });

      it('should have the property file (base name: "file")', function() {
        // TODO: update the code to test the property file
        expect(instance).to.have.property('file');
        // expect(instance.file).to.be(expectedValueLiteral);
      });

      it('should have the property seenOnNetwork (base name: "seen_on_network")', function() {
        // TODO: update the code to test the property seenOnNetwork
        expect(instance).to.have.property('seenOnNetwork');
        // expect(instance.seenOnNetwork).to.be(expectedValueLiteral);
      });

      it('should have the property processCreatedAt (base name: "process_created_at")', function() {
        // TODO: update the code to test the property processCreatedAt
        expect(instance).to.have.property('processCreatedAt');
        // expect(instance.processCreatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property processDisplayName (base name: "process_display_name")', function() {
        // TODO: update the code to test the property processDisplayName
        expect(instance).to.have.property('processDisplayName');
        // expect(instance.processDisplayName).to.be(expectedValueLiteral);
      });

      it('should have the property maliciousProcessArguments (base name: "malicious_process_arguments")', function() {
        // TODO: update the code to test the property maliciousProcessArguments
        expect(instance).to.have.property('maliciousProcessArguments');
        // expect(instance.maliciousProcessArguments).to.be(expectedValueLiteral);
      });

      it('should have the property agent (base name: "agent")', function() {
        // TODO: update the code to test the property agent
        expect(instance).to.have.property('agent');
        // expect(instance.agent).to.be(expectedValueLiteral);
      });

      it('should have the property applicationCreated (base name: "application_created")', function() {
        // TODO: update the code to test the property applicationCreated
        expect(instance).to.have.property('applicationCreated');
        // expect(instance.applicationCreated).to.be(expectedValueLiteral);
      });

      it('should have the property fetchStoryStatus (base name: "fetch_story_status")', function() {
        // TODO: update the code to test the property fetchStoryStatus
        expect(instance).to.have.property('fetchStoryStatus');
        // expect(instance.fetchStoryStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));
