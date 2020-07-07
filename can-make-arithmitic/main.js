/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (array) {

  const sort = array.sort();
  let i = 0;
  if (sort[i] === sort[i + 1]) {
    while (i < sort) {
      if (sort[i] !== sort[i + 1]) {
        return false
      }
      i++
    }
    return true
  }
  for (i < sort.length; i++) {

    if (sort[i + 1] - sort[i] !== 2 && sort[i + 1] !== undefined) {

      return false
    }
  }

  return true
};
