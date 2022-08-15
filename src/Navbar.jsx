import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header-icon" onClick={handleClick}>
        {click ? (
          <img className="close-icon" src="closeicon.png" alt="close menu" />
        ) : (
          <img
            className="dropdown-icon"
            src="dropdownicon.png"
            alt="dropdown menu"
          />
        )}
      </div>
      {click && (
        <div className="dropdown-menu">
          <ul onClick={handleClick}>
            <Link to="/">
              <li>About Me</li>
            </Link>
            <Link to="coding-projects">
              <li>Coding Projects</li>
            </Link>
            <Link to="personal-projects">
              <li>Personal Projects</li>
            </Link>
            <Link to="contact">
              <li>Contact Me</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
