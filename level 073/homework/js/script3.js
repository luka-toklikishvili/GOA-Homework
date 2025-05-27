const movies = [
  {
    title: "Inception",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "The Matrix",
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    title: "Interstellar",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    title: "Oppenheimer",
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
  }
];

const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <h2>${movie.title}</h2>
      <iframe src="${movie.trailerUrl}" frameborder="0" allowfullscreen></iframe>
    `;

    movieList.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );
  displayMovies(filtered);
});

displayMovies(movies);
