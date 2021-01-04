/**
 * @theroyalwhee0/iter:test/advance.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { advance } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('advance', () => {
    it('should be a function', () => {
      expect(advance).to.be.an('function');
      expect(advance.length).to.equal(2);
    });
    it('should be create an iterable', () => {
      const iter = advance();
      expect(iter).to.be.an.iterable;
    });
    it('should do a simple advance', () => {
      const iter = advance([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 3);
      expect(iter).to.be.an.iterable.equalTo([
        3, 4, 5, 6, 7, 8, 9, 10,
      ]);
    });
    it('should advance a beyond end of list', () => {
      const iter = advance([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ], 100);
      expect(iter).to.be.an.iterable.equalTo([ ]);
    });
    it('should handle zero items', () => {
      const iter = advance([ ], 5);
      expect(iter).to.be.an.iterable.with.a.sizeOf(0);
    });
  });
});
