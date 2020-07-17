/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (array) {
  //loop through array
  //if array[i] === 0,
  //array.pop()
  //array.splice(i, 0, 0 )
  //return array

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.pop()
      array.splice(i, 0, 0)
      i++
    }
  }

  return array;
};
