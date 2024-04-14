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
    describe('UsersSchemasSingleUserSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.UsersSchemasSingleUserSchema200Data();
      });

      it('should create an instance of UsersSchemasSingleUserSchema200Data', function() {
        // TODO: update the code to test UsersSchemasSingleUserSchema200Data
        expect(instance).to.be.a(S1MgmtApi.UsersSchemasSingleUserSchema200Data);
      });

      it('should have the property emailVerified (base name: "emailVerified")', function() {
        // TODO: update the code to test the property emailVerified
        expect(instance).to.have.property('emailVerified');
        // expect(instance.emailVerified).to.be(expectedValueLiteral);
      });

      it('should have the property canGenerateApiToken (base name: "canGenerateApiToken")', function() {
        // TODO: update the code to test the property canGenerateApiToken
        expect(instance).to.have.property('canGenerateApiToken');
        // expect(instance.canGenerateApiToken).to.be(expectedValueLiteral);
      });

      it('should have the property apiToken (base name: "apiToken")', function() {
        // TODO: update the code to test the property apiToken
        expect(instance).to.have.property('apiToken');
        // expect(instance.apiToken).to.be(expectedValueLiteral);
      });

      it('should have the property isSystem (base name: "isSystem")', function() {
        // TODO: update the code to test the property isSystem
        expect(instance).to.have.property('isSystem');
        // expect(instance.isSystem).to.be(expectedValueLiteral);
      });

      it('should have the property elevatedSessionDurationMinutes (base name: "elevatedSessionDurationMinutes")', function() {
        // TODO: update the code to test the property elevatedSessionDurationMinutes
        expect(instance).to.have.property('elevatedSessionDurationMinutes');
        // expect(instance.elevatedSessionDurationMinutes).to.be(expectedValueLiteral);
      });

      it('should have the property scopeRoles (base name: "scopeRoles")', function() {
        // TODO: update the code to test the property scopeRoles
        expect(instance).to.have.property('scopeRoles');
        // expect(instance.scopeRoles).to.be(expectedValueLiteral);
      });

      it('should have the property primaryTwoFaMethod (base name: "primaryTwoFaMethod")', function() {
        // TODO: update the code to test the property primaryTwoFaMethod
        expect(instance).to.have.property('primaryTwoFaMethod');
        // expect(instance.primaryTwoFaMethod).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property lastLogin (base name: "lastLogin")', function() {
        // TODO: update the code to test the property lastLogin
        expect(instance).to.have.property('lastLogin');
        // expect(instance.lastLogin).to.be(expectedValueLiteral);
      });

      it('should have the property twoFaEnabledReadOnly (base name: "twoFaEnabledReadOnly")', function() {
        // TODO: update the code to test the property twoFaEnabledReadOnly
        expect(instance).to.have.property('twoFaEnabledReadOnly');
        // expect(instance.twoFaEnabledReadOnly).to.be(expectedValueLiteral);
      });

      it('should have the property siteRoles (base name: "siteRoles")', function() {
        // TODO: update the code to test the property siteRoles
        expect(instance).to.have.property('siteRoles');
        // expect(instance.siteRoles).to.be(expectedValueLiteral);
      });

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property pages (base name: "pages")', function() {
        // TODO: update the code to test the property pages
        expect(instance).to.have.property('pages');
        // expect(instance.pages).to.be(expectedValueLiteral);
      });

      it('should have the property dateJoined (base name: "dateJoined")', function() {
        // TODO: update the code to test the property dateJoined
        expect(instance).to.have.property('dateJoined');
        // expect(instance.dateJoined).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property allowRemoteShell (base name: "allowRemoteShell")', function() {
        // TODO: update the code to test the property allowRemoteShell
        expect(instance).to.have.property('allowRemoteShell');
        // expect(instance.allowRemoteShell).to.be(expectedValueLiteral);
      });

      it('should have the property fullNameReadOnly (base name: "fullNameReadOnly")', function() {
        // TODO: update the code to test the property fullNameReadOnly
        expect(instance).to.have.property('fullNameReadOnly');
        // expect(instance.fullNameReadOnly).to.be(expectedValueLiteral);
      });

      it('should have the property account (base name: "account")', function() {
        // TODO: update the code to test the property account
        expect(instance).to.have.property('account');
        // expect(instance.account).to.be(expectedValueLiteral);
      });

      it('should have the property twoFaStatus (base name: "twoFaStatus")', function() {
        // TODO: update the code to test the property twoFaStatus
        expect(instance).to.have.property('twoFaStatus');
        // expect(instance.twoFaStatus).to.be(expectedValueLiteral);
      });

      it('should have the property twoFaConfigured (base name: "twoFaConfigured")', function() {
        // TODO: update the code to test the property twoFaConfigured
        expect(instance).to.have.property('twoFaConfigured');
        // expect(instance.twoFaConfigured).to.be(expectedValueLiteral);
      });

      it('should have the property fullName (base name: "fullName")', function() {
        // TODO: update the code to test the property fullName
        expect(instance).to.have.property('fullName');
        // expect(instance.fullName).to.be(expectedValueLiteral);
      });

      it('should have the property isExternalLoginUser (base name: "isExternalLoginUser")', function() {
        // TODO: update the code to test the property isExternalLoginUser
        expect(instance).to.have.property('isExternalLoginUser');
        // expect(instance.isExternalLoginUser).to.be(expectedValueLiteral);
      });

      it('should have the property groupsReadOnly (base name: "groupsReadOnly")', function() {
        // TODO: update the code to test the property groupsReadOnly
        expect(instance).to.have.property('groupsReadOnly');
        // expect(instance.groupsReadOnly).to.be(expectedValueLiteral);
      });

      it('should have the property agreedEula (base name: "agreedEula")', function() {
        // TODO: update the code to test the property agreedEula
        expect(instance).to.have.property('agreedEula');
        // expect(instance.agreedEula).to.be(expectedValueLiteral);
      });

      it('should have the property tenantRoles (base name: "tenantRoles")', function() {
        // TODO: update the code to test the property tenantRoles
        expect(instance).to.have.property('tenantRoles');
        // expect(instance.tenantRoles).to.be(expectedValueLiteral);
      });

      it('should have the property firstLogin (base name: "firstLogin")', function() {
        // TODO: update the code to test the property firstLogin
        expect(instance).to.have.property('firstLogin');
        // expect(instance.firstLogin).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

      it('should have the property emailReadOnly (base name: "emailReadOnly")', function() {
        // TODO: update the code to test the property emailReadOnly
        expect(instance).to.have.property('emailReadOnly');
        // expect(instance.emailReadOnly).to.be(expectedValueLiteral);
      });

      it('should have the property agreementUrl (base name: "agreementUrl")', function() {
        // TODO: update the code to test the property agreementUrl
        expect(instance).to.have.property('agreementUrl');
        // expect(instance.agreementUrl).to.be(expectedValueLiteral);
      });

      it('should have the property lowestRole (base name: "lowestRole")', function() {
        // TODO: update the code to test the property lowestRole
        expect(instance).to.have.property('lowestRole');
        // expect(instance.lowestRole).to.be(expectedValueLiteral);
      });

      it('should have the property twoFaEnabled (base name: "twoFaEnabled")', function() {
        // TODO: update the code to test the property twoFaEnabled
        expect(instance).to.have.property('twoFaEnabled');
        // expect(instance.twoFaEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
