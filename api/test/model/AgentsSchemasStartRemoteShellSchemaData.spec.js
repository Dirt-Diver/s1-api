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
    describe('AgentsSchemasStartRemoteShellSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.AgentsSchemasStartRemoteShellSchemaData();
      });

      it('should create an instance of AgentsSchemasStartRemoteShellSchemaData', function() {
        // TODO: update the code to test AgentsSchemasStartRemoteShellSchemaData
        expect(instance).to.be.a(S1MgmtApi.AgentsSchemasStartRemoteShellSchemaData);
      });

      it('should have the property historyPassword (base name: "historyPassword")', function() {
        // TODO: update the code to test the property historyPassword
        expect(instance).to.have.property('historyPassword');
        // expect(instance.historyPassword).to.be(expectedValueLiteral);
      });

      it('should have the property twoFaCode (base name: "twoFaCode")', function() {
        // TODO: update the code to test the property twoFaCode
        expect(instance).to.have.property('twoFaCode');
        // expect(instance.twoFaCode).to.be(expectedValueLiteral);
      });

      it('should have the property columns (base name: "columns")', function() {
        // TODO: update the code to test the property columns
        expect(instance).to.have.property('columns');
        // expect(instance.columns).to.be(expectedValueLiteral);
      });

      it('should have the property rows (base name: "rows")', function() {
        // TODO: update the code to test the property rows
        expect(instance).to.have.property('rows');
        // expect(instance.rows).to.be(expectedValueLiteral);
      });

      it('should have the property passwordFromScope (base name: "passwordFromScope")', function() {
        // TODO: update the code to test the property passwordFromScope
        expect(instance).to.have.property('passwordFromScope');
        // expect(instance.passwordFromScope).to.be(expectedValueLiteral);
      });

    });
  });

}));