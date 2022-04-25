/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //find the lowest number in the array
  //after finding the lowest number of the array, return its index
  //start a 2nd loop after that index and find the highest number
  //return the difference between the highest and lowest values

  //constraints
  //if there are no profits available (every day after lowest price is lower or non value) return 0
  let lowestPrice;
  let lowestPriceIndex;
  let highestNumber;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (!lowestPrice) {
      lowestPrice = price;
      lowestPriceIndex = i;
    }

    if (price < lowestPrice) {
      lowestPrice = price;
      lowestPriceIndex = i;
    }
  }

  for (lowestPriceIndex < prices.length; lowestPriceIndex++; ) {
    let currPrice = prices[lowestPriceIndex];
    if (!highestNumber) {
      highestNumber = currPrice;
    }
    if (currPrice > highestNumber) {
      highestNumber = currPrice;
    }
  }
};
