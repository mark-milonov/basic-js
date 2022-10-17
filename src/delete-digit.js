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
  let max = -Infinity
  n.toString().split("").forEach((_, i, arr) => {
    let digit = +arr.filter((_, ind) => ind != i).join("")
    if (digit > max) max = digit
  })
  return max
}

module.exports = {
  deleteDigit
};
