var freq = require('./audio');
var io = require('socket.io-client/socket.io.js');

var freqElem = document.getElementById('freq');

freqElem.innerHTML = 'Frequency: ' + freq + 'Hz';

var socket = io();
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
