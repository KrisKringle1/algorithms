/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    const stock = prices[i];
    const nextStock = prices[i + 1];
    if (nextStock > stock) {
      total += nextStock - stock;
    }
  }

  return total;
};
