import "./App.css";
import NavBar from "./components/nav-bar/navBar";
import Particles from "react-particles-js";
import { backgroundAnimation } from "./components/intro/backgroundAnimation";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Particles className="particles particles-box" params={backgroundAnimation} />
    </div>
  );
};

export default App;
