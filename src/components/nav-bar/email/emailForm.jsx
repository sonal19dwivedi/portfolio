import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import ReactGA from "react-ga";

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
  useEffect(() => {
    ReactGA.initialize("UA-187106101-1");
    ReactGA.pageview("Email");
  }, []);

  const [name, setName] = React.useState(null);
  const [nameError, setNameError] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [subject, setSubject] = React.useState(null);
  const [subjectError, setSubjectError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [messageError, setMessageError] = React.useState(null);

  const classes = useStyles();

  function validateName() {
    if (name === null || name === "" || !/^[a-z][a-zs]*$/i.test(name)) {
      setNameError("Please enter a valid name.");
    } else {
      setNameError(null);
    }
  }

  function validateEmail() {
    if (email === null || email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
    }
  }

  function validateSubject() {
    if (subject === null || subject === "") {
      setSubjectError("Please enter a valid Subject.");
    } else {
      setSubjectError(null);
    }
  }

  function validateMessage() {
    if (message === null || message === "") {
      setMessageError("Your email has no message.");
    } else {
      setMessageError(null);
    }
  }

  function sendEmail(form) {
    form.preventDefault();
    if (!nameError && !emailError && !subjectError && !messageError) {
      emailjs.sendForm("service_344te7q", "template_wu7w4im", form.target, "user_fyw6xWYzuLIfaL8wNLGtS").then(
        (result) => {
          alert("Thank you for your email!");
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again!");
        }
      );
      form.target.reset();
    } else {
      alert("Please provide a valid input.");
    }
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
                onBlur={validateName}
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
                onBlur={validateEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={subjectError}
                helperText={subjectError}
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                onChange={(e) => setSubject(e.target.value)}
                onBlur={validateSubject}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={messageError}
                helperText={messageError}
                multiline
                required
                rows={5}
                fullWidth
                name="message"
                label="Message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                onBlur={validateMessage}
              />
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
