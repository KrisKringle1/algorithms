/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var reverseStr = function (s, k) {
//   let newIndexStart = k
//   let reverseIndex = k - 1
//   let kCopy = k
//   let index = 0;
//   let emptyString = ""
//   let whenToReverse = 0
//   if (s.length === 1 || k === 1) {
//     return s;
//   }
//   if (k >= s.length) {
//     reverseIndex = s.length - 1
//     while (reverseIndex !== -1) {
//       emptyString += s[reverseIndex];
//       reverseIndex--;
//     }
//     return emptyString;
//   }
//   while (index < s.length) {

//     if (kCopy) {
//       if (s[reverseIndex] === undefined) {
//         return emptyString += s[s.length - 1]
//       }
//       emptyString += s[reverseIndex]
//       kCopy--;
//       reverseIndex--;
//       index++
//     } else {
//       emptyString += s[newIndexStart]
//       newIndexStart++
//       index++
//       whenToReverse++;
//     }
//     if (whenToReverse === k) {
//       whenToReverse = 0;
//       reverseIndex = newIndexStart + 1;
//       kCopy = k
//       newIndexStart += k;
//     }

//   }
//   return emptyString;
// };


const reverseStr = (s, k) => {
  //create method that reverses string
  //slice up to k into the string
  //reverse the slice and append to empty string
  //slice out k amount in s and append to empty string,

  if (k === 1) {
    return s;
  }
  let emptyString = "";
  let reverseIndicator = true;
  const reverse = (string) => {
    for (let i = string.length - 1; i > -1; i--) {
      emptyString += string[i]
    }
    return emptyString
  }

  let i = 0;
  let kCopy = k;

  while (emptyString.length < s.length) {

    if (i >= s.length) {
      reverseIndicator = true;
    }

    if (!reverseIndicator) {
      emptyString += s.slice(i, kCopy)
      reverseIndicator = true;
      i += k;
      kCopy += k;
    } else {
      let stringToReverse = s.slice(i, kCopy);
      reverse(stringToReverse);
      i += k;
      kCopy += k;
      reverseIndicator = false;
    }

  }

  return emptyString;

}
