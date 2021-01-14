import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  authButton: {
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fafafa",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link className={classes.linkStyle} to="/">
                toDoApp;
              </Link>
            </Typography>
            {user._id ? (
              <>
                <Typography variant="subtitle2" className={classes.title}>
                  Logged in as {user.name}
                </Typography>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                  onClick={() => handleSignOut()}
                >
                  <Link className={classes.linkStyle} to="/">
                    SignOut
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                >
                  <Link className={classes.linkStyle} to="/signin">
                    SignIn
                  </Link>
                </Button>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                >
                  <Link className={classes.linkStyle} to="/signup">
                    SignUp
                  </Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
