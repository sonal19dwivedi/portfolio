import "./App.css";
import NavBar from "./components/nav-bar/navBar";
import MainIntro from "./components/intro/mainIntro";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <MainIntro />
    </div>
  );
};

export default App;
