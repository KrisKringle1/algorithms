/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  //turn number into a string
  //while string.length > 1, add the 2 digets together
  //return the number
  let string = undefined
  debugger;

  let number = 5;

  function accumulator(string) {
    debugger;


    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        number = 0
      }

      number = number + parseInt(string[i])
    }
    string = number.toString()
  }

  while (number.toString() > 1) {
    if (string === undefined) {
      string = num.toString()
    }
    accumulator(string)
  }

  return number

};
