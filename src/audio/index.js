var cache = require('./cache');
var sanitizeFreq = require('./sanitize-freq');

var freqElem = document.getElementById('freq');

function setFreq(freq) {
  var osc = cache.get('osc');
  freq = sanitizeFreq(freq);
  osc.frequency.value = freq;
  freqElem.innerHTML = 'Frequency: ' + freq + 'Hz';
}

function setHarmonic(base) {
  var overtone = cache.get('overtone');
  base = sanitizeFreq(base);
  setFreq(base * overtone);
}

function setNoise(ceil) {
  if (!ceil) {
    ceil = 1000;
  }
  setFreq(Math.random() * ceil);
}

function setModulation(base) {
  var mod = Math.floor((Math.random() - 0.5) * 2 * 3);
  base = sanitizeFreq(base);
  setFreq(base + mod);
}

function volume(value) {
  var gain = cache.get('gain');
  gain.gain.value = value;
}

function init() {
  // lets be explicit about globals
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var osc = context.createOscillator();
  var gain = context.createGain();
  cache.set('context', context);
  cache.set('osc', osc);
  cache.set('gain', gain);
  setHarmonic(55);
  volume(1);
  osc.connect(gain);
  gain.connect(context.destination);
  osc.start();
}

module.exports = {
  init: init,
  freq: setFreq,
  harmonic: setHarmonic,
  noise: setNoise,
  modulation: setModulation,
  volume: volume
};
