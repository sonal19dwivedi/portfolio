import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./navBar.css";
import logo from "../../assets/images/logo.jpg";
import AboutMe from "../about/aboutMe";
import Intro from "../intro/intro";
import TechSkills from "../tech-skills/techSkills";
import WorkExTimeline from "../work-ex/workEx";
import Awards from "../awards/awards";
import Projects from "../projects/projects";

export default function NavBar() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <img className="logo" src={logo} alt="SD" />
          <Typography variant="h6" className="title">
            Sonal Dwivedi
          </Typography>
          <Tabs value={selectedTab} onChange={handleChange} variant="scrollable" scrollButtons="on">
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Technical Skills" />
            <Tab label="Work Experience" />
            <Tab label="Projects" />
            <Tab label="Honors & Awards" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {selectedTab === 0 && <Intro />}
      {selectedTab === 1 && <AboutMe />}
      {selectedTab === 2 && <TechSkills />}
      {selectedTab === 3 && <WorkExTimeline />}
      {selectedTab === 4 && <Projects />}
      {selectedTab === 5 && <Awards />}
    </div>
  );
}
