'use strict';

module.exports = exports = {};

const name = process.argv[2];

exports.sayHello = function() {
  if (!name)
    throw new Error('no name given');
  console.log('my name is ' + name);
}

exports.sayGoodbye = function() {
  console.log('tschuesss');
}
