const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const CONTROL_SEQUENCES = {
    arrayCopy: [...arr],
    '--discard-next': function(index) {
      if (!(index === this.arrayCopy.length - 1)) {
        this.arrayCopy.splice(index, 2, '*', '*');
      } else {
        this.arrayCopy.splice(index, 1, '*');
      }
      
      return this.arrayCopy;
    },
    '--discard-prev': function(index) {
      if (!(index === 0)) {
        this.arrayCopy.splice(index - 1, 2, '*', '*');
      } else {
        this.arrayCopy.splice(index, 1, '*')
      }
      
      return this.arrayCopy;
    },
    '--double-next': function(index) {
      if (!(index === this.arrayCopy.length - 1)) {
        this.arrayCopy.splice(index, 1, this.arrayCopy[index + 1]);
      } else {
        this.arrayCopy.splice(index, 1, '*')
      }
      
      return this.arrayCopy;
    },
    '--double-prev': function(index) {
      if (!(index === 0)) {
        this.arrayCopy.splice(index, 1, this.arrayCopy[index - 1]);
      } else {
        this.arrayCopy.splice(index, 1, '*')
      }
      
      return this.arrayCopy;
    },
    cleanArray() {
      return this.arrayCopy.filter(e => e !== '*');
    }
  }

  const keys = Object.keys(CONTROL_SEQUENCES);

  arr.forEach((e, i) => {
    if (keys.includes(e)) {
      CONTROL_SEQUENCES[e](i);
    }
  });

  return CONTROL_SEQUENCES.cleanArray();
}

module.exports = {
  transform
};
