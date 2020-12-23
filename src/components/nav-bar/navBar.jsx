import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./navBar.css";
import logo from "../../assets/images/logo.jpg";

export default function NavBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu"></IconButton>
          <img className="logo" src={logo} />
          <Typography variant="h6" className="title">
            Sonal Dwivedi
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Technical Skills</Button>
          <Button color="inherit">Work Experience</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Achievements</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
