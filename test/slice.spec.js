/**
 * @theroyalwhee0/iter:test/slice.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { slice } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('slice', () => {
    it('should be a function', () => {
      expect(slice).to.be.an('function');
      expect(slice.length).to.equal(3);
    });
    it('should be create an iterable', () => {
      const iter = slice();
      expect(iter).to.be.an.iterable;
    });
    it('should do a simple slice', () => {
      const iter = slice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 1, 5);
      expect(iter).to.be.an.iterable.equalTo([
        1, 2, 3, 4, 5,
      ]);
    });
    it('should slice a single element', () => {
      const iter = slice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 2, 2);
      expect(iter).to.be.an.iterable.equalTo([2]);
    });
    it('should slice a beyond end of list', () => {
      const iter = slice([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ], 0, 100);
      expect(iter).to.be.an.iterable.equalTo([
        10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
      ]);
    });
    it('should handle zero items', () => {
      const iter = slice([ ], 0, 5);
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
    it('should be create from a single "to" value', () => {
      const iter = slice([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 7);
      expect(iter).to.be.an.iterable.equalTo([
        0, 1, 2, 3, 4, 5, 6, 7,
      ]);
    });
  });
});
