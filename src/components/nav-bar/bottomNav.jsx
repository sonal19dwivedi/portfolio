import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import Home from "@material-ui/icons/Home";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
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
        <BottomNavigationAction label="Home" value="home" icon={<Home />} />
        <BottomNavigationAction label="LinkedIn" value="LinkedIn" icon={<LinkedIn />} onClick={handleClick(openLinkedIn)} />
        <BottomNavigationAction label="E-mail" value="E-mail" icon={<Email />} onClick={handleClick(popUpEmail)} />
        <BottomNavigationAction label="GitHub" value="GitHub" icon={<GitHub />} />
        <Snackbar open={open} onClose={handleClose} TransitionComponent={transition} message={EMAIL} key={transition ? transition.name : ""} />
      </BottomNavigation>
    </div>
  );
}

function popUpEmail(props) {
  return <Slide {...props} direction="left" />;
}

function openLinkedIn() {
  return window.open("https://www.linkedin.com/in/sonal-dwivedi/", "_blank");
}
