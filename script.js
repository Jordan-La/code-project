var userInput = document.getElementById("userInput");
userInput = 60;
var timeRemaining;

if(isNaN(userInput)){
    console.log("lowkey this aint a number");
}else{
    timeRemaining = userInput;
}

var buttonActivate = document.getElementById("activationButton").addEventListener("click", beginCountDown());
var buttonStop = document.getElementById("stopButton").addEventListener("click", stop());
var buttonReset = document.getElementById("resetButton").addEventListener("click", beginCountDown(countDown));
var stop = false;

timeRemaining = userInput;
function beginCountDown(){
    while(timeRemaining > 0 && (shutdown == false)){
        timeRemaining = timeRemaining - 1;
    }
    alert("yo ur times out lmao");
}
function stop(){
    stop = true;
}

