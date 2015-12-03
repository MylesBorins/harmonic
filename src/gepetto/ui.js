var socket = require('../socket');

var startElem = document.getElementById('start');
var freqElem = document.getElementById('freq');
var secretElem = document.getElementById('secret');
var playElem = document.getElementById('play');
var muteElem = document.getElementById('mute');
var repeatElem = document.getElementById('repeat');
var sequenceElem = document.getElementById('sequence');
var intervalElem = document.getElementById('interval');

var playing = false;
var muted = false;
var repeating = false;

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

function toggleRepeat() {
  repeating = !repeating;
  var opacity = repeating ? 1 : 0.3;
  repeatElem.style.opacity = opacity;
  return repeating;
}

module.exports = {
  togglePlay: togglePlay,
  toggleMute: toggleMute,
  toggleRepeat: toggleRepeat,
  playElem: playElem,
  muteElem: muteElem,
  repeatElem: repeatElem,
  sequenceElem: sequenceElem,
  intervalElem: intervalElem
}