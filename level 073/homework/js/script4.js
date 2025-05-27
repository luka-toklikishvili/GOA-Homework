const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    poster: "https://m.media-amazon.com/images/I/51s+N-kfMCL._AC_SY679_.jpg"
  },
  {
    title: "The Matrix",
    genre: "Action/Sci-Fi",
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
  },
  {
    title: "La La Land",
    genre: "Musical/Romance",
    poster: "https://m.media-amazon.com/images/I/71VPOVmhH-L._AC_SY679_.jpg"
  },
  {
    title: "Knives Out",
    genre: "Mystery/Comedy",
    poster: "https://m.media-amazon.com/images/I/81vwCxuXnHL._AC_SY679_.jpg"
  }
];

function pickMovie() {
  const movie = movies[Math.floor(Math.random() * movies.length)];

  document.getElementById("poster").src = movie.poster;
  document.getElementById("title").textContent = movie.title;
  document.getElementById("genre").textContent = movie.genre;

  document.getElementById("movie-display").classList.remove("hidden");
}
