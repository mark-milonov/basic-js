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
  options.separator = new Set(Object.keys(options)).has('separator') ? options.separator : '+'
  options.additionSeparator = new Set(Object.keys(options)).has('additionSeparator') ? options.additionSeparator : '|'
  options.additionRepeatTimes = new Set(Object.keys(options)).has('additionRepeatTimes') ? options.additionRepeatTimes : 1
  options.repeatTimes = new Set(Object.keys(options)).has('repeatTimes') ? options.repeatTimes : 1
  options.addition = new Set(Object.keys(options)).has('addition') ? options.addition : ''
  let res = ''
  let addStr = ''
  
  for (let i = 0; i < options.additionRepeatTimes; i++){
    addStr += i > 0 ? options.additionSeparator + options.addition : options.addition
  }
  for (let i = 0; i < options.repeatTimes; i++){
    res += i > 0 ? options.separator + str + addStr : str + addStr
  } 
  return res;
}

module.exports = {
  repeater
};
