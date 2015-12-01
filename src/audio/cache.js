var cache = {
  overtone: Math.floor(Math.random() * 5) + 1,
  offsetCache: Math.floor(Math.random() - 0.5) + 10,
  context: null,
  osc: null
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
