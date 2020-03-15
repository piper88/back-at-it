'use strict';

const age = require('../lib/age.js');

const assert = require('assert');

describe('testing module age', function() {
  describe('testing #sayAge', function() {
    it('should return I am 33 years old', function () {
      let result = age.sayAge('33');
      assert.ok(result === 'I am 33 years old', 'was not I am 33 years old');
    })
    it('should return age must be a number', function() {
      let result = age.sayAge('poop');
      assert.ok(result === 'age must be a number', 'was not age must be a number');
    });
    it('should throw a missing age error', function() {
      assert.throws(function() {
        age.sayAge();
      },'should have thrown an error');
    });
  });
});
