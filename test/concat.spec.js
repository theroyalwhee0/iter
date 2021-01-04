/**
 * @theroyalwhee0/iter:test/concat.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { concat } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('concat', () => {
    it('should be a function', () => {
      expect(concat).to.be.an('function');
      expect(concat.length).to.equal(0);
    });
    it('should be create an iterable', () => {
      const iter = concat();
      expect(iter).to.be.an.iterable;
    });
    it('should concat two items', () => {
      const iter = concat([ 1, 2, 3 ], [ 4, 5, 6 ]);
      expect(iter).to.be.an.iterable.equalTo([
        1, 2, 3, 4, 5, 6,
      ]);
    });
    it('should handle one item', () => {
      const iter = concat([ 10, 20, 30, 40, 50 ]);
      expect(iter).to.be.an.iterable.equalTo([
        10, 20, 30, 40, 50,
      ]);
    });
    it('should handle zero items', () => {
      const iter = concat();
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
  });
});
