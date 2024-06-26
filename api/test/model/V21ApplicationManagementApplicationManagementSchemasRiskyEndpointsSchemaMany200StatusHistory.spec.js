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
    describe('V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200StatusHistory', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200StatusHistory();
      });

      it('should create an instance of V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200StatusHistory', function() {
        // TODO: update the code to test V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200StatusHistory
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200StatusHistory);
      });

      it('should have the property changedAt (base name: "changedAt")', function() {
        // TODO: update the code to test the property changedAt
        expect(instance).to.have.property('changedAt');
        // expect(instance.changedAt).to.be(expectedValueLiteral);
      });

      it('should have the property currentLabel (base name: "currentLabel")', function() {
        // TODO: update the code to test the property currentLabel
        expect(instance).to.have.property('currentLabel');
        // expect(instance.currentLabel).to.be(expectedValueLiteral);
      });

      it('should have the property previousKey (base name: "previousKey")', function() {
        // TODO: update the code to test the property previousKey
        expect(instance).to.have.property('previousKey');
        // expect(instance.previousKey).to.be(expectedValueLiteral);
      });

      it('should have the property currentKey (base name: "currentKey")', function() {
        // TODO: update the code to test the property currentKey
        expect(instance).to.have.property('currentKey');
        // expect(instance.currentKey).to.be(expectedValueLiteral);
      });

      it('should have the property changedBy (base name: "changedBy")', function() {
        // TODO: update the code to test the property changedBy
        expect(instance).to.have.property('changedBy');
        // expect(instance.changedBy).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property previousLabel (base name: "previousLabel")', function() {
        // TODO: update the code to test the property previousLabel
        expect(instance).to.have.property('previousLabel');
        // expect(instance.previousLabel).to.be(expectedValueLiteral);
      });

    });
  });

}));
