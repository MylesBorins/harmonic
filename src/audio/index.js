var cache = require('./cache');
var sanitizeFreq = require('./sanitizeFreq');

var freqElem = document.getElementById('freq');

function setFreq(freq) {
  var osc = cache.get('osc');
  freq = sanitizeFreq(freq);
  osc.frequency.value = freq;
  freqElem.innerHTML = 'Frequency: ' + freq + 'Hz';
}

function setHarmonic(base, overtone) {
  if (!overtone) {
    overtone = cache.get('overtone');
  }
  else {
    cache.set('overtone', overtone);
  }
  base = sanitizeFreq(base);
  setFreq(base * overtone);
}

function setRandom() {
  setFreq(Math.rand() * 220500);
}

function init() {
  // lets be explicit about globals
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var osc = context.createOscillator();
  cache.set('context', context);
  cache.set('osc', osc);
  setHarmonic(55);
  osc.connect(context.destination);
  osc.start();
}

module.exports = {
  init: init,
  freq: setFreq,
  harmonic: setHarmonic,
  random: setRandom
};
