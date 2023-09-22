var userInput = document.getElementById("userInput");
var display = document.getElementById("display");
var time = 0;
var outputTime = 0;

var buttonActivate = document.getElementById("activationButton");

buttonActivate.addEventListener("click", function(){
        time = userInput.value;
       outputTime = setInterval(beginCountDown, 1000)
       display.innerHTML = 0;
});
    
var buttonStop = document.getElementById("stopButton");

buttonStop.addEventListener("click", function(){
        stopTime();
        console.log("Stopping time");
});

var buttonReset = document.getElementById("resetButton");

buttonReset.addEventListener("click", function(){
        reset();
        console.log("Resetting time");
});

var stop = false;
function beginCountDown(){
    if(time == 0 || stop == true){
        console.log("final time: " + time);
        display.innerHTML = time;
        clearInterval(outputTime);
        return userInput;
    }
    console.log("user inputted: " + time);
    display.innerHTML = time;
    console.log("1 second subtracted")
    time--;
}
function stopTime(){
    clearInterval(outputTime);
}
function reset(){
    time = 0;
    display.innerHTML = time;
    clearInterval(outputTime);
}
//this is a testingj
