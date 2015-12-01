var socket = require('../socket');
var stairway = require('./stairway');
var index = 0;

function setHarmonicBase(value) {
  socket.emit('update', {
    type: 'harmonic',
    value: value
  });
}

function next() {
  if (index > global.sequence.length - 1) {
    index = 0;
  }
  setHarmonicBase(global.sequence[index]);
  index++;
}

function play(sequence) {
  if (sequence) {
    global.sequence = sequence;
  }
  next();
  if (index !== global.sequence.length - 1 || global.repeat) {
    window.setTimeout(play, global.noteLength);
  }
}

global.note = global.freq = setHarmonicBase;
global.play = play;
global.sequence = stairway;
global.repeat = false;
global.noteLength = 500;
