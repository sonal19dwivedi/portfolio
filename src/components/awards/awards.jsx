import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Award from "../../assets/images/award/award.JPG";
import ReactGA from "react-ga";
import "./awards.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    zIndex: 11,
  },
  media: {
    height: 400,
  },
});

export default function Awards() {
  const classes = useStyles();

  useEffect(() => {
    ReactGA.initialize("UA-187106101-1");
    ReactGA.pageview("Awards");
  }, []);

  return (
    <div align="center" className="awards">
      <Grid container spacing={0}>
        <Grid item xs={12} justify="center">
          <br />
          <h1>Honors & Awards</h1>
          <br />
        </Grid>
      </Grid>
      <Slide direction="right" in={true}>
        <Card className={classes.root}>
          <CardHeader title="University Gold Medal" />
          <CardActionArea>
            <CardMedia className={classes.media} image={Award} title="University Gold Medal" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Got awarded with a university gold medal by honorable Vice President of India - Shri. M. Venkaiyah Naidu, for securing the highest academic standing in the School of Engineering
                Sciences and Technology (Jamia Hamdard).
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
      <br />
      <Slide direction="left" in={true}>
        <Card className={classes.root}>
          <CardHeader title="Jamia Hamdard's Merit-Based Scholarship" />
          <CardActionArea>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Got awarded with Jamia Hamdard's Merit-Based Scholarship in the final year of my Bachelor's of Technology for securing first place in the School of Engineering Sciences and Technology
                (Jamia Hamdard) consecutively for the first three years.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
      <br />
      <Slide direction="right" in={true}>
        <Card className={classes.root}>
          <CardHeader title="Indian Airforce Benevolent Scholarship" />
          <CardActionArea>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Got awarded with Indian Airforce Benevolent Scholarship in 2011 for the highest academic standing.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
    </div>
  );
}
