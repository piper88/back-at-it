'use strict';

module.exports = exports = {};

// const name = process.argv[2]

exports.sayHello = function(name) {
  console.log('name', name);
  if (!name)
    throw new Error('no name given');
  return `my name is ${name}`;
}



exports.sayGoodbye = function() {
  console.log('tschuesss');
}
