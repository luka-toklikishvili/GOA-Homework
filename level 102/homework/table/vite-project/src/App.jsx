import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Preferences");
  const [twoFactor, setTwoFactor] = useState(true);
  const [notification, setNotification] = useState({
    sendReceive: true,
    merchant: false,
    recommendation: true,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {["Edit Profile", "Preferences", "Security"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 -mb-px font-medium border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Preferences" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Currency
                </label>
                <input
                  type="text"
                  defaultValue="USD"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Time Zone
                </label>
                <input
                  type="text"
                  defaultValue="(GMT-12:00) International Date Line West"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Notification
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notification.sendReceive}
                    onChange={() =>
                      setNotification((prev) => ({
                        ...prev,
                        sendReceive: !prev.sendReceive,
                      }))
                    }
                    className="w-5 h-5 text-blue-600"
                  />
                  I send or receive digital currency
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notification.merchant}
                    onChange={() =>
                      setNotification((prev) => ({
                        ...prev,
                        merchant: !prev.merchant,
                      }))
                    }
                    className="w-5 h-5 text-blue-600"
                  />
                  I receive merchant order
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={notification.recommendation}
                    onChange={() =>
                      setNotification((prev) => ({
                        ...prev,
                        recommendation: !prev.recommendation,
                      }))
                    }
                    className="w-5 h-5 text-blue-600"
                  />
                  There are recommendation for my account
                </label>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
              Save
            </button>
          </div>
        )}

        {activeTab === "Security" && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span>Two-factor Authentication</span>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
                className="w-6 h-6 text-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
