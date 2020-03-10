

const takeUntil = (arr, cb) => {
  const result = [];
  if (!cb) {
    return cb;
  }
  
  for (const num of arr) {
    if (!cb(num)) {
      result.push(num);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;
