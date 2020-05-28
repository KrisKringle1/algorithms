/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

  // const filteredArr = nums.filter((element, index, arr) => {
  //   debugger;
  //   return arr.indexOf(element) !== arr.lastIndexOf(element)
  // })

  // return filteredArr[0];

  let returnNumber = 0

  const mappedArray = nums.map(element => {
    let numIndex = nums.indexOf(element)
    if (numIndex !== nums.lastIndexOf(element)) {
      returnNumber = element
    }
  })
  return returnNumber;

};
