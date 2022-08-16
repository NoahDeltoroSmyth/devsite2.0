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
      <hr></hr>
      <h2 className="bio">
        Hi I'm Noah. I am a front-end software developer with a keen eye for
        design and accuracy. I am a passionate problem solver that is
        well-versed in HTML, CSS, Javascript and the React framework. At heart I
        am an artist of functionality that welcomes everyday's new challenges. I
        have found that I am a "Jack of all trades", so when I am not coding you
        could find me turning a wrench on my motorcycle, making art out of
        metal, or enjoying an evening ride on my bicycle.
      </h2>
    </>
  );
}

export default Bio;
