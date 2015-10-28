// Start off by initializing a new context.
var context = new (window.AudioContext || window.webkitAudioContext)();

for (var i = 0; i < 10; i++) {
  var osc = context.createOscillator();
  osc.type = 'square';
  osc.frequency.value = 40 + i * 0.1111; // value in hertz
  osc.connect(context.destination);
  osc.start();
}
