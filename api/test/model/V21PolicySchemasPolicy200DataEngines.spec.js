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
    describe('V21PolicySchemasPolicy200DataEngines', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21PolicySchemasPolicy200DataEngines();
      });

      it('should create an instance of V21PolicySchemasPolicy200DataEngines', function() {
        // TODO: update the code to test V21PolicySchemasPolicy200DataEngines
        expect(instance).to.be.a(S1MgmtApi.V21PolicySchemasPolicy200DataEngines);
      });

      it('should have the property appBehavioralAi (base name: "appBehavioralAi")', function() {
        // TODO: update the code to test the property appBehavioralAi
        expect(instance).to.have.property('appBehavioralAi');
        // expect(instance.appBehavioralAi).to.be(expectedValueLiteral);
      });

      it('should have the property systemBehavioralAi (base name: "systemBehavioralAi")', function() {
        // TODO: update the code to test the property systemBehavioralAi
        expect(instance).to.have.property('systemBehavioralAi');
        // expect(instance.systemBehavioralAi).to.be(expectedValueLiteral);
      });

      it('should have the property appStaticAi (base name: "appStaticAi")', function() {
        // TODO: update the code to test the property appStaticAi
        expect(instance).to.have.property('appStaticAi');
        // expect(instance.appStaticAi).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerabilityScanner (base name: "vulnerabilityScanner")', function() {
        // TODO: update the code to test the property vulnerabilityScanner
        expect(instance).to.have.property('vulnerabilityScanner');
        // expect(instance.vulnerabilityScanner).to.be(expectedValueLiteral);
      });

      it('should have the property systemStaticAi (base name: "systemStaticAi")', function() {
        // TODO: update the code to test the property systemStaticAi
        expect(instance).to.have.property('systemStaticAi');
        // expect(instance.systemStaticAi).to.be(expectedValueLiteral);
      });

      it('should have the property networkAnalysis (base name: "networkAnalysis")', function() {
        // TODO: update the code to test the property networkAnalysis
        expect(instance).to.have.property('networkAnalysis');
        // expect(instance.networkAnalysis).to.be(expectedValueLiteral);
      });

      it('should have the property phishingScanner (base name: "phishingScanner")', function() {
        // TODO: update the code to test the property phishingScanner
        expect(instance).to.have.property('phishingScanner');
        // expect(instance.phishingScanner).to.be(expectedValueLiteral);
      });

    });
  });

}));
