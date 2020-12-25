import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import HeadShot from "../../assets/images/headShot.jpg";
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
        <Grid container spacing={0} justify="center">
          <Grid item xs={10}>
            <br />
            <h1>______________ About Me!_______________</h1>
            <br />
            <br />
          </Grid>
          <Grid item xs={10} sm={5} justify="center" spacing={0}>
            <Avatar alt="Sonal Dwivedi" src={HeadShot} className={classes.large} />
          </Grid>
          <Grid item xs={10} sm={5} justify="left">
            <div className="imageContainer">
              <b>
                Hi! <br /> I am <i>Sonal!</i> <br />
                Experienced Developer with a demonstrated history of working in the information technology and services industry [SaaS]. Skilled in
                Java, Spring boot, MongoDB, PostgreSQL, React, JavaScript, TypeScript, Node. I am pursuing my <i>Master's in Computer Science</i> from
                the University of Ottawa. I have recently completed my eight months co-op at <i>Kinaxis</i>. I have also worked as a{" "}
                <i>Teaching Assistant</i> for the courses Software Construction and Computer Architecture at the University of Ottawa. Prior to my
                master's, I was working as an <i>Assistant System Engineer</i> at the <i>Tata Consultancy Services</i>.
              </b>
            </div>
          </Grid>
        </Grid>
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary" className={classes.button}>
            Resume
          </Button>
        </a>
      </center>
    </div>
  );
}
