import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { SkillsContent } from "./skillsContent";
import "./techSkills.css";

const useStyles = makeStyles((theme) => ({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));

export default function TechSkills() {
  const classes = useStyles();

  return (
    <div className="techSkills">
      <Grid container spacing={0} justify="center">
        <Grid item xs={10}>
          <br />
          <h1>Technical Skills</h1>
          <br />
          <br />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="space-evenly" alignItems="center">
        {SkillsContent.map((tech, k) => (
          <Grid item xs={10}>
            <Card className="card">
              <CardContent>
                <center>
                  <Typography variant="h5" component="h2" key={k}>
                    <span>{tech.title}</span>
                  </Typography>
                  <br />
                  {tech.content.map((c, k) => (
                    <Typography variant="body2" key={k} className={classes.wrapIcon}>
                      <center>
                        <Avatar alt={c.imgAltText} src={c.imgSrc} className="avatar" />
                        {c.name}
                        {"  "}
                      </center>
                    </Typography>
                  ))}
                </center>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
