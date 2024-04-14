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
    describe('V21AlertsSchemasAlertInformationSchemaMany200RuleInfo', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200RuleInfo();
      });

      it('should create an instance of V21AlertsSchemasAlertInformationSchemaMany200RuleInfo', function() {
        // TODO: update the code to test V21AlertsSchemasAlertInformationSchemaMany200RuleInfo
        expect(instance).to.be.a(S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200RuleInfo);
      });

      it('should have the property severity (base name: "severity")', function() {
        // TODO: update the code to test the property severity
        expect(instance).to.have.property('severity');
        // expect(instance.severity).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property s1ql (base name: "s1ql")', function() {
        // TODO: update the code to test the property s1ql
        expect(instance).to.have.property('s1ql');
        // expect(instance.s1ql).to.be(expectedValueLiteral);
      });

      it('should have the property scopeLevel (base name: "scopeLevel")', function() {
        // TODO: update the code to test the property scopeLevel
        expect(instance).to.have.property('scopeLevel');
        // expect(instance.scopeLevel).to.be(expectedValueLiteral);
      });

      it('should have the property treatAsThreat (base name: "treatAsThreat")', function() {
        // TODO: update the code to test the property treatAsThreat
        expect(instance).to.have.property('treatAsThreat');
        // expect(instance.treatAsThreat).to.be(expectedValueLiteral);
      });

      it('should have the property queryLang (base name: "queryLang")', function() {
        // TODO: update the code to test the property queryLang
        expect(instance).to.have.property('queryLang');
        // expect(instance.queryLang).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property queryType (base name: "queryType")', function() {
        // TODO: update the code to test the property queryType
        expect(instance).to.have.property('queryType');
        // expect(instance.queryType).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));