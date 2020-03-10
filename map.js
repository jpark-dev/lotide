const map = (array, callback) => {
  
  const results = [];
  
  for (const elem of array) {
    results.push(callback(elem));
  }
  
  return results;
};

module.exports = map;
