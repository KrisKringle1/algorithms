


const timeElement = document.getElementById('time')
let add;
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timeValue = timeElement.innerText
const heyElement = document.getElementById('hey')
const thereElement = document.getElementById('there')




function startTime() {
  add = setInterval(function () {
    console.log('why hello there')
    timeElement.innerText++
    heyElement.innerText--
  }, 1000)
}

function stopTime() {
  clearInterval(add);
}
start.addEventListener('click', startTime)
stop.addEventListener('click', stopTime)
