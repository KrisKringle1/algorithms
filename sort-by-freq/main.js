/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (string) {
  //create an object
  //loop through string and count how many times each value has by putting it into an object
  //use a for in loop to loop through the array to create a new string
  //return the string
  const setObj = {}
  for (let i = 0; i < string.length; i++) {
    const letter = string[i]
    if (!setObj[letter]) {
      setObj[letter] = 1
    } else {
      setObj[letter]++
    }

  }

  const values = Object.values(setObj)
  const keys = Object.keys(setObj)
  const sort = values.sort()
  let i = 0
  let j = 0

  for (i < sort.length; i++; j++) {
    if (sortObj)
 }



};
