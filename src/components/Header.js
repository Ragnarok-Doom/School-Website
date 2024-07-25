// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-black bg-slate-100 flex items-center justify-between h-[6vh] px-4">
      <div className="hidden md:flex space-x-5">
        <ul className="flex space-x-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/academics"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Academics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Admissions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faculty"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-slate-100 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-center mt-16 space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/academics"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Academics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Admissions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faculty"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Faculty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-2 rounded" : "hover:underline px-3 py-2"
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
