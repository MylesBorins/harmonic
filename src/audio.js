// panner taken from https://developer.mozilla.org/en-US/docs/Web/API/PannerNode

var context = new (window.AudioContext || window.webkitAudioContext)();

var base = 55;

var overtone = Math.floor(Math.random() * 15) + 1;

var freq = base * overtone;

var osc = context.createOscillator();

osc.frequency.value = freq;
osc.connect(context.destination);
osc.start();

module.exports =  freq;
