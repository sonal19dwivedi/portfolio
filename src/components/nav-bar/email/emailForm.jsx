import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formStyle: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#005f69",
    "&:hover": {
      backgroundColor: "#007683",
    },
    width: "15%",
  },
}));

export default function EmailForm() {
  const [name, setName] = React.useState(null);
  const [nameError, setNameError] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);

  const classes = useStyles();

  function checkName() {
    if (name === "" || !/^[a-z][a-zs]*$/i.test(name)) {
      setNameError("Please enter a valid name.");
    } else {
      setNameError(null);
    }
  }

  function checkEmail() {
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
    }
  }

  function sendEmail(form) {
    console.log("sending!");
    form.preventDefault();
    emailjs.sendForm("service_344te7q", "template_wu7w4im", form.target, "user_fyw6xWYzuLIfaL8wNLGtS").then(
      (result) => {
        alert("Thank you for your email!");
      },
      (error) => {
        alert("Oops! Something went wrong. Please try again!");
      }
    );
    form.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form className={classes.formStyle} onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={nameError}
                required
                fullWidth
                id="name"
                label="Name"
                name="from_name"
                autoComplete="fname"
                helperText={nameError}
                onChange={(e) => setName(e.target.value)}
                onBlur={checkName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={emailError}
                helperText={emailError}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="from_email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={checkEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="subject" label="Subject" name="subject" autoComplete="subject" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" multiline required rows={5} fullWidth name="message" label="Message" id="message" />
            </Grid>
          </Grid>
          <center>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} endIcon={<Send />}>
              Send
            </Button>
          </center>
        </form>
      </div>
    </div>
  );
}
