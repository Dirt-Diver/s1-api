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
    describe('V21RulesSchemasRuleViewSchemaMany200Pagination', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Pagination();
      });

      it('should create an instance of V21RulesSchemasRuleViewSchemaMany200Pagination', function() {
        // TODO: update the code to test V21RulesSchemasRuleViewSchemaMany200Pagination
        expect(instance).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Pagination);
      });

      it('should have the property nextCursor (base name: "nextCursor")', function() {
        // TODO: update the code to test the property nextCursor
        expect(instance).to.have.property('nextCursor');
        // expect(instance.nextCursor).to.be(expectedValueLiteral);
      });

      it('should have the property totalItems (base name: "totalItems")', function() {
        // TODO: update the code to test the property totalItems
        expect(instance).to.have.property('totalItems');
        // expect(instance.totalItems).to.be(expectedValueLiteral);
      });

    });
  });

}));
