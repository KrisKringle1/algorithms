/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) {
    return false;
  }
  if (n % 3 === 0) {
    return true;
  } else {
    return false;
  }
};
