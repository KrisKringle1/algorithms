/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //binary search
  //let high = nums.length
  //let low = 0
  //do
  //const mid = Math.floor(low + (high - low) /2 )
  //const value = nums[value]
  //if(value === target)
  //return mid
  //else if value > target
  //low  = mid + 1
  //else
  //high = mid
  //while (low < high)
  //return -1

  let high = nums.length;
  let low = 0;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (value < target) {
      low = mid + 1;
    } else {
      high = low;
    }
  } while (low < high);
  return -1;
};
