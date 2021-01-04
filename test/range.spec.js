/**
 * @theroyalwhee0/iter:test/range.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { range } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('range', () => {
    it('should be a factory', () => {
      expect(range).to.be.an('function');
      expect(range.length).to.equal(3);
    });
    it('should be create an iterable', () => {
      const iter = range();
      expect(iter).to.be.an.iterable;
    });
    it('should be create a default iterable', () => {
      // From 0, To 2^53, Step 1 (auto).
      const iter = range();
      expect(iter).to.be.an.iterable.startingWith([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
      ]);
    });
    it('should be create an customized iterable', () => {
      // From 2, To 60, Step 2.
      const iter = range(2, 60, 2);
      expect(iter).to.be.an.iterable.equalTo([
        2,  4,  6,  8, 10, 12, 14, 16, 18,
        20, 22, 24, 26, 28, 30, 32, 34, 36,
        38, 40, 42, 44, 46, 48, 50, 52, 54,
        56, 58, 60,
      ]);
    });
    it('should be create from a single "to" value', () => {
      // From 0, To 12, Step 1 (auto).
      const iter = range(12);
      expect(iter).to.be.an.iterable.equalTo([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12,
      ]);
    });
    it('should support negative step', () => {
      // From 20, To -20, Step -2.
      const iter = range(20, -20, -2);
      expect(iter).to.be.an.iterable.equalTo([
        20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0,
        -2, -4, -6, -8, -10, -12, -14, -16, -18, -20,
      ]);
    });
    it('should auto determine step direction', () => {
      // From 10, To -10, Step -1 (auto).
      const iter = range(10, -10);
      expect(iter).to.be.an.iterable.equalTo([
        10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
        -1, -2, -3, -4, -5, -6, -7, -8, -9, -10,
      ]);
    });
    it('should be create an single value iterable', () => {
      // Initial 0, Max 0, Step 1 (auto).
      const iter = range(0, 0);
      expect(iter).to.be.an.iterable.equalTo([0]);
      const iter2 = range(0);
      expect(iter2).to.be.an.iterable.equalTo([0]);
    });
  });
});
