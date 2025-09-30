import React from "react";

const ResponsiveLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Responsive Grid Layout</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 w-full max-w-6xl">
        <div className="bg-pink-800 h-32 col-span-1 sm:col-span-2 lg:col-span-12 rounded"></div>

        <div className="bg-pink-600 h-32 col-span-1 sm:col-span-1 lg:col-span-4 rounded"></div>
        <div className="bg-pink-500 h-32 col-span-1 sm:col-span-1 lg:col-span-4 rounded"></div>
        <div className="bg-pink-400 h-32 col-span-1 sm:col-span-2 lg:col-span-4 rounded"></div>

        <div className="bg-pink-300 h-32 col-span-1 sm:col-span-2 lg:col-span-6 rounded"></div>
        <div className="bg-pink-200 h-32 col-span-1 sm:col-span-2 lg:col-span-6 rounded"></div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
