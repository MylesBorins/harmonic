var io = require('socket.io-client/socket.io.js');

var freq = require('./audio');

var socket = io();

var master = !!document.getElementById('master');

function update (value) {
  socket.emit('update', value);
}

if (master) {
  global.update = update;
}

socket.on('note', freq.update);
