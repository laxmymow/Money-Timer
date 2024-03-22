let hours = 0, minutes = 0, seconds = 0;
let timer = null;
let isRunning = false;

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function updateDisplay() {
    document.getElementById('money-output').innerText = (document.getElementById('money').value * (hours + minutes / 60 + seconds / 3600)).toFixed(2);

    document.getElementById('stopwatch').innerText = 
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function tick() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(tick, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
});
