const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Matrix" },
  { id: 3, title: "Interstellar" },
];

const ratings = {};

const movieList = document.getElementById("movie-list");

movies.forEach((movie) => {
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");

  const title = document.createElement("div");
  title.className = "movie-title";
  title.textContent = movie.title;

  const starsDiv = document.createElement("div");
  starsDiv.className = "stars";

  const ratingText = document.createElement("div");
  ratingText.className = "rating-text";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&#9733;";

    star.addEventListener("click", () => {
      ratings[movie.id] = i;
      updateStars(movie.id, starsDiv, ratingText);
    });

    starsDiv.appendChild(star);
  }

  movieDiv.appendChild(title);
  movieDiv.appendChild(starsDiv);
  movieDiv.appendChild(ratingText);
  movieList.appendChild(movieDiv);
});

function updateStars(movieId, starsDiv, ratingText) {
  const rating = ratings[movieId];
  const stars = starsDiv.querySelectorAll(".star");
  stars.forEach((star, index) => {
    star.classList.toggle("filled", index < rating);
  });
  ratingText.textContent = `You rated this ${rating} star(s)`;
}