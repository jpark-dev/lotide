const countLetters = function(str) {
  if (typeof str !== 'string') {
    return str;
  }

  let count = {};

  for (const char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

module.exports = countLetters;
