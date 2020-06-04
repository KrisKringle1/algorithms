/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  //loop through array
  //check if num[i] + each number in array = target
  //if it = target, return both indexes in an array
  let secondIndex;
  let firstIndex

  for (let i = 0; i < numbers.length; i++) {
    numbers.forEach(element => {
      debugger;
      if (element + numbers[i] === target) {
        secondIndex = numbers.indexOf(element) + 1;
        firstIndex = i + 1;
        return;
      }
    })

  }
  return [secondIndex, firstIndex]
}
