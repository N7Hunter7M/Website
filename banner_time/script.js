function updateCountdown() {
    const timeElement = document.getElementById('time');
    
    // Set the target date (14 days from now)
    const targetDate = new Date('2024-10-25T00:00:00'); // Replace with the correct target date

    const now = new Date(); // Current date and time
    
    // Calculate the time difference between the target date and now
    const timeDifference = targetDate.getTime() - now.getTime();

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    timeElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display "Time's up!"
    if (timeDifference <= 0) {
        clearInterval(intervalId);
        timeElement.textContent = "Time's up!";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);  // Update every second
});

