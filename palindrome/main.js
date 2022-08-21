/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //convert number to string
  //loop through string
  //slice off last element of string
  //append to string
  //parseInt string
  //if negative number return false
  //if input ends in 0 return false

  if (Math.sign(x) === -1 || -0) {
    return false;
  }

  const numToString = x.toString();
  let reverseString = "";
  let stringLength = numToString.length;
  let stringLengthMinusOne = numToString.length - 1;
  if (numToString[stringLength] === "0" && stringLength > 1) {
    return false;
  }

  for (let i = 0; i < numToString.length; i++) {
    reverseString += numToString.slice(stringLengthMinusOne, stringLength);
    stringLength--;
    stringLengthMinusOne--;
  }
  if (parseInt(reverseString) === x) {
    return true;
  } else {
    return false;
  }
};

("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'findPasswordStrength' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING password as parameter.
 */

function findPasswordStrength(password) {
  // Write your code here
  /* rules 
        1 point per character 
        1 point for each unique substring: test = [t]est (1), [te]st (2), [tes], (3) 
        
        //fist, make points the intial length of the string
            let points = password.length
        
        //create a function that takes in index and an empty object as a parameter
        //create a loop within the function that starts at the index paramater and starts storing letters inside the object, as well as an empty string 
            //countChars(index, storage = {}, chars = "", password)
        loop through password
        //if set of chars is greater than 1 and nether letter is in the object, add the amount of letters 
            if(!storage[cur]){
                chars += cur
                if(chars.length > 1){
                    points += chars.length
                }
            }
        
        when loop completes, call the function again on the next index in password
        
        //when function is completed on every index, loop through the entire string again and count each unique char and add them to a string and return the length
        
        for(password){
            if(!storage[cur]){
                storage[cur] = cur
                uniqueCount += cur
                
            }
        }
        
        points += uniqueCount.length
        
        
        return points
    
    */

  const countChars = (index, password) => {
    const storage = {};
    let chars = "";

    for (let i = index; i < password.length; i++) {
      const curr = password[i];

      if (!storage[curr]) {
        storage[curr] = curr;
        chars += curr;
        console.log("curr ", curr);

        if (chars.length > 1) {
          points += chars.length;
          console.log("chars ", chars.length);
          console.log("points ", points);
        }
      } else {
        if (chars.length === 1) {
          points += 1;
          console.log("last points ", points);
        }
        return;
      }
    }
  };
  let points = password.length;
  for (let i = 0; i < password.length; i++) {
    countChars(i, password);
  }
  const storageObj = {};
  let finalChars = "";
  for (let i = 0; i < password.length; i++) {
    const curr = password[i];
    if (!storageObj[curr]) {
      storageObj[curr] = curr;
      finalChars += curr;
    }
  }

  if (finalChars.length !== password.length) {
    points += finalChars.length;
  }

  return points;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const password = readLine();

  const result = findPasswordStrength(password);

  ws.write(result + "\n");

  ws.end();
}
