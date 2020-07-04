/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let counter = 0


  for (let i = 0; i < stones.length; i++) {
    const letter = stones[i]
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === letter) {
        counter++
      }
    }

  }

  return counter
};
