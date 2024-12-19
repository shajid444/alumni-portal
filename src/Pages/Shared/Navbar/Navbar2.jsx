import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control dropdown visibility

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-teal-500 shadow-lg relative">
      {/* Left Side - Menu and Buttons */}
      <div className="flex items-center space-x-4">
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
        >
          <span className="text-xl font-bold">☰</span> {/* Menu Icon */}
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-6 bg-white rounded-lg shadow-lg w-48 z-10">
            <ul className="flex flex-col">
              <Link to='/' className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Home</Link>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Events</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Results</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Medal Table</li>
            </ul>
          </div>
        )}

        <Link to='/signUp' className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-md">
          SIGN UP
        </Link>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-md">
          RESULTS
        </button>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-md">
          MEDAL TABLE
        </button>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-md">
          WATCH HIGHLIGHTS
        </button>
      </div>

      {/* Right Side - Shop and Language */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-md">
          SHOP
        </button>
        <button className="px-4 py-2 bg-white rounded-full text-sm font-semibold shadow-md flex items-center">
          ENGLISH <span className="ml-1">▼</span> {/* Dropdown Icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
