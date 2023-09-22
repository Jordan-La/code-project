var userInput = document.getElementById("userInput").innt;
//userInput = 60; // some test code
var buttonActivate = document.getElementById("activationButton");

buttonActivate.addEventListener("click", function(){
        setInterval(beginCountDown, 1000)
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
    console.log("user inputted: " + userInput);
    userInput--;
    console.log("1 second subtracted")
    if(userInput == 0 || stop == true){
        return;
    }
}
function stopTime(){
    stop = true;
}
function reset(){
stop = true;
    userInput = 0;
}
//this is a testingj
