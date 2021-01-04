/**
 * @theroyalwhee0/iter:test/repeat.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { repeat } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('repeat', () => {
    it('should be a function', () => {
      expect(repeat).to.be.an('function');
      expect(repeat.length).to.equal(1);
    });
    it('should be create an iterable', () => {
      const iter = repeat();
      expect(iter).to.be.an.iterable;
    });
    it('should repeat value given number of times', () => {
      const iter = repeat(10, 6);
      expect(iter).to.be.an.iterable.equalTo([
        10, 10, 10, 10, 10, 10,
      ]);
    });
    it('should support any type', () => {
      const iter = repeat('la', 3);
      expect(iter).to.be.an.iterable.equalTo([
        'la', 'la', 'la',
      ]);
    });
    it('should support zero times', () => {
      const iter = repeat(10, 0);
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
  });
});
