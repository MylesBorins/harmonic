const sanitizeFreq = require('./sanitize-freq');

const overtone = Math.floor(Math.random() * 7) + 2;

const freqElem = document.getElementById('freq');

let context, osc, gain;

function freq(freq) {
  freq = sanitizeFreq(freq);
  osc.frequency.value = freq;
  freqElem.innerHTML = `Frequency: ${freq} Hz`;
}

function harmonic(base) {
  base = sanitizeFreq(base);
  freq(base * overtone);
}

function noise(ceil = 1000) {
  freq(Math.random() * ceil);
}

function modulation(base) {
  const mod = Math.floor((Math.random() - 0.5) * 2 * 3);
  base = sanitizeFreq(base);
  freq(base + mod);
}

function volume(value) {
  gain.gain.value = value;
}

function init() {
  // lets be explicit about globals
  context = new (window.AudioContext || window.webkitAudioContext)();
  osc = context.createOscillator();
  gain = context.createGain();

  harmonic(55);
  volume(1);
  osc.connect(gain);
  gain.connect(context.destination);
  osc.start();
}

module.exports = {
  init,
  freq,
  harmonic,
  noise,
  modulation,
  volume
};
