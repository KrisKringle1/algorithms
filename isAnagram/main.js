/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const stringObj = {};
  const testObj = {};

  for (let i = 0; i < s.length; i++) {
    const sCurr = s[i];
    const tCurr = t[i];

    if (!stringObj[sCurr]) {
      stringObj[sCurr] = 1;
    } else {
      stringObj[sCurr]++;
    }

    if (!testObj[tCurr]) {
      testObj[tCurr] = 1;
    } else {
      testObj[tCurr]++;
    }
  }

  for (const key in stringObj) {
    const stringValue = stringObj[key];
    const testValue = testObj[key];

    if (stringValue !== testValue) {
      return false;
    }
  }
  return true;
};
