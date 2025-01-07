import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import "../Styles/Navigation.css";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://www.gogreendrip.com/GoGreen/GoGreen/images/logowithleaf.png"
            alt="Logo"
            className="w-36 h-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-gray-700 text-lg font-medium hover:text-green-600"
            activeClassName="text-green-600 border-b-2 border-green-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 text-lg font-medium hover:text-green-600"
            activeClassName="text-green-600 border-b-2 border-green-600"
          >
            About
          </NavLink>
          <NavLink
            to="/product"
            className="text-gray-700 text-lg font-medium hover:text-green-600"
            activeClassName="text-green-600 border-b-2 border-green-600"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 text-lg font-medium hover:text-green-600"
            activeClassName="text-green-600 border-b-2 border-green-600"
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className="text-gray-700 text-lg font-medium hover:text-green-600"
            activeClassName="text-green-600 border-b-2 border-green-600"
          >
            Blog
          </NavLink>
        </div>

        {/* Login Button */}
        <div className="flex items-center space-x-2">
          <NavLink
            to="/login"
            className="flex items-center space-x-1 text-gray-700 text-lg font-medium hover:text-green-600"
          >
            <FaUserCircle className="text-2xl" />
            <span>Login</span>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
