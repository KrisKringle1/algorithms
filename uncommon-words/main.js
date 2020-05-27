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

  combinedArray.forEach(element => {
    debugger;
    if (uncommonWords.includes(element) === false && commonWords.includes(element) === false) {

      uncommonWords.push(element)
    } else {
      let index = uncommonWords.indexOf(element)

      commonWords.push(uncommonWords.splice(index, 1))
    }

  })




  return uncommonWords;

};
