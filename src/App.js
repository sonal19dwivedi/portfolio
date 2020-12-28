import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/nav-bar/navBar";
import BottomNav from "./components/nav-bar/bottomNav";
import Particles from "react-particles-js";
import { backgroundAnimation } from "./components/intro/backgroundAnimation";
import Loading from "./assets/images/loading.gif";
import ReactGA from "react-ga";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    ReactGA.initialize("G-P7L74SPMNC");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading">
          <br /> <br />
          <br /> <br />
          <img src={Loading} alt="Loading" />
        </div>
      ) : (
        <div>
          <NavBar />
          <BottomNav />
        </div>
      )}
      <Particles className="particles particles-box" params={backgroundAnimation} />
    </div>
  );
};

export default App;
