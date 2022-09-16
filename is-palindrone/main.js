/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  //create a map
  //loop through the string and map all the values in each of the strings
  //while map[value > 1] add 2 to final count
  //return final count + 1

  const map = {};
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (!map[curr]) {
      map[curr] = 1;
    } else {
      map[curr]++;
    }
  }

  for (const key in map) {
    while (map[key] > 1) {
      max += 2;
      map[key] -= 2;
    }
  }

  const values = Object.values(map);

  for (let i = 0; i < values.length; i++) {
    const curr = values[i];
    if (curr) {
      return max + 1;
    }
  }
  return max;
};
