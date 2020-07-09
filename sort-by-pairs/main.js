/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (array) {
  //create empty array
  //first loop through the array and push all elements with %2 = 0
  //loop through a 2nd time and push all the odd elements into the array
  //return empty array
  const returnArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      returnArray.push(array[i])
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      returnArray.push(array[i])
    }
  }

  return returnArray

};
