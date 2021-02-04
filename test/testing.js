/**
 * Imports.
 */
const chai = require('chai');
const { chaiIter } = require('./chaiiter');

/**
 * Export mocha parts so that autocomplete isn't confused.
 */
const { describe, it } = global;

/**
 * Chai.
 */
const { expect } = chai;
chai.use(chaiIter);

/**
 * Exports.
 */
module.exports = {
  // Mocha.
  describe, it,
  // Chai.
  expect,
};
