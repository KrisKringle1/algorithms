


var timeElement = document.getElementById('time'), add;
var start = document.querySelector('.start');
var stop = document.querySelector('.stop');



function startTime() {
  add = setInterval(function () {
    console.log('why hello there')
    timeElement.innerText++
  }, 1000)
}

function stopTime() {
  clearInterval(add);
}
start.addEventListener('click', startTime)
stop.addEventListener('click', stopTime)
