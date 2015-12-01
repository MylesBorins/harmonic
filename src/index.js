var io = require('socket.io-client/socket.io.js');

var freq = require('./audio');
var stairway = require('./stairway');

var index = 0;

var socket = io();

var master = !!document.getElementById('master');

var freqDiv = document.getElementById('freq');
var startDiv = document.getElementById('start');

function update (value) {
  socket.emit('update', value);
}

function next() {
  if (index > stairway.length - 1) {
    index = 0;
  }
  update(stairway[index]);
  index++;
}

function play() {
  next();
  if (index !== stairway.length - 1) {
    window.setTimeout(play, 500);
  }
}

if (master) {
  global.update = update;
  global.next = next;
  global.play = play;
}

socket.on('note', freq.harmonic);

startDiv.onclick = function () {
  freqDiv.style.display = 'block';
  startDiv.style.display = 'none';
  freq.init();
}
