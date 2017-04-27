var ui = require('./ui');
var socket = require('../socket');
var stairway = require('./stairway');
var lookup = require('./lookup');
var MIDIUtils = require('midiutils');

var index = 0;
var playing = false;

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

function step() {
  if (index >= global.sequence.length) {
    index = 0;
  }
  setHarmonicBase(global.sequence[index]);
  index++;
}

function play(sequence) {
  if (sequence) {
    global.sequence = sequence;
  }
  step();
  if ((index <= global.sequence.length - 1 || global.repeat) && playing) {
    window.setTimeout(play, global.interval);
  }
  else {
    if (playing) {
      playing = ui.togglePlay();
    }
    if (index === global.sequence.length - 1) {
      index = 0;
    }
  }
}

function clickPlay() {
  playing = ui.togglePlay();
  if(playing) {
    play();
  }
}

function clickMute() {
  var muted = ui.toggleMute();
  volume(!muted);
}

function clickRepeat() {
  global.repeat = ui.toggleRepeat();
}

function newSequence(e) {
  if(e.keyCode === 13) {
    var notes = e.srcElement.value.split(' ');
    notes = notes.reduce(function (prev, cur) {
      var num = Number(cur);
      if (num) {
        prev.push(num);
      }
      else if (cur) {
        prev.push(cur);
      }
      return prev;
    }, []);
    global.sequence = notes;
    if (!playing) {
      setHarmonicBase(global.sequence[index]);
    }
  }
}

function updateInterval(e) {
  if (e.keyCode === 13) {
    var newInterval = Number(e.srcElement.value);
    if (newInterval) {
      global.interval = newInterval;
    }
  }
}

function updateModulation(e) {
  if (e.keyCode === 13) {
    modulation(Number(e.srcElement.value));
  }
}

function playNote(e) {
  var note = lookup[e.keyCode];
  if (note) {
    note = MIDIUtils.noteNumberToFrequency(note - 12);
    setHarmonicBase(note);
  }
}

ui.noiseElem.onclick = function ( ) { noise(); };
ui.muteElem.onclick = clickMute;
ui.playElem.onclick = clickPlay;
ui.repeatElem.onclick = clickRepeat;
ui.sequenceElem.onkeypress = newSequence;
ui.intervalElem.onkeypress = updateInterval;
ui.modulateElem.onkeypress = updateModulation;
ui.keyboardElem.onkeypress = playNote;

global.note = global.freq = setHarmonicBase;
global.play = play;
global.sequence = stairway;
global.stairway = stairway;
global.repeat = false;
global.interval = 500;
global.noise = noise;
global.modulation = modulation;
global.volume = volume;
