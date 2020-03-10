const findKey = (obj, cb) => {
  let result = "";

  for (const el in obj) {
    if (cb(obj[el])) {
      result = el;
      break;
    }
  }
  return result;
};

module.exports = findKey;
