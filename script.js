var userInput = document.getElementById("userInput");
//userInput = 60; // some test code
var buttonActivate = document.getElementById("activationButton").addEventListener("click", setInterval(beginCountDown, 1000));
var buttonStop = document.getElementById("stopButton").addEventListener("click", stop());
var buttonReset = document.getElementById("resetButton").addEventListener("click", reset());
var stop = false;
function beginCountDown(){
    userInput--;
    console.log("-1 second")
    if(userInput == 0 || stop == true){
        alert("yo ur times out lmao");
        return;
    }
}
function stop(){
    stop = true;
}
function reset(){
    userInput = 0;

}
//this is a testing

