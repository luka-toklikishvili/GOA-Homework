// src/App.jsx
import React from "react";

const movies = [
  {
    title: "The Dark Knight",
    year: 2008,
    description:
      "Batman faces the Joker, a criminal mastermind who seeks to unleash chaos on Gotham City.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
  },
  {
    title: "Batman Begins",
    year: 2005,
    description:
      "Bruce Wayne becomes Batman and fights to stop Ra's al Ghul from destroying Gotham.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg",
  },
  {
    title: "The Batman",
    year: 2022,
    description:
      "Batman investigates the Riddler’s crimes and corruption in Gotham during his second year as a vigilante.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Batman_poster.jpg",
  },
  {
    title: "Batman v Superman: Dawn of Justice",
    year: 2016,
    description:
      "Batman confronts Superman, while a greater threat emerges to challenge humanity.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-lg shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-400">🦇 Batman Universe</h1>
        <nav className="flex gap-6 text-gray-300">
          <a href="#movies" className="hover:text-yellow-400">Movies</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <img
          src="./img/batman.jpg"
          alt="Batman"
          className="w-48 h-48 rounded-full border-4 border-yellow-400 shadow-lg mb-6 object-cover bg-gray-800"
        />
        <h2 className="text-4xl font-bold mb-4">Batman</h2>
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Batman, also known as Bruce Wayne, is one of the most iconic superheroes in the DC Universe. 
          Known as the “Dark Knight,” he fights crime in Gotham City using his intelligence, detective skills, 
          martial arts, and advanced technology.
        </p>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-16 px-6">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-8">Batman Movies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-400/30 transition"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h4 className="text-xl font-bold">{movie.title} ({movie.year})</h4>
                <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Batman */}
      <section id="about" className="py-16 px-6 bg-gray-800/50">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">About Batman</h3>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Batman was created by artist Bob Kane and writer Bill Finger, and first appeared in 
          *Detective Comics #27* in 1939. Unlike most superheroes, Batman has no superpowers — 
          instead, he relies on his genius intellect, physical training, wealth, and strong moral code.  
          He is a founding member of the Justice League and one of the most enduring characters in popular culture.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-black">
        © {new Date().getFullYear()} Batman Universe | Built with React + Tailwind
      </footer>
    </div>
  );
}

