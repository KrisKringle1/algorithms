


var longestCommonPrefix = function (strs) {  // n(m)
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {  // n
    const currentWord = strs[i];
    while (currentWord.indexOf(prefix) !== 0) {    // m
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }

  return prefix;

};
