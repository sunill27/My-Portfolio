import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuToggle = () => {
  // State to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // Toggle function
  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Effect to close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div>
      <label
        htmlFor="menu-toggle"
        className="cursor-pointer md:hidden block"
        onClick={handleToggle}
      >
        <svg
          className="fill-current text-gray-700 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>{isMenuOpen ? "Close menu" : "Open menu"}</title>
          <path
            d={
              isMenuOpen
                ? "M0 6h20v2H0V6zm0 6h20v2H0v-2zm0 6h20v2H0v-2z"
                : "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            }
          ></path>
        </svg>
      </label>

      {/* Conditionally render the menu */}
      {isMenuOpen && (
        <div
          id="menu"
          className={`fixed top-0 right-0 bg-black bg-opacity-30 w-3/4 h-full p-[4.5rem] pt-[4.5rem] pl-[3rem] backdrop-blur-md transition-all duration-400 ${
            isMenuOpen ? "right-0" : "right-full"
          } z-50`}
        >
          {/* Your menu items here */}
          <ul className="flex flex-col gap-12 text-xl text-white">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 focus:text-green-600 active:text-green-600"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 focus:text-green-600 active:text-green-600"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:text-green-600 focus:text-green-600 active:text-green-600"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-green-600 focus:text-green-600 active:text-green-600"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 focus:text-green-600 active:text-green-600"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;
