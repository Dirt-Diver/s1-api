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
    describe('V21DataExporterSchemaSkylightUploadResults200DataAgentResults', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200DataAgentResults();
      });

      it('should create an instance of V21DataExporterSchemaSkylightUploadResults200DataAgentResults', function() {
        // TODO: update the code to test V21DataExporterSchemaSkylightUploadResults200DataAgentResults
        expect(instance).to.be.a(S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200DataAgentResults);
      });

      it('should have the property isEmpty (base name: "isEmpty")', function() {
        // TODO: update the code to test the property isEmpty
        expect(instance).to.have.property('isEmpty');
        // expect(instance.isEmpty).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property errorMessage (base name: "errorMessage")', function() {
        // TODO: update the code to test the property errorMessage
        expect(instance).to.have.property('errorMessage');
        // expect(instance.errorMessage).to.be(expectedValueLiteral);
      });

      it('should have the property hasFailures (base name: "hasFailures")', function() {
        // TODO: update the code to test the property hasFailures
        expect(instance).to.have.property('hasFailures');
        // expect(instance.hasFailures).to.be(expectedValueLiteral);
      });

    });
  });

}));