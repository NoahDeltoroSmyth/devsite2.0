import React from "react";

function Contact() {
  return (
    <>
      {/* <h1 className="contact-header">
        Get a hold of me at any of the links below
      </h1> */}
      <hr></hr>
      <div className="contact-links">
        <a
          href="https://github.com/NoahDeltoroSmyth"
          target="_blank"
          rel="noreferrer"
        >
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/noahdeltorosmyth/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Linkedin</p>
        </a>
        <a href="mailto:noahsmyth96@gmail.com">
          <p>Noahsmyth96@gmail.com</p>
        </a>
        <a
          href="https://www.canva.com/design/DAE4pvlZQA0/view"
          target="_blank"
          rel="noreferrer"
        >
          <p>Resume</p>
        </a>
        <a
          href="https://www.instagram.com/_metallurgia_/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Instagram</p>
        </a>
      </div>
      <hr></hr>
    </>
  );
}

export default Contact;
