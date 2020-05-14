/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //take in a number
  //convert to a string
  //loop through string
  //pop off each element in the string into new string
  //return parse int of new string
  const numString = x.toString()
  let reverseString = ""
  let numStringLength = numString.length;
  let numStringIndex = numString.length - 1

  if (numStringLength >= 10) {
    return 0
  }

  for (let i = 0; i < numString.length; i++) {
    reverseString += numString.slice(numStringIndex, numStringLength)
    numStringLength--;
    numStringIndex--;

  }

  if (numString.includes('-')) {
    return parseInt(reverseString) * -1;
  } else {
    return parseInt(reverseString);
  }



};
