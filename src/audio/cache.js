const harmonics = 5;
const range = 3; 

var cache = {
  overtone: Math.floor(Math.random() * 5) + harmonics,
  mod: Math.floor((Math.random() - 0.5) * 2 * range),
  context: null,
  osc: null,
  gain: null
};

function get(name) {
  if (!cache[name]) {
    return false;
  }
  return cache[name];
}

function set(name, value) {
  cache[name] = value;
  return true;
}

module.exports = {
  get: get,
  set: set
};
