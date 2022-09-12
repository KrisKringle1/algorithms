/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let min = null;

  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];

    if (curr < min || min === null) {
      min = curr;
    } else {
      max = Math.max(max, curr - min);
    }
  }
  return max;
};
