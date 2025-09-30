import React from 'react';

const ColorBlockDesign = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white-400">
      <div className="w-64 h-80 shadow-2xl"> 
        <div className="bg-red-600 h-1/6">
        </div>
        <div className="bg-white h-1">
        </div>
        <div className="bg-black h-full">
        </div>
      </div>
    </div>
  );
};

export default ColorBlockDesign;