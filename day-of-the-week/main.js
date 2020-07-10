/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  //create new date wiht year, month, day
  //create switch statement that takes in result of date.getDay
  //return 0-6 days

  let stringMonth = ""

  switch (month) {
    case 1:
      stringMonth = "January"
      break;
    case 2:
      stringMonth = "February"
      break;
    case 3:
      stringMonth = "March"
      break;
    case 4:
      stringMonth = "April"
      break;
    case 5:
      stringMonth = "May"
      break;
    case 6:
      stringMonth = "June"
      break;
    case 7:
      stringMonth = "July"
      break;
    case 8:
      stringMonth = "August"
      break;
    case 9:
      stringMonth = "September"
      break;
    case 10:
      stringMonth = "October"
      break;
    case 11:
      stringMonth = "November"
      break;
    case 12:
      stringMonth = "December"
      break;
  }



  let date = new Date('' + day + stringMonth + year)

  let weekDay = date.getDay()
  debugger;
  switch (weekDay) {
    case 0:
      return 'Sunday'
      break;
    case 1:
      return 'Monday'
      break;
    case 2:
      return 'Tuesday'
      break;
    case 3:
      return 'Wednesday'
      break;
    case 4:
      return "Thursday"
      break;
    case 5:
      return "Friday"
      break;
    case 6:
      return "Saturday"
      break;
    default:
      return "go fakyawself"
  }

};
