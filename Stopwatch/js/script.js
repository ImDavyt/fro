const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
let seconds = 0;
let running = false;
let minutes = 0;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");
const resetButton = document.getElementById("js--reset")

let timer;

startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds;
    }, 1000);
}

stopButton.onclick = function(){
    clearInterval(timer)
    running = false;
}

resetButton.onclick = function(){
    seconds = 0
    minutes = 0
    clearInterval(timer)
    running = false
    secondsTimer.innerText = 0
    minutesTimer.innerText = 0
}

/*hier begint de slider*/
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
slider.value = 1;
rangeValue.innerText = slider.value + "x";



slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

const paragraph = document.getElementById("js--text");
const img = document.getElementById("js--image");
//data ophalen
let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerHTML = echteData.text;
            img.setAttribute("src",echteData.img);
        }
    );

