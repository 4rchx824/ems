var seconds = 0;

function secsToFormat(seconds) {
    var hours, mins, secs;

    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    mins = Math.floor(seconds / 60);
    seconds = seconds % 60;

    secs = seconds;

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }
    return `${hours}h ${mins}m ${secs}s`;
}

function displayTime(seconds) {
    document.getElementById("timer").innerHTML = secsToFormat(seconds);
}
var counter;
function start() {
    counter = setInterval(() => {
        seconds += 1;
        displayTime(seconds);
    }, 1000);
}

function stop() {
    clearInterval(counter);
}

function reset() {
    seconds = 0;
    displayTime(seconds);
}

function dispTime() {
    var time;
    seconds > 0 ? (time = secsToFormat(seconds)) : (time = "00h 00m 00s");
    document.getElementById("time").innerHTML = time;
}
