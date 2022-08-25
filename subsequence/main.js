/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //loop through each character in string and check if its included in t
  //if it isnt, return false
  //if it is, get the index of that character
  //continue the loop
  //if the next character is in the string and the index is greater than the 1st index, continue
  //reset the index variable to be the newest character,
  //repeat
  let index;
  let string = t;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (string.includes(char)) {
      if (!index) {
        index = t.indexOf(char);
        string = string.replace(char, "_");
        console.log("char ", char);
        console.log("index ", index);
        console.log("string ", string);
        continue;
      }

      if (index > t.indexOf(char)) {
        console.log("char ", char);
        console.log("index ", index);
        console.log("index of ", t.indexOf(char));
        console.log("string ", string);
        return false;
      } else {
        index = t.indexOf(char);
        string = string.replace(char, "_");
        console.log(string);
      }
    } else {
      return false;
    }
  }

  return true;
};
