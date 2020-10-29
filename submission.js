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

const findFrequency = function(array) {
  const freqMap = array.reduce((acc, i) => {
    acc[i] = ++acc[i] || 1;

    return acc;
  }, {});

  let maxCount = 1;
  let maxItem;

  let minCount = 1;
  let minItem;

  Object.keys(freqMap).forEach(function(k) {
    const count = freqMap[k];

    if (count <= minCount) {
      minCount = count;
      minItem = k;
    }

    if (count >= maxCount) {
      maxCount = count;
      maxItem = k;
    }
  });

  return {
    most: maxItem,
    least: minItem,
  };
};
