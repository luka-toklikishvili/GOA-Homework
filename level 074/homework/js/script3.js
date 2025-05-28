let text = prompt("Enter some text:");
let length = text.length;

if (length === 0) {
  alert("The text is empty.");
} else if (length <= 10) {
  alert("Short text.");
} else if (length <= 50) {
  alert("Medium length text.");
} else {
  alert("Long text.");
}