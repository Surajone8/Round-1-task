import { FaUser, FaLock, FaBell, FaPalette } from 'react-icons/fa';

const SettingsPage = () => {
  return (
    <div className="p-6 space-y-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4 gap-3">
          <FaUser className="text-xl text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-800">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">Phone</label>
            <input
              type="tel"
              placeholder="+91 1234567890"
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">Upload Avatar</label>
            <input
              type="file"
              className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4 gap-3">
          <FaPalette className="text-xl text-pink-500" />
          <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-800">Theme</label>
            <select className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400">
              <option>System Default</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-800">Language</label>
            <select className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4 gap-3">
          <FaLock className="text-xl text-red-500" />
          <h2 className="text-xl font-semibold text-gray-900">Security</h2>
        </div>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-800">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <label className="text-gray-800 font-medium">Enable Two-Factor Authentication</label>
            <input type="checkbox" className="toggle toggle-error" />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4 gap-3">
          <FaBell className="text-xl text-yellow-500" />
          <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
        </div>
        <div className="space-y-3">
          {[
            'Email Alerts',
            'Push Notifications',
            'Monthly Reports',
            'SMS Notifications',
          ].map((label) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-gray-800">{label}</span>
              <input type="checkbox" className="toggle toggle-success" />
            </div>
          ))}
        </div>
      </section>

      <div className="sticky bottom-4 bg-gray-100 p-4 flex justify-end">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
