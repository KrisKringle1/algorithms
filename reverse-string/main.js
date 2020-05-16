/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (array) {
  let newString = "";
  debugger;
  const arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    let firstChar = array.shift()
    newString += firstChar

  }

  for (let j = newString.length - 1; j > -1; j--) {
    array.push(newString[j])
  }
  return array;
};
