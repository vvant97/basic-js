const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const array = n.split('-');
  const regExp1 = new RegExp('[A-F]');
  const regExp2 = new RegExp('[0-9]');

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    for (let j = 0; j < currentValue.length; j++) {
      const currentValue = array[i][j];

      if (!currentValue.match(regExp1) && !currentValue.match(regExp2)) {
        return false;
      }
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
