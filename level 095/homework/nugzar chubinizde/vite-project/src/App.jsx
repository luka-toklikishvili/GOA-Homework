import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-lg shadow-md p-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-red-500">Nugzara Chubinidze</h1>
        <nav className="flex gap-6 text-gray-300">
          <a href="#bio" className="hover:text-red-400">Biography</a>
          <a href="#works" className="hover:text-red-400">Works</a>
          <a href="#gallery" className="hover:text-red-400">Gallery</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <img
          src="./img/tope.jpg"
          alt="Nugzara Chubinidze"
          className="w-48 h-48 rounded-full border-4 border-red-500 shadow-lg mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">Nugzara Chubinidze</h2>
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Here you can add a short introduction about Nugzara Chubinidze —
          his biography, work, and contributions in culture or society.
        </p>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-16 px-6 bg-gray-800/50">
        <h3 className="text-2xl font-semibold text-red-400 mb-6">Biography</h3>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          Add detailed biography about Nugzara Chubinidze here. You can include
          date of birth, education, career path, and other important
          information.
        </p>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 px-6">
        <h3 className="text-2xl font-semibold text-red-400 mb-6">Works</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="bg-gray-700/50 p-4 rounded-xl hover:bg-gray-700 transition">
            🎵 Work 1
          </li>
          <li className="bg-gray-700/50 p-4 rounded-xl hover:bg-gray-700 transition">
            🎵 Work 2
          </li>
          <li className="bg-gray-700/50 p-4 rounded-xl hover:bg-gray-700 transition">
            🎵 Work 3
          </li>
        </ul>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6 bg-gray-800/50">
        <h3 className="text-2xl font-semibold text-red-400 mb-6">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-xl h-48 flex items-center justify-center">
            📷 Photo 1
          </div>
          <div className="bg-gray-700 rounded-xl h-48 flex items-center justify-center">
            📷 Photo 2
          </div>
          <div className="bg-gray-700 rounded-xl h-48 flex items-center justify-center">
            📷 Photo 3
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-gray-900">
        © {new Date().getFullYear()} Nugzara Chubinidze | Built with React + Tailwind
      </footer>
    </div>
  );
}
