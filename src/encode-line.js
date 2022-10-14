const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let array = [];
  let count = 1;
  let i = 0;

  while (i < str.length) {
    array.push(str[i]);
    i++;

    const top = array[array.length - 1];

    if (top === str[i]) {
      count++;
    } else {
      result += `${count}${top}`;
      count = 1;
    }
  }

  return result.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
