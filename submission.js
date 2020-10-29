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

const scoreScrabble = function(str) {
  const lowerCaseStr = str.toLowerCase();

  const scores = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z'],
  };

  let score = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    const strLetter = lowerCaseStr[i];

    for (prop in scores) {
      const lettArr = scores[prop];

      lettArr.forEach(function(letter) {
        if (strLetter === letter) {
          score += parseInt(prop);
        }
      });
    }
  }

  return score;
};

const isPalindrome = function(str) {
  const re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

  const lowRegStr = str.toLowerCase().replace(re, '');

  const reverseStr = lowRegStr
    .split('')
    .reverse()
    .join('');

  return reverseStr === lowRegStr;
};
