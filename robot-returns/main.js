/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  //create updown variable and set to 0
  //create rightleft variable
  //loop through string
  //create a switch statement
  //if its a U, updown goes up, D, updown goes down
  //if its a R. updown goes up, L, leftright geos down
  //if both are 0, return true else false

  let upDown = 0
  let rightLeft = 0

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        upDown++
        break;
      case "D":
        upDown--
        break;
      case "R":
        rightLeft++
        break;
      case "L":
        rightLeft--
        break;
      default:
        return false
    }
  }
  if (rightLeft === 0 && upDown === 0) {
    return true
  } else {
    return false
  }


};
