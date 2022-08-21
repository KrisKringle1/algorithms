const flatten = (array) => {
  //input: [1,2,[3],[4], [[5,[6],7]]]
  //output: [1,2,3,4,5,6,7]

  //create a return array returnArray
  //loop through the initial array
  //check if the type of value is an array
  //if not, push the value into the return array

  //if it is
  //check the length of the array
  //if 1
  //push the only value into the return array
  //if larger than one
  //loop through the values within the "inner" array and push them into returnArray

  //return returnArray

  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    const cur = array[i];
    if (typeof cur === "object") {
      if (cur.length === 1) {
        returnArray.push(cur[0]);
      } else {
        for (let j = 0; j < cur.length; j++) {
          if (typeof cur[j] !== "object") {
            returnArray.push(cur[j]);
          } else {
            //recursion?
            //an additional for loop?
          }
        }
      }
    } else {
      returnArray.push(cur);
    }
  }

  return returnArray;
};
