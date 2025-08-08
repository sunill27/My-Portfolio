import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuToggle from "./MenuToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="dark:bg-gray-800 lg:shadow-lg">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
          <NavLink
            to="/"
            className="text-3xl font-semibold font-serif text-green-500"
          >
            Portfolio
          </NavLink>
          <MenuToggle onClick={handleToggle} isOpen={isMenuOpen} />
        </div>

        {/* Mobile Menu Toggle (Hidden by default) */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="menu"
        >
          <nav>
            <ul className="flex flex-col items-center text-base text-gray-700 dark:text-gray-100 pt-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/about"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop Menu (Always visible on medium and larger screens) */}
        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 dark:text-gray-100 pt-4 md:pt-0">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/about"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `md:p-4 py-3 px-0 block ${isActive ? "text-green-500" : ""}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
