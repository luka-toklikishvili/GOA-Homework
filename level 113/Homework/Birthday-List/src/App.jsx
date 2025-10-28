import React from "react";

export default function BirthdayList() {
  const birthdays = [
    {
      id: 1,
      name: "Ana Kobakhidze",
      date: "2025-10-25",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Luka Japaridze",
      date: "2025-10-27",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Mariam Abashidze",
      date: "2025-10-29",
      img: "https://i.pravatar.cc/100?img=3",
    },
  ];

  // format date nicely
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
    });
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-100">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        📅 Birthdays This Week
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {birthdays.map((person) => (
          <div
            key={person.id}
            className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-indigo-50 transition"
          >
            <img
              src={person.img}
              alt={person.name}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <div>
              <p className="font-medium text-gray-800">{person.name}</p>
              <p className="text-sm text-gray-500">{formatDate(person.date)}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        These are local sample data. You can add more birthdays to the array.
      </p>
    </div>
  );
}

