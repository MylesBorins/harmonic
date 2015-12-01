var _ = require('lodash');

var freq = require('./audio');
var stairway = require('./stairway');
var socket = require('./socket');

var index = 0;

var freqDiv = document.getElementById('freq');
var startDiv = document.getElementById('start');

var master = !!document.getElementById('master');

if (master) {
  require('./master');
}

function init () {
  socket.on('harmonic', freq.harmonic);
  freqDiv.style.display = 'block';
  startDiv.style.display = 'none';
  freq.init();
}

startDiv.onclick = _.once(init);
