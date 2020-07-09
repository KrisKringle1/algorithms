/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (array) {
  //create helper function that squares values
  //map through array and run helper function through it
  //sort array and return it

  function squared(number) {
    return number * number
  }

  const mappedArray = array.map(squared)
  console.log(mappedArray)

  const sorted = mappedArray.sort(function (a, b) { return a - b })

  return sorted;

};
