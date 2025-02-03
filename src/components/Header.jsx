import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "@fontsource/poppins/700.css";

const Header = ({ darkMode, setDarkMode }) => {
  return (
   <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-4 md:px-20 fixed top-0 left-0 w-full max-w-screen">
      <div className="container flex flex-col items-center md:items-start md:flex-row justify-between">
        <a href = "#home" >
         <h1 className="text-xl md:text-2xl font-bold text-blue-500 dark:text-blue-500 cursor-pointer">Leul Makonnen</h1>
        </a>
        <nav className="mt-2 md:mt-0">
          <ul className="flex space-x-4 md:space-x-6 font-bold text-sm md:text-lg">
            <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Skills</a></li>
            <li><a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/leul-makonnen-715508260" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/leul8" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-github"></i></a></li>

          </ul>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl md:text-2xl focus:outline-none transition duration-500 ease-in-out mt-2 md:mt-0"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>
      </div>
    </header>
  );
};



export default Header;