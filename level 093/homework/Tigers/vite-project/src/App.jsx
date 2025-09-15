import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 text-gray-800">
      <header className="bg-white/70 backdrop-blur sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold">T</div>
            <h1 className="text-xl font-semibold">Tigers: Majesty & Conservation</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#facts" className="hover:underline">Facts</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#conservation" className="hover:underline">Conservation</a>
          </nav>
          <div className="md:hidden"></div>
        </div>
      </header>


      <main className="max-w-6xl mx-auto px-6 py-12">

  
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">The Tiger — an icon of wild power</h2>
            <p className="mt-4 text-lg text-gray-600">
              Tigers are the largest wild cats in the world. They are solitary, territorial predators that play a crucial role in
              maintaining the health of the ecosystems where they live.
            </p>
            


            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#conservation" className="inline-block px-5 py-3 rounded-full bg-orange-500 text-white font-semibold shadow hover:scale-105 transition">Learn how to help</a>
              <a href="#gallery" className="inline-block px-5 py-3 rounded-full border border-orange-300 text-orange-700 font-semibold hover:bg-orange-50 transition">See gallery</a>
            </div>

      </main>


    </div>
  )
}
