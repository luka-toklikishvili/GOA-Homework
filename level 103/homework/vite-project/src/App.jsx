import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("preferences");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow rounded-2xl p-6">
        {/* Tabs */}
        <div className="flex border-b mb-6 space-x-6">
          {["Edit Profile", "Preferences", "Security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab.toLowerCase()
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Edit Profile */}
        {activeTab === "edit profile" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Save
            </button>
          </div>
        )}

        {/* Preferences */}
        {activeTab === "preferences" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Currency</label>
                <input
                  type="text"
                  value="USD"
                  readOnly
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time Zone</label>
                <input
                  type="text"
                  value="(GMT-12:00) International Date Line West"
                  readOnly
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
            </div>

            {/* Notifications */}
            <div className="mt-6 space-y-3">
              <Toggle label="I send or receive digital currency" defaultChecked />
              <Toggle label="I receive merchant order" />
              <Toggle label="There are recommendation for my account" defaultChecked />
            </div>

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Save
            </button>
          </div>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Security</h2>
            <Toggle label="Enable or disable two factor authentication" defaultChecked />

            <div className="mt-6 space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Toggle({ label, defaultChecked }) {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="toggle-checkbox hidden"
      />
      <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer peer-checked:bg-blue-500 relative">
        <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
      </div>
      <span className="text-sm">{label}</span>
    </label>
  );
}

export default App;
