import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Layout */}
      <div className="flex flex-row space-x-2 md:hidden">
        {/* Smallest Phone */}
        <div className="flex flex-col items-center justify-between border-2 border-black rounded-lg w-16 h-28 p-1 bg-white">
          <div className="w-full h-1/3 bg-red-800 rounded-sm"></div>
          <div className="w-full h-1/3 bg-orange-600 rounded-sm"></div>
          <div className="w-full h-1/6 bg-yellow-300 rounded-sm"></div>
        </div>

        {/* Tablet */}
        <div className="flex flex-col items-center justify-between border-2 border-black rounded-lg w-32 h-48 p-2 bg-white">
          <div className="w-full h-1/2 bg-red-800 rounded-sm"></div>
          <div className="flex flex-row w-full h-1/3 space-x-2 mt-2">
            <div className="w-1/2 h-full bg-orange-600 rounded-sm"></div>
            <div className="w-1/2 h-full bg-yellow-300 rounded-sm"></div>
          </div>
        </div>
      </div>


      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col items-center border-2 border-black rounded-lg w-[600px] h-[400px] p-4 bg-white ml-8">
        <div className="flex flex-row w-full h-3/4 space-x-4">
          <div className="w-2/3 h-full bg-red-800 rounded-sm"></div>
          <div className="w-1/3 h-full bg-orange-600 rounded-sm"></div>
        </div>
        <div className="w-full h-1/4 mt-4 bg-yellow-300 rounded-sm"></div>
      </div>
    </div>
  );
}

export default App;