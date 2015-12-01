var map = require('lodash/collection/map');
var MIDIUtils = require('midiutils');

var stairway = [
  'A-2',
  'C-3',
  'E-3',
  'A-3',
  'B-3',
  'E-3',
  'C-3',
  'B-3',
  'C-4',
  'E-3',
  'C-3',
  'C-4',
  'F#3',
  'D-3',
  'A-2',
  'F-3',
  'E-3',
  'C-3',
  'A-2',
  'C-3',
  'C-3',
  'E-3',
  'C-3',
  'A-2',
  'G-2',
  'A-2',
  'A-2'
];

module.exports = map(map(stairway, MIDIUtils.noteNameToNoteNumber), MIDIUtils.noteNumberToFrequency);
