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
    describe('ForensicsApplicationContentFields200DataResultFile', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ForensicsApplicationContentFields200DataResultFile();
      });

      it('should create an instance of ForensicsApplicationContentFields200DataResultFile', function() {
        // TODO: update the code to test ForensicsApplicationContentFields200DataResultFile
        expect(instance).to.be.a(S1MgmtApi.ForensicsApplicationContentFields200DataResultFile);
      });

      it('should have the property createdDate (base name: "created_date")', function() {
        // TODO: update the code to test the property createdDate
        expect(instance).to.have.property('createdDate');
        // expect(instance.createdDate).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property permission (base name: "permission")', function() {
        // TODO: update the code to test the property permission
        expect(instance).to.have.property('permission');
        // expect(instance.permission).to.be(expectedValueLiteral);
      });

      it('should have the property objectId (base name: "object_id")', function() {
        // TODO: update the code to test the property objectId
        expect(instance).to.have.property('objectId');
        // expect(instance.objectId).to.be(expectedValueLiteral);
      });

      it('should have the property contentHash (base name: "content_hash")', function() {
        // TODO: update the code to test the property contentHash
        expect(instance).to.have.property('contentHash');
        // expect(instance.contentHash).to.be(expectedValueLiteral);
      });

      it('should have the property isSystem (base name: "is_system")', function() {
        // TODO: update the code to test the property isSystem
        expect(instance).to.have.property('isSystem');
        // expect(instance.isSystem).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "display_name")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

    });
  });

}));
