import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Overview', icon: '📊', path: '/' },
  { label: 'Transactions', icon: '💳', path: '/transactions' },
  { label: 'Budget', icon: '📁', path: '/budget' },
  { label: 'Settings', icon: '⚙️', path: '/settings' },
];

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <aside className="w-64 bg-white border-r shadow-md hidden md:flex flex-col p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide">FinTrack</h1>
          <p className="text-xs text-gray-400 mt-1">Your finance dashboard</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t text-xs text-gray-400">
          <p className="text-center">© 2025 FinTrack Inc.</p>
        </div>
      </aside>

      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">FinTrack</h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-[56px] left-0 right-0 bg-white shadow-md border-b z-40">
          <nav>
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-gray-200 last:border-0">
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)} 
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm ${
                        isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="md:hidden h-[56px]" />
    </>
  );
};

export default Sidebar;
