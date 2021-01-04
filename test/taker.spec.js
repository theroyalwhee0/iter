/**
 * @theroyalwhee0/iter:test/taker.spec.js
 */

/**
 * Imports.
 */
const { describe, it, expect } = require('./testing');
const { taker } = require('../src/index');

/**
 * Tests.
 */
describe('@theroyalwhee0/iter', () => {
  describe('taker', () => {
    it('should be a function', () => {
      expect(taker).to.be.an('function');
      expect(taker.length).to.equal(2);
    });
    it('should create a function', () => {
      const take = taker([ 1, 2, 3 ]);
      expect(take).to.be.a('function');
      expect(take.length).to.equal(0);
    });
    it('should get next items', () => {
      const next = taker([ 1, 2, 3 ]);
      expect(next).to.be.a('function');
      const value1 = next();
      expect(value1).to.equal(1);
      const value2 = next();
      expect(value2).to.equal(2);
      const value3 = next();
      expect(value3).to.equal(3);
      const value4 = next();
      expect(value4).to.equal(undefined);
      const value5 = next();
      expect(value5).to.equal(undefined);
    });
    it('should support last value', () => {
      const next = taker([1], 100);
      expect(next).to.be.a('function');
      const value1 = next();
      expect(value1).to.equal(1);
      const value2 = next();
      expect(value2).to.equal(100);
    });
  });
});
