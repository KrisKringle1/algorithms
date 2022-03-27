/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let end = s.length - 1;
  let start = 0;
  while (start !== end && end > start) {
    console.log("loop");
    const lastLetter = s[end];
    const startLetter = s[start];
    s[end] = startLetter;
    s[start] = lastLetter;
    end--;
    start++;
    console.log("end ", end, " start ", start);
  }
  let lastStart = s[start];
  const lastEnd = s[end];
  s[start] = lastEnd;
  s[end] = lastStart;
  return s;
};
