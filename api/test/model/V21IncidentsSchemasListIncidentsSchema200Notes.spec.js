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
    describe('V21IncidentsSchemasListIncidentsSchema200Notes', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21IncidentsSchemasListIncidentsSchema200Notes();
      });

      it('should create an instance of V21IncidentsSchemasListIncidentsSchema200Notes', function() {
        // TODO: update the code to test V21IncidentsSchemasListIncidentsSchema200Notes
        expect(instance).to.be.a(S1MgmtApi.V21IncidentsSchemasListIncidentsSchema200Notes);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property edited (base name: "edited")', function() {
        // TODO: update the code to test the property edited
        expect(instance).to.have.property('edited');
        // expect(instance.edited).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property authorId (base name: "authorId")', function() {
        // TODO: update the code to test the property authorId
        expect(instance).to.have.property('authorId');
        // expect(instance.authorId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
