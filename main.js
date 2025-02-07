function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

document.getElementById('setAlarm').addEventListener('click', function () {
    let alarmTime = prompt("Enter alarm time in HH:MM format:");
    if (alarmTime) {
        alert("Alarm set for " + alarmTime);
    }
});

