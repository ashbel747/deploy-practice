import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 text-gray-800 dark:text-white">
        <a href="#home" className="text-2xl font-bold">MyRestaurant</a>

        <ul className="hidden md:flex gap-6 text-lg">
          <li><a href="#home">Home</a></li>
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer">Menu</span>
            {showDropdown && (
              <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-lg w-48 py-2 rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><a href="#starters">Starters</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><a href="#main">Main Course</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><a href="#desserts">Desserts</a></li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"><a href="#drinks">Drinks</a></li>
              </ul>
            )}
          </li>
          <li><a href="#footer">Footer</a></li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}
