/**
 * Imports.
 */
const chai = require('chai');
const sinon = require('sinon');
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
 * Sinon.
 */
const { spy } = sinon;

/**
 * Exports.
 */
module.exports = {
  // Mocha.
  describe, it,
  // Chai.
  expect,
  // Sinon.
  spy,
};
