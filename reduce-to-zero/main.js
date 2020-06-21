/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (number) {
  let steps = 0
  while (number !== 0) {
    if (number % 2 === 0) {
      number = number / 2
      steps++
    } else {
      number = number - 1
      steps++;
    }


  }
  return steps

};
