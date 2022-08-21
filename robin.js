//car dealership
//write  function that contains inventory of cars as well as requirements from user
//returns teh car based on reqs
/* 
const car = price, size, color
*/

/* 
    1. loop through the inventory
    2. compare each of values of input to the car in inventory
    3. if values match, return car, else return -1


*/

const bmw = {
  price: 100000,
  size: "Sedan",
  color: "black",
};

secondBmw = {
  price: 80000,
  size: "Sedan",
  color: "black",
};

const jeep = {
  price: 150000,
  size: "4x4",
  color: "red",
};

const inventory = [bmw, jeep, secondBmw];

const getCar = (car, inventory) => {
  const selectedCars = [];
  for (let i = 0; i < inventory.length; i++) {
    const currCar = inventory[i];

    console.log("curr car price ", currCar.price, "car price ", car.price);

    if (
      currCar.size === car.size &&
      currCar.color === car.color &&
      currCar.price <= car.price
    ) {
      selectedCars.push(currCar);
    }
  }

  if (selectedCars.length) {
    return selectedCars;
  } else {
    return -1;
  }
};

const car = {
  price: 100000,
  size: "Sedan",
  color: "black",
};

const notCar = {
  price: 105000,
  size: "Sedan",
  color: "black",
};

const success = getCar(car, inventory);
const fail = getCar(notCar, inventory);

if (success.length === 2) {
  console.log("the function ran correctly ", success);
} else {
  console.log("the array is not the correct length ", success);
}

if (fail === -1) {
  console.log("the function returns -1 when no cars are met");
} else {
  console.log("-1 was expected, result was : ", fail);
}

// if (getCar(car, inventory)) {
//   const returnedCar = getCar(car, inventory);
//   const strReturnedCar = JSON.stringify(returnedCar);
//   const strCar = JSON.stringify(car);

//   if (strReturnedCar === strCar) {
//     console.log("returned the correct car");
//   } else {
//     console.log("function did not return the correct car ", returnedCar);
//   }
// } else {
//   console.log("the function failed");
// }

// if (getCar(notCar, inventory) === -1) {
//   console.log(
//     "there was no car an -1 was returned ",
//     getCar(notCar, inventory)
//   );
// } else {
//   console.log("the function failed");
// }
