import React from "react";
import Typewriter from "typewriter-effect";
import "./intro.css";

const Intro = () => (
  <div className="introduction">
    <div className="heading">
      <div className="main text-center mb-3">
        Hi, I am
        <br />
        <span>
          <div className="strong">Sonal Dwivedi</div>
        </span>
      </div>
      <div className="sub1">
        <Typewriter
          options={{
            strings: ["Full Stack Developer", "Avid Learner", "Explorer"],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
        <br />
        <span className="sub2">Nice to meet you!</span>
      </div>
    </div>
  </div>
);

export default Intro;
