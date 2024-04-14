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
    describe('DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200Data();
      });

      it('should create an instance of DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200Data', function() {
        // TODO: update the code to test DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200Data
        expect(instance).to.be.a(S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200Data);
      });

      it('should have the property queryModeInfo (base name: "queryModeInfo")', function() {
        // TODO: update the code to test the property queryModeInfo
        expect(instance).to.have.property('queryModeInfo');
        // expect(instance.queryModeInfo).to.be(expectedValueLiteral);
      });

      it('should have the property warnings (base name: "warnings")', function() {
        // TODO: update the code to test the property warnings
        expect(instance).to.have.property('warnings');
        // expect(instance.warnings).to.be(expectedValueLiteral);
      });

      it('should have the property responseState (base name: "responseState")', function() {
        // TODO: update the code to test the property responseState
        expect(instance).to.have.property('responseState');
        // expect(instance.responseState).to.be(expectedValueLiteral);
      });

      it('should have the property responseError (base name: "responseError")', function() {
        // TODO: update the code to test the property responseError
        expect(instance).to.have.property('responseError');
        // expect(instance.responseError).to.be(expectedValueLiteral);
      });

      it('should have the property progressStatus (base name: "progressStatus")', function() {
        // TODO: update the code to test the property progressStatus
        expect(instance).to.have.property('progressStatus');
        // expect(instance.progressStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));