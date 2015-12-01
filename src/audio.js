
var MIDIUtils = require('midiutils');

// Some globals cause why
var osc, context;
var freqElem = document.getElementById('freq');

var overtoneCache;

function nameToFreq(name) {
  return MIDIUtils.noteNumberToFrequency(MIDIUtils.noteNameToNoteNumber(name));
}


function sanitizeFreq(freq) {
  // Allow us to pass note names;
  if (typeof freq === 'string') {
    freq = nameToFreq(freq);
  }
  return freq
}

function setFreq(freq) {
  freq = sanitizeFreq(freq);
  osc.frequency.value = freq;
  freqElem.innerHTML = 'Frequency: ' + freq + 'Hz';
}

function setHarmonic(base, overtone) {
  if (!overtone) {
    if (!overtoneCache) {
      overtoneCache = Math.floor(Math.random() * 5) + 1;
    }
    overtone = overtoneCache;
  }
  else {
    overtoneCache = overtone;
  }
  base = sanitizeFreq(base);
  setFreq(base * overtone);
}

function setRandom() {
  setFreq(Math.rand() * 220500);
}

function init() {
  // lets be explicit about globals
  context = new (window.AudioContext || window.webkitAudioContext)();
  osc = context.createOscillator();
  setHarmonic(55);
  osc.connect(context.destination);
  osc.start();
}

module.exports = {
  init: init,
  base: setFreq,
  harmonic: setHarmonic,
  random: setRandom
};
