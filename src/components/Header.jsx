import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const linkClicked = useRef();

  return (
    <header className="text-gray-400 bg-dark-coffee body-font block z-50 fixed w-full shadow-xl">
      <nav className="contanier mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
        <div className="md:hidden">
          <button onClick={() => setShowNav(!showNav)}>
            <div className="w-9 h-7 shadow bg-stone-700 rounded focus:outline-none hover:bg-stone-600 flex flex-col gap-y-1 my-2">
              <span className="block bg-stone-300 h-0.5 w-5 mt-1.5 ml-2"></span>
              <span className="block bg-stone-300 h-0.5 w-5 ml-2"></span>
              <span className="block bg-stone-300 h-0.5 w-3 ml-2"></span>
            </div>
          </button>
        </div>
        <div className="flex title-font font-bold items-center text-white">
          <img
            className="w-11 h-11 p-1 object-center bg-[#A5662A] rounded-full"
            src="src/assets/logo.jpg"
            alt="logo"
          />
          <span className="ml-3 text-xl md:text-3xl font-cormorant">
            Panda Coffee House
          </span>
        </div>

        <ul
          className={`z-10 bg-dark-coffee px-16 md:p-0 absolute h-screen md:h-10 ${
            showNav ? "flex" : "hidden"
          } flex-col gap-y-12 items-start justify-center md:relative left-0 top-20 md:inset-0 mx-auto md:flex md:flex-row md:items-center text-base`}
          id="responsiveNav"
        >
          <li className="navLinkStyle">
            <NavLink activeclassname="active" to="/">
              HOME
            </NavLink>
          </li>
          <li activeclassname="active" className="navLinkStyle">
            <NavLink to="/About">ABOUT</NavLink>
          </li>
          <li activeclassname="active" className="navLinkStyle">
            <NavLink to="/Menu">MENU</NavLink>
          </li>
          <li activeclassname="active" className="navLinkStyle">
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
        </ul>

        <button className="inline-flex items-center bg-stone-700 border-0 py-1 px-3 focus:outline-none hover:bg-stone-600 rounded text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-stone-300"
          >
            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
