/**
 * @theroyalwhee0/iter:test/filter.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { filter } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('filter', () => {
    it('should be a function', () => {
      expect(filter).to.be.an('function');
      expect(filter.length).to.equal(2);
    });
    it('should be create an iterable', () => {
      const iter = filter();
      expect(iter).to.be.an.iterable;
    });
    it('should process each item', () => {
      const iter = filter([ 1, 2, 3, 4, 6, 7, 8, 9, 10 ], (_) => _%2==0);
      expect(iter).to.be.an.iterable.equalTo([
        2, 4, 6, 8, 10,
      ]);
    });
    it('should work on empty iterator', () => {
      const iter = filter([], (_) => _);
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
  });
});
