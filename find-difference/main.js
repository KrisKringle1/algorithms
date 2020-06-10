/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  //create a while loop
  //while s.includes(t[i]) i ++
  //return t[i]
  let i = 0;
  while (s.includes(t[i])) {
    i++
  }
  if (!t[i]) {

    for (let i = 0; i < t.length; i++) {
      if (t.indexOf(t[i]) !== t.lastIndexOf(t[i])) {
        return t[i]
      }
    }

  }
  return t[i];
};


var eachLetter = function (string, letter) {

  const seen = {}
  for (let i = 0; i < string.length; i++) {
    debugger;
    if (!seen[string[i]]) {

      seen[string[i]] = 1
    } else {
      seen[string[i]] += 1
    }
  }
  console.log(seen);
}

var count = function (string) {
  for (let i = 0; i < string.length; i++) {
    eachLetter(string, string[i])

  }
}
