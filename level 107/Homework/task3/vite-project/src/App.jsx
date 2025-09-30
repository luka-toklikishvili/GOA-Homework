import React from "react";

const ResponsiveGrid = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">Responsive Grid</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
        <div className="bg-red-400 h-32 flex items-center justify-center text-xl font-bold rounded">
          1
        </div>
        <div className="bg-orange-400 h-32 flex items-center justify-center text-xl font-bold rounded">
          2
        </div>
        <div className="bg-yellow-300 h-32 flex items-center justify-center text-xl font-bold rounded">
          3
        </div>
        <div className="bg-green-300 h-32 flex items-center justify-center text-xl font-bold rounded">
          4
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
