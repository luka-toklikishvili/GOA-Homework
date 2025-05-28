let temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

if (temperature < 0) {
  alert("It's freezing.");
} else if (temperature <= 15) {
  alert("It's cold.");
} else if (temperature <= 30) {
  alert("It's warm.");
} else {
  alert("It's hot.");
}