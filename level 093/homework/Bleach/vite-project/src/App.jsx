import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-orange-500">🗡️ Bleach</h1>
        <p className="mt-4 text-lg text-gray-300">
          The Story of Ichigo Kurosaki – Substitute Soul Reaper
        </p>
      </header>

      <main className="max-w-3xl text-center px-6">
        <h2 className="text-2xl font-semibold text-orange-500 mb-3">
          About Bleach
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Bleach is a Japanese anime and manga series created by Tite Kubo. It
          follows Ichigo Kurosaki, a teenager who accidentally obtains the powers
          of a Soul Reaper. With his new abilities, he protects humans from evil
          spirits called Hollows and guides souls to the afterlife.
        </p>
      </main>

      <footer className="mt-10 py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Bleach Universe
      </footer>
    </div>
  );
}

