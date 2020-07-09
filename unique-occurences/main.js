/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (array) {
  //create set object
  //assign each number a value in the object
  //for each value set, increase value ++
  //create an array with all of the values in teh object
  //if any of them dont have a unique index, return false else return true
  const setObj = {}

  for (let i = 0; i < array.length; i++) {
    if (!setObj[array[i]]) {
      setObj[array[i]] = 1
    } else {
      setObj[array[i]]++
    }
  }

  const values = Object.values(setObj)

  for (let i = 0; i < values.length; i++) {
    const element = values[i]
    if (values.indexOf(element) !== values.lastIndexOf(element)) {
      return false
    }
  }
  return true;

};
