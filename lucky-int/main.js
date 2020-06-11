/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  //loop through array
  //check if indexof is also last index of
  //if it isnt, make it the lucky number
  //if the next lucky number is larger, that is the returned number
  let luckyNum = -1;

  for (let i = 0; i < arr.length; i++) {

    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      if (!luckyNum) {
        luckyNum = arr[i]
      }


      if (luckyNum && arr[i] > luckyNum) {
        luckyNum = arr[i];
      }
    }

  }
  return luckyNum
};
