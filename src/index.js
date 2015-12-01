var _ = require('lodash');

var audio = require('./audio');
var socket = require('./socket');

var freqDiv = document.getElementById('freq');
var startDiv = document.getElementById('start');

if (document.getElementById('master')) {
  require('./master');
}

function wireSocketIO() {
  socket.on('harmonic', audio.harmonic);
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

startDiv.onclick = _.once(init);
