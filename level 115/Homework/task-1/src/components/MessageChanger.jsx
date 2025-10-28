import React, { useState } from "react";

export default function MessageChanger() {
  const [message, setMessage] = useState("Welcome!");
  function changeMessage() {
    setMessage("Have a great day!");
  }

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">{message}</h2>
      <button
        onClick={changeMessage}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Change Message
      </button>
    </div>
  );
}
