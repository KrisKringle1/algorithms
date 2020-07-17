/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //convert number to string
  //loop through the string
  //for each element in the string, square it and add  it together and repeat
  //if outcome is 1 return true
  //if outcome is 0 return false

  const seen = {}

  while (n != 1) {
    if (n in seen) {
      return false
    } else {
      seen[n] = n
      n = n.toString().split('').reduce((acc, num) => acc + (num * num), 0)
    }
  }


  return true



};
