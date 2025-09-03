// Month and weekday
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Convert to two-digit format (e.g., 07, 09)
const twoDigits = n => String(n).padStart(2, "0");

function showDateTime() {
    const now = new Date(); // Create new Date object

    // Find elements
    const yearEl = document.getElementById("year");
    const monthEl = document.getElementById("month");
    const weekdayEl = document.getElementById("weekday");
    const dayEl = document.getElementById("day");
    const timeEl = document.getElementById("time");

    // Extract values
    const year = now.getFullYear();
    const monthIndex = now.getMonth(); // 0–11
    const weekdayIndex = now.getDay(); // 0 = Sunday
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Insert into HTML
    yearEl.textContent = year;
    monthEl.textContent = months[monthIndex];
    weekdayEl.textContent = weekdays[weekdayIndex];
    dayEl.textContent = day;
    timeEl.textContent = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

// Run once at start
showDateTime();
// Update every second
setInterval(showDateTime, 1000);