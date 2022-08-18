import React from "react";

function Contact() {
  return (
    <>
      <h1 className="contact-header">Get in Touch!</h1>
      <hr></hr>
      <div className="contact-links">
        <a
          className="link-anchor"
          href="https://www.linkedin.com/in/noahdeltorosmyth/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-image" src="linkedin.gif" alt="linkedin logo" />
          <p className="link-caption">Linkedin</p>
        </a>
        <a className="link-anchor" href="mailto:noahsmyth96@gmail.com">
          <img className="link-image" src="email4.gif" alt="email logo" />
          <p className="link-caption">Email</p>
        </a>
        <a
          className="link-anchor"
          href="https://www.canva.com/design/DAE4pvlZQA0/view"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-image" src="resume.gif" alt="resume logo" />
          <p className="link-caption">Resume</p>
        </a>
        <a
          className="link-anchor"
          href="https://www.instagram.com/_metallurgia_/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="link-image"
            src="instagram.gif"
            alt="instagram logo"
          />
          <p className="link-caption">Instagram</p>
        </a>
        <a
          className="link-anchor"
          href="https://github.com/NoahDeltoroSmyth"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-image" src="github.gif" alt="github logo" />
          <p className="link-caption">Github</p>
        </a>
      </div>
      <hr></hr>
    </>
  );
}

export default Contact;
