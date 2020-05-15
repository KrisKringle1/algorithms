/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //loop through array
  //check  check if index at length matches any other index at length
  //push results into new string
  debugger;
  const seen = {};
  let outputString = ""

  for (let arrayIndex = 0; arrayIndex < strs.length; arrayIndex++) {

    const word = strs[arrayIndex];

    for (let stringIndex = 0; stringIndex < strs[arrayIndex].length; stringIndex++) {
      const currentLetter = word[stringIndex];

      if (seen[currentLetter] !== undefined) {
        seen[currentLetter]
      } else {
        outputString += currentLetter;
      }
    }
  }
  return outputString;
};
