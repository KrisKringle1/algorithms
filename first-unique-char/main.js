/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (!s || s.length === 2) {
    return -1
  }
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
};
