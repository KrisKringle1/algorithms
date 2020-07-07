/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (array) {

  const sortedArray = array.sort()
  let i = 0
  const difference = sortedArray[1] - sortedArray[0]

  while (i < sortedArray.length) {
    if (sortedArray[i + 1] - sortedArray[i] !== difference) {
      return false
    }
    i++
  }
  return true
};
