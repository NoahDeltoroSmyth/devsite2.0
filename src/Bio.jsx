import React from "react";

function Bio() {
  return (
    <>
      <div className="main">
        <div className="my-name">
          <h1 className="first-name">Noah</h1>
          <h1 className="middle-name">Del Toro</h1>
          <h1 className="last-name">Smyth</h1>
        </div>
        <img
          className="profile-pic"
          src="profilepic.jpg"
          alt="Noah Smyth"
        ></img>
      </div>
      <h2 className="bio">
        software engineer with a keen eye for design, accuracy, and a passion
        for problem-solving. Well-versed in the HTML, CSS, and Javascript
        languages. At heart an artist of functionality welcoming to new
        challenges that strengthen the ability to write DRY code.
      </h2>
    </>
  );
}

export default Bio;
