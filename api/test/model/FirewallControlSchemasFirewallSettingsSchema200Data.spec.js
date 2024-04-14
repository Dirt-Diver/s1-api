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
    describe('FirewallControlSchemasFirewallSettingsSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.FirewallControlSchemasFirewallSettingsSchema200Data();
      });

      it('should create an instance of FirewallControlSchemasFirewallSettingsSchema200Data', function() {
        // TODO: update the code to test FirewallControlSchemasFirewallSettingsSchema200Data
        expect(instance).to.be.a(S1MgmtApi.FirewallControlSchemasFirewallSettingsSchema200Data);
      });

      it('should have the property selectedTags (base name: "selectedTags")', function() {
        // TODO: update the code to test the property selectedTags
        expect(instance).to.have.property('selectedTags');
        // expect(instance.selectedTags).to.be(expectedValueLiteral);
      });

      it('should have the property inheritAllFirewallRules (base name: "inheritAllFirewallRules")', function() {
        // TODO: update the code to test the property inheritAllFirewallRules
        expect(instance).to.have.property('inheritAllFirewallRules');
        // expect(instance.inheritAllFirewallRules).to.be(expectedValueLiteral);
      });

      it('should have the property reportBlocked (base name: "reportBlocked")', function() {
        // TODO: update the code to test the property reportBlocked
        expect(instance).to.have.property('reportBlocked');
        // expect(instance.reportBlocked).to.be(expectedValueLiteral);
      });

      it('should have the property locationAware (base name: "locationAware")', function() {
        // TODO: update the code to test the property locationAware
        expect(instance).to.have.property('locationAware');
        // expect(instance.locationAware).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property inherits (base name: "inherits")', function() {
        // TODO: update the code to test the property inherits
        expect(instance).to.have.property('inherits');
        // expect(instance.inherits).to.be(expectedValueLiteral);
      });

      it('should have the property inheritSettings (base name: "inheritSettings")', function() {
        // TODO: update the code to test the property inheritSettings
        expect(instance).to.have.property('inheritSettings');
        // expect(instance.inheritSettings).to.be(expectedValueLiteral);
      });

      it('should have the property inheritedFrom (base name: "inheritedFrom")', function() {
        // TODO: update the code to test the property inheritedFrom
        expect(instance).to.have.property('inheritedFrom');
        // expect(instance.inheritedFrom).to.be(expectedValueLiteral);
      });

    });
  });

}));
