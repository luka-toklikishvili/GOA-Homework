const movieList = document.getElementById("movieList");
    const movieInput = document.getElementById("movieInput");

    const movies = ["Inception", "The Matrix", "Interstellar","Breaking bad","Prison Break"];

    function renderMovies() {
      movieList.innerHTML = "";
      movies.forEach((movie, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${movie}
          <button onclick="removeMovie(${index})">Delete</button>
        `;
        movieList.appendChild(li);
      });
    }

    function addMovie() {
      const movie = movieInput.value.trim();
      if (movie !== "") {
        movies.push(movie);
        movieInput.value = "";
        renderMovies();
      }
    }

    function removeMovie(index) {
      movies.splice(index, 1);
      renderMovies();
    }

    // Initial render
    renderMovies();