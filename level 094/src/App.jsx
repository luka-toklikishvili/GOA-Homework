import React, { useState } from "react";

const extensionsData = [
  {
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    color: "bg-green-300",
  },
  {
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    color: "bg-blue-300",
  },
  {
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    color: "bg-pink-300",
  },
  {
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    color: "bg-purple-300",
  },
  {
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    color: "bg-indigo-300",
  },
  {
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    color: "bg-teal-300",
  },
  {
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    color: "bg-orange-300",
  },
  {
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    color: "bg-green-400",
  },
];

export default function ExtensionsDashboard() {
  const [activeTab, setActiveTab] = useState("All");
  const [extensions, setExtensions] = useState(
    extensionsData.map((ext) => ({ ...ext, active: true }))
  );

  // toggle extension on/off
  const toggleExtension = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  // remove extension from list
  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  // filter based on activeTab
  const filteredExtensions =
    activeTab === "All"
      ? extensions
      : extensions.filter((ext) =>
          activeTab === "Active" ? ext.active : !ext.active
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span className="bg-red-600 p-2 rounded-full shadow-md">⚙️</span>{" "}
          Extensions
        </h1>

        {/* Buttons instead of input */}
        <div className="flex gap-3">
          {["All", "Active", "Inactive"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl font-medium transition ${
                activeTab === tab
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Extensions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredExtensions.map((ext) => (
          <div
            key={ext.name}
            className="bg-gray-800/90 backdrop-blur-lg text-white rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:shadow-red-600/20 transition"
          >
            <div className="space-y-4">
              <div
                className={`w-12 h-12 ${ext.color} rounded-xl flex items-center justify-center text-black text-lg font-bold shadow`}
              >
                ⚡
              </div>
              <h2 className="text-lg font-semibold">{ext.name}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {ext.description}
              </p>
              <div className="flex items-center justify-between mt-5">
                <button
                  onClick={() => removeExtension(ext.name)}
                  className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-1.5 rounded-lg transition"
                >
                  Remove
                </button>

                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ext.active}
                    onChange={() => toggleExtension(ext.name)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-600 transition"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transition peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



