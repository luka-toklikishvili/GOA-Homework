import React from 'react'

export default function App() {
  return (
    <div className='justify-center justify-items-center'>
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-yellow-400">🦇 Batman</h1>
        <p className="mt-4 text-lg text-gray-300">
          The Dark Knight of Gotham City
        </p>
      </header>

      <main className="max-w-3xl text-center px-6">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
          About Batman
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Batman, also known as Bruce Wayne, is a billionaire philanthropist
          who fights crime in Gotham City. Unlike most superheroes, Batman
          has no superpowers—he relies on his intellect, detective skills,
          technology, and martial arts to bring justice to the city.
        </p>
      </main>

      <footer className="mt-10 py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Gotham City Chronicles
      </footer>

    </div>
  )
}
