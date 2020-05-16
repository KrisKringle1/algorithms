/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (array) {
  //loop through array
  //pop off aray
  //push to new array
  let newArray = []
  debugger;
  while (array.length) {
    let character = array.pop();

    newArray.push(character)
  }
  return newArray

};
