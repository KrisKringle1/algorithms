/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //break up each word with .split into an arrat
  //loop through array
  //push into empty string backwards
  //return empty string
  let emptyString = ""
  const reverse = (string) => {
    for (let i = string.length - 1; i > -1; i--) {
      emptyString += string[i]
    }
    return emptyString;
  }

  const array = s.split(' ');
  for (let i = 0; i < array.length; i++) {
    reverse(array[i])
    if (i < array.length - 1) {
      emptyString += " "
    }

  }
  return emptyString;
};
