var socket = require('./socket');
var stairway = require('./stairway');

var index = 0;

function setHarmonicBase(value) {
  socket.emit('update', {
    type: 'harmonic',
    value: value
  });
}

function next() {
  if (index > stairway.length - 1) {
    index = 0;
  }
  setHarmonicBase(stairway[index]);
  index++;
}

function play() {
  next();
  if (index !== stairway.length - 1) {
    window.setTimeout(play, 500);
  }
}

global.note = global.freq = setHarmonicBase;
global.play = play;
