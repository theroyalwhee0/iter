/**
 * @theroyalwhee0/iter:test/limit.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { limit } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('limit', () => {
    it('should be a function', () => {
      expect(limit).to.be.an('function');
      expect(limit.length).to.equal(2);
    });
    it('should be create an iterable', () => {
      const iter = limit();
      expect(iter).to.be.an.iterable;
    });
    it('should limit an iterables length', () => {
      const iter = limit([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 5);
      expect(iter).to.be.an.iterable.equalTo([
        1, 2, 3, 4, 5,
      ]);
    });
    it('should be able to limit an iterables length to zero', () => {
      const iter = limit([ 5, 15, 30 ], 0);
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
    it('should be able to limit to more than the size of an iterable', () => {
      const iter = limit([ 5, 15, 30 ], 5);
      expect(iter).to.be.an.iterable.equalTo([
        5, 15, 30,
      ]);
    });
  });
});
