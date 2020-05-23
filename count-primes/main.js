/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (initialNumber) {
  let counter = 0
  function isPrime(number) {

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }

    }
    return true;
  }


  for (let i = 0; i <= initialNumber; i++) {
    debugger;
    if (isPrime(i)) {
      counter++
    }
  }

  return counter;
}
