
/**
 * SAST Rocket Launch Countdown Timer
 * Displays a live countdown to the scheduled rocket launch date
 */

const LAUNCH_DATE = new Date('2025-12-01T18:00:00');
const TIME_UNITS = {
    DAY: 1000 * 60 * 60 * 24,
    HOUR: 1000 * 60 * 60,
    MINUTE: 1000 * 60,
    SECOND: 1000
};

/**
 * Formats a number as a two-digit string with leading zero
 * @param {number} num - The number to format
 * @returns {string} Formatted number (e.g., "05")
 */
function formatTime(num) {
    return String(num).padStart(2, '0');
}

/**
 * Updates the countdown display every second
 * Shows launch message when countdown reaches zero
 */
function updateCountdown() {
    const now = new Date();
    const timeRemaining = LAUNCH_DATE - now;

    if (timeRemaining <= 0) {
        // Countdown finished - show launch message
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('launchMsg').style.display = 'block';
        clearInterval(timerInterval);
        return;
    }

    // Calculate time units
    const days = formatTime(Math.floor(timeRemaining / TIME_UNITS.DAY));
    const hours = formatTime(Math.floor((timeRemaining / TIME_UNITS.HOUR) % 24));
    const minutes = formatTime(Math.floor((timeRemaining / TIME_UNITS.MINUTE) % 60));
    const seconds = formatTime(Math.floor((timeRemaining / TIME_UNITS.SECOND) % 60));

    // Update DOM elements
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Initialize countdown timer
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
