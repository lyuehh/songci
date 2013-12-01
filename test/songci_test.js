'use strict';

var songci = require('../lib/songci.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['songci'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(4);
    // tests here
    test.notEqual(songci.getPoetryByAuthor('辛弃疾'), 0, 'should not be 0.');
    test.notEqual(songci.getPoetryByTitle('念奴娇（赤壁怀古）'), 0, 'should not be 0.');
    test.notEqual(songci.getPoetryBySearchTitle('念奴娇'), 0, 'should not be 0.');
    test.notEqual(songci.getPoetryBySearchContent('惊起一滩鸥鹭'), 0, 'should not be 0.');
    test.done();
  }
};
