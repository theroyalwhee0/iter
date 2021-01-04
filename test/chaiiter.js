/**
 * @theroyalwhee0/iter:test/chaiitter.js
 */

/**
 * Chai Iterable helpers.
 */
function chaiIter(chai, utils) {
  const { Assertion } = chai;

  /**
   * Assert value is an iterable.
   */
  Assertion.addChainableMethod('iterable',
    function iterableAssert() {
      this.assert(
        !!(
          this._obj && (
            typeof this._obj === 'object' ||
            typeof this._obj === 'function'
          ) &&
          typeof obj[Symbol.iterator] === 'function'
        ),
        'expected #{this} to be an iterable',
        'expected #{this} to not be an iterable'
      );
    },
    function iterableChain () {
      utils.flag(this, 'iterable', true);
    }
  );

  /**
   * Assert iterable equals a matching array.
   */
  Assertion.addMethod('equalTo', function equalTo(match) {
    const { _obj:obj } = this;
    new Assertion(obj).to.be.iterable;
    new Assertion(match).to.be.iterable;
    const sourcelist = [ ];
    const targetlist = [...match];
    let idx = 0;
    for(let value of obj) {
      if(idx >= targetlist.length+1) {
        break;
      }
      sourcelist.push(value);
      idx += 1;
    }
    new Assertion(sourcelist).to.eql(targetlist);
  });

  /**
   * Assert iterable starts with a matching array.
   */
  Assertion.addMethod('startingWith', function startingWith(match) {
    const { _obj:obj } = this;
    new Assertion(obj).to.be.iterable;
    new Assertion(match).to.be.iterable;
    const sourcelist = [ ];
    const targetlist = [...match];
    let idx = 0;
    for(let value of obj) {
      if(idx >= targetlist.length) {
        break;
      }
      sourcelist.push(value);
      idx += 1;
    }
    new Assertion(sourcelist).to.eql(targetlist);
  });

  /**
   * Assert the size of an iterable.
   */
  Assertion.addMethod('sizeOf', function sizeOf(size) {
    const { _obj:obj } = this;
    let length = 0;
    for(let _value of obj) {
      if(length > size) {
        break;
      }
      length += 1;
    }
    this.assert(
      !!(
        length === size
      ),
      `expected iterable of size ${length} to be size of ${size}`,
      `expected iterable of size ${length} to not be size ${size}`
    );
  });
}

/**
 * Exports.
 */
module.exports = {
  chaiIter,
};
