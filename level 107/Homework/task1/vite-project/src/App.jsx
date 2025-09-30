import React from 'react';

const ResponsiveLayoutDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-purple-400 to-green-500">

      <div className="bg-white p-6 md:p-10 lg:p-12 rounded-lg shadow-2xl max-w-7xl w-full">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Responsive Grid Layout</h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-green-700 h-24 rounded flex items-center justify-center text-white text-lg font-semibold">
            Header / Full-width Section
          </div>

          {/* Medium blocks */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-green-600 h-24 rounded flex items-center justify-center text-white text-lg font-semibold">
            Main Content 1
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-green-600 h-24 rounded flex items-center justify-center text-white text-lg font-semibold">
            Main Content 2
          </div>

          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item A</div>
          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item B</div>
          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item C</div>
          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item D</div>

          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item E</div>
          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item F</div>
          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item G</div>
          <div className="col-span-1 bg-green-500 h-20 rounded flex items-center justify-center text-white text-sm">Item H</div>

          <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-green-700 h-24 rounded flex items-center justify-center text-white text-lg font-semibold">
            Footer / Bottom Section
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayoutDemo;
