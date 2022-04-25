/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let num = "";

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (!num && curr === "-") {
      num += curr;
    }

    if (parseInt(curr)) {
      num += curr;
    }

    if (!num) {
      if (!parseInt(curr) && curr !== " ") {
        return 0;
      }
    }
  }

  return parseInt(num);
};
