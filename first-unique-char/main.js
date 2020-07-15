/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  debugger;
  if (!s) {
    return -1
  }
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }

  return -1
};
