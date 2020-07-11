/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  //loop through queries
  //for each query, if query is included in wordlist, push it to an array
  //if its not, push an empty string
  //return array

  const emptyArray = []

  queries.forEach(element => {
    if (emptyArray.includes(element)) {
      return
    }
    if (wordlist.includes(element)) {
      emptyArray.push(element)
    } else {
      emptyArray.push("")
    }
  })
  return emptyArray
};
