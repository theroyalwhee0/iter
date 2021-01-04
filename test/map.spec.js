/**
 * @theroyalwhee0/iter:test/map.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { map } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('map', () => {
    it('should be a function', () => {
      expect(map).to.be.an('function');
      expect(map.length).to.equal(2);
    });
    it('should be create an iterable', () => {
      const iter = map();
      expect(iter).to.be.an.iterable;
    });
    it('should process each item', () => {
      const iter = map([ 1, 2, 3, 4 ], (_) => _*2);
      expect(iter).to.be.an.iterable.equalTo([
        2, 4, 6, 8,
      ]);
    });
    it('should work on empty iterator', () => {
      const iter = map(new Set(), (_) => _);
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
  });
});
