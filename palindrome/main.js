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
  if (numToString[stringLength] === '0' && stringLength > 1) {
    return false
  }

  for (let i = 0; i < numToString.length; i++) {


    reverseString += numToString.slice(stringLengthMinusOne, stringLength);
    stringLength--;
    stringLengthMinusOne--;

  }
  if (parseInt(reverseString) === x) {
    return true;
  } else {
    return false;
  }



};
