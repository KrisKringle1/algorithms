/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (initialNumber) {
  //break up initialNumberumber to count
  //loop through array
  //check if number is divisible by 1-9
  //if yes check to see if number is n
  //if fails - do nothing
  //if succeeds counter ++

  let notPrime = 0;
  let counter = 0;
  debugger;
  for (let oneThroughInitNum = 1; oneThroughInitNum < initialNumber; oneThroughInitNum++) {
    //loop that will check each number 1 through entered number called oneThroughInitNum

    for (let divider = 1; divider < oneThroughInitNum; divider++) {
      //loop that will check if the number oneThroughInit number is divisible by 1 through that number
      if (oneThroughInitNum % divider > 0 && oneThroughInitNum !== 1 && divider !== oneThroughInitNum) {
        //if the number reamaining is 0 and oneThroughInit Number is not 1 and divider is not oneThroughInitItem the number is not prime
        notPrime++
      } else {
        counter++
      }

    }

  }
  return counter;
}



