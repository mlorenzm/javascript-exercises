const convertToCelsius = function(n) {
  let result = (n - 32) * 0.5556
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(n) {
  let result = n * 1.8 + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
