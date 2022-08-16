import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/contact">
        <h3 className="footer-link">Contact Me</h3>
      </Link>
      <a
        href="https://www.canva.com/design/DAE4pvlZQA0/view"
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="footer-link">Resume</h3>
      </a>
    </div>
  );
};

export default Footer;
