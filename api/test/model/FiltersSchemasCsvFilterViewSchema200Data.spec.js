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
    describe('FiltersSchemasCsvFilterViewSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.FiltersSchemasCsvFilterViewSchema200Data();
      });

      it('should create an instance of FiltersSchemasCsvFilterViewSchema200Data', function() {
        // TODO: update the code to test FiltersSchemasCsvFilterViewSchema200Data
        expect(instance).to.be.a(S1MgmtApi.FiltersSchemasCsvFilterViewSchema200Data);
      });

      it('should have the property rowsCount (base name: "rowsCount")', function() {
        // TODO: update the code to test the property rowsCount
        expect(instance).to.have.property('rowsCount');
        // expect(instance.rowsCount).to.be(expectedValueLiteral);
      });

      it('should have the property notFoundEndpoints (base name: "notFoundEndpoints")', function() {
        // TODO: update the code to test the property notFoundEndpoints
        expect(instance).to.have.property('notFoundEndpoints');
        // expect(instance.notFoundEndpoints).to.be(expectedValueLiteral);
      });

      it('should have the property filterId (base name: "filterId")', function() {
        // TODO: update the code to test the property filterId
        expect(instance).to.have.property('filterId');
        // expect(instance.filterId).to.be(expectedValueLiteral);
      });

      it('should have the property endpointFoundCount (base name: "endpointFoundCount")', function() {
        // TODO: update the code to test the property endpointFoundCount
        expect(instance).to.have.property('endpointFoundCount');
        // expect(instance.endpointFoundCount).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueInputValuesCount (base name: "uniqueInputValuesCount")', function() {
        // TODO: update the code to test the property uniqueInputValuesCount
        expect(instance).to.have.property('uniqueInputValuesCount');
        // expect(instance.uniqueInputValuesCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
