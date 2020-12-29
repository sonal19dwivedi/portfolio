import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/nav-bar/navBar";
import BottomNav from "./components/nav-bar/bottomNav";
import Particles from "react-particles-js";
import { backgroundAnimation } from "./components/intro/backgroundAnimation";
import ReactGA from "react-ga";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    ReactGA.initialize("G-P7L74SPMNC");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div>
          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div>
        </div>
      ) : (
        <div>
          <NavBar />
          <BottomNav />
          <Particles className="particles particles-box" params={backgroundAnimation} />
        </div>
      )}
    </div>
  );
};

export default App;
