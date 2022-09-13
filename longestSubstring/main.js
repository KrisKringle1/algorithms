/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const isUnique = (s) => {
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
      if (set.has(s[i])) {
        return false;
      }
      set.add(s[i]);
    }

    return true;
  };
  let max = 0;

  for (let begin = 0; begin < s.length; begin++) {
    for (let end = 0; end < s.length; end++) {
      const substring = s.substring(begin, end + 1);
      if (isUnique(substring)) {
        if (substring.length > max) {
          max = substring.length;
        }
      }
    }
  }
};

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   /*
//     define 2 string variable thats, first string second string
//     begin looping through s
//     if curr char is not in our first string variable

//     if cur char is in the string and the loop is still going
//     go through the same logic but start adding chars to the 2nd string

//     repeat logic, and delete string that is shorter
//     */

//   let firstString = "";
//   let buildFirst = true;
//   let buildSecond = true;
//   let secondString = "";

//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];

//     if (!firstString.includes(curr) && buildFirst) {
//       firstString += curr;
//     } else {
//       buildFirst = false;
//     }

//     if (!secondString.includes(curr) && buildSecond && !buildFirst) {
//       secondString += curr;
//     } else {
//       if (secondString.length > firstString.length) {
//         firstString = "";
//         buildFirst = true;
//       } else {
//         secondString = "";
//         buildSecond = true;
//       }
//     }
//   }
//   return secondString.length > firstString.length
//     ? secondString.length
//     : firstString.length;
// };
