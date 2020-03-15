'use strict';

module.exports = exports = {};

// const age = process.argv[3];


exports.sayAge = function(age) {
  if (age && !isNaN(age)) {
    // console.log('age was provided and is a number');
    return `I am ${age} years old`;
  }
  if (age && isNaN(age)) {
    // console.log('age must be a number');
    return `age must be a number`;
  }
  throw new Error (`no age given`);
};
