// pair programming with Jas @J-sabharwal
const middle = function(arr) {
  let midIndex = Math.ceil(arr.length / 2 - 1);
  let result = [];

  if (arr.length === 1 || arr.length === 2) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i >= 2) {
      if (arr.length % 2 === 0) {
        result.push(arr[midIndex], arr[midIndex + 1]);
        break;

      } else {
        result.push(arr[midIndex]);
        break;
      }
    }

  }
  return result;

};

module.exports = middle;
