


let add;
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const tenSeconds = document.getElementById('tenSeconds')
let timeStarted = false;






function startTime() {
  if (!timeStarted) {
    add = setInterval(function () {

      if (seconds.innerText == 9) {
        tenSeconds.innerText++
        seconds.innerText = 0
      } else {
        seconds.innerText++
      }

      if (tenSeconds.innerText == 6) {
        minutes.innerText++
        seconds.innerText = 0
        tenSeconds.innerText = 0
      }


    }, 1000)
    timeStarted = true;
  }
}

function stopTime() {
  clearInterval(add);
  timeStarted = false;
}
start.addEventListener('click', startTime)
stop.addEventListener('click', stopTime)
