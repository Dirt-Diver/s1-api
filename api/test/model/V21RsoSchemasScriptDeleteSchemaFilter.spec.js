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
    describe('V21RsoSchemasScriptDeleteSchemaFilter', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21RsoSchemasScriptDeleteSchemaFilter();
      });

      it('should create an instance of V21RsoSchemasScriptDeleteSchemaFilter', function() {
        // TODO: update the code to test V21RsoSchemasScriptDeleteSchemaFilter
        expect(instance).to.be.a(S1MgmtApi.V21RsoSchemasScriptDeleteSchemaFilter);
      });

      it('should have the property osTypes (base name: "osTypes")', function() {
        // TODO: update the code to test the property osTypes
        expect(instance).to.have.property('osTypes');
        // expect(instance.osTypes).to.be(expectedValueLiteral);
      });

      it('should have the property scriptType (base name: "scriptType")', function() {
        // TODO: update the code to test the property scriptType
        expect(instance).to.have.property('scriptType');
        // expect(instance.scriptType).to.be(expectedValueLiteral);
      });

      it('should have the property query (base name: "query")', function() {
        // TODO: update the code to test the property query
        expect(instance).to.have.property('query');
        // expect(instance.query).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property ids (base name: "ids")', function() {
        // TODO: update the code to test the property ids
        expect(instance).to.have.property('ids');
        // expect(instance.ids).to.be(expectedValueLiteral);
      });

      it('should have the property groupIds (base name: "groupIds")', function() {
        // TODO: update the code to test the property groupIds
        expect(instance).to.have.property('groupIds');
        // expect(instance.groupIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
