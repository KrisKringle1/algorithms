/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  //loop through array and assign the 2 largest elements to variables
  //assign their indexes to their variables as well
  //splice out the 2 numbers out of the array
  //if > 0, push to the array
  //while array.length > 1 continue
  debugger;

  let firstNumber = stones[0]
  let secondNumber = stones[1]
  let firstIndex = stones.indexOf(firstNumber)
  let secondIndex = stones.indexOf(secondNumber)

  function helper(array) {
    for (let i = 0; i < array.length; i++) {
      debugger;
      if (array[i] >= firstNumber) {
        secondNumber = firstNumber;
        firstNumber = array[i]

      }

      if (array[i] >= secondNumber) {
        secondNumber = array[i]

      }
    }
    firstIndex = array.indexOf(firstNumber)
    secondIndex = array.indexOf(secondNumber)

    array.splice(firstIndex, 1)
    array.splice(secondIndex, 1)
    let difference = firstNumber - secondNumber
    if (firstNumber - secondNumber !== 0) {
      array.push(difference)
    }
  }

  while (stones.length > 1) {
    helper(stones)
  }
  if (!stones) {
    return []
  }
  return stones
};
