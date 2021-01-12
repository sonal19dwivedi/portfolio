import React from "react";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/icons/Link";
import { MY_PUBLICATIONS } from "./publicationsContent";
import ReactGA from "react-ga";
import "./projects.css";

export default class Publications extends React.Component {
  constructor(props) {
    super();
    ReactGA.initialize("UA-187106101-1");
    ReactGA.pageview("Publications");
  }
  render() {
    return (
      <center>
        <Button variant="contained" className="button" onClick={this.props.onClick}>
          View Projects
        </Button>
        <br />
        <br />
        <Grid container="row" justify="center" spacing={2}>
          {MY_PUBLICATIONS.map((pub, index) => (
            <Grid item xs={10} key={index}>
              <Grow in={true}>
                <Paper elevation={3} align="center">
                  <Typography id={pub.title} variant="h6" component="h1" align="center">
                    {pub.title}
                  </Typography>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="Link" className="paper">
                      <Link />
                    </IconButton>
                  </a>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </center>
    );
  }
}
