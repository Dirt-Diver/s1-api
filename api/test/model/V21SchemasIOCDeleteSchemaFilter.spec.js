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
    describe('V21SchemasIOCDeleteSchemaFilter', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21SchemasIOCDeleteSchemaFilter();
      });

      it('should create an instance of V21SchemasIOCDeleteSchemaFilter', function() {
        // TODO: update the code to test V21SchemasIOCDeleteSchemaFilter
        expect(instance).to.be.a(S1MgmtApi.V21SchemasIOCDeleteSchemaFilter);
      });

      it('should have the property descriptionContains (base name: "description__contains")', function() {
        // TODO: update the code to test the property descriptionContains
        expect(instance).to.have.property('descriptionContains');
        // expect(instance.descriptionContains).to.be(expectedValueLiteral);
      });

      it('should have the property uploadTimeGt (base name: "uploadTime__gt")', function() {
        // TODO: update the code to test the property uploadTimeGt
        expect(instance).to.have.property('uploadTimeGt');
        // expect(instance.uploadTimeGt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtGt (base name: "updatedAt__gt")', function() {
        // TODO: update the code to test the property updatedAtGt
        expect(instance).to.have.property('updatedAtGt');
        // expect(instance.updatedAtGt).to.be(expectedValueLiteral);
      });

      it('should have the property categoryIn (base name: "category__in")', function() {
        // TODO: update the code to test the property categoryIn
        expect(instance).to.have.property('categoryIn');
        // expect(instance.categoryIn).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtGte (base name: "updatedAt__gte")', function() {
        // TODO: update the code to test the property updatedAtGte
        expect(instance).to.have.property('updatedAtGte');
        // expect(instance.updatedAtGte).to.be(expectedValueLiteral);
      });

      it('should have the property creatorContains (base name: "creator__contains")', function() {
        // TODO: update the code to test the property creatorContains
        expect(instance).to.have.property('creatorContains');
        // expect(instance.creatorContains).to.be(expectedValueLiteral);
      });

      it('should have the property tenant (base name: "tenant")', function() {
        // TODO: update the code to test the property tenant
        expect(instance).to.have.property('tenant');
        // expect(instance.tenant).to.be(expectedValueLiteral);
      });

      it('should have the property creationTimeGte (base name: "creationTime__gte")', function() {
        // TODO: update the code to test the property creationTimeGte
        expect(instance).to.have.property('creationTimeGte');
        // expect(instance.creationTimeGte).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property creationTimeGt (base name: "creationTime__gt")', function() {
        // TODO: update the code to test the property creationTimeGt
        expect(instance).to.have.property('creationTimeGt');
        // expect(instance.creationTimeGt).to.be(expectedValueLiteral);
      });

      it('should have the property creationTimeLte (base name: "creationTime__lte")', function() {
        // TODO: update the code to test the property creationTimeLte
        expect(instance).to.have.property('creationTimeLte');
        // expect(instance.creationTimeLte).to.be(expectedValueLiteral);
      });

      it('should have the property creationTimeLt (base name: "creationTime__lt")', function() {
        // TODO: update the code to test the property creationTimeLt
        expect(instance).to.have.property('creationTimeLt');
        // expect(instance.creationTimeLt).to.be(expectedValueLiteral);
      });

      it('should have the property batchId (base name: "batchId")', function() {
        // TODO: update the code to test the property batchId
        expect(instance).to.have.property('batchId');
        // expect(instance.batchId).to.be(expectedValueLiteral);
      });

      it('should have the property externalId (base name: "externalId")', function() {
        // TODO: update the code to test the property externalId
        expect(instance).to.have.property('externalId');
        // expect(instance.externalId).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtLt (base name: "updatedAt__lt")', function() {
        // TODO: update the code to test the property updatedAtLt
        expect(instance).to.have.property('updatedAtLt');
        // expect(instance.updatedAtLt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtLte (base name: "updatedAt__lte")', function() {
        // TODO: update the code to test the property updatedAtLte
        expect(instance).to.have.property('updatedAtLte');
        // expect(instance.updatedAtLte).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property uploadTimeLte (base name: "uploadTime__lte")', function() {
        // TODO: update the code to test the property uploadTimeLte
        expect(instance).to.have.property('uploadTimeLte');
        // expect(instance.uploadTimeLte).to.be(expectedValueLiteral);
      });

      it('should have the property uuids (base name: "uuids")', function() {
        // TODO: update the code to test the property uuids
        expect(instance).to.have.property('uuids');
        // expect(instance.uuids).to.be(expectedValueLiteral);
      });

      it('should have the property nameContains (base name: "name__contains")', function() {
        // TODO: update the code to test the property nameContains
        expect(instance).to.have.property('nameContains');
        // expect(instance.nameContains).to.be(expectedValueLiteral);
      });

      it('should have the property uploadTimeLt (base name: "uploadTime__lt")', function() {
        // TODO: update the code to test the property uploadTimeLt
        expect(instance).to.have.property('uploadTimeLt');
        // expect(instance.uploadTimeLt).to.be(expectedValueLiteral);
      });

      it('should have the property uploadTimeGte (base name: "uploadTime__gte")', function() {
        // TODO: update the code to test the property uploadTimeGte
        expect(instance).to.have.property('uploadTimeGte');
        // expect(instance.uploadTimeGte).to.be(expectedValueLiteral);
      });

    });
  });

}));