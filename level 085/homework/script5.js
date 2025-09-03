function countdown(id, targetDate) {
    const now = new Date();
    let distance = targetDate - now;
    if (distance < 0) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
        distance = targetDate - now;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(id).textContent =
        `${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function updateCountdowns() {
    const now = new Date();
    const year = now.getFullYear();

    const newYear = new Date(year + 1, 0, 1, 0, 0, 0);
    const giorgoba = new Date(year, 10, 23, 0, 0, 0);
    const barbaroba = new Date(year, 11, 17, 0, 0, 0);

    countdown("newyear", newYear);
    countdown("giorgoba", giorgoba);
    countdown("barbaroba", barbaroba);
}


updateCountdowns();
setInterval(updateCountdowns, 1000);