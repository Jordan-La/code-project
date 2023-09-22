var userInput = document.getElementById("userInput");
var display = document.getElementById("display");
var time = 0;
var outputTime = 0;

var setButton = document.getElementById("setButton");

setButton.addEventListener("click", function(){
        time = userInput.value;
        console.log("updated time inputted lmao" + time);
});

var buttonActivate = document.getElementById("activationButton");

buttonActivate.addEventListener("click", function(){
       outputTime = setInterval(beginCountDown, 1000)
       display.innerHTML = time;
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
    console.log("user inputted: " + time);
    time--;
    console.log("1 second subtracted")
    if(time == 0 || stop == true){
        console.log("final time: " + time);
        clearInterval(outputTime);
        
        return userInput;
    }
}
function stopTime(){
    clearInterval(outputTime);
}
function reset(){
    clearInterval(outputTime);
}
//this is a testingj
