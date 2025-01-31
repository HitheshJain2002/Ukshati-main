// Import necessary dependencies
import React, { useState } from 'react'; // Import React and useState hook for managing component state
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router for navigation
import { FaUserCircle } from 'react-icons/fa'; // Import user icon from react-icons library
import "../Styles/Navigation.css"; // Import external CSS for styling

// Define the Navigation component
const Navigation = () => {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    // Header container with fixed position and shadow styling
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Navigation bar */}
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://www.gogreendrip.com/GoGreen/GoGreen/images/logowithleaf.png" // Logo source URL
            alt="Logo" // Alternative text for accessibility
            className="w-36 h-auto" // Set width and auto height for responsiveness
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6"> {/* Hidden on mobile, visible on medium and larger screens */}
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name} // Unique key for each link
              to={path} // Path for navigation
              className="text-gray-700 text-lg font-medium hover:text-green-600" // Styling for links
              activeClassName="text-green-600 border-b-2 border-green-600" // Active link styling
            >
              {name} {/* Display link name */}
            </NavLink>
          ))}
        </div>

        {/* Login Button (Visible on Desktop) */}
        <div className="hidden md:flex items-center space-x-2"> {/* Hidden on mobile */}
          <NavLink
            to="/login" // Navigation path to login page
            className="flex items-center space-x-1 text-gray-700 text-lg font-medium hover:text-green-600"
          >
            <FaUserCircle className="text-2xl" /> {/* User icon */}
            <span>Login</span> {/* Login text */}
          </NavLink>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden"> {/* Visible only on mobile */}
          <button
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle navigation" // Accessibility label
            onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu on click
          >
            <svg
              className="w-6 h-6" // Icon size
              xmlns="http://www.w3.org/2000/svg" // SVG namespace
              fill="none"
              viewBox="0 0 24 24" // SVG viewbox
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" // Three-line menu icon
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && ( // Render menu only when isOpen is true
        <div className="md:hidden bg-white shadow-lg"> {/* Hidden on desktop, visible on mobile */}
          <div className="flex flex-col space-y-4 py-4 px-6"> {/* Stack menu items vertically */}
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="text-gray-700 text-lg font-medium hover:text-green-600"
                activeClassName="text-green-600"
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                {name}
              </NavLink>
            ))}
            
            {/* Login Button (Visible on Mobile) */}
            <NavLink
              to="/login"
              className="flex items-center space-x-1 text-gray-700 text-lg font-medium hover:text-green-600"
              onClick={() => setIsOpen(false)} // Close menu when clicked
            >
              <FaUserCircle className="text-2xl" /> {/* User icon */}
              <span>Login</span> {/* Login text */}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation; // Export the component for use in other parts of the application
