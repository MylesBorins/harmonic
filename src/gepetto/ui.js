var socket = require('../socket');

var startElem = document.getElementById('start');
var freqElem = document.getElementById('freq');
var secretElem = document.getElementById('secret');
var playElem = document.getElementById('play');
var muteElem = document.getElementById('mute');

var playing = false;
var muted = false;

freqElem.style.display = 'none';
startElem.style.display = 'none';
secretElem.style.display = 'block';

function togglePlay() {
  playing = !playing;
  var className = playing ? 'icon-pause' : 'icon-play';
  playElem.className = className;
  return playing;
}

function toggleMute() {
  muted = !muted;
  var className = muted ? 'icon-volume-mute2' : 'icon-volume-mute';
  muteElem.className = className;
  return muted;
}

playElem.onclick = togglePlay;

muteElem.onclick = toggleMute;

module.exports = {
  togglePlay: togglePlay,
  toggleMute: toggleMute,
  playElem: playElem,
  muteElem: muteElem
}