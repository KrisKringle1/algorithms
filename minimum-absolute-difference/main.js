/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (array) {
  //sort array
  //find the difference of array[1] - array[0]
  //loop through sorted array and return each pair that has the correct difference

  const sortedArray = array.sort((a, b) => a - b)
  let difference = null;
  for (let i = 0; i < sortedArray.length; i++) {

    if (!difference) {
      difference = sortedArray[i + 1] - sortedArray[i];
    } else {
      if (difference > sortedArray[i + 1] - sortedArray[i]) {
        difference = sortedArray[i + 1] - sortedArray[i]
      }
    }

  }
  const returnArray = []

  for (let i = 0; i < sortedArray.length; i++) {

    if (sortedArray[i + 1] - sortedArray[i] === difference) {
      let newArray = [sortedArray[i], sortedArray[i + 1]]
      returnArray.push(newArray)

    }
  }
  return returnArray

};
