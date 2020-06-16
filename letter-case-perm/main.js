/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (string) {
  //count how many letters in the string
  //if letters, return string

  const emptyArray = []
  let boolean = false;
  let letterCount = 0
  emptyArray.push(string)
  for (let i = 0; i < string.length; i++) {
    debugger;

    if (!parseInt(string[i]) && string[i] !== "0") {
      if (string[i] == string[i].toLowerCase()) {
        let upperCase = string[i].toUpperCase()
        let slicedString = string.slice(0, i)
        let endString = string.slice(i + 1)
        let finalString = slicedString + upperCase + endString
        emptyArray.push(finalString)
        boolean = true
        letterCount++

      }

      if (string[i] == string[i].toUpperCase()) {
        let lowerCase = string[i].toLowerCase()
        let slicedString = string.slice(0, i)
        let endString = string.slice(i + 1)
        let finalString = slicedString + lowerCase + endString
        emptyArray.push(finalString)
        boolean = true
        letterCount++
      }



    }
  }
  if (boolean && letterCount > 1) {
    emptyArray.push(string.toUpperCase())
  }

  return emptyArray


};


function factorial(number) {

  if (number === 1) {
    return number
  }

  return number * factorial(number - 1)
}

function gcd(num1, num2) {
  if (!num2) {
    return num1
  }

  return gcd(num2, num1 % num2)

}

function range(x, y) {
  if (x - y === 2) {
    return [x + 1]
  }

  let list = range(x, y - 1)
  list.push(y - 1)
  return list
}

function sumOfAll(number) {
  if (number === 1) {
    return 1
  }
  return number + sumOfAll(number - 1)
}


function exponential(number, exponent) {
  if (exponent === 1) {
    return number
  }

  return number * exponential(number, exponent - 1)
}

function fib(number) {
  if (number === 0) {
    return [0, 1]
  }

  let list = fib(number - 1)
  list.push(list[list.length - 1] + list[list.length - 2])
  return list
}

function isEven(number) {
  if (number < 0) {
    return false
  }
  if (number === 1) {
    return false
  }

  if (number === 0) {
    return true
  }

  return isEven(number - 2)
}


function binarySearch(array, target) {
  let index = array.length / 2

  if (array[index] === target) {
    return
  }
}

function sort(array) {
  if (array.length === 0) {
    return list
  }

  if (array.length)



}
