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
  let prev;
  let arr = [];
  let i = 0;
  str.split('').forEach(item => {
      if (prev == undefined) { arr.push([1, item])} else if (prev == item) {arr[i][0] = arr[i][0] + 1 } else {
          arr.push([1, item]);
          i = i +1;
      }
      prev = item;
  })
  return arr.map(a=>{if (a[0] > 1) { return a.join('')} else {return a[1]}}).join('')
}

module.exports = {
  encodeLine
};
