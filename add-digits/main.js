/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  //turn number into a string
  //while string.length > 1, add the 2 digets together
  //return the number
  const string = num.toString()
  let number = 0

  for (let i = 0; i < string.length; i++) {
    number = number + string[i]
  }

};
