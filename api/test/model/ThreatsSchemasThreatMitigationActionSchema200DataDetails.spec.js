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
    describe('ThreatsSchemasThreatMitigationActionSchema200DataDetails', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ThreatsSchemasThreatMitigationActionSchema200DataDetails();
      });

      it('should create an instance of ThreatsSchemasThreatMitigationActionSchema200DataDetails', function() {
        // TODO: update the code to test ThreatsSchemasThreatMitigationActionSchema200DataDetails
        expect(instance).to.be.a(S1MgmtApi.ThreatsSchemasThreatMitigationActionSchema200DataDetails);
      });

      it('should have the property skipped (base name: "skipped")', function() {
        // TODO: update the code to test the property skipped
        expect(instance).to.have.property('skipped');
        // expect(instance.skipped).to.be(expectedValueLiteral);
      });

      it('should have the property reports (base name: "reports")', function() {
        // TODO: update the code to test the property reports
        expect(instance).to.have.property('reports');
        // expect(instance.reports).to.be(expectedValueLiteral);
      });

      it('should have the property threatId (base name: "threatId")', function() {
        // TODO: update the code to test the property threatId
        expect(instance).to.have.property('threatId');
        // expect(instance.threatId).to.be(expectedValueLiteral);
      });

    });
  });

}));
