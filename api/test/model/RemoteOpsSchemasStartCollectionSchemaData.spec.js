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
    describe('RemoteOpsSchemasStartCollectionSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.RemoteOpsSchemasStartCollectionSchemaData();
      });

      it('should create an instance of RemoteOpsSchemasStartCollectionSchemaData', function() {
        // TODO: update the code to test RemoteOpsSchemasStartCollectionSchemaData
        expect(instance).to.be.a(S1MgmtApi.RemoteOpsSchemasStartCollectionSchemaData);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property destination (base name: "destination")', function() {
        // TODO: update the code to test the property destination
        expect(instance).to.have.property('destination');
        // expect(instance.destination).to.be(expectedValueLiteral);
      });

      it('should have the property tag (base name: "tag")', function() {
        // TODO: update the code to test the property tag
        expect(instance).to.have.property('tag');
        // expect(instance.tag).to.be(expectedValueLiteral);
      });

      it('should have the property collectionProfileId (base name: "collectionProfileId")', function() {
        // TODO: update the code to test the property collectionProfileId
        expect(instance).to.have.property('collectionProfileId');
        // expect(instance.collectionProfileId).to.be(expectedValueLiteral);
      });

    });
  });

}));
