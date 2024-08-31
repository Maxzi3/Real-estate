import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const linkClass = ({isActive}) => isActive
    ? "mr-5 hover:text-secondary text-secondary"
    : "mr-5 hover:text-secondary";
  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <div>
      <header className="text-white body-font bg-primary fixed w-full shadow-md top-0 z-50 ">
        <div className="container mx-auto flex p-5 flex-row justify-between items-center">
          <a className="flex title-font font-medium items-center  hover:text-secondary">
            <span className="ml-3 text-xl">M-HOMES</span>
          </a>

          <div className="md:hidden z-50">
            <button onClick={toggleMenu}>
              {IsOpen ? (
                <FaTimes className="text-textcolor1 text-3xl hover:text-textcolorh2 cursor-pointer" />
              ) : (
                <FaBars className="text-textcolor1 text-3xl hover:text-textcolorh2 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Desktop view for the Menu */}

          <nav className=" hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center z-50 ">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/properties" className={linkClass}>
              All Properties
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About us
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile View for the menu  */}
          <nav
            className={`absolute top-20 right-5 md:hidden h-auto w-72 bg-primary  flex-col items-center justify-center text-base cursor-pointer list-none transition-transform duration-300 ease-in-out rounded-2xl ${
              IsOpen
                ? " flex opacity-100 transform translate-y-2"
                : "hidden opacity-0 transform translate-y-0"
            }`}
          >
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={linkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/properties"
              onClick={toggleMenu}
              className={linkClass}
            >
              All Properties
            </NavLink>

            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={linkClass}
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={linkClass}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
