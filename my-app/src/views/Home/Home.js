import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Maintain Documents with Comments.
        </Typography>
        <Typography variant="body1">
          Frontend Engineer Intern Pre-Screen Assignment for
          <br></br>
          <b>Shunya Impact Pvt. Ltd.</b>
        </Typography>
        <Typography variant="body1"></Typography>
      </Container>

      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Features:
        </Typography>
        <Typography variant="h6">
          <ul>
            <li>Persistent application made in the MERN stack.</li>
            <li>Made using the React Material UI.</li>
            <li>JWT Authentication.</li>
            <li>
              The User can:
              <ol>
                <li>Add Multiple Documents.</li>
                <li>Delete Documents.</li>
                <li>Add Multiple Comments in each Document.</li>
                <li>Delete Comments.</li>
              </ol>
            </li>
          </ul>
        </Typography>
        <Typography variant="body1"></Typography>
      </Container>
    </div>
  );
}
