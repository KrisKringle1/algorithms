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
  let counter = 1;
  for (let i = 0; i < numString.length; i++) {

    reverseString += numString.slice(numString.length - counter)

    counter++;

  }
  return reverseString;

};
