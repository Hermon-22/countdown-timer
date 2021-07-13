const timer = document.getElementById('stopwatch');
var min = 24;
var sec = 60;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
        }
    }
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        sec = sec - 1;

        if (sec == 0) {
            min = min - 1;
            sec = 59;
        }
        if (min <= 0) {
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        timer.innerHTML = min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    // timer.innerHTML = "00:00";
    stoptime = false;
    sec = 0;
    min = 0;
    }