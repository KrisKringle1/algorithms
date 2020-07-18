/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  //turn number into a string
  //while string.length > 1, add the 2 digets together
  //return the number
  let string = num.toString()
  debugger;

  let number = 0

  function accumulator(string) {
    debugger;
    for (let i = 0; i < string.length; i++) {
      number = number + parseInt(string[i])
    }
  }

  while (number.toString() > 1) {
    debugger;
    accumulator(string)
  }

  return number

};
