/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (firstString, secondString) {
  //convert first string to an array and assign it to a variable
  //convert second string to an array and assign it to a variable
  //do a for loop in the first string
  //check if string[i] is included in array
  //
  //if the array includes the value
  //indexOf the value
  //splice out value
  //if it doesnt contain the value, push into array

  //loop through second string
  //check if each index is included in first string
  //if it is not, put the variable in an array

  //return array

  const firstArray = firstString.split(' ');
  const secondArray = secondString.split(' ');
  const combinedArray = firstArray.concat(secondArray);
  const commonWords = [];
  const uncommonWords = [];

  // combinedArray.forEach(element => {
  //   debugger;
  //   if (uncommonWords.includes(element) === false && commonWords.includes(element) === false) {

  //     uncommonWords.push(element)
  //   } else {
  //     let index = uncommonWords.indexOf(element)

  //     commonWords.push(uncommonWords.splice(index, 1))
  //   }

  // })


  for (let i = 0; i < combinedArray.length; i++) {
    if (!uncommonWords.includes(combinedArray[i]) && !commonWords.includes(combinedArray[i])) {
      uncommonWords.push(combinedArray[i])
    } else if (uncommonWords.includes(combinedArray[i])) {
      let index = uncommonWords.indexOf(combinedArray[i])
      let usedWord = uncommonWords.splice(index, 1);

      commonWords.push(usedWord)
    }
  }
  // const emptyArray = []
  // for (let i = 0; i < combinedArray.length; i++) {
  //   debugger;
  //   let wordIndex = combinedArray.indexOf(combinedArray[i])
  //   if (combinedArray.includes(combinedArray[i]) && i !== wordIndex) {

  //     combinedArray.forEach(element => {
  //       // if (element === combinedArray[i]) {
  //       //   let index = combinedArray.indexOf(element);
  //       //   combinedArray.splice(index, element)
  //       // }
  //       emptyArray.push(element)


  //     })

  //   }
  // }


  // let i = 0;
  // let length = combinedArray.length
  // while (i < length) {
  //   combinedArray.forEach(word => {
  //     if (word === combinedArray[i]) {
  //       let index = combinedArray.indexOf(word);
  //       combinedArray.splice(index, 1)
  //       length--;
  //     }
  //   })
  //   i++;
  // }
  // const seen = {}

  // for (let i = 0; i < combinedArray.length; i++) {
  //   // let currentIndex = combinedArray.indexOf()
  //   if (combinedArray.includes(combinedArray[i]) && i !== currentIndex]) {
  //     seen[combinedArray[i]] = 'hey'
  //   } else {
  //     combinedArray.splice(i, 1)
  //     combinedArray.length--;
  //   }
  // }


  return uncommonWords;

};
