/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const firstLetter = needle[0];

  for (let i = 0; i < haystack.length; i++) {
    const curr = haystack[i];

    if (curr === firstLetter) {
      let subString = "";
      for (let j = i; subString.length < needle.length; j++) {
        subString += haystack[j];
      }

      if (subString === needle) {
        return i;
      }
    }
  }
  return -1;
};
