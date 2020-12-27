import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "./navBar.css";
import logo from "../../assets/images/logo.jpg";
import AboutMe from "../about/aboutMe";
import Intro from "../intro/intro";
import Home from "@material-ui/icons/Home";
import BottomNav from "./bottomNav";
import TechSkills from "../tech-skills/techSkills";
import WorkExTimeline from "../work-ex/workEx";

export default function NavBar() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu"></IconButton>
          <img className="logo" src={logo} alt="SD" />
          <Typography variant="h6" className="title">
            Sonal Dwivedi
          </Typography>
          <Tabs value={selectedTab} onChange={handleChange} variant="scrollable" scrollButtons="on">
            <Tab style={{ wrapper: true }} icon={<Home />} />
            <Tab label="About" />
            <Tab label="Technical Skills" />
            <Tab label="Work Experience" />
            <Tab label="Projects" />
            <Tab label="Achievements" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {selectedTab === 0 && <Intro />}
      {selectedTab === 1 && <AboutMe />}
      {selectedTab === 2 && <TechSkills />}
      {selectedTab === 3 && <WorkExTimeline />}
      <BottomNav />
    </div>
  );
}