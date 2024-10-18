import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  const handleGetStartedClick = () => {
    window.location.href = 'mailto:sagul09112001@gmail.com';
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth get-started-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with HAYA</span>
          <span className="secondaryText">
            Get connected with us find your best place to grow your knowledge.
            <br />
            Mail Us Now
          </span>
          <button className="button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
