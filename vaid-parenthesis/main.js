/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const legend = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === "(" || curr === "{" || curr === "[") {
      stack.push(curr);
    } else if (legend[stack.pop()] !== curr) {
      return false;
    }
  }

  return stack.length === 0;
};
