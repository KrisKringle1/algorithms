/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  //check the length of the string to run 2 different code blocks

  //loop through string
  //push the first 2 elements into a new variable set as day
  //push the middle 3 indexes together to make a variable month
  //push the last 4 elements of the string into a new variable "year"
  //create a return string that matches the desired output
  if (date.length === 13) {
    const day = date[0] + date[1]
    const month = date[5] + date[6] + date[7]
    const year = date[9] + date[10] + date[11] + date[12]
    let numMonth = null;

    switch (month) {
      case "Jan":
        numMonth = "01"
        break;
      case "Feb":
        numMonth = "02"
        break;
      case "March":
        numMonth = "03"
        break;
      case "April":
        numMonth = "04"
        break;
      case "May":
        numMonth = "05"
        break;
      case "Jun":
        numMonth = "06"
        break;
      case "Jul":
        numMonth = "07"
        break;
      case "Aug":
        numMonth = "08"
        break;
      case "Sep":
        numMonth = "09"
        break;
      case "Oct":
        numMonth = "10"
        break;
      case "Nov":
        numMonth = "11"
        break;
      case "Dec":
        numMonth = "12"
        break;
    }
    return year + "-" + numMonth + "-" + day
  }

  if (date.length === 12) {
    const day = date[0]
    const month = date[4] + date[5] + date[6]
    const year = date[8] + date[9] + date[10] + date[11]
    let numMonth = null;
    switch (month) {
      case "Jan":
        numMonth = "01"
        break;
      case "Feb":
        numMonth = "02"
        break;
      case "March":
        numMonth = "03"
        break;
      case "April":
        numMonth = "04"
        break;
      case "May":
        numMonth = "05"
        break;
      case "Jun":
        numMonth = "06"
        break;
      case "Jul":
        numMonth = "07"
        break;
      case "Aug":
        numMonth = "08"
        break;
      case "Sep":
        numMonth = "09"
        break;
      case "Oct":
        numMonth = "10"
        break;
      case "Nov":
        numMonth = "11"
        break;
      case "Dec":
        numMonth = "12"
        break;
    }
    return year + "-" + numMonth + "-" + day
  }




};
