let month = prompt("What is your favorite month? (January, April, July, September, December)");
switch (month.toLowerCase()) {
    case "january":
        alert("January - Winter ❄️");
        break;
    case "april":
        alert("April - Spring 🌸");
        break;
    case "july":
        alert("July - Summer ☀️");
        break;
    case "september":
        alert("September - Autumn 🍂");
        break;
    case "december":
        alert("December - Winter ❄️");
        break;
    default:
        alert("Please choose only from the 5 given months!");
}
