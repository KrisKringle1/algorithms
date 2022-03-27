/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //find the length of the haystack
  //loop through the haystack using needle.length as its incrementor
  //compare each letter in a row in order with the incrementing increse of haystack,
  //return the matching index of the first number when a match is found

  let string = "";
  let hIndex = 0;

  const subString = () => {
    for (let i = 0; i < needle.length; i++) {
      string += haystack[hIndex];
      hIndex++;
    }
  };

  while (hIndex < haystack.length && string !== needle) {
    if (haystack[hIndex] === needle[0]) {
      string = "";
      subString();
    } else {
      hIndex++;
    }
  }

  if (string === needle) {
    return (hIndex -= needle.length);
  } else {
    return -1;
  }
};
