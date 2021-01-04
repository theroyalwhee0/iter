/**
 * @theroyalwhee0/iter:test/fibonacci.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { fibonacci } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('fibonacci', () => {
    it('should be a factory', () => {
      expect(fibonacci).to.be.an('function');
      expect(fibonacci.length).to.equal(0);
    });
    it('should be create an iterable', () => {
      const iter = fibonacci();
      expect(iter).to.be.an.iterable;
    });
    it('should be create a default iterable', () => {
      // Initial=1.
      const iter = fibonacci();
      expect(iter).to.be.an.iterable.startingWith([
        1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
        89, 144, 233, 377, 610, 987,
      ]);
    });
    it('should be create an customized iterable', () => {
      // Initial 2.
      const iter = fibonacci(2);
      expect(iter).to.be.an.iterable.startingWith([
        2, 2, 4, 6, 10, 16, 26, 42, 68, 110, 178, 288,
      ]);
    });
    it('should support negative numbers', () => {
      // Initial -1.
      const iter = fibonacci(-1);
      expect(iter).to.be.an.iterable.startingWith([
        -1, -1, -2, -3, -5, -8, -13, -21, -34, -55,
        -89, -144, -233, -377, -610, -987,
      ]);
    });
    it('should be create an empty iterable', () => {
      // Initial 0.
      const iter = fibonacci(0);
      expect(iter).to.be.an.iterable.startingWith([
        0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
    });
  });
});
