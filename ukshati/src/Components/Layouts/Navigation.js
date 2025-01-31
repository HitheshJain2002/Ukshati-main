import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import "../Styles/Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://www.gogreendrip.com/GoGreen/GoGreen/images/logowithleaf.png"
            alt="Logo"
            className="w-36 h-auto"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className="text-gray-700 text-lg font-medium hover:text-green-600"
              activeClassName="text-green-600 border-b-2 border-green-600"
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center space-x-2">
          <NavLink
            to="/login"
            className="flex items-center space-x-1 text-gray-700 text-lg font-medium hover:text-green-600"
          >
            <FaUserCircle className="text-2xl" />
            <span>Login</span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="text-gray-700 text-lg font-medium hover:text-green-600"
                activeClassName="text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className="flex items-center space-x-1 text-gray-700 text-lg font-medium hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              <FaUserCircle className="text-2xl" />
              <span>Login</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
