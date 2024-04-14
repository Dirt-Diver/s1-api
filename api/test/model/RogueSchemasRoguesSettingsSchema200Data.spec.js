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
    describe('RogueSchemasRoguesSettingsSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.RogueSchemasRoguesSettingsSchema200Data();
      });

      it('should create an instance of RogueSchemasRoguesSettingsSchema200Data', function() {
        // TODO: update the code to test RogueSchemasRoguesSettingsSchema200Data
        expect(instance).to.be.a(S1MgmtApi.RogueSchemasRoguesSettingsSchema200Data);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property specificPorts (base name: "specificPorts")', function() {
        // TODO: update the code to test the property specificPorts
        expect(instance).to.have.property('specificPorts');
        // expect(instance.specificPorts).to.be(expectedValueLiteral);
      });

      it('should have the property restrictions (base name: "restrictions")', function() {
        // TODO: update the code to test the property restrictions
        expect(instance).to.have.property('restrictions');
        // expect(instance.restrictions).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property minAgentsInNetworkToScan (base name: "minAgentsInNetworkToScan")', function() {
        // TODO: update the code to test the property minAgentsInNetworkToScan
        expect(instance).to.have.property('minAgentsInNetworkToScan');
        // expect(instance.minAgentsInNetworkToScan).to.be(expectedValueLiteral);
      });

      it('should have the property useSpecificPorts (base name: "useSpecificPorts")', function() {
        // TODO: update the code to test the property useSpecificPorts
        expect(instance).to.have.property('useSpecificPorts');
        // expect(instance.useSpecificPorts).to.be(expectedValueLiteral);
      });

    });
  });

}));
