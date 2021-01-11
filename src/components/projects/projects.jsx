import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GitHub from "@material-ui/icons/GitHub";
import Info from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import Description from "@material-ui/icons/Description";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import Popup from "../controls/PopUp";
import { MY_PROJECTS } from "./projectContent";
import "./projects.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "4px 8px 2px 8px",
  },
}));

export default function Projects(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProject, setProjectTitle] = useState(null);
  const [selectedProjectDescription, setProjectDescription] = useState(null);
  const classes = useStyles();
  return (
    <div>
      <center>
        <Button className="button" onClick={props.onClick}>
          View Publications
        </Button>
        <br />
        <br />
        <Grid container="row" xs={11} justify="center" spacing={2}>
          {MY_PROJECTS.map((project, index) => (
            <Grid item xm={5} key={index}>
              <Grow in={true}>
                <Paper elevation={3} align="center">
                  <Typography id={project.title} variant="h6" component="h1" align="center" className={classes.paper}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" align="center">
                    {project.timeline}
                  </Typography>
                  <IconButton
                    id={project.title}
                    className="paper"
                    onClick={() => {
                      setProjectTitle(project.title);
                      setProjectDescription(project.description);
                      setOpenPopup(true);
                    }}
                  >
                    <Info />
                  </IconButton>
                  <Popup title={selectedProject} openPopup={openPopup} setOpenPopup={setOpenPopup}>
                    {selectedProjectDescription}
                  </Popup>
                  {project.github === "" ? (
                    ""
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <IconButton aria-label="GitHub" className="paper">
                        <GitHub />
                      </IconButton>
                    </a>
                  )}{" "}
                  {project.documentation === "" ? (
                    ""
                  ) : (
                    <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                      <IconButton aria-label="Description" className="paper">
                        <Description />
                      </IconButton>
                    </a>
                  )}
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </center>
    </div>
  );
}
