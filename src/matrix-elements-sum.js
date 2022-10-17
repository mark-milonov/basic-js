const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const val = matrix[0].map((_, i) => matrix.map((el) => el[i]))
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    for (let j = 0; j < val[i].length; j++) {
      if (val[i][j] === 0) break
      sum += val[i][j]
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
