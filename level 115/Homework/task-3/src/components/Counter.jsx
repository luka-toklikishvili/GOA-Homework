import React, { useState } from "react";

export default function Counter() {
  // 1️⃣ ვქმნით state-ს საწყისი მნიშვნელობით 0
  const [count, setCount] = useState(0);

  // 2️⃣ ფუნქციები ღილაკებისთვის
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Counter</h2>
      <p className="text-4xl font-bold text-indigo-600">{count}</p>

      <div className="flex gap-3">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          ➖
        </button>
        <button
          onClick={reset}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium"
        >
          🔄
        </button>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          ➕
        </button>
      </div>
    </div>
  );
}
