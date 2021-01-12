import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Copyright from "@material-ui/icons/Copyright";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import ReactGA from "react-ga";
import Typography from "@material-ui/core/Typography";
import Popup from "../controls/PopUp";
import EmailForm from "./email/emailForm";
import "./navBar.css";

const useStyles = makeStyles({
  bottomNav: {
    width: "100%",
    backgroundColor: "#ffffff",
    color: "white",
    "&$selected": {
      color: "red",
    },
  },
  selected: {},
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const [openPopup, setOpenPopup] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="footer sticky-footer">
      <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav}>
        <BottomNavigationAction label="LinkedIn" value="LinkedIn" icon={<LinkedIn />} onClick={openLinkedIn}></BottomNavigationAction>
        <BottomNavigationAction
          label="E-mail"
          value="E-mail"
          icon={<Email />}
          onClick={() => {
            setOpenPopup(true);
          }}
        />
        <BottomNavigationAction label="GitHub" value="GitHub" icon={<GitHub />} onClick={openGitHub} />
        <Popup title="Send me an Email" id="emailPopUp" openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <EmailForm />
        </Popup>
      </BottomNavigation>
      <Typography variant="body2" color="textSecondary" align="center">
        Portfolio created using React, JavaScript, NodeJS, HTML, Material UI, and CSS. Hosted on GitHub Pages. {<Copyright />} Sonal Dwivedi
      </Typography>
    </div>
  );
}
function openLinkedIn() {
  ReactGA.event({
    category: "BottomNavigationAction",
    action: "LinkedIn",
  });
  return window.open("https://www.linkedin.com/in/sonal-dwivedi/", "_blank", "noopener noreferrer");
}

function openGitHub() {
  ReactGA.event({
    category: "BottomNavigationAction",
    action: "GitHub",
  });
  return window.open("https://github.com/sonal19dwivedi", "_blank", "noopener noreferrer");
}
