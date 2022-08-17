import React from "react";

function Contact() {
  return (
    <>
      <h1 className="contact-header">Get in Touch!</h1>
      <hr></hr>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/noahdeltorosmyth/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-image" src="linkedin.gif" alt="linkedin logo" />
        </a>
        <a href="mailto:noahsmyth96@gmail.com">
          <img className="link-image" src="email4.gif" alt="email logo" />
        </a>
        <a
          href="https://www.canva.com/design/DAE4pvlZQA0/view"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-image" src="resume.gif" alt="resume logo" />
        </a>
        <a
          href="https://www.instagram.com/_metallurgia_/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="link-image"
            src="instagram.gif"
            alt="instagram logo"
          />
        </a>
        <a
          href="https://github.com/NoahDeltoroSmyth"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-image" src="github.gif" alt="github logo" />
        </a>
      </div>
      <hr></hr>
    </>
  );
}

export default Contact;
