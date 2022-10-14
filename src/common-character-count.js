const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function countValues(str) {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
      const currentValue = str[i];
      obj[currentValue] = (obj[currentValue] || 0) + 1;
    }

    return obj;
  }

  const obj1 = countValues(s1);
  const obj2 = countValues(s2);

  let result = 0;

  for (let key in obj1) {
    if (obj1[key] && obj2[key]) {
      if (obj1[key] < obj2[key]) {
        result += obj1[key];
      } else {
        result += obj2[key];
      }
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
