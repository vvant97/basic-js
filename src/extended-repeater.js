const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  const defaultOptions = {
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|',
  }
  const STRING_OPTIONS = Object.assign(defaultOptions, options)
  const {
    repeatTimes, 
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = STRING_OPTIONS;

  let additionString = addition;
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    additionString += `${additionSeparator}${addition}`;
  }

  let string = str + additionString;
  str = string;
  for (let i = 0; i < repeatTimes - 1; i++) {
    string += `${separator}${str}`;
  }

  return string;
}

module.exports = {
  repeater
};
