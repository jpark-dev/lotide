const letterPositions = function(sentence) {
  const results = {};
  let cnt = 0;
  for (const char of sentence) {
    if (results[char]) {
      results[char].push(cnt);
    } else {
      results[char] = [cnt];
    }
    cnt++;
  }
  return results;
};

module.exports = letterPositions;
