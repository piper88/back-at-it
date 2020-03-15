'use strict';

const greeting = require('../lib/greet.js');

const assert = require('assert');

describe('testing module greet', function() {
  describe('testing #sayHello()', function() {
    it('should return my name is sarah', function() {
      let result = greeting.sayHello('sarah')
      assert.ok(result === 'my name is sarah', 'was not my name is sarah')
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greeting.sayHello();
      }, 'shoulda thrown an error');
    });
  });
});
