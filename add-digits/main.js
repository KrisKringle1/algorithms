/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  //turn number into a string
  //while string.length > 1, add the 2 digets together
  //return the number
  const string = num.toString()
  let number = 10

  function addition() {
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        number = 0
      }
      number = number + parseInt(string[i])
    }
    return number
  }
  while (number >= 10) {
    addition()
  }

  return number
};
