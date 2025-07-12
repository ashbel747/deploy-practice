import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import NavBarLogo from '../assets/nav-bar-logo.jpeg'


export default function Navbar() {
  //Setting theme mode and dropdown states
  const [darkMode, setDarkMode] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);

  //Getting the saved theme from the local storage and setting it
  useEffect(() => {
    const theme = localStorage.getItem('currentTheme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  //Theme toggle logic
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');//Toggling the dark class
      localStorage.setItem('currentTheme', 'dark');//Saving it to local storage
    } else {
      document.documentElement.classList.remove('dark');//Toggling the dark class
      localStorage.setItem('currentTheme', 'light');//Saving it to local storage
    }
  };
  //Smooth scroll
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  };

  //Sticky Navigation
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //Hamburger button
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-amber-600 shadow" : "bg-amber-600 shadow"} dark:bg-gray-800`}>
      <section className="max-w-4xl flex flex-wrap justify-between items-center">
        <img src={NavBarLogo} className="w-full h-auto mr-auto min-w-[150px] max-w-[293px]"></img>
        <nav className="hidden md:flex max-w-7xl mx-auto justify-between items-center px-4 py-3 text-gray-800 dark:text-white">
            <ul className="md:flex gap-14 text-lg items-center">
              <button onClick={() => scrollToSection('hero')} className="cursor-pointer">
                Home
              </button>


              <li
                className="relative"
                onMouseEnter={() => setMenuDropdown(true)}
                onMouseLeave={() => setMenuDropdown(false)}
              >
                <span className="cursor-pointer">Menu</span>
                {menuDropdown && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-amber-600 dark:bg-gray-800 shadow-lg rounded-md py-2 z-50">
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Link to="/menu/starters">Starters</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Link to="/menu/main dishes">Main Dishes</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Link to="/menu/drinks">Drinks</Link>
                    </li>
                  </ul>
                )}
              </li>

              <button onClick={() => scrollToSection('story')} className="cursor-pointer">
                Our Story
              </button>
              
              <button onClick={() => scrollToSection('dishes')} className="cursor-pointer">
                Signature Dishes
              </button>
            </ul>

          </nav>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-none text-sm"
          >
            {darkMode ? <FaRegSun className='hover:text-orange-400'  /> : <FaRegMoon className='hover:text-white'  />}
          </button>

          <div className="md:hidden mb-4 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <button  
                className="mb-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </button>

              {isMobileMenuOpen && (
                <ul className="absolute top-full right-0 mt-2 w-48 bg-amber-600 dark:bg-gray-800 shadow-lg rounded-md py-2 z-50">
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button onClick={() => scrollToSection('hero')} className="cursor-pointer">
                        Home
                      </button>
                    </li>
                    <li className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuDropdown(prev => !prev)
                        }}
                        className="cursor-pointer w-full text-left px-4 py-2"
                      >
                        Menu
                      </button>

                      {menuDropdown && (
                        <ul className="absolute top-full left-0 mt-2 w-48 bg-amber-600 dark:bg-gray-800 shadow-lg rounded-md py-2 z-50">
                          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="/menu/starters">Starters</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="/menu/main dishes">Main Dishes</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link to="/menu/drinks">Drinks</Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button onClick={() => scrollToSection('story')} className="cursor-pointer">
                        Our Story
                      </button>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <button onClick={() => scrollToSection('dishes')} className="cursor-pointer">
                        Signature Dishes
                      </button>
                    </li>
                </ul>
              )}
            </div>
      </section>
      
    </header>

  );
}
