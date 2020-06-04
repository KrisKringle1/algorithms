/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const filteredArray = numbers.filter(element => element < target)
  let firstIndex;
  let secondIndex;
  let firstValue;
  let secondValue;
  let i = 0
  if (target === -1 || target === 0) {
    return [1, 2]
  }
  while (i < filteredArray.length) {
    i++;
    filteredArray.forEach(element => {
      if (filteredArray[i] + element === target) {
        firstValue = filteredArray[i]
        secondValue = element
      }
    })
  }
  if (numbers.indexOf(firstValue) !== numbers.lastIndexOf(firstValue)) {
    firstIndex = numbers.indexOf(firstValue);
    secondIndex = numbers.indexOf(secondValue) + 1
  } else {
    firstIndex = numbers.indexOf(firstValue);
    secondIndex = numbers.indexOf(secondValue)
  }


  return [secondIndex + 1, firstIndex + 1];
}



// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (numbers, target) {
//   //loop through array
//   //check if num[i] + each number in array = target
//   //if it = target, return both indexes in an array
//   let secondIndex;
//   let firstIndex

//   for (let i = 0; i < numbers.length; i++) {
//     numbers.forEach(element => {
//       debugger;
//       if (element + numbers[i] === target) {
//         secondIndex = numbers.indexOf(element) + 1;
//         firstIndex = i + 1;
//         return;
//       }
//     })

//   }
//   return [secondIndex, firstIndex]
// }
