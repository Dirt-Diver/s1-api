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
    describe('ThreatsSchemasThreatSchemaMany200Tactics', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ThreatsSchemasThreatSchemaMany200Tactics();
      });

      it('should create an instance of ThreatsSchemasThreatSchemaMany200Tactics', function() {
        // TODO: update the code to test ThreatsSchemasThreatSchemaMany200Tactics
        expect(instance).to.be.a(S1MgmtApi.ThreatsSchemasThreatSchemaMany200Tactics);
      });

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property techniques (base name: "techniques")', function() {
        // TODO: update the code to test the property techniques
        expect(instance).to.have.property('techniques');
        // expect(instance.techniques).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
