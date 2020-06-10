/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {

  var turnIntoObject = function (string) {

    const seen = {}
    for (let i = 0; i < string.length; i++) {

      if (!seen[string[i]]) {

        seen[string[i]] = 1
      } else {
        seen[string[i]] += 1
      }
    }
    return seen
  }


  const object1 = turnIntoObject(s);
  const object2 = turnIntoObject(t)

  for (const key in object2) {

    if (object2[key] !== object1[key]) {
      return key
    }
  }
};
