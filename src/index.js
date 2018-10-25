// var _ = require('lodash')
const once = require('lodash/fp/once');

const audio = require('./audio');
const socket = require('./socket');

const freqDiv = document.getElementById('freq');
const startDiv = document.getElementById('start');

require('konami-komando')({
  once: true,
  useCapture: true,
  callback: () => {
    require('./gepetto');
  }
});

if (window.location.pathname.split('/')[1] === 'gepetto') {
  require('./gepetto');
}

function wireSocketIO() {
  socket.on('harmonic', audio.harmonic);
  socket.on('modulation', audio.modulation);
  socket.on('noise', audio.noise);
  socket.on('volume', audio.volume);
}

function setupUI() {
  freqDiv.style.display = 'block';
  startDiv.style.display = 'none';
}

function init() {
  wireSocketIO();
  setupUI();
  audio.init();
}

startDiv.onclick = once(init);
