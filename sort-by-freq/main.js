/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (string) {
  //create an object
  //loop through string and count how many times each value has by putting it into an object
  //use a for in loop to loop through the array to create a new string
  //return the string
  const setObj = {}
  let emptyString = ""
  for (let i = 0; i < string.length; i++) {
    const letter = string[i]
    if (!setObj[letter]) {
      setObj[letter] = 1
    } else {
      setObj[letter]++
    }

  }

  const values = Object.values(setObj)

  const sort = values.sort()
  let i = sort.length
  debugger;
  for (const property in setObj) {
    
    emptyString
    
    if(setObj[property > 1]){
      while (setObj[property] > 0) {
        emptyString += property
        setObj[property]--
      }
    }
   
  }


  return emptyString

};
