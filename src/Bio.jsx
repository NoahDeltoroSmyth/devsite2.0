import React from "react";
import { Link } from "react-router-dom";

function Bio() {
  return (
    <div>
      <h1>Noah Del Toro Smyth</h1>
      <img src="profilepic.jpg" alt="Noah Smyth"></img>
      <h2>
        software engineer with a keen eye for design, accuracy, and a passion
        for problem-solving. Well-versed in the HTML, CSS, and Javascript
        languages. At heart an artist of functionality welcoming to new
        challenges that strengthen the ability to write DRY code.
      </h2>
      <Link to="/contact">
        <h3>Contact Me!</h3>
      </Link>
      <a
        href="https://www.canva.com/design/DAE4pvlZQA0/view"
        target="_blank"
        rel="noreferrer"
      >
        <h3>Resume</h3>
      </a>
    </div>
  );
}

export default Bio;
