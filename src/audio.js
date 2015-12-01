var MIDIUtils = require('midiutils');

var osc, context;
var base = 55;
var overtone = Math.floor(Math.random() * 5) + 1;
var freqElem = document.getElementById('freq');

function nameToFreq(name) {
  return MIDIUtils.noteNumberToFrequency(MIDIUtils.noteNameToNoteNumber(name));
}

function setFreq(freq) {
  // Allow us to pass note names;
  if (typeof freq === 'string') {
    newBase = nameToFreq(freq);
  }
  osc.frequency.value = freq;
  freqElem.innerHTML = 'Frequency: ' + freq + 'Hz';
}

function setHarmonic(newBase) {
  // Allow us to pass note names;
  if (typeof newBase === 'string') {
    newBase = nameToFreq(newBase);
  }
  var freq = newBase * overtone;
  setFreq(freq)
}

function setNoise() {
  // Allow us to pass note names;
  if (typeof newBase === 'string') {
    newBase = nameToFreq(newBase);
  }
  var freq = Math.rand() * 220500;
  setFreq(freq)
}

function init() {
  context = new (window.AudioContext || window.webkitAudioContext)();
  osc = context.createOscillator();
  setHarmonic(base);
  osc.connect(context.destination);
  osc.start();
}

module.exports = {
  init: init,
  set: setFreq,
  harmonic: setHarmonic
};
