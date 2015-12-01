var freq = require('./audio');
var socket = require('./socket');

function setHarmonicBase (value) {
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

global.setHarmonicBase = setHarmonicBase;
global.next = next;
global.play = play;