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
    describe('DeviceControlSchemasCopyRuleSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeviceControlSchemasCopyRuleSchemaData();
      });

      it('should create an instance of DeviceControlSchemasCopyRuleSchemaData', function() {
        // TODO: update the code to test DeviceControlSchemasCopyRuleSchemaData
        expect(instance).to.be.a(S1MgmtApi.DeviceControlSchemasCopyRuleSchemaData);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property groupIds (base name: "groupIds")', function() {
        // TODO: update the code to test the property groupIds
        expect(instance).to.have.property('groupIds');
        // expect(instance.groupIds).to.be(expectedValueLiteral);
      });

      it('should have the property siteId (base name: "siteId")', function() {
        // TODO: update the code to test the property siteId
        expect(instance).to.have.property('siteId');
        // expect(instance.siteId).to.be(expectedValueLiteral);
      });

    });
  });

}));