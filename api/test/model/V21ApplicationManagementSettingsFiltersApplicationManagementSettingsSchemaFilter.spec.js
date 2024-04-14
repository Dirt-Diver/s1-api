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
    describe('V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaFilter', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaFilter();
      });

      it('should create an instance of V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaFilter', function() {
        // TODO: update the code to test V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaFilter
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaFilter);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

      it('should have the property tenant (base name: "tenant")', function() {
        // TODO: update the code to test the property tenant
        expect(instance).to.have.property('tenant');
        // expect(instance.tenant).to.be(expectedValueLiteral);
      });

      it('should have the property groupIds (base name: "groupIds")', function() {
        // TODO: update the code to test the property groupIds
        expect(instance).to.have.property('groupIds');
        // expect(instance.groupIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
