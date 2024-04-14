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
    describe('V21DataExporterSchemaSkylightUploadResults200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200Data();
      });

      it('should create an instance of V21DataExporterSchemaSkylightUploadResults200Data', function() {
        // TODO: update the code to test V21DataExporterSchemaSkylightUploadResults200Data
        expect(instance).to.be.a(S1MgmtApi.V21DataExporterSchemaSkylightUploadResults200Data);
      });

      it('should have the property agentResults (base name: "agentResults")', function() {
        // TODO: update the code to test the property agentResults
        expect(instance).to.have.property('agentResults');
        // expect(instance.agentResults).to.be(expectedValueLiteral);
      });

      it('should have the property taskResults (base name: "taskResults")', function() {
        // TODO: update the code to test the property taskResults
        expect(instance).to.have.property('taskResults');
        // expect(instance.taskResults).to.be(expectedValueLiteral);
      });

      it('should have the property threatResults (base name: "threatResults")', function() {
        // TODO: update the code to test the property threatResults
        expect(instance).to.have.property('threatResults');
        // expect(instance.threatResults).to.be(expectedValueLiteral);
      });

    });
  });

}));
