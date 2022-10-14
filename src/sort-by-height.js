const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sorted = [];

  arr = arr.map(e => {
    e = String(e);

    if (e !== '-1') {
      sorted.push(e);
      e = e.replace(e, '*');
    }

    return e;
  });

  sorted = sorted.sort((a, b) => +a - +b);

  arr = arr.map(e => {
    if (e !== '-1') {
      e = e.replace(e, sorted[0]);
      sorted.splice(0, 1);
    }

    return +e;
  });

  return arr;
}

module.exports = {
  sortByHeight
};
