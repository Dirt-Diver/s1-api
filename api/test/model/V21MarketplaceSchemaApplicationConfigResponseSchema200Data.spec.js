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
    describe('V21MarketplaceSchemaApplicationConfigResponseSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21MarketplaceSchemaApplicationConfigResponseSchema200Data();
      });

      it('should create an instance of V21MarketplaceSchemaApplicationConfigResponseSchema200Data', function() {
        // TODO: update the code to test V21MarketplaceSchemaApplicationConfigResponseSchema200Data
        expect(instance).to.be.a(S1MgmtApi.V21MarketplaceSchemaApplicationConfigResponseSchema200Data);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property lastEntityCreatedAt (base name: "lastEntityCreatedAt")', function() {
        // TODO: update the code to test the property lastEntityCreatedAt
        expect(instance).to.have.property('lastEntityCreatedAt');
        // expect(instance.lastEntityCreatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property fields (base name: "fields")', function() {
        // TODO: update the code to test the property fields
        expect(instance).to.have.property('fields');
        // expect(instance.fields).to.be(expectedValueLiteral);
      });

      it('should have the property alertMessage (base name: "alertMessage")', function() {
        // TODO: update the code to test the property alertMessage
        expect(instance).to.have.property('alertMessage');
        // expect(instance.alertMessage).to.be(expectedValueLiteral);
      });

      it('should have the property scopeLevel (base name: "scopeLevel")', function() {
        // TODO: update the code to test the property scopeLevel
        expect(instance).to.have.property('scopeLevel');
        // expect(instance.scopeLevel).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creatorId")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property siteId (base name: "siteId")', function() {
        // TODO: update the code to test the property siteId
        expect(instance).to.have.property('siteId');
        // expect(instance.siteId).to.be(expectedValueLiteral);
      });

      it('should have the property desiredStatus (base name: "desiredStatus")', function() {
        // TODO: update the code to test the property desiredStatus
        expect(instance).to.have.property('desiredStatus');
        // expect(instance.desiredStatus).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property site (base name: "site")', function() {
        // TODO: update the code to test the property site
        expect(instance).to.have.property('site');
        // expect(instance.site).to.be(expectedValueLiteral);
      });

      it('should have the property modifier (base name: "modifier")', function() {
        // TODO: update the code to test the property modifier
        expect(instance).to.have.property('modifier');
        // expect(instance.modifier).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property groupId (base name: "groupId")', function() {
        // TODO: update the code to test the property groupId
        expect(instance).to.have.property('groupId');
        // expect(instance.groupId).to.be(expectedValueLiteral);
      });

      it('should have the property group (base name: "group")', function() {
        // TODO: update the code to test the property group
        expect(instance).to.have.property('group');
        // expect(instance.group).to.be(expectedValueLiteral);
      });

      it('should have the property modifierId (base name: "modifierId")', function() {
        // TODO: update the code to test the property modifierId
        expect(instance).to.have.property('modifierId');
        // expect(instance.modifierId).to.be(expectedValueLiteral);
      });

      it('should have the property hasAlert (base name: "hasAlert")', function() {
        // TODO: update the code to test the property hasAlert
        expect(instance).to.have.property('hasAlert');
        // expect(instance.hasAlert).to.be(expectedValueLiteral);
      });

      it('should have the property account (base name: "account")', function() {
        // TODO: update the code to test the property account
        expect(instance).to.have.property('account');
        // expect(instance.account).to.be(expectedValueLiteral);
      });

      it('should have the property retryUntil (base name: "retryUntil")', function() {
        // TODO: update the code to test the property retryUntil
        expect(instance).to.have.property('retryUntil');
        // expect(instance.retryUntil).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
