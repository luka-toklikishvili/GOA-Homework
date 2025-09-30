import React from "react";

const GridExample = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">Grid In Css</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="bg-green-500 h-32 rounded"></div>
        <div className="bg-green-500 h-32 rounded"></div>
        <div className="bg-green-500 h-32 rounded"></div>
        <div className="bg-green-500 h-32 rounded"></div>
        <div className="bg-green-500 h-32 rounded"></div>
        <div className="bg-green-500 h-32 rounded"></div>
      </div>
    </div>
  );
};

export default GridExample;
