/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let end = 0; end < s.length; end++) {}
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
