import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav>
      <div onClick={handleClick}>
        {click ? (
          <>
            <img src="closeicon.png" alt="close menu" />
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
          </>
        ) : (
          <img src="dropdownicon.png" alt="dropdown menu" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
