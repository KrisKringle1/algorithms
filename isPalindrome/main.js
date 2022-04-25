/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let endIndex = s.length - 1;
  let forwards = "";
  let backwards = "";

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^ &*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  for (let i = 0; i < s.length; i++) {
    const start = s[i];
    const end = s[endIndex];

    if (!containsSpecialChars(start) && start !== " ") {
      forwards += start.toLowerCase();
    }

    if (!containsSpecialChars(end) && end !== " ") {
      backwards += end.toLowerCase();
    }

    endIndex--;
  }

  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }
};
