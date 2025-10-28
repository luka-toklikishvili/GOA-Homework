import React, { useState } from "react";

export default function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleText() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-2xl shadow p-6">
      <button
        onClick={toggleText}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mb-4"
      >
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
      {isVisible && <p className="text-lg font-medium">Hello World!</p>}
    </div>
  );
}
