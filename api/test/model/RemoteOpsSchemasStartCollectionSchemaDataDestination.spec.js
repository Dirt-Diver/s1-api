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
    describe('RemoteOpsSchemasStartCollectionSchemaDataDestination', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.RemoteOpsSchemasStartCollectionSchemaDataDestination();
      });

      it('should create an instance of RemoteOpsSchemasStartCollectionSchemaDataDestination', function() {
        // TODO: update the code to test RemoteOpsSchemasStartCollectionSchemaDataDestination
        expect(instance).to.be.a(S1MgmtApi.RemoteOpsSchemasStartCollectionSchemaDataDestination);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property passwordFromScope (base name: "passwordFromScope")', function() {
        // TODO: update the code to test the property passwordFromScope
        expect(instance).to.have.property('passwordFromScope');
        // expect(instance.passwordFromScope).to.be(expectedValueLiteral);
      });

      it('should have the property profileId (base name: "profileId")', function() {
        // TODO: update the code to test the property profileId
        expect(instance).to.have.property('profileId');
        // expect(instance.profileId).to.be(expectedValueLiteral);
      });

    });
  });

}));