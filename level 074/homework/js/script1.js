let score = parseInt(prompt("Enter your score (0-100):"));

if (score >= 90 && score <= 100) {
    alert("Excellent");
} else if (score >= 70 && score <= 89) {
    alert("Good");
} else if (score >= 50 && score <= 69) {
    alert("Satisfactory");
} else if (score >= 0 && score <= 49) {
    alert("Needs improvement");
} else {
    alert("Please enter a valid score between 0 and 100.");
}
