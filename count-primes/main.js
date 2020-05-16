/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  //break up number to count
  //loop through array
  //check if number is divisible by 1-9
  //if yes check to see if number is n
  //if fails - do nothing
  //if succeeds counter ++

  let notPrime = 0;
  let counter = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      notPrime++;
    }
    counter++;
  }
  return counter;
}
