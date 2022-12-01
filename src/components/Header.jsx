import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-400 bg-dark-coffee body-font">
      <nav>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              className="w-11 h-11 p-1 object-center bg-[#A5662A] rounded-full"
              src="src/assets/logo.jpg"
              alt=""
            />
            <span className="ml-3 text-3xl font-cormorant">
              Panda Coffee House
            </span>
          </a>

          <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <li className="navLinkStyle">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="navLinkStyle">
              <NavLink to="/About">ABOUT</NavLink>
            </li>
            <li className="navLinkStyle">
              <NavLink to="/Menu">MENU</NavLink>
            </li>
            <li className="navLinkStyle">
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
          </ul>

          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
