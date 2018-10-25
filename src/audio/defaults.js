const harmonics = 7;
const range = 3; 
const overtone = Math.floor(Math.random() * harmonics) + 2;

module.exports = {
  harmonics,
  range,
  mod,
  overtone
};
