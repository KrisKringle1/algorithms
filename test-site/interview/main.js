Good luck!



Question 1:

============================================================================



class Pet {

  constructor (name, type, hasFur) {
    this.name = name;
    this.type = type
    this.hasFur = true;


    getPetInfo(){
      return this.name + " is a " + this.type
    }

    hasFur(){
      if(this.hasFur){
        return "this pet has fur!"
      } else {
        return "this pet does not have fur!"
      }
    }


  }

}

const dog = new Pet(scruffy, dog, true){}



// Complete the code above to represent the requirements below

// 1. Every Pet has a name (Scruffy, Daisy, Coco, etc.) and a type (dog, cat, bird)

// 2. You can call a function to retrieve the pet name and type

// 3. A Dog is a type of Pet.

// 4. A Cat is a type of Pet.

// 5. A Bird is a type of Pet.

// 6. You can call a function to that returns whether the Pet has fur.




Question 2:

===========================================================================



/* Given an unsorted array of numbers that may contain duplicates, return an array containing only unique numbers from that array. Provide two solutions. The use of Set objects is not allowed.

*

* Input: unsortedNumbers (Array)

* Return: (Array)

*/

function getUniqueNumbersFromUnsortedArray(unsortedNumbers) {
//loop through each index of the array
//if index is not included in new array
//push into new array
//return new array
const newArray = []

for(let i = 0; i < unsortedNumbers.length; i++){
  if(!newArray.includes(unsortedNumbers[i])){
    newArray.push(unsortedNumbers[i])
  }

}

return newArray


}

array = [1, 1, 3, 4, 6, 7, 4, 4]
function getUniqueNumbersFromUnsortedArray(unsortedNumbers) {
  let i = 0;
  const newArray = []
  while(i > 0){
    if(!newArray.includes(unsortedNumbers[i])){
      newArray.push(unsortedNumbers[i])
    }
    i++
  }

  return newArray;
}


function evensOrOdds(array){

  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 ===0){
      array[i]--
    } else {
      array[i]++
    }
  }
  return array
}
