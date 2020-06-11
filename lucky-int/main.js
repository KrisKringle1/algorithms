/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  //loop through array
  //put each element into an object
  //count each element in object
  //the object that has the same key value paring gets returned

  const seen = {}
  let luckyNum = null;

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = 1
    } else {
      seen[arr[i]]++
    }
  }

  for (const key in seen) {
    let numberKey = parseFloat(key)

    if (numberKey === seen[key]) {
      luckyNum = numberKey
    }
  }

  if (luckyNum === null) {
    luckyNum = -1
  }

  return luckyNum

};
