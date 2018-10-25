const MIDIUtils = require('midiutils');

function nameToFreq(name) {
  return MIDIUtils.noteNumberToFrequency(
    MIDIUtils.noteNameToNoteNumber(name)
  );
}

function sanitizeFreq(freq) {
  // Allow us to pass note names
  if (typeof freq === 'string') {
    freq = nameToFreq(freq);
  }
  return freq;
}

module.exports = sanitizeFreq;
