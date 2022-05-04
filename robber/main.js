/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //split arrays into evens and odds
  //reduce evens and odds and return the greater number
  if (nums.length === 1) {
    return nums[0];
  }
  const evens = [];
  const odds = [];
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (i % 2 === 0) {
      evens.push(curr);
    } else {
      odds.push(curr);
    }
  }

  const oddTotal = odds.reduce((prev, next) => next + prev);
  const evenTotal = evens.reduce((prev, next) => next + prev);

  if (evenTotal > oddTotal) {
    return evenTotal;
  } else {
    return oddTotal;
  }
};
