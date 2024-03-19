const convertToCelsius = function(f) {
  temp = (f - 32) * 5 / 9;
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(c) {
  deg = (c * 9 / 5) + 32;
  return Math.round(deg * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
