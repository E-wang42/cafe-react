import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/About">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">MENU</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
