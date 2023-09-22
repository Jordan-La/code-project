var userInput = document.getElementById("userInput");
var time = userInput.value;
var buttonActivate = document.getElementById("activationButton");
var outputTime = 0;

userInput.addEventListener("mouseout", function(){
        time = userInput.value;
        console.log("updated time inputted lmao" + time);
});

buttonActivate.addEventListener("click", function(){
       outputTime = setInterval(beginCountDown, 1000)
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
        clearInterval(outputTime);
        return userInput;
    }
}
function stopTime(){
        clearInterval(outputTime);
    stop = true;
}
function reset(){
        clearInterval(outputTime);
stop = true;
    userInput = 0;
}
//this is a testingj
