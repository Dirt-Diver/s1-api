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
    describe('V21DataExporterSchemaGetDestinationProfileResultSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21DataExporterSchemaGetDestinationProfileResultSchemaMany200Data();
      });

      it('should create an instance of V21DataExporterSchemaGetDestinationProfileResultSchemaMany200Data', function() {
        // TODO: update the code to test V21DataExporterSchemaGetDestinationProfileResultSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21DataExporterSchemaGetDestinationProfileResultSchemaMany200Data);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creatorId")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property destination (base name: "destination")', function() {
        // TODO: update the code to test the property destination
        expect(instance).to.have.property('destination');
        // expect(instance.destination).to.be(expectedValueLiteral);
      });

      it('should have the property updater (base name: "updater")', function() {
        // TODO: update the code to test the property updater
        expect(instance).to.have.property('updater');
        // expect(instance.updater).to.be(expectedValueLiteral);
      });

      it('should have the property apiUrl (base name: "apiUrl")', function() {
        // TODO: update the code to test the property apiUrl
        expect(instance).to.have.property('apiUrl');
        // expect(instance.apiUrl).to.be(expectedValueLiteral);
      });

      it('should have the property scopePath (base name: "scopePath")', function() {
        // TODO: update the code to test the property scopePath
        expect(instance).to.have.property('scopePath');
        // expect(instance.scopePath).to.be(expectedValueLiteral);
      });

      it('should have the property isDefault (base name: "isDefault")', function() {
        // TODO: update the code to test the property isDefault
        expect(instance).to.have.property('isDefault');
        // expect(instance.isDefault).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property updaterId (base name: "updaterId")', function() {
        // TODO: update the code to test the property updaterId
        expect(instance).to.have.property('updaterId');
        // expect(instance.updaterId).to.be(expectedValueLiteral);
      });

      it('should have the property apiKey (base name: "apiKey")', function() {
        // TODO: update the code to test the property apiKey
        expect(instance).to.have.property('apiKey');
        // expect(instance.apiKey).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

    });
  });

}));