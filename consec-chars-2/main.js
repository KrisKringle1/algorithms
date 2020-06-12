var findMaxConsecutiveOnes = function (s) {
  let i = 0
  let counter = 0;
  let secondCounter = 0
  debugger;
  if (!s.includes(1)) {
    return 0
  }

  if (s.indexOf(1) === s.lastIndexOf(1)) {
    return 1
  }
  while (i < s.length) {

    if (s[i] === s[i + 1] && s[i] === 1 && s[i + 1] === 1) {
      if (!counter) {
        counter = 1
      }
      counter++;
    }

    if (s[i] !== s[i + 1]) {
      if (!secondCounter) {
        secondCounter = counter;

      }

      counter = 0;
    }

    if (counter > secondCounter) {
      secondCounter = counter
    }
    i++
  }
  if (!secondCounter && s.includes(1)) {
    secondCounter = 1
  }
  return secondCounter
}
