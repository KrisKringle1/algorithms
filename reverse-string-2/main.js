/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let newIndexStart = k
  let reverseIndex = k - 1
  let kCopy = k
  let index = 0;
  let emptyString = ""
  let whenToReverse = 0
  if (s.length === 1 || k === 1) {
    return s;
  }
  if (k >= s.length) {
    reverseIndex = s.length - 1
    while (reverseIndex !== -1) {
      emptyString += s[reverseIndex];
      reverseIndex--;
    }
    return emptyString;
  }
  while (index < s.length) {

    if (kCopy) {
      if (s[reverseIndex] === undefined) {
        return emptyString += s[s.length - 1]
      }
      emptyString += s[reverseIndex]
      kCopy--;
      reverseIndex--;
      index++
    } else {
      emptyString += s[newIndexStart]
      newIndexStart++
      index++
      whenToReverse++;
    }
    if (whenToReverse === k) {
      whenToReverse = 0;
      reverseIndex = newIndexStart + 1;
      kCopy = k
      newIndexStart += k;
    }

  }
  return emptyString;
};
