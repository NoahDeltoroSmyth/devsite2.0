import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="contact-link" to="/contact">
        <h3>Contact Me</h3>
      </Link>
      <a
        className="resume-link"
        href="https://www.canva.com/design/DAE4pvlZQA0/view"
        target="_blank"
        rel="noreferrer"
      >
        <h3>Resume</h3>
      </a>
    </div>
  );
};

export default Footer;
