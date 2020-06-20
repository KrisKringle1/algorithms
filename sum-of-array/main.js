/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const emptyArray = []
  const returnArray = []


  nums.forEach(element => {
    emptyArray.push(element);
    const newValue = emptyArray.reduce(reducer)
    returnArray.push(newValue)

  })

  return returnArray
}
