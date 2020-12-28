import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Work from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import School from "@material-ui/icons/School";
import Typography from "@material-ui/core/Typography";
import { MY_WORK_EX } from "./workExContent";
import "./workEx.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  color: {
    backgroundColor: "#005f69",
  },
}));

export default function WorkExTimeline() {
  const classes = useStyles();

  return (
    <div>
      <div className="workExperience">
        <Grid container spacing={0}>
          <Grid item xs={12} justify="center">
            <br />
            <h1>Work Experience</h1>
            <br />
            <br />
          </Grid>
        </Grid>
      </div>
      <Timeline align="alternate" className="workExTimeline">
        {MY_WORK_EX.map((ex, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {ex.timeline}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={classes.color}>
                <Work />
              </TimelineDot>
              <TimelineConnector className={classes.color} />
            </TimelineSeparator>
            <TimelineContent className="timelineContent">
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1" align="center">
                  {ex.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {ex.company}
                </Typography>
                <Typography align="left">{ex.details}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <School />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
