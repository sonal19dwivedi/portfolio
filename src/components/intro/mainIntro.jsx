import React from "react";
import Intro from "./introTypeContent";
import SlideShow1 from "../../assets/images/ww1.jpg";
import Particles from "react-particles-js";
import { backgroundAnimation } from "./backgroundAnimation";
import "./intro.css";

export default class MainIntro extends React.Component {
  render() {
    return (
      <div>
        <Particles className="particles particles-box" params={backgroundAnimation} />
        <img className="d-block w-100 intro" src={SlideShow1} alt="First slide" />
        <Intro />
      </div>
    );
  }
}
