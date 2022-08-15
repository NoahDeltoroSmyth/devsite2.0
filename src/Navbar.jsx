import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <nav>
      <Link to="/">Home</Link>
      <div onClick={handleClick}>
        {click ? <img src="dropdownicon.png" alt="dropdown menu" /> : <img src="closeicon.png" alt="close menu" />}
      </div>
    </nav>
  );
};

export default Navbar;
