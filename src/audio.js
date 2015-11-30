// panner taken from https://developer.mozilla.org/en-US/docs/Web/API/PannerNode

var context = new (window.AudioContext || window.webkitAudioContext)();

var freqElem = document.getElementById('freq');

var base = 55;
var overtone = Math.floor(Math.random() * 15) + 1;

var osc = context.createOscillator();

function updateFreq (newBase) {
  console.log('update');
  console.log(newBase);
  var freq = newBase * overtone;
  osc.frequency.value = freq;
  freqElem.innerHTML = 'Frequency: ' + freq + 'Hz';
}

updateFreq(base);
osc.connect(context.destination);
osc.start();

module.exports = {
  osc: osc,
  update: updateFreq
};
