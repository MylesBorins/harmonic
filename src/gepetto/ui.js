var socket = require('../socket');

var startElem = document.getElementById('start');
var freqElem = document.getElementById('freq');
var secretElem = document.getElementById('secret');
var playElem = document.getElementById('play');
var muteElem = document.getElementById('mute');

var playing = false;
var muted = false;

var toggleCallback = function () {};
var muteCallback = function () {};

freqElem.style.display = 'none';
startElem.style.display = 'none';
secretElem.style.display = 'block';

function setToggleCallback(cb) {
  toggleCallback = cb;
}

function setMuteCallback(cb) {
  pauseCallback = cb;
}

function togglePlay() {
  playing = !playing;
  var className = playing ? 'icon-pause' : 'icon-play';
  playElem.className = className;
  toggleCallback(playing);
}

function toggleMute() {
  muted = !muted;
  var className = muted ? 'icon-volume-mute2' : 'icon-volume-mute';
  muteElem.className = className;
  muteCallback(muted);
}

playElem.onclick = togglePlay;

muteElem.onclick = toggleMute;

module.exports = {
  togglePlay: togglePlay,
  toggleMute: toggleMute,
  setToggleCallback: setToggleCallback,
  setMuteCallback: setMuteCallback
}