/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //convert number to string
  //loop through string
  //slice off last element of string
  //append to string
  //parseInt string
  //if negative number return false
  //if input ends in 0 return false
  if (Math.sign(x) === -1 || -0) {
    return false;
  }

  const numToString = x.toString();
  let reverseString = ""
  let stringLength = numToString.length;
  let stringLengthMinusOne = numToString.length - 1;
  for (let i = 0; i < numToString.length; i++) {
    if (numToString[stringLength] === 0) {
      return false
    }
    reverseString += numToString.splice(stringLengthMinusOne, stringLength);
    stringLength--;
    stringLengthMinusOne--;

  }

  return parseInt(reverseString)


};
