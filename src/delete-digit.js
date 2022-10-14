const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const numbers = [];

  for (let i = 0; i < str.length; i++) {
    const copy = str.replace(str[i], '');
    numbers.push(+copy);
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
