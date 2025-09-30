import React from "react";

function App() {
  return (
    <div className="p-4">
      <div className="grid gap-4 
                      md:grid-cols-3 
                      sm:grid-cols-2 
                      grid-cols-1">
        <div className="bg-red-500 border-4 border-black h-64"></div>
        <div className="bg-red-500 border-4 border-black h-64"></div>
        <div className="bg-red-500 border-4 border-black h-64 sm:col-span-2 md:col-span-1"></div>
        <div className="bg-green-500 border-4 border-black h-32 sm:col-span-2 md:col-span-3"></div>
      </div>
    </div>
  );
}

export default App;
