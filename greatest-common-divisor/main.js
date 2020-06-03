/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let checkingString = str2
  let index = str2.length - 1
  if (str1.includes(str2)) {
    return str2;
  }
  while (str1.includes(checkingString) === false) {
    checkingString = checkingString.slice(index, 1);
    index--;

    if (checkingString.length === 0) {
      return ""
    }
  }
  return checkingString;
};
