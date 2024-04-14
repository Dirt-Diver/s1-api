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
    describe('AccountsSchemasPostAccountSchemaDataSkus', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.AccountsSchemasPostAccountSchemaDataSkus();
      });

      it('should create an instance of AccountsSchemasPostAccountSchemaDataSkus', function() {
        // TODO: update the code to test AccountsSchemasPostAccountSchemaDataSkus
        expect(instance).to.be.a(S1MgmtApi.AccountsSchemasPostAccountSchemaDataSkus);
      });

      it('should have the property unlimited (base name: "unlimited")', function() {
        // TODO: update the code to test the property unlimited
        expect(instance).to.have.property('unlimited');
        // expect(instance.unlimited).to.be(expectedValueLiteral);
      });

      it('should have the property totalLicenses (base name: "totalLicenses")', function() {
        // TODO: update the code to test the property totalLicenses
        expect(instance).to.have.property('totalLicenses');
        // expect(instance.totalLicenses).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
