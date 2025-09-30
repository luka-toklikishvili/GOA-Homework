import {
  Home,
  AccountBalance,
  Payment,
  TrendingUp,
  CreditCard,
  AccountBalanceWallet,
  Build,
  CardGiftcard,
  Settings,
  Notifications,
  Search,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";

function App() {
  const [activeTab, setActiveTab] = useState("preferences");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-purple-600 mb-8">BankDash.</h1>
        <nav className="flex-1 space-y-4">
          <NavItem icon={<Home fontSize="small" />} text="Dashboard" />
          <NavItem icon={<TrendingUp fontSize="small" />} text="Transactions" />
          <NavItem icon={<AccountBalance fontSize="small" />} text="Accounts" />
          <NavItem icon={<Payment fontSize="small" />} text="Investments" />
          <NavItem icon={<CreditCard fontSize="small" />} text="Credit Cards" />
          <NavItem
            icon={<AccountBalanceWallet fontSize="small" />}
            text="Loans"
          />
          <NavItem icon={<Build fontSize="small" />} text="Services" />
          <NavItem icon={<CardGiftcard fontSize="small" />} text="My Privileges" />
        </nav>
        <div className="mt-auto">
          <NavItem icon={<Settings fontSize="small" />} text="Setting" active />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <h2 className="text-lg font-semibold">Setting</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
              <Search fontSize="small" className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search for something"
                className="bg-transparent outline-none text-sm"
              />
            </div>
            <Settings className="text-gray-500 cursor-pointer" fontSize="small" />
            <Notifications className="text-gray-500 cursor-pointer" fontSize="small" />
            <Avatar alt="User" src="https://i.pravatar.cc/40" />
          </div>
        </header>

        {/* Settings Tabs */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow p-6">
            {/* Tabs */}
            <div className="flex border-b mb-6 space-x-6">
              {["Edit Profile", "Preferences", "Security"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === tab.toLowerCase()
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Preferences */}
            {activeTab === "preferences" && (
              <div>
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
                  <Toggle
                    label="There are recommendation for my account"
                    defaultChecked
                  />
                </div>

                <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg">
                  Save
                </button>
              </div>
            )}

            {/* Security */}
            {activeTab === "security" && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Security</h2>
                <Toggle
                  label="Enable or disable two factor authentication"
                  defaultChecked
                />

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

                <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg">
                  Save
                </button>
              </div>
            )}

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
                <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg">
                  Save
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

/* Sidebar Item Component */
function NavItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "text-purple-600 font-semibold" : "text-gray-600"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

/* Toggle Component */
function Toggle({ label, defaultChecked }) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="hidden peer"
      />
      <div className="w-10 h-5 bg-gray-300 rounded-full p-1 peer-checked:bg-purple-600 relative transition">
        <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
      </div>
      <span className="text-sm">{label}</span>
    </label>
  );
}

export default App;