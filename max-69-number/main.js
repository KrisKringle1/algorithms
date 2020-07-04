/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  //convert number to string
  //loop through string   //while i is a 9 i ++
  //when i is a 6 change to a 9
  //convert back to number

  //return value

  let string = num + ""
  let array = []
  let i = 0
  let k = 0
  let hasSwapped = false
  let returnString = ""

  while (i < string.length) {
    array.push(string[i])
    i++
  }

  while (k < array.length) {
    if (array[k] === "6" && hasSwapped === false) {
      array[k] = "9"
      hasSwapped = true
    }


    returnString += array[k]
    k++


  }

  return parseInt(returnString)


};
