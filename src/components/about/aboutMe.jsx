import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grow from "@material-ui/core/Grow";
import HeadShot from "../../assets/images/about/headShot.jpg";
import { ABOUT_CONTENT, PAGE_TITLE } from "./aboutContent";
import "./aboutMe.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(48),
    height: theme.spacing(48),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className="aboutMe">
      <center>
        <Grow in={true}>
          <Grid container spacing={0} justify="center">
            <Grid item xs={10}>
              <br />
              {PAGE_TITLE}
              <br />
              <br />
            </Grid>
            <Grid item xs={10} sm={5}>
              <Avatar alt="Sonal Dwivedi" src={HeadShot} className={classes.large} />
            </Grid>
            <Grid item xs={10} sm={5}>
              <div className="imageContainer">{ABOUT_CONTENT}</div>
            </Grid>
          </Grid>
        </Grow>
      </center>
    </div>
  );
}
