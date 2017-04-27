// 'use strict';

var test = require('tape');
var _ = require('lodash');

var stairway = require('../src/gepetto/stairway');

test('stairway:', function (t) {
  t.plan(28);
  t.equals(stairway.length, 27, 'There should be 27 notes');
  _.each(stairway, function (note) {
    t.equals(typeof note, 'number', 'each note should be a number');
  });
});
