/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  //loop through each character in nums
  //let firstNum = nums[i]
  //loop through each number
  //while nums[i] + 1 ===  nums[j]
  //continue
  //whne they dont, push them into a range
  //return the array of ranges
  let firstNum = null;
  let secondNum = null;
  const ranges = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    if (!firstNum) {
      firstNum = nums[i];
    }

    if (nums[i] + 1 !== nums[j]) {
      secondNum = nums[i];
      const rangeString = `${firstNum}->${secondNum}`;
      if (firstNum === secondNum) {
        ranges.push(firstNum.toString());
      } else {
        ranges.push(rangeString);
      }
      firstNum = null;
      secondNum = null;
    }
  }
  return ranges;
};
