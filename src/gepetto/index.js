var socket = require('../socket');
var stairway = require('./stairway');
var index = 0;

function update(type, value) {
  socket.emit('update', {
    type: type,
    value: value
  });
}

function setHarmonicBase(value) {
  update('harmonic', value);
}

function noise(value) {
  update('noise', value);
}

function modulation(value) {
  update('modulation', value);
}

function volume(value) {
  update('volume', value);
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
    window.setTimeout(play, global.interval);
  }
}

global.note = global.freq = setHarmonicBase;
global.play = play;
global.sequence = stairway;
global.repeat = false;
global.interval = 500;
global.noise = noise;
global.modulation = modulation;
global.volume = volume;
