import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Copyright from "@material-ui/icons/Copyright";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import "./navBar.css";

const EMAIL = "s19dwivedi@gmail.com";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="footer sticky-footer">
      <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav}>
        <BottomNavigationAction label="LinkedIn" value="LinkedIn" icon={<LinkedIn />} onClick={handleClick(openLinkedIn)}></BottomNavigationAction>
        <BottomNavigationAction label="E-mail" value="E-mail" icon={<Email />} onClick={handleClick(popUpEmail)} />
        <BottomNavigationAction label="GitHub" value="GitHub" icon={<GitHub />} onClick={handleClick(openGitHub)} />
        <Snackbar open={open} onClose={handleClose} TransitionComponent={transition} message={EMAIL} key={transition ? transition.name : ""} />
      </BottomNavigation>
      <Typography variant="body2" color="textSecondary" align="center">
        Portfolio created using React, JavaScript, Node.js, HTML, Material UI, and CSS. Hosted on GitHub Pages. {<Copyright />} Sonal Dwivedi
      </Typography>
    </div>
  );
}

function popUpEmail(props) {
  return <Slide {...props} direction="left" />;
}

function openLinkedIn() {
  return window.open("https://www.linkedin.com/in/sonal-dwivedi/", "_blank", "noopener noreferrer");
}

function openGitHub() {
  return window.open("https://github.com/sonal19dwivedi", "_blank", "noopener noreferrer");
}
