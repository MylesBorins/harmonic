const harmonics = 7;
const range = 3; 
const mod = Math.floor((Math.random() - 0.5) * 2 * 3);
const overtone = Math.floor(Math.random() * harmonics) + 2;

module.exports = {
  harmonics,
  range,
  mod,
  overtone
};
