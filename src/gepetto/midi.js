var webmidi = require('webmidi');
var toFreq = require('midiutils').noteNumberToFrequency;
var socket = require('../socket');

function handleNote(e) {
  socket.emit('update', {
    type: 'harmonic',
    value: toFreq(e.note.number)
  });
}

webmidi.enable(function (err) {
  var input = webmidi.getInputByName('Da Bus');
  if (input)
    input.addListener('noteon', 'all', handleNote);
});
