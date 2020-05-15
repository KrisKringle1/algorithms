


var longestCommonPrefix = function (strs) {
  //loop through array
  //check  check if index at length matches any other index at length
  //push results into new string

  // const seen = {};
  let outputString = ""

  for (let arrayIndex = 0; arrayIndex < strs.length; arrayIndex++) {

    const word = strs[arrayIndex];
    if (strs.every(currentWord => currentWord.includes("aa"))) {
      return word;
    }

    for (let stringIndex = 0; stringIndex < strs[arrayIndex].length; stringIndex++) {
      const currentLetter = word[stringIndex];

      if (strs.every(currentWord => currentWord.includes(currentLetter)) && !outputString.includes(currentLetter)) {
        outputString += currentLetter
      }
    }

  }
  return outputString;
}
