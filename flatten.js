const flatten = function(arr) {
  let result = [];

  arr.forEach(el => {
    if (Array.isArray(el)) {
      flatten(el).forEach(item => {
        result.push(item);
      });
    } else {
      result.push(el);
    }
  });
  return result;
};

module.exports = flatten;
