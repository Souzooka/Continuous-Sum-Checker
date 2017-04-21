/*jshint esversion:6*/
const chai = require('chai');
const expect = chai.expect;

const sumChecker = require('../app.js');

describe('sumChecker', () => {

  it('should return true if a number is found inside the array', () => {
    expect(sumChecker([1, 2, 3, 4, 5], 1)).to.be.equal(true);
  });

  it('should return true if a sum is found inside the array', () => {
    expect(sumChecker([5, 6, 1, 2, 7], 11)).to.be.equal(true);
  });

});