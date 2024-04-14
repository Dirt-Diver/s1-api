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
    describe('RemoteOpsSchemasGetForensicsTaskResultDataSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.RemoteOpsSchemasGetForensicsTaskResultDataSchema200Data();
      });

      it('should create an instance of RemoteOpsSchemasGetForensicsTaskResultDataSchema200Data', function() {
        // TODO: update the code to test RemoteOpsSchemasGetForensicsTaskResultDataSchema200Data
        expect(instance).to.be.a(S1MgmtApi.RemoteOpsSchemasGetForensicsTaskResultDataSchema200Data);
      });

      it('should have the property collectionProfile (base name: "collectionProfile")', function() {
        // TODO: update the code to test the property collectionProfile
        expect(instance).to.have.property('collectionProfile');
        // expect(instance.collectionProfile).to.be(expectedValueLiteral);
      });

      it('should have the property skylightParentTaskResultsUrl (base name: "skylightParentTaskResultsUrl")', function() {
        // TODO: update the code to test the property skylightParentTaskResultsUrl
        expect(instance).to.have.property('skylightParentTaskResultsUrl');
        // expect(instance.skylightParentTaskResultsUrl).to.be(expectedValueLiteral);
      });

      it('should have the property collection (base name: "collection")', function() {
        // TODO: update the code to test the property collection
        expect(instance).to.have.property('collection');
        // expect(instance.collection).to.be(expectedValueLiteral);
      });

      it('should have the property skylightResultsUrl (base name: "skylightResultsUrl")', function() {
        // TODO: update the code to test the property skylightResultsUrl
        expect(instance).to.have.property('skylightResultsUrl');
        // expect(instance.skylightResultsUrl).to.be(expectedValueLiteral);
      });

      it('should have the property skylightResultsStatus (base name: "skylightResultsStatus")', function() {
        // TODO: update the code to test the property skylightResultsStatus
        expect(instance).to.have.property('skylightResultsStatus');
        // expect(instance.skylightResultsStatus).to.be(expectedValueLiteral);
      });

      it('should have the property destination (base name: "destination")', function() {
        // TODO: update the code to test the property destination
        expect(instance).to.have.property('destination');
        // expect(instance.destination).to.be(expectedValueLiteral);
      });

      it('should have the property collectionFile (base name: "collectionFile")', function() {
        // TODO: update the code to test the property collectionFile
        expect(instance).to.have.property('collectionFile');
        // expect(instance.collectionFile).to.be(expectedValueLiteral);
      });

    });
  });

}));
