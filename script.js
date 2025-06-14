let timeLeft = 5.00* 60; // 25 minutes timer
let timerInterval;
let isRunning = false;
let isPaused = false;

function updateTime() {
    const mins = Math.floor(timeLeft / 60);//in mins
    const secs = timeLeft % 60;//in secs
    const timerDisplay = document.querySelector(".progressbar-number");

    timerDisplay.textContent = 
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (timeLeft < 60) {//<60secs
        timerDisplay.classList.add("alert");
    } else {
        timerDisplay.classList.remove("alert");
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        isPaused = false;

        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTime();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    const pauseButton = document.getElementById("Pause");

    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        isPaused = true;
        pauseButton.textContent = "Resume";
    } else if (isPaused) {
        startTimer();
        pauseButton.textContent = "Pause";
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 5.00 * 60;
    updateTime();
    isRunning = false;
    isPaused = false;
    document.getElementById("Pause").textContent = "Pause";
}
updateTime();
