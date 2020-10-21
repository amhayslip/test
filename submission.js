const { stringify } = require("querystring");

const findSum = function (array) {
  const sum = array.reduce(function (acc, i) {
    return acc + i
  }, 0)

  return sum
};

const returnString = function (str) {
  return str
};