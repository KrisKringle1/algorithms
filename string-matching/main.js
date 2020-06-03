/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  //loop through the array
  //check if the string is included in each index, if true, push string into array
  const array = [];
  for (let i = 0; i < words.length; i++) {
    words.forEach(element => {
      if (element.includes(words[i]) && element !== words[i] && array.includes(words[i]) === false) {
        array.push(words[i])
      }
    })
  }
  return array;
};
