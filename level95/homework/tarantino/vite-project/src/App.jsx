import React from "react";

const movies = [
  {
    title: "Pulp Fiction",
    year: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg",
  },
  {
    title: "Reservoir Dogs",
    year: 1992,
    description:
      "After a botched robbery, tensions rise between criminals who suspect one of them is an undercover cop.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Reservoir_dogs_ver1.jpg",
  },
  {
    title: "Kill Bill: Vol. 1",
    year: 2003,
    description:
      "A former assassin seeks revenge on her ex-colleagues who betrayed her.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cf/Kill_Bill_Volume_1.png",
  },
  {
    title: "Inglourious Basterds",
    year: 2009,
    description:
      "A group of Jewish-American soldiers plan to assassinate Nazi leaders in occupied France.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",
  },
  {
    title: "Django Unchained",
    year: 2012,
    description:
      "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
  },
  {
    title: "Once Upon a Time in Hollywood",
    year: 2019,
    description:
      "A faded television actor and his stunt double strive to achieve fame in 1969 Los Angeles.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/82/Once_Upon_a_Time_in_Hollywood_poster.png",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-lg shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-500">🎬 Quentin Tarantino Movies</h1>
        <nav className="flex gap-6 text-gray-300">
          <a href="#movies" className="hover:text-red-400">Movies</a>
          <a href="#about" className="hover:text-red-400">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <img
          src="./img/tarantino.jpg"
          alt="Quentin Tarantino"
          className="w-48 h-48 rounded-full border-4 border-red-500 shadow-lg mb-6 object-cover"
        />
        <h2 className="text-4xl font-bold mb-4">Quentin Tarantino</h2>
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Quentin Tarantino is an American filmmaker known for his stylized storytelling, nonlinear narratives, 
          dark humor, and iconic characters. His movies are considered modern classics.
        </p>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-16 px-6">
        <h3 className="text-2xl font-semibold text-red-400 mb-8">Movies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-red-600/30 transition"
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

      {/* About Tarantino */}
      <section id="about" className="py-16 px-6 bg-gray-800/50">
        <h3 className="text-2xl font-semibold text-red-400 mb-6">About Quentin Tarantino</h3>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Quentin Tarantino (born March 27, 1963) is a director, screenwriter, producer, and actor.
          He is one of the most influential filmmakers of the modern era, often blending pop culture,
          violence, and humor in unique ways. His works include some of the most iconic films in cinema history.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-gray-900">
        © {new Date().getFullYear()} Tarantino Movies | Built with React + Tailwind
      </footer>
    </div>
  );
}
