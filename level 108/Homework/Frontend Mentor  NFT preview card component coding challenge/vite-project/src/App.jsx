function App() {
  return (
    <main className="bg-slate-950 flex justify-center items-center min-h-screen">
      <div className="bg-indigo-950 text-violet-50 p-5 shadow-lg rounded-2xl max-w-xs">
        <div className="relative">
          <img
            src="https://i.ibb.co/hX3Gm4B/nftcatimg.png"
            alt="cat image"
            className="block rounded-xl"
          />
          <img
            src="https://i.ibb.co/c3K6qF8/Untitled-design-5.png"
            alt="pixelated cat image"
            className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl"
          />
        </div>

        <h1 className="font-normal text-xl py-4 cursor-pointer hover:text-fuchsia-400 duration-100 max-w-fit">
          QuantumKitten <span className="font-semibold">#6566</span>
        </h1>
        <p className="font-light">
          QuantumKitten offers a touch of feline finesse blended with pure
          stillness.
        </p>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/hyfJ4j2/Untitled-Artwork-4.png"
              alt="cat icon"
              className="w-5 mr-1"
            />
            <p className="font-normal text-fuchsia-400">0.033 CAT</p>
          </div>

          <div className="flex items-center">
            <i className="fa-solid fa-clock pr-2"></i>
            <p className="font-light">3 days left</p>
          </div>
        </div>

        <hr />

        <div className="flex items-center mt-4 mb-2">
          <img
            src="https://i.ibb.co/QmPYs7c/Untitled-design-7.png"
            alt=""
            className="profilepic w-7 h-7 mr-3"
          />
          <p className="font-light">
            Creation of{" "}
            <strong className="text-white/90 cursor-pointer hover:text-fuchsia-400 duration-100">
              elliezub
            </strong>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;