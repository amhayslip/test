const findSum = function(array) {
  const sum = array.reduce(function(acc, i) {
    return acc + i;
  }, 0);

  return sum;
};

const removeParenth = function(str) {
  const first = str.split('(')[0];
  const last = str.split(')')[1];
  return first + last;
};
