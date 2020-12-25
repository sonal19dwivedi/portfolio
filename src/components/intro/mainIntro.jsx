import React from "react";
import IntroTypeContent from "./introTypeContent";
import Particles from "react-particles-js";
import { backgroundAnimation } from "./backgroundAnimation";

export default class MainIntro extends React.Component {
  render() {
    return (
      <div>
        <Particles className="particles particles-box" params={backgroundAnimation} />
        <IntroTypeContent />
      </div>
    );
  }
}
