/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (array) {
  //loop through array to find the element that is not equal to its last element
  //assign that to a variabl
  //foreach item in array, if its equal to variable, counter ++
  //return counter

  let i = 0

  let repeatElement = null

  while (repeatElement === null) {
    debugger;
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      repeatElement = array[i]
    }

    i++
  }

  if (repeatElement === null) {
    return false
  } else {
    return repeatElement
  }
};
