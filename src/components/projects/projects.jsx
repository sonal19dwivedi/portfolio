import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GitHub from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Description from "@material-ui/icons/Description";
import Typography from "@material-ui/core/Typography";
import { MY_PROJECTS } from "./projectContent";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      <div className="projects">
        <Grid container spacing={0}>
          <Grid item xs={12} justify="center">
            <br />
            <h1>Projects</h1>
            <br />
            <br />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={1} justify="center">
        {MY_PROJECTS.map((project, index) => (
          <Grid item sm={4}>
            <div>
              <Paper elevation={3} align="center">
                <Typography variant="h6" component="h1" align="center" key={index}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {project.timeline}
                </Typography>
                <Typography align="left">{project.description}</Typography>
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
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
