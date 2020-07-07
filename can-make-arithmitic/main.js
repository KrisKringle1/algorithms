/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (array) {
  //loop through array
  //check if array at i + 1 is + or - 2
  //while it does, continue, if ot doesnt, return false

  let i = 0
  if (array[i + 1] > array[i]) {
    while (i < array.length) {

      if (array[i + 1] - array[i] !== 2) {
        return false
      }

      i++
    }
    return true
  }

};
