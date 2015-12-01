// var _ = require('lodash')
var once = require('lodash/function/once');

var audio = require('./audio');
var socket = require('./socket');

var freqDiv = document.getElementById('freq');
var startDiv = document.getElementById('start');

if (window.location.pathname.split('/')[1] === 'gepetto') {
  require('./gepetto');
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

startDiv.onclick = once(init);
