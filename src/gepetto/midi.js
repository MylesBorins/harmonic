const webmidi = require('webmidi');
const {noteNumberToFrequency} = require('midiutils');
var socket = require('../socket');

function handleNote(e) {
  socket.emit('update', {
    type: 'harmonic',
    value: noteNumberToFrequency(e.note.number)
  });
}

webmidi.enable(() => {
  var input = webmidi.getInputByName('Da Bus');
  if (input)
    input.addListener('noteon', 'all', handleNote);
});
