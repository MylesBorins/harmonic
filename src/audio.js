// panner taken from https://developer.mozilla.org/en-US/docs/Web/API/PannerNode

var context = new (window.AudioContext || window.webkitAudioContext)();
var panner = context.createPanner();
panner.panningModel = 'HRTF';
panner.distanceModel = 'inverse';
panner.refDistance = 1;
panner.maxDistance = 10000;
panner.rolloffFactor = 1;
panner.coneInnerAngle = 360;
panner.coneOuterAngle = 0;
panner.coneOuterGain = 1;
panner.setOrientation(0,0,1);

var listener = context.listener;
listener.setOrientation(0,0,-1,0,1,0);

// set up listener and panner position information
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var xPos = WIDTH/2;
var yPos = HEIGHT/2;
var zPos = 295;

// listener will always be in the same place for this demo
listener.setPosition(xPos,yPos,300);

// panner will move as the boombox graphic moves around on the screen
function positionPanner(x, y, z) {
  panner.setPosition(x, y, z);
}

positionPanner(xPos, yPos, zPos);

window.positionPanner = positionPanner;

panner.connect(context.destination);

for (var i = 0; i < 10; i++) {
  var osc = context.createOscillator();
  osc.type = 'square';
  osc.frequency.value = 40 + i * 0.1111; // value in hertz
  osc.connect(panner);
  osc.start();
}
