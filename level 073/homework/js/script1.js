    const movies = ["Inception", "Gladiator", "Titanic", "Avatar", "Amadeus"];
    const movie = movies[Math.floor(Math.random() * movies.length)].toUpperCase();

    let guessedLetters = [];
    let wrongGuesses = [];

    function displayWord() {
      const display = movie
        .split("")
        .map(letter => (letter === " " ? " " : guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
      document.getElementById("wordDisplay").textContent = display;

      if (!display.includes("_")) {
        document.getElementById("message").textContent = "🎉 You guessed it!";
        document.getElementById("guessInput").disabled = true;
      }
    }

    function makeGuess() {
      const input = document.getElementById("guessInput");
      const letter = input.value.toUpperCase();
      input.value = "";

      if (!letter.match(/[A-Z]/) || letter.length !== 1) return;

      if (guessedLetters.includes(letter) || wrongGuesses.includes(letter)) return;

      if (movie.includes(letter)) {
        guessedLetters.push(letter);
      } else {
        wrongGuesses.push(letter);
        document.getElementById("wrongGuesses").textContent =
          "Wrong guesses: " + wrongGuesses.join(", ");
      }

      displayWord();
    }

    displayWord();