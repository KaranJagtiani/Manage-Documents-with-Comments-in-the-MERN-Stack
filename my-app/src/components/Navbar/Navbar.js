import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExitToApp from "@material-ui/icons/ExitToApp";
import ChangeNavbar from "./NavbarLogic";
import "./Navbar.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(3),
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
  },
  logout: {
    color: "#ff2450",
  },
}));

function NotLoggedIn() {
  const classes = useStyles();

  return [
    <Link className={classes.link} to="/login">
      <Button className={classes.button} color="inherit">
        Login
      </Button>
    </Link>,

    <Link className={classes.link} to="/register">
      <Button className={classes.button} color="inherit">
        Register
      </Button>
    </Link>,
  ];
}

function LoggedIn() {
  const classes = useStyles();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return [
    <Link className={classes.link} to="/documents">
      <Button className={classes.button} color="inherit">
        Documents
      </Button>
    </Link>,
    <IconButton onClick={logout} aria-label="delete" className={classes.logout}>
      <ExitToApp fontSize="medium" />
    </IconButton>,
  ];
}

function Navbar() {
  const classes = useStyles();
  const loggedIn = localStorage.getItem("id_token") ? true : false;

  return (
    <ThemeProvider theme={outerTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            DocMan
          </Typography>
          <Link className={classes.link} to="/">
            <Button className={classes.button} color="inherit">
              Home
            </Button>
          </Link>
          {loggedIn == false && <NotLoggedIn />}
          {loggedIn == true && <LoggedIn />}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
